import React from "react";
import { AiFillSetting, AiTwotoneCalendar } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="col-md-2"
      style={{
        backgroundImage: "linear-gradient(to top, #0fcfeb, #18d2af)",
        paddingTop: "50px",
        paddingLeft: "50px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="text-light">&#8656;</h1>
      </Link>
      <Link to>
        <h5 className="mt-4 text-light">
          <BsFillGrid3X3GapFill /> Dashboard
        </h5>
      </Link>
      <Link to>
        <h5 className="mt-4 text-light">
          <AiTwotoneCalendar /> Appointment
        </h5>
      </Link>
      <Link to>
        <h5 className="mt-4 text-light">
          <HiUsers /> Patient
        </h5>
      </Link>
      <Link to>
        <h5 className="mt-4 text-light">
          <IoDocumentText /> Prescription
        </h5>
      </Link>
      <Link to>
        <h5 className="mt-4 text-light">
          <AiFillSetting /> Setting
        </h5>
      </Link>
    </div>
  );
};

export default SideBar;
