import React from "react";
import { Typography } from "@mui/material";
import MainLayout from "../Layout/mailayout";

function PageNotFound() {
  return (
    <div>
      <MainLayout>
        <Typography variant="h2" style={{ margin: 20 }}>
          404, Page Not Found...!
        </Typography>{" "}
      </MainLayout>
    </div>
  );
}

export default PageNotFound;
