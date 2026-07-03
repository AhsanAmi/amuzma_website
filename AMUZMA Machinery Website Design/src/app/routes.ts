import { createHashRouter } from "react-router";
import { Root } from "./layout/Root";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Quote } from "./pages/Quote";
import { MissionVision } from "./pages/MissionVision";

function NotFound() {
  return null;
}

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/:id", Component: ProductDetail },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "quote", Component: Quote },
      { path: "mission-vision", Component: MissionVision },
      { path: "*", Component: NotFound },
    ],
  },
]);
