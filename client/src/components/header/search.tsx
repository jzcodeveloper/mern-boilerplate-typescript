import React, { useState, useEffect } from "react";
import { ReactComponent as Glass } from "../../assets/icons/magnifying-glass.svg";
import { useLocation, useHistory } from "react-router";

export function Search(): React.ReactElement {
  const [state, setState] = useState<string>("");

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    setState(query);
  }, [location.search]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/?q=${state}`);
  };

  return (
    <form onSubmit={onSubmit} className="d-flex align-items-center">
      <Glass
        style={{
          fill: "white",
          width: "2.5em",
          height: "2.5em",
          marginRight: "0.5em",
        }}
      />
      <input
        className="form-control rounded-0"
        type="text"
        placeholder="Search movies..."
        value={state}
        onChange={onChange}
      />
    </form>
  );
}
