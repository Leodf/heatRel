import { mockClients } from "../../../server/mocks/clients";
import { Client } from "../models/client";

const clients = mockClients;

export const loadClientById = (id: number): Promise<Client> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const client = clients.find((client) => id === client.id);
      if (!client) return;
      resolve(client);
    }, 1000)
  );
};
