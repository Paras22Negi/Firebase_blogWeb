import React, { useEffect, useContext } from "react";
import { loginContext } from "../MainCintext";
import { useNavigate } from "react-router-dom";

export default function CheckLogin() {
  const { token } = useContext(loginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token == undefined || token == "") {
      navigate("/login");
    }
  }, [token, navigate]);
  return <></>;
}
