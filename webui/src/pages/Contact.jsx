import React from "react";

export default function Contact() {
  return (
    <React.Fragment>
      <header className="header-standard">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10">
              <h1 className="text-uppercase text-white font-weight-bold">
                Contact
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section className="section dark standard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 c6 cell">
              <div className="wrapper">
                <div className="text-content">
                  <h2>Conctact</h2>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 c6 cell">
              <div className="wrapper">
                <div className="image-content">
                  <img
                    src="/images/portfolio/contact.jpg"
                    alt="me-on-motorcycle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
