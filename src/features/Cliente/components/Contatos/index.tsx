import React, { useEffect, useState } from "react";
import { Contato, ContatoName, ContatosLista } from "./styles";
import { mockContacts } from "./listaContato";
import Loading from "../../../../components/Loading";

export const loadContacts = (): Promise<typeof mockContacts> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockContacts), 1000)
  );
};

export default function Contatos() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<typeof mockContacts>([]);

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const loadData = async () => {
    try {
      const response = await loadContacts();
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const renderItem = ({ item }: any) => (
    <Contato>
      <ContatoName>{item.name}</ContatoName>
    </Contato>
  );

  return (
    <ContatosLista
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: any) => item.id.toString()}
    />
  );
}
