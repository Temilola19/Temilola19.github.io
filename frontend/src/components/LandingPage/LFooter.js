import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LFooter = () => {
  return (
    <div>
      <div className="lfooter-container">
        <div className="lfooter">
          <Link style={{ textDecoration: "none" }} to="">
            <p className="logo" style={{ marginBottom: "0" }}>
              my<span className="special">Space</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LFooter;
