import React, { useState } from "react";
import logowater from "./assests/img/logowater.png";
import "./app.css";
import { Button, Modal } from "@mui/material";
import { IoLogoWhatsapp, IoMdMail, IoMdSettings } from "react-icons/io";
import {
  MdLocationOn,
  MdOutlineAirplanemodeActive,
  MdOutlineLaptopMac,
} from "react-icons/md";
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
import { FiX } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { RiStethoscopeLine } from "react-icons/ri";
import landingmobile from "./assests/img/landingmobile.png";

const Aircraft = () => {
  return (
    <div style={{ lineHeight: "2rem" }}>
      <p style={{ fontSize: "1.2rem", color: "#770c20", fontWeight: "500" }}>
        SOLUTIONS FOR YOUR AIRCRAFT OWNERSHIP!
      </p>
      <p>
        Takeoff first will strive to understand your specific needs and develop
        cost-effective outsourcing solutions for managing and maintaining your
        aircraft.
      </p>
      <div>
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
          Custom Clearance Support
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
  );
};
const Internship = () => {
  return (
    <div style={{ lineHeight: "2rem" }}>
      <p style={{ fontSize: "1.2rem", color: "#770c20", fontWeight: "500" }}>
        RUNWAY FOR YOUR FUTURE!
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
    <div style={{ lineHeight: "2rem" }}>
      <p style={{ fontSize: "1.2rem", color: "#770c20", fontWeight: "500" }}>
        ONE STOP TO HIRE PROFESSIONALS!
      </p>
      <p style={{ fontSize: "1.1rem" }}>
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
    <div style={{ lineHeight: "2rem" }}>
      <p style={{ fontSize: "1.2rem", color: "#770c20", fontWeight: "500" }}>
        WE DESIGN, DEVELOP AND DOCUMENT YOUR PRODUCT!
      </p>

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
      <p>
        <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
        Structural Repair Manual
      </p>
      <p>
        <GoDotFill color="#b8b8b8" style={{ marginRight: 5 }} />
        Training
      </p>
    </div>
  );
};

