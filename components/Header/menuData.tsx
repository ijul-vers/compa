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
        path: "https://wa.me/6282138402147",
        newTab: false,
      },
      {
        id: 2,
        title: "Pengaduan",
        path: "https://forms.gle/pgPChUz6iQB5MReH8T",
        newTab: false,
      },
    ],
  }
];
export default menuData;
