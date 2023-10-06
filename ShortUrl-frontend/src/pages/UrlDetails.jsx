import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/mailayout";
import { Button, TextField, Typography } from "@mui/material";

import { Link, useParams } from "react-router-dom";

const UrlDetails = () => {
  const [urls, setUrls] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getUrlById();
  }, [id]);
  const getUrlById = async () => {
    let result = await fetch(`http://localhost:5000/url/getUrlById/${id}`, {
      method: "GET",
    });
    result = await result.json();

    setUrls(result.result);
  };
  return (
    <>
      <MainLayout />
      <div>
        <Typography variant="h4" sx={{ margin: 2, color: "blue" }}>
          URL-Details
        </Typography>
        <hr />
        {/* <center> */}
        <div className="url">
          {urls.length > 0 ? (
            urls.map((url, index) => (
              <h6 key={index}>
                <li>CreatedAt-> {url.createdAt}</li>
                <br />
                <li>_id-> {url._id}</li>

                <li className="redirectUrl">
                  RedirectUrl->
                  <br />
                  {url.redirectUrl}
                </li>
                <br />
                <li>ShortUrl-> {url.shortUrl}</li>
                {/* <br /> */}
                <li>UpdatedAt-> {url.updatedAt}</li>
                <br />
                <li>
                  VisitHistory->{" "}
                  {url.visitHistory.length
                    ? url.visitHistory.length
                    : "Not Viewed"}
                </li>
              </h6>
            ))
          ) : (
            <h3 className="h3">ooops..!😔😔😔😔😔NOT Contact Found</h3>
          )}
          <Link to={"/"}>
            <Button variant="contained" color="error">
              back to home
            </Button>
          </Link>
        </div>
        {/* </center> */}
      </div>
    </>
  );
};

export default UrlDetails;