function AppMobile() {
  const [page, setpage] = useState("");
  const [modalvisible, setmodalvisible] = useState(false);

  return (
    <div>
      <div style={{ padding: "1rem", backgroundColor: "#ffffff" }}>
        {/* logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <img
            src={logowater}
            alt="Takeoff Techno Solutions"
            style={{ width: 200 }}
          />
        </div>
        {/* <p style={{ textAlign: "center", fontWeight: "500", color: "#252b5d" }}>
          TakeOff Techno Solutions
        </p> */}
        {/* landing */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            //...styles.zoomIn,
          }}
        >
          <img
            src={landingmobile}
            alt=""
            style={{ width: 400, transform: "scaleX(-1)" }}
          />
        </div>
        <p
          style={{
            fontSize: "1.6rem",
            color: "#252b5d",
            fontWeight: "500",
            lineHeight: "3rem",
            textAlign: "center",
          }}
        >
          TAKEOFF YOUR BUSINESS WITH OUR SOLUTIONS
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
      </div>
      {/* industries */}
      <div
        style={{
          paddingTop: "0.2rem",
          marginTop: "3rem",
          fontSize: "1rem",
          fontWeight: "500",
          backgroundColor: "#f8f3f4",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "2rem",
            marginLeft: "2rem",
          }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
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
              size={20}
              color="#770c20"
              style={{ marginRight: 5 }}
            />
            Automotive
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "2rem",
            marginLeft: "2rem",
          }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <RiStethoscopeLine
              size={20}
              color="#770c20"
              style={{ marginRight: 5 }}
            />
            Healthcare
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <MdOutlineLaptopMac
              size={20}
              color="#770c20"
              style={{ marginRight: 5 }}
            />
            Software
          </p>
        </div>
      </div>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#ffffff",
        }}
      >
        {/* services */}
        <div
          id="service"
          style={{
            // backgroundColor: "rgba(37,43,93,0.1)",
            padding: "1rem",
            // marginBottom: "4rem",
            borderRadius: "8px",
            marginTop: "3rem",
          }}
        >
          <h1
            style={{
              color: "#e4e4e4",
              fontSize: "3rem",
              textTransform: "uppercase",
              marginBottom: "3rem",
            }}
          >
            Solutions
          </h1>
          <div
            style={{
              borderBottom: "2px #d9d9d9 solid",
              borderRight: "1px #d9d9d9 solid",
              borderRadius: 8,
              marginBottom: "1rem",
              padding: "1rem",
              cursor: "pointer",
              backgroundColor: "#f3f6fc",
              color: "#000",
            }}
            onClick={() => {
              setpage("TechnicalPub");
              setmodalvisible(true);
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "#002366",
                fontWeight: "500",
                margin: 0,
              }}
            >
              <FaFileAlt style={{ marginRight: 6 }} /> Technical Publication
            </p>
            <p style={{ color: "#770c20" }}>
              WE DESIGN, DEVELOP AND DOCUMENT YOUR PRODUCT!
            </p>
            <p style={{ textAlign: "right" }}>Read More...</p>
          </div>
          <div
            style={{
              borderBottom: "2px #d9d9d9 solid",
              borderRight: "1px #d9d9d9 solid",
              padding: "1rem",
              cursor: "pointer",
              backgroundColor: "#f3f6fc",
              color: "#000",
              borderRadius: 8,
              marginBottom: "1rem",
            }}
            onClick={() => {
              setpage("Aircraft");
              setmodalvisible(true);
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "#002366",
                fontWeight: "500",
                margin: 0,
              }}
            >
              <FaPlaneDeparture style={{ marginRight: 10 }} />
              Aircraft Management & Maintenance
            </p>
            <p style={{ color: "#770c20" }}>
              SOLUTIONS FOR YOUR AIRCRAFT OWNERSHIP!
            </p>
            <p style={{ textAlign: "right" }}>Read More...</p>
          </div>
          <div
            style={{
              borderBottom: "2px #d9d9d9 solid",
              borderRight: "1px #d9d9d9 solid",
              padding: "1rem",
              cursor: "pointer",
              backgroundColor: "#f3f6fc",
              color: "#000",
              borderRadius: 8,
              marginBottom: "1rem",
            }}
            onClick={() => {
              setpage("Recruit");
              setmodalvisible(true);
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "#002366",
                fontWeight: "500",
                margin: 0,
              }}
            >
              <FaBriefcase style={{ marginRight: 10 }} />
              Recruitment and staffing
            </p>
            <p style={{ color: "#770c20" }}>ONE STOP TO HIRE PROFESSIONALS!</p>
            <p style={{ textAlign: "right" }}>Read More...</p>
          </div>
          <div
            style={{
              borderBottom: "2px #d9d9d9 solid",
              borderRight: "1px #d9d9d9 solid",
              padding: "1rem",
              cursor: "pointer",
              backgroundColor: "#f3f6fc",
              color: "#000",
              borderRadius: 8,
              marginBottom: "1rem",
            }}
            onClick={() => {
              setpage("Internship");
              setmodalvisible(true);
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "#002366",
                fontWeight: "500",
                margin: 0,
              }}
            >
              <FaUserTie style={{ marginRight: 10 }} />
              Internships
            </p>
            <p style={{ color: "#770c20" }}>RUNWAY FOR YOUR FUTURE!</p>
            <p style={{ textAlign: "right" }}>Read More...</p>
          </div>

          {/* <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            
          </div>

          <div
            style={{
              padding: "2rem",
              boxShadow: "0px 5px 15px 5px rgba(232, 238, 248, 0.75)",
              lineHeight: "2rem",
            }}
          >
            {page === 1 ? (
              <Aircraft />
            ) : page === 2 ? (
              <Internship />
            ) : page === 3 ? (
              <Recruit />
            ) : (
              <TechnicalPub />
            )}
          </div> */}
        </div>

        {/* Career */}
        <div
          id="career"
          style={{
            marginTop: "4rem",
            marginBottom: "6rem",
          }}
        >
          <h1
            style={{
              color: "#e4e4e4",
              fontSize: "3rem",
              marginLeft: "1rem",
              marginBottom: "3rem",
              textTransform: "uppercase",
            }}
          >
            Careers
          </h1>
          <div
            style={{
              margin: "1rem",
              borderRadius: "8px",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.4rem",
                color: "#252B5D",
                fontWeight: "500",
              }}
            >
              TAKEOFF YOUR CAREER WITH US!
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "2rem",
              }}
            >
              Join us in one of our full time roles and see how you can takeoff
              your career to new heights. Stay connected to us about the current
              opportunities in technical writing and aircraft maintenance so
              that we can reach out to you.
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
        </div>

        {/* about us */}
        <div
          id="about"
          style={{
            // marginTop: "6rem",
            margin: "1rem",
            borderRadius: "8px",
          }}
        >
          <h1
            style={{
              color: "#e4e4e4",
              fontSize: "3rem",
              marginBottom: "3rem",
            }}
          >
            ABOUT US
          </h1>
          <div style={{}}>
            <div style={{ fontSize: "1rem", lineHeight: "2rem" }}>
              <p>
                TakeOff Techno Solutions Pvt. Ltd (TOTSPL) is an aviation
                Services Company founded in 2017 by a team of experienced
                aviation specialists, providing a wide range of solutions
                ranging from technical documentation, Aircraft Maintenance and
                repair, Aircraft Management, Training solutions for airlines and
                AME Training Schools.
              </p>
              <p>
                Our talent pool includes technical authors, illustrators,
                Information Architects and Aircraft Maintenance Engineers have
                extensive experience in delivering projects and products that
                are globally spread with varied programme guidelines, standards
                and compliance needs. Our goal is to provide the innovative,
                flexible and cost effective solutions to meet our client's
                requirements.
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
            //marginBottom: "10rem",
            margin: "1rem",
            borderRadius: "8px",
            marginTop: "6rem",
          }}
        >
          <h1
            style={{
              color: "#e4e4e4",
              fontSize: "3rem",
              marginBottom: "3rem",
            }}
          >
            CONTACT US
          </h1>
          <p
            style={{
              marginBottom: "3rem",
              fontSize: "1.1rem",
              lineHeight: "2rem",
            }}
          >
            Contact us today to know how takeoff stragetic solutions can help
            your business needs
          </p>
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
                }}
              >
                <MdLocationOn size={20} />
              </div>
              <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                Address
              </div>
            </div>

            <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
              <div style={{ marginBottom: "10px", fontWeight: "500" }}>
                Takeoff Techno Solutions
              </div>
              <div style={{ marginBottom: "10px" }}>
                #25/25,Jakkur Plantation,
              </div>
              <div style={{ marginBottom: "10px" }}>Yashodha Nagar,</div>
              <div style={{}}>Bengaluru - 560064</div>
            </div>
          </div>

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
              <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                Contact No.
              </div>
            </div>

            <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
              +91 8217701048
            </div>
          </div>
          {/* social*/}
          {/* <div
            style={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
              marginTop: "3rem",
            }}
          >
            <a href="" style={{ textDecoration: "none" }}>
              <div
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
            <a href="" style={{ textDecoration: "none" }}>
              <div
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
            <a href="" style={{ textDecoration: "none" }}>
              <div
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
            <a href="" style={{ textDecoration: "none" }}>
              <div
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
            <a href="" style={{ textDecoration: "none" }}>
              <div
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
          </div> */}
        </div>
      </div>
      {/* footer */}
      <div
        style={{
          backgroundColor: "#252B5D",
          padding: "1rem",
          color: "#fff",
          marginTop: "4rem",
        }}
      >
        <p
          style={{
            fontSize: "1.4rem",
            textAlign: "center",
            marginBottom: "4rem",
            textTransform: "uppercase",
            fontWeight: "500",
          }}
        >
          TakeOff Techno Solutions
        </p>

        <div style={{ fontSize: "1.1rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "1rem",
            }}
          >
            <div style={{ color: "white" }}>
              <MdLocationOn
                style={{ marginRight: "10px" }}
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
              <div style={{ marginBottom: "5px" }}>Bengaluru - 560064</div>
            </div>
          </div>
          <a href="mailto:info@totspl.com" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <IoMdMail
                style={{ marginRight: "10px" }}
                size={18}
                color="#e4e4e4"
              />
              <div style={{ textDecoration: "none", color: "white" }}>
                info@totspl.com
              </div>
            </div>
          </a>
          <a href="tel:+918217701048" style={{ textDecoration: "none" }}>
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
                  style={{ marginRight: "10px" }}
                  size={16}
                  color="#e4e4e4"
                />
              </div>
              <div style={{ textDecoration: "none", color: "white" }}>
                +91 8217701048
              </div>
            </div>
          </a>
        </div>
        {/* social*/}
        <div
          style={{
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
        >
          <a href="" style={{ textDecoration: "none" }}>
            <div
              style={{
                marginBottom: "1rem",
                backgroundColor: "#fff",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <FaFacebookF size={20} color="#252B5D" />
            </div>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <div
              style={{
                marginBottom: "1rem",
                backgroundColor: "#fff",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <FaInstagram size={20} color="#252B5D" />
            </div>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <div
              style={{
                marginBottom: "1rem",
                backgroundColor: "#fff",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <FaLinkedinIn size={20} color="#252B5D" />
            </div>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <div
              style={{
                marginBottom: "1rem",
                backgroundColor: "#fff",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <FaTwitter size={20} color="#252B5D" />
            </div>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <IoLogoWhatsapp size={20} color="#252B5D" />
            </div>
          </a>
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#d9d9d9",
            marginTop: "1rem",
            fontSize: "14px",
          }}
        >
          All rights reserved, TakeOff Techno Solutions © 2022
        </p>
      </div>
      <Modal
        open={modalvisible}
        onClose={() => setmodalvisible(false)}
        style={{ border: "none" }}
      >
        <div
          style={{
            padding: "1.4rem",
            backgroundColor: "#fff",
            border: "none",
            height: "60vh",
            overflowY: "auto",
            bottom: 0,
            position: "absolute",
            borderTopLeftRadius: "2rem",
            borderTopRightRadius: "2rem",
            paddingBottom: "3rem",
            // ...styles.slideOutDown,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#f5f5f5",
                height: 30,
                width: 30,
                display: "flex",
                alignItems: "center",
                borderRadius: 30,
                justifyContent: "center",
              }}
              onClick={() => setmodalvisible(false)}
            >
              <FiX color="#eb483b" size={23} />
            </div>
          </div>
          {page === "Aircraft" ? (
            <Aircraft />
          ) : page === "Internship" ? (
            <Internship />
          ) : page === "Recruit" ? (
            <Recruit />
          ) : (
            <TechnicalPub />
          )}
        </div>
      </Modal>
    </div>
  );
}

export default AppMobile;
