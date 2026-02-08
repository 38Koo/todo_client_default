import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ItemDetail from "./components/ItemDetail.tsx";
import ItemIndex from "./components/ItemIndex.tsx";
import ItemDelete from "./components/ItemDelete.tsx";
import ItemUpdate from "./components/ItemUpdate.tsx";
import { ItemList } from "./components/ItemList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="item/:id" element={<ItemDetail />}>
          <Route index element={<ItemIndex />} />
          <Route path="delete" element={<ItemDelete />} />
          <Route path="update" element={<ItemUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
