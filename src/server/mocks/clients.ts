import { Client } from "../../features/Home/models/Client";

export const mockClients: Client[] = [
  {
    id: 1,
    name: "Ambev Guarulhos",
    segment: "Bebidas Alcoólicas Ambev",
    cnpj: "00.000.000/0001-00",
    imagemUrl: "https://logospng.org/download/ambev/logo-ambev-512.png",
  },
  {
    id: 2,
    name: "Heineken Araraquara",
    segment: "Bebidas Alcoólicas não Ambev",
    cnpj: "00.000.000/0001-00",
    imagemUrl: "https://logospng.org/download/heineken/logo-heineken-512.png",
  },
  {
    id: 3,
    name: "Loreal Osasco",
    segment: "Personal Care",
    cnpj: "00.000.000/0001-00",
    imagemUrl:
      "https://brandslogos.com/wp-content/uploads/images/large/loreal-logo-1.png",
  },
  {
    id: 4,
    name: "Citrosuco Santos",
    segment: "Bebidas",
    cnpj: "00.000.000/0001-00",
    imagemUrl: undefined,
  },
];
