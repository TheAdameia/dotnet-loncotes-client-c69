import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import { PatronList } from "./components/Patrons/PatronsList";
import { PatronDetails } from "./components/Patrons/PatronDetails";
import { EditPatron } from "./components/Patrons/EditPatron";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronList />} />
          <Route path=":id">
            <Route index element={<PatronDetails />} />
            <Route path="edit" element={<EditPatron />} />
          </Route>
          {/* Patron stuff goes here */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
