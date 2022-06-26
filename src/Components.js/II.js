import React from "react";

function II() {
  return (
    <div>
      <div className="header_main">
        <div className="container">
          <div className="logo">
            <a href="index.html">
              <img src="images/logo.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="col-sm-12">
            <div className="menu-area">
              <nav className="navbar navbar-expand-lg ">
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        HOME<span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        ABOUT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#services">
                        SERVICES
                      </a>
                    </li>
                    <li className="nav-item" href="#">
                      <a className="nav-link" href="#contact">
                        CONTACT
                      </a>
                    </li>
                    <li className="last">
                      <a href="#">
                        <img src="images/search-icon.png" alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-main">
        <div className="container">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="titlepage-h1">
                  <h1 className="bnner_title">
                    Welcome To
                    <br />
                    <span>Auto AI Services</span>
                  </h1>
                  <p className="long_text">
                    Will give you better working experience with Auto AI
                    Services. Use fact-based insights from AI software to
                    predict customer preferences and offer them a better and
                    more personalized experience.
                  </p>
                </div>
                <div className="btn_main">
                  <button type="button" className="btn btn-dark btn-lg">
                    <a href="contact.html">Contact</a>
                  </button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="titlepage-h1">
                  <h1 className="bnner_title">
                    Welcome To
                    <br />
                    <span>Auto AI Services</span>
                  </h1>
                  <p className="long_text">
                    "Accenture’s focus on AI sits at the heart of its data and
                    applied intelligence capabilities, to help enterprises scale
                    AI adoption and assist in democratization."
                  </p>
                </div>
                <div className="btn_main">
                  <button type="button" className="btn btn-dark btn-lg">
                    Contact
                  </button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="titlepage-h1">
                  <h1 className="bnner_title">
                    Welcome To
                    <br />
                    <span>Auto AI Services</span>
                  </h1>
                  <p className="long_text">
                    Make faster business decisions based on outputs from
                    cognitive technologies. Grow your expertise by enabling
                    analysis that offers intelligent advice and support.
                  </p>
                </div>
                <div className="btn_main">
                  <button type="button" className="btn btn-dark btn-lg">
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              id="about"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="services_main">
        <div className="container">
          <div className="creative_taital">
            <h1 className="creative_text">Auto AI Services</h1>
            <p id="para">
              Our team can help you apply the latest AI software development
              tools and methodologies to create applications that deliver
              pragmatic business results. Our end-to-end AI development services
              and solutions are based on our academic and industrial research
              experience together with Avenga's R&D model. In our work, we apply
              mathematical and statistical foundations and the latest techniques
              including machine learning, deep learning, natural language
              processing and neural networks in order to augment your current
              capacity or develop effective artificial intelligence software
              solutions for strategic business opportunities.
            </p>
            <div className="btn_main">
              <button type="button" className="btn btn-dark btn-lg">
                Get started
              </button>
            </div>
          </div>
          <div className="section_service_2">
            <h1 className="service_text" id="services">
              Our Service
            </h1>
          </div>
          <div className="service_main">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="written_text">
                    <div className="like_icon">
                      <img src="images/home.png" />
                    </div>
                    <h1 className="written_text">Home Automation</h1>
                    <p>
                      AI software development services enable businesses to save
                      time and money by automating and optimizing everyday
                      processes and routine operations. Avoid mistakes, bias and
                      human error.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="written_text">
                    <div className="like_icon">
                      <img src="images/fast-forword-icon.png" alt="" />
                    </div>
                    <h1 className="written_text">AI in Medical</h1>
                    <p>
                      Enhance business productivity and operational efficiency
                      utilizing the latest AI development services. Avoid
                      production loss or insufficient product quality. A big
                      change in medicare sector.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service_main">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="written_text">
                    <div className="like_icon">
                      <img src="images/design-icon.png" />
                    </div>
                    <h1 className="written_text">Up to Date</h1>
                    <p>
                      Improve customer services with a data-based engagement for
                      customers and employees. Mine vast amount of data to
                      generate quality leads and grow your customer base.
                      Increase revenue by identifying and maximising sales
                      opportunities.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="written_text">
                    <div className="like_icon">
                      <img src="images/writing-icon.png" />
                    </div>
                    <h1 className="written_text">Customized Softwares</h1>
                    <p>
                      Improve customer services with a data-based engagement for
                      customers and employees. Mine vast amount of data to
                      generate quality leads and grow your customer base.
                      Increase revenue by identifying and maximising sales
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quote_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="quote_text">Quote for Today</h1>
              <p className="loan_text">
                AI will change your lifestyle with full of Automation{" "}
              </p>
            </div>
            <div className="col-md-6">
              <div className="quote_btn">
                <button type="button" className="btn btn-dark btn-lg">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="touch_section">
        <div className="container" id="contact">
          <h1 className="touch_text">Let's Get In Touch!</h1>
        </div>
      </div>
      <div className="lets_touch_main">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="input_main">
                <div className="container">
                  <form action="/action_page.php">
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Name"
                        name="Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Email"
                        name="Email"
                        required
                      />
                    </div>
                    <form action="/action_page.php">
                      <div className="form-group">
                        <textarea
                          className="massage-bt"
                          placeholder="Massage"
                          rows="5"
                          id="comment"
                          required
                          name="text"
                        ></textarea>
                      </div>
                    </form>
                  </form>
                </div>
                <div className="send_btn">
                <button type="button" onclick="myFunction()" className="main_bt"><a
                                    href="index.html">Send</a></button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12">
                  <p className="lorem_text">
                    "Accenture’s focus on AI sits at the heart of its data and
                    applied intelligence capabilities, to help enterprises scale
                    AI adoption and assist in democratization."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="touch_text">Contact Us</h1>
            </div>
          </div>
        </div>
        <div className="contact_section_2">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="map_icon">
                  <img src="images/map-icon.png" />
                  <p className="email-text">
                    <a href="#">
                      DHA(Dalmia Housing Authority)
                      <br />
                      PK
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="map_icon">
                  <img src="images/call-icon.png" />
                  <p className="email-text" id="phone">
                    <a href="#">+92340808183</a>
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="map_icon">
                  <img src="images/email-icon.png" />
                  <p className="email-text" id="email">
                    <a href="#">autoai@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <p className="copyright_text">© 2019 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  II;