import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import logowater from "./assests/img/logowater.png";
import career from "./assests/img/career.png";
import "./app.css";
import { Button, Grid } from "@mui/material";
import AppMobile from "./AppMobile";
import { IoLogoWhatsapp, IoMdMail, IoMdSettings } from "react-icons/io";
import {
  MdLocationOn,
  MdOutlineAirplanemodeActive,
  MdOutlineLaptopMac,
} from "react-icons/md";
import landingside from "./assests/img/landingside.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaFileAlt,
  FaTwitter,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RiStethoscopeLine } from "react-icons/ri";

const Aircraft = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "2rem",
          color: "#770c20",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        SOLUTIONs FOR YOUR AIRCRAFT ownership!
      </p>
      <p>
        Takeoff first will strive to understand your specific needs and develop
        cost-effective outsourcing solutions for managing and maintaining your
        aircraft.
      </p>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ marginRight: "2rem" }}>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Calibration Support for Tools
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Component overhaul and repair
          </p>

          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Flight crew Recruitment and Training.
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Installation and Certification Support
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Interior Refurbishing
          </p>
        </div>
        <div>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Logistics Support
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Maintenance Services
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Managing the Aircraft
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Owning the Aircraft - Pre-purchase Inspection and Aircraft Acquision
            and induction.
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Sales, Exchange and Loaning of Parts and Consumables
          </p>
        </div>
      </div>
    </div>
  );
};
const Internship = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "2rem",
          color: "#770c20",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        Runway For Your Future!
      </p>
      <p>
        Takeoff offers a platform to develop ready to deploy skills through our
        outcome driven internship and certification programmes crafted by
        industry experts to build your expertise and make you Industry ready.
        Join our programme to gain real time industry experience, learn from
        experienced mentors and takeoff your career.
      </p>
      <p>
        We are offering internship and certification programmes for Engineering
        graduates and aircraft Maintenance Engineers in technical writing,
        aircraft Maintenance and helicopter maintenance. For more details
        contact us or drop your resume to{" "}
        <a href="#contact">
          <span
            style={{
              textDecoration: "underline",
              color: "#770C20",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            hr@totspl.com
          </span>
        </a>
        .
      </p>
    </div>
  );
};
const Recruit = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "2rem",
          color: "#770c20",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        One Stop to hire professionals!
      </p>
      <p>
        Takeoff provides flexible, efficient, and cost-effective workforce
        solutions to meet client's workforce requirements. We provide Contract,
        C2H, Perm Hiring's and Payroll Managements Services for our clients.
        Takeoff has mastered the full recruitment life cycle process, including
        collect job requirement, Resource identification as per your project
        requirement, hiring process and complete on boarding support, which
        enables us to provide on-demand quality resources with very low
        turnaround time.
      </p>
    </div>
  );
};
const TechnicalPub = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "2rem",
          color: "#770c20",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        We design, develop and document your product!
      </p>
      {/* <p style={{ fontWeight: "500", fontSize: "1.2rem" }}>
        We design, develop and document your product!
      </p> */}
      <p>
        TAKEOFF offers a wide range of technical authoring and illustration
        solutions to organizations to effectively manage author and publish
        their technical data. Our processes in aerospace domain are streamlined
        to enable organizations to use our resources effectively to generate
        highly accurate and functional information for manufacture, usage and
        repair of components.
      </p>
      <p>
        Our organizational structure and expertise allow us to offer a wide
        range of aerospace publication solutions from simple authoring to
        information architecture, unstructured to structured document form of
        latest technology like XML, technical documentation to online technical
        query support to field users.
      </p>
      <p>
        Our team develops data using ATA iSpec2200, S1000D, and
        ASD-STE100standards.
      </p>
      <p>
        Good documentation can reduce the number of calls made to customer care
        and empower users to get started on their own. TAKEOFF Documentation
        team is aware of the crucial role accurate documentation plays while
        acting as a bridge between the originators and the adopters of a
        product.
      </p>
      <p style={{ fontWeight: "500", margin: 0 }}>
        Documentation deliverables:
      </p>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ marginRight: "2rem" }}>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Aircraft Maintenance Manual
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Aircraft Wiring Manual
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            API Documentation
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Component Maintenance Manual
          </p>
        </div>
        <div style={{ marginRight: "2rem" }}>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Courseware
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            E- Learning
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Engine Manuals
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Illustrated Parts Catalogue
          </p>
        </div>
        <div>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Installation Guides
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Online Help
          </p>
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Product user manuals
          </p>
          {/* <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Structural Repair Manual
          </p> */}
          <p>
            <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
            Training Courseware
          </p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#252B5D" },
      secondary: { main: "#770C20" },
      info: { main: "#fff" },
    },
  });

  const [page, setpage] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      {window.innerWidth < 500 ? (
        <AppMobile />
      ) : (
        <div>
          <div style={{ padding: "1rem 10rem", backgroundColor: "#fdfdfd" }}>
            {/* social */}
            <div
              style={{
                position: "fixed",
                right: 0,
                top: "30%",
                padding: "1rem",
                backgroundColor: "#fff",
                borderTopLeftRadius: "1rem",
                borderBottomLeftRadius: "1rem",
              }}
              className="socialMenu"
            >
              <a>
                <div
                  className="socialHover"
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "#252B5D",
                    padding: "5px",
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <FaFacebookF size={20} color="#fff" />
                </div>
              </a>
              <a>
                <div
                  className="socialHover"
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "#252B5D",
                    padding: "5px",
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <FaInstagram size={20} color="#fff" />
                </div>
              </a>
              <a>
                <div
                  className="socialHover"
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "#252B5D",
                    padding: "5px",
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <FaLinkedinIn size={20} color="#fff" />
                </div>
              </a>
              <a>
                <div
                  className="socialHover"
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "#252B5D",
                    padding: "5px",
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <FaTwitter size={20} color="#fff" />
                </div>
              </a>
              <a>
                <div
                  className="socialHover"
                  style={{
                    backgroundColor: "#252B5D",
                    padding: "5px",
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <IoLogoWhatsapp size={20} color="#fff" />
                </div>
              </a>
            </div>
            {/* menu */}
            <div
              id="home"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <img
                src={logowater}
                alt="Takeoff Techno Solutions"
                style={{ width: 150 }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <a style={{ textDecoration: "none" }} href="#home">
                  <p
                    className="menuHover"
                    style={{
                      margin: 0,
                      color: "#252B5D",
                      fontSize: "1.2rem",
                      marginRight: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    Home
                  </p>
                </a>
                <a style={{ textDecoration: "none" }} href="#service">
                  <p
                    className="menuHover"
                    style={{
                      margin: 0,
                      color: "#252B5D",
                      fontSize: "1.2rem",
                      marginRight: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    Solutions
                  </p>
                </a>
                <a style={{ textDecoration: "none" }} href="#career">
                  <p
                    className="menuHover"
                    style={{
                      margin: 0,
                      color: "#252B5D",
                      fontSize: "1.2rem",
                      marginRight: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    Careers
                  </p>
                </a>

                <a style={{ textDecoration: "none" }} href="#about">
                  <p
                    className="menuHover"
                    style={{
                      margin: 0,
                      color: "#252B5D",
                      fontSize: "1.2rem",
                      marginRight: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    About Us
                  </p>
                </a>
                <a style={{ textDecoration: "none" }} href="#contact">
                  <p
                    className="menuHover"
                    style={{
                      margin: 0,
                      color: "#252B5D",
                      fontSize: "1.2rem",
                      marginRight: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    Contact Us
                  </p>
                </a>

                {/* <Button
              size="large"
              color="secondary"
              variant="contained"
              style={{ borderRadius: "2rem" }}
            >
              Join Us
            </Button> */}
              </div>
            </div>

            {/* landing page */}
            <div style={{ marginTop: "8rem", marginBottom: "12rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "2rem" }}>
                  <p
                    style={{
                      fontSize: "2.5rem",
                      color: "#252b5d",
                      fontWeight: "500",
                      lineHeight: "4rem",
                    }}
                  >
                    TAKEOFF YOUR BUSINESS WITH OUR SOLUTIONS
                  </p>
                  <a href="#contact" style={{ textDecoration: "none" }}>
                    <Button
                      size="large"
                      variant="contained"
                      style={{ borderRadius: 50 }}
                      color="secondary"
                    >
                      Contact US
                    </Button>
                  </a>
                </div>
                <div
                  style={{
                    width: 500,
                    // ...styles.zoomIn
                  }}
                >
                  <img
                    src={landingside}
                    alt=""
                    style={{ width: 500, transform: "scaleX(-1)" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* industries */}
          <div
            style={{
              paddingTop: "0.2rem",
              display: "flex",
              justifyContent: "space-around",
              fontSize: "1rem",
              fontWeight: "500",
              backgroundColor: "#f8f3f4",
            }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "10rem",
              }}
            >
              <MdOutlineAirplanemodeActive
                size={20}
                color="#770c20"
                style={{ marginRight: 5 }}
              />
              Aerospace
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <IoMdSettings
                style={{ marginRight: 5 }}
                size={20}
                color="#770c20"
              />
              Automotive
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <RiStethoscopeLine
                style={{ marginRight: 5 }}
                size={20}
                color="#770c20"
              />
              Healthcare
            </p>

            <p
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginRight: "10rem",
              }}
            >
              <MdOutlineLaptopMac
                style={{ marginRight: 5 }}
                size={20}
                color="#770c20"
              />
              Software
            </p>
          </div>
          <div style={{ padding: "1rem 10rem", backgroundColor: "#fdfdfd" }}>
            {/* services */}
            <div
              id="service"
              style={{
                // backgroundColor: "rgba(37,43,93,0.1)",
                padding: "1rem",
                marginBottom: "4rem",
                marginTop: "2rem",
                borderRadius: "8px",
              }}
            >
              <h1
                style={{
                  color: "#e4e4e4",
                  fontSize: "3rem",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Solutions
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <div
                  onClick={() => setpage(1)}
                  style={{
                    borderBottom: "2px #d9d9d9 solid",
                    borderRight: "1px #d9d9d9 solid",
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    padding: "1rem",
                    cursor: "pointer",
                    backgroundColor: page === 1 ? "#002366" : "#f3f6fc",
                    color: page === 1 ? "#fff" : "#000",
                    width: "100%",
                    minWidth: "max-content",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: page === 1 ? "#fff" : "#002366",
                      fontWeight: "500",
                      margin: 0,
                      transitionDuration: "2s",
                      transitionTimingFunction: "ease",
                    }}
                  >
                    <FaFileAlt style={{ marginRight: 6 }} /> Technical
                    Publication
                  </p>
                </div>
                <div
                  style={{
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderBottom: "2px #d9d9d9 solid",
                    borderRight: "1px #d9d9d9 solid",
                    padding: "1rem",
                    cursor: "pointer",
                    backgroundColor: page === 2 ? "#002366" : "#f3f6fc",
                    color: page === 2 ? "#fff" : "#000",
                    width: "100%",
                    minWidth: "max-content",
                  }}
                  onClick={() => setpage(2)}
                >
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: page === 2 ? "#fff" : "#002366",
                      fontWeight: "500",
                      margin: 0,
                      transitionDuration: "2s",
                      transitionTimingFunction: "ease",
                    }}
                  >
                    <FaPlaneDeparture style={{ marginRight: 10 }} />
                    Aircraft Management & Maintenance
                  </p>
                </div>
                <div
                  onClick={() => setpage(3)}
                  style={{
                    borderBottom: "2px #d9d9d9 solid",
                    borderRight: "1px #d9d9d9 solid",
                    padding: "1rem",
                    cursor: "pointer",
                    backgroundColor: page === 3 ? "#002366" : "#f3f6fc",
                    color: page === 3 ? "#fff" : "#000",
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    width: "100%",
                    minWidth: "max-content",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: page === 3 ? "#fff" : "#002366",
                      fontWeight: "500",
                      margin: 0,
                      transitionDuration: "2s",
                      transitionTimingFunction: "ease",
                    }}
                  >
                    <FaBriefcase style={{ marginRight: 10 }} />
                    Recruitment and staffing
                  </p>
                </div>
                <div
                  onClick={() => setpage(4)}
                  style={{
                    borderBottom: "2px #d9d9d9 solid",
                    borderRight: "1px #d9d9d9 solid",
                    padding: "1rem",
                    cursor: "pointer",
                    backgroundColor: page === 4 ? "#002366" : "#f3f6fc",
                    color: page === 4 ? "#fff" : "#000",
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    width: "100%",
                    minWidth: "max-content",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: page === 4 ? "#fff" : "#002366",
                      fontWeight: "500",
                      margin: 0,
                      transitionDuration: "2s",
                      transitionTimingFunction: "ease",
                    }}
                  >
                    <FaUserTie style={{ marginRight: 10 }} />
                    Internships
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "2rem",
                  boxShadow: "0px 5px 15px 5px rgba(232, 238, 248, 0.75)",
                  lineHeight: "2rem",
                }}
              >
                {page === 1 ? (
                  <TechnicalPub />
                ) : page === 2 ? (
                  <Aircraft />
                ) : page === 3 ? (
                  <Recruit />
                ) : page === 4 ? (
                  <Internship />
                ) : null}
              </div>
            </div>

            {/* Career */}
            <h1
              id="career"
              style={{
                color: "#e4e4e4",
                fontSize: "3rem",
                textAlign: "center",
                marginBottom: "-2rem",
                textTransform: "uppercase",
              }}
            >
              Careers
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  marginBottom: "6rem",
                  marginRight: "2rem",
                  margin: "1rem",
                  padding: "1rem",
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: "2rem",
                    color: "#252B5D",
                    fontWeight: "500",
                  }}
                >
                  TAKEOFF YOUR CAREER WITH US!
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "2rem" }}>
                  Join us in one of our full time roles and see how you can
                  takeoff your career to new heights. Stay connected to us about
                  the current opportunities in technical writing and aircraft
                  maintenance so that we can reach out to you.
                </p>
                <a href="#contact" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="large"
                    style={{ borderRadius: 20 }}
                  >
                    Drop Us Email
                  </Button>
                </a>
              </div>
              <img src={career} alt="" style={{ width: 300 }} />
            </div>

            {/* about us */}
            <div
              id="about"
              style={{
                marginBottom: "5rem",
                margin: "1rem",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <h1
                style={{
                  color: "#e4e4e4",
                  fontSize: "3rem",
                  textAlign: "center",
                }}
              >
                ABOUT US
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* <img
              src={aboutimg}
              alt=""
              width={300}
              style={{ marginRight: "1rem" }}
            /> */}
                <div style={{ fontSize: "1.1rem", lineHeight: "2rem" }}>
                  <p>
                    TakeOff Techno Solutions Pvt. Ltd (TOTSPL) is an aviation
                    Services Company founded in 2017 by a team of experienced
                    aviation specialists, providing a wide range of solutions
                    ranging from technical documentation, Aircraft Maintenance
                    and repair, Aircraft Management, Training solutions for
                    airlines and AME Training Schools.
                  </p>
                  <p>
                    Our talent pool includes technical authors, illustrators,
                    Information Architects and Aircraft Maintenance Engineers
                    have extensive experience in delivering projects and
                    products that are globally spread with varied programme
                    guidelines, standards and compliance needs. Our goal is to
                    provide the innovative, flexible and cost effective
                    solutions to meet our client's requirements.
                  </p>
                  <p>
                    We provide consulting and outsourcing services, in which we
                    support our customers in projects, skills and manpower, both
                    in-house and offshore.
                  </p>
                </div>
              </div>
            </div>
            {/* contact us */}
            <div
              id="contact"
              style={{
                // margin: "1rem",
                marginBottom: "6rem",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <h1
                style={{
                  color: "#e4e4e4",
                  fontSize: "3rem",
                  textAlign: "center",
                }}
              >
                CONTACT US
              </h1>
              <p
                style={{
                  marginBottom: "5rem",
                  textAlign: "center",
                  fontSize: "1.1rem",
                  lineHeight: "2rem",
                }}
              >
                Contact us today to know how takeoff stragetic solutions can
                help your business needs
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Grid container spacing={5}>
                  <Grid item xs={4}>
                    <div
                      style={{
                        //boxShadow: "-10px 10px 21px -6px rgba(0,0,0,0.75)",
                        padding: "1rem",
                        borderRadius: 8,
                        // backgroundColor: "#f3f6fc",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            marginRight: 10,
                            backgroundColor: "#e8eef8",
                            color: "#002366",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 30,
                            width: 30,
                            borderRadius: 30,
                            boxShadow: "-5px 5px 10px -6px rgba(0,0,0,0.75)",
                            // ...styles.swing,
                          }}
                        >
                          <MdLocationOn size={20} />
                        </div>
                        <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                          Address
                        </div>
                      </div>

                      <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
                        <div
                          style={{ marginBottom: "10px", fontWeight: "500" }}
                        >
                          Takeoff Techno Solutions
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          #25/25,Jakkur Plantation,
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          Yashodha Nagar,
                        </div>
                        <div style={{}}>Bengaluru - 560064</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div
                      style={{
                        //boxShadow: "-10px 10px 21px -6px rgba(0,0,0,0.75)",
                        padding: "1rem",
                        borderRadius: 8,
                        // backgroundColor: "#f3f6fc",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            marginRight: 10,
                            backgroundColor: "#e8eef8",
                            color: "#002366",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 30,
                            width: 30,
                            borderRadius: 30,
                            boxShadow: "-5px 5px 10px -6px rgba(0,0,0,0.75)",
                            //...styles.swing,
                          }}
                        >
                          <IoMdMail size={16} />
                        </div>
                        <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                          E-mail
                        </div>
                      </div>

                      <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
                        info@totspl.com
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div
                      style={{
                        // boxShadow: "-10px 10px 21px -6px rgba(0,0,0,0.75)",
                        padding: "1rem",
                        borderRadius: 8,
                        // backgroundColor: "#f3f6fc",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            marginRight: 10,
                            backgroundColor: "#e8eef8",
                            color: "#002366",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 30,
                            width: 30,
                            borderRadius: 30,
                            boxShadow: "-5px 5px 10px -6px rgba(0,0,0,0.75)",
                          }}
                        >
                          <FaPhoneAlt size={16} />
                        </div>
                        <div
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "500",
                          }}
                        >
                          Contact No.
                        </div>
                      </div>

                      <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
                        +91 9353978799
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          {/* footer */}
          <div
            style={{
              backgroundColor: "#252B5D",
              padding: "1rem 2rem",
              paddingBottom: "2rem",
              color: "#fff",
              paddingLeft: "5rem",
              paddingRight: "5rem",
            }}
          >
            <div></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "1.4rem" }}>TakeOff Techno Solutions</p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ color: "white" }}>
                    <MdLocationOn
                      style={{ marginRight: "5px" }}
                      size={20}
                      color="#e4e4e4"
                    />
                  </div>
                  <div>
                    <div style={{ marginBottom: "5px" }}>
                      Takeoff Techno Solutions Private Limited
                    </div>
                    <div style={{ marginBottom: "5px" }}>
                      #25/25,Jakkur Plantation,Yashodha Nagar
                    </div>
                    <div style={{ marginBottom: "5px" }}>
                      Bengaluru - 560064
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:info@totspl.com"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <IoMdMail
                      style={{ marginRight: "5px" }}
                      size={18}
                      color="#e4e4e4"
                    />
                    <div style={{ textDecoration: "none", color: "white" }}>
                      info@totspl.com
                    </div>
                  </div>
                </a>
                <a href="tel:+919353978799" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginBottom: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ color: "white" }}>
                      <FaPhoneAlt
                        style={{ marginRight: "5px" }}
                        size={16}
                        color="#e4e4e4"
                      />
                    </div>
                    <div style={{ textDecoration: "none", color: "white" }}>
                      +91 9353978799
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <p style={{ fontSize: "1.2rem" }}>Industries We Serve</p>
                <p style={{ fontSize: "1rem" }}>Aerospace</p>
                <p style={{ fontSize: "1rem" }}>Automotive</p>
                <p style={{ fontSize: "1rem" }}>Healthcare</p>
                <p style={{ fontSize: "1rem" }}>Software</p>
              </div>
              <div>
                <p style={{ fontSize: "1.2rem" }}>Solutions We Offer</p>
                <p style={{ fontSize: "1rem" }}>Technical Publication</p>

                <p style={{ fontSize: "1rem" }}>
                  Aircraft Management &amp; Maintenance
                </p>
                <p style={{ fontSize: "1rem" }}>Recruitment and staffing</p>
                <p style={{ fontSize: "1rem" }}>Internships</p>
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                color: "#d9d9d9",
                marginTop: "2rem",
                fontSize: "14px",
              }}
            >
              All rights reserved, TakeOff Techno Solutions © 2022
            </p>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
