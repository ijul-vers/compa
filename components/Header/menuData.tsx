import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Tentang Kami",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Kegiatan",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Kontak",
    newTab: false,
    submenu: [
      {
        id: 1,
        title: "Whatsapp",
        path: "/about",
        newTab: false,
      },
      {
        id: 2,
        title: "Pengaduan",
        path: "/about",
        newTab: false,
      },
    ],
  }
];
export default menuData;
