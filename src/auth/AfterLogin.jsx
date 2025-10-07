import React, { useContext, useEffect } from "react";
import { loginContext } from "../MainCintext";
import { useNavigate } from "react-router-dom";

export default function AfterLogin() {
  const { token } = useContext(loginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return <></>;
}
