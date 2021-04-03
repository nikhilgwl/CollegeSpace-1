import React, { useState } from "react";
import "./Pedia_info.css";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "../Homepage/Button";

const Pedia_info = () => {
  const [info, setInfo] = useState(false);
  const [loader, setLoader] = useState(false);

  const changeFont = () => {
    if (window.innerWidth <= 960) {
      setInfo(true);
    } else {
      setInfo(false);
    }
  };

  window.addEventListener("load", changeFont);
  window.addEventListener("resize", changeFont);
  return (
    <div className="supportbody">
      <div className={info ? "description active" : "description"}>
        <h1>
          Located in South Mumbai, VJTI is an autonomous institution owned by
          Maharashtra State Government. It is known for its high-quality
          teaching, collaborative research, industry connections, and strong
          alumni network. VJTI is also the Central Technical Institute of
          Maharashtra. The institute trains students in engineering and
          technology at certificate, diploma, degree, post-graduate and doctoral
          levels.
        </h1>
      </div>

      {/* <button
        onClick="location.href='http://vjtimumbai.in';"
        type="submit"
        style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}
      >
        Know More
      </button> */}

      {/* <a
        href="https://vjtimumbai.in"
        className="btn btn-primary"
        style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}
        target="_blank"
      >
        KNOW MORE
      </a> */}
      <Container>
        <a class="btn-mobile" href="https://vjtimumbai.in">
          <button class="btn btn--outline btn--medium">Know More</button>
        </a>
      </Container>
    </div>
  );
};

export default Pedia_info;