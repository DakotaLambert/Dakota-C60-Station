import { Outlet, Route, Routes } from "react-router-dom";
import "./DecorationStation.css";
import { HalloweenItemDetails } from "./items/HalloweenItemDetails";
import { HalloweenItems } from "./items/HalloweenItems";
import { NavBar } from "./nav/NavBar";

export const DecorationStation = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="halloween" element={<HalloweenItems />} />
        <Route
          path="halloween/:halloweenItemId"
          element={<HalloweenItemDetails />}
        />
      </Route>
    </Routes>
  );
};
