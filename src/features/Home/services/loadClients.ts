import { Client } from "../models/Client";
import { mockClients } from "../../../server/mocks/clients";

export const loadClients = (): Promise<Client[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockClients), 1000));
};
