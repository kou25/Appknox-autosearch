import { useEffect, useState } from "react";
import data from "../db/db.json";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { SearchActionKind, userType } from "../reducer/employee.reducer";
import { useStateContext } from "../provider/StateProvide";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({
  setResults,
  input,
  setInput,
  setInitalTouch
}: {
  setResults: React.Dispatch<React.SetStateAction<userType[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setInitalTouch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //naigate
  const navigate = useNavigate();

  //states
  const [submited, setSubmited] = useState(false);
  //context api
  const { dispatch } = useStateContext();

  //move to next page on submit
  useEffect(() => {
    if (submited && input !== "") {
      setSubmited(false);
      dispatch!({ type: SearchActionKind.HISTORY, payload: input });
      navigate("/search-result");
    }
    setSubmited(false);
  }, [dispatch, input, navigate, submited]);

  //fetch data
  const fetchData = (value: string) => {
    const results: userType[] = data.filter((user: userType) => {
      return (
        value && user && user.name && user.name.toLowerCase().includes(value)
      );
    });
    dispatch!({ type: SearchActionKind.SEARCH, payload: results });
    setResults(results);
  };

  //handle text change
  const handleChange = (value: string) => {
    setInitalTouch(false);
    setInput(value);
    fetchData(value);
  };

  // on submit change
  const handleSubmit = (e: string) => {
    if (e === "Enter") {
      setSubmited(true);
    }
    if (e === "Escape") {
      setInitalTouch(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        className="home__search-container-input"
        placeholder="Search employee..."
        value={input}
        onChange={(e) => handleChange(e.target.value as string)}
        onKeyDown={(e) => handleSubmit(e.key as string)}
        onFocus={() => setInitalTouch(true)}
      />
      <div
        className="close-icon"
        onClick={() => {
          setInput("");
          setResults([]);
        }}
      >
        {input.length > 0 && <XCircleIcon className="close-icon__prop" />}
      </div>
    </div>
  );
};
