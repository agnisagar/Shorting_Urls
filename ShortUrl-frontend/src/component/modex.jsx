import { Button } from "@mui/material";
import { useEffect, useState } from "react";
const MyModel = ({ closeModel, id }) => {
  //   console.log("id===>", id);
  const [urls, setUrls] = useState([]);

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
      <div className="model-wrap" onClick={closeModel}></div>

      <div className="model-cont">
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

        <Button variant="contained" color="error" onClick={closeModel}>
          cencel
        </Button>
      </div>
    </>
  );
};
export default MyModel;

// <>
//   <div className="model-wrap" onClick={closeModel}></div>
//   <div className="model-cont">
//     <h2>view History</h2>

//     <p>
//       W3Schools is optimized for learning and training. Examples might be
//       simplified to improve reading and learning. Tutorials, references, and
//       examples are constantly reviewed to avoid errors, but we cannot
//       warrant full correctness of all content. While using W3Schools, you
//       agree to have read and accepted our terms of use, cookie and privacy
//       policy.
//     </p>
//     <Button variant="contained" color="error" onClick={closeModel}>
//       cencl
//     </Button>
//   </div>
// </>
