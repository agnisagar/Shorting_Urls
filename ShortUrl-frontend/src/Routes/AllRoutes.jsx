import { Route, Routes } from "react-router-dom";
import Dashbord from "../pages/Home";
import UrlDetails from "../pages/UrlDetails";
import PageNotFound from "../pages/pageNotFound";
import Text from "../pages/text ";

export const AllRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashbord />} />
        {/* <Route path="/text" element={<Text />} /> */}
        {/* <Route path="/urldetails/:id" element={<UrlDetails />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
