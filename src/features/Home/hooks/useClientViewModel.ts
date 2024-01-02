import { useEffect, useState } from "react";

import { loadClients } from "../services/loadClients";
import { useNavigation } from "@react-navigation/native";
import { Client } from "../models/Client";

const useClientViewModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<Client[]>([]);
  const [fullData, setFullData] = useState<Client[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await loadClients();
      setData(response);
      setFullData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const formatedQuery = query.toLowerCase();
    let copyData = [...fullData];
    const filteredData = copyData.filter((data) =>
      data.name.toLowerCase().includes(formatedQuery)
    );
    setData(filteredData);
  };

  const onPressClient = (client: Client) => {
    const name = "Cliente";
    const params = { clientId: client.id };
    navigation.navigate({ name, params } as never);
  };

  return {
    data,
    searchQuery,
    isLoading,
    error,
    handleSearch,
    onPressClient,
  };
};

export default useClientViewModel;
