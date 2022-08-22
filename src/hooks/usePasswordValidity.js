import { useState } from "react";

export default function usePasswordValidity () {
  const [value, setValue] = useState("");
  const [validity, setValidity] = useState("");
  const validPassword = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

  const onChange = (e) => {
    setValue(e.target.value);
    validPassword.test(e.target.value) ? setValidity("true") : setValidity("");
  };
  return { value, validity, onChange };
};