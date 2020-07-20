import React from "react";

function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={require("./img/404.png")}
              alt="404"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">ERROR</h1>
            <p>
              404 NOT FOUND!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
