import { useState } from "react";

export default function useEmailValidity () {
  const [value, setValue] = useState("");
  const [validity, setValidity] = useState("");
  const validEmail = new RegExp(
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const onChange = (e) => {
    setValue(e.target.value);
    validEmail.test(e.target.value) ? setValidity("true") : setValidity("");
  };
  return { value, validity, onChange };
};

