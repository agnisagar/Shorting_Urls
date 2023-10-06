import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, TextField, Typography } from "@mui/material";
import MainLayout from "../Layout/mailayout";
import { useForm } from "react-hook-form";
import MyModel from "../component/modex";

const Dashbord = () => {
  const [urls, setUrls] = useState([]);
  const { register, handleSubmit, reset } = useForm({});
  //
  //   const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
  const closeModel = () => setShowModel(false);

  useEffect(() => {
    getUrls();
  }, []);

  const getUrls = async () => {
    let result = await fetch("http://localhost:5000/url/getAllUrl/find/", {
      method: "GET",
    });
    result = await result.json();
    setUrls(result.result);
  };
  const createShortUrl = async (value) => {
    console.log(value);
    let result = await fetch("http://localhost:5000/url", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    });
    reset();
    getUrls();
  };

  const deleteUrls = async (id) => {
    let result = await fetch("http://localhost:5000/url/deleteUrlById/" + id, {
      method: "DELETE",
    });
    getUrls();
  };

  return (
    <>
      <MainLayout />

      <div>
        <Typography variant="h4" sx={{ margin: 2, color: "blue" }}>
          URL-TABLE
        </Typography>
        <form onSubmit={handleSubmit(createShortUrl)}>
          <TextField
            className="w-15 mb-8"
            style={{ margin: 0 }}
            label="Enter the link hear"
            {...register("redirectUrl", {
              required: {
                value: true,
                message: "redirectUrl is Required",
              },
            })}
          />
          <Button
            sx={{ height: 55, marginLeft: 2 }}
            variant="contained"
            color="error"
            type="submit"
          >
            Shorten Url
          </Button>
        </form>

        <hr />
        <table class="table table-striped">
          <thead class="class">
            <tr>
              <th style={{ color: "red" }} scope="col">
                #
              </th>
              <th style={{ color: "red" }} scope="col">
                RedirectUrl
              </th>
              <th style={{ color: "red" }} scope="col">
                shortUrl
              </th>
              <th style={{ color: "red" }} scope="col">
                Actoin
              </th>
            </tr>
          </thead>

          <tbody>
            {urls.length > 0 ? (
              urls.map((url, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{url.redirectUrl.substring(0, 20)}...</td>
                  <td>
                    <Link>{"http://localhost:5000/url/" + url.shortUrl}</Link>
                  </td>

                  <td>
                    {/* <Link to={`/urldetails/${url._id}`}> */}

                    <ArrowForwardIosIcon
                      onClick={() => setShowModel(true)}
                    ></ArrowForwardIosIcon>
                    {showModel && (
                      <MyModel closeModel={closeModel} id={url._id} />
                    )}
                    {/* </Link> */}
                    <DeleteForeverIcon
                      sx={{ marginLeft: 5 }}
                      onClick={() => deleteUrls(url._id)}
                    ></DeleteForeverIcon>
                  </td>
                </tr>
              ))
            ) : (
              <h3 className="h3">ooops..!😔😔😔😔😔NOT Contact Found</h3>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashbord;
