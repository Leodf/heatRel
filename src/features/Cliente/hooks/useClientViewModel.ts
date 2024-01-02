import React, { useEffect, useState } from "react";
import { NavigationProps } from "../../../config/@types/navigation";
import { Client } from "../models/client";
import { loadClientById } from "../services/loadClientById";

// import { Container } from './styles';

const useClientViewModel = (clientId: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Client>();
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setIsLoading(true);
    loadClient();
  }, []);

  const loadClient = async () => {
    try {
      const response = await loadClientById(clientId);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
  };
};

export default useClientViewModel;
