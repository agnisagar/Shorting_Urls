import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import MyModel from "../component/modex";

function Text() {
  const [showModel, setShowModel] = useState(false);
  const closeModel = () => setShowModel(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);
  const submitData = () => {
    setData([
      ...data,
      {
        name,
        email,
        pass,
      },
    ]);
  };
  const deleteData = (currentindex) => {
    console.log(currentindex);
    data.splice(currentindex, 1);
    let temp = [...data];
    temp.splice(currentindex, 1);
    data.filter((val, index) => val.index !== temp);
    setData([...data]);
  };

  console.log("datas-->", data);
  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={() => setShowModel(true)}
      >
        open
      </Button>
      {showModel && <MyModel closeModel={closeModel} />}
      <hr />
      <br />
      <div className="todo">
        <input
          style={{ marginBottom: 10 }}
          type="text"
          kay={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ marginBottom: 10 }}
          type="text"
          kay={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ marginBottom: 10 }}
          type="text"
          kay={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {/* <Button variant="contained" color="error" onClick={submitData}>
          submit
        </Button> */}
      </div>
      <hr />
      <div>
        <table class="table table-striped">
          <thead class="class">
            <tr>
              <th style={{ color: "red" }} scope="col">
                #
              </th>
              <th style={{ color: "red" }} scope="col">
                Name
              </th>
              <th style={{ color: "red" }} scope="col">
                Email
              </th>

              <th style={{ color: "red" }} scope="col">
                Actoin
              </th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((data, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>

                  <td>
                    <DeleteForeverIcon
                      sx={{ marginLeft: 5 }}
                      onClick={() => deleteData(index)}
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
}

export default Text;
