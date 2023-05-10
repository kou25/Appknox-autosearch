import { CloudIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";
import { userType } from "../reducer/employee.reducer";
import { useStateContext } from "../provider/StateProvide";

export const Home = () => {
  let timeOfDay;
  let icon;

  //context api
  const { state } = useStateContext();
  const { history }: { history: string[] } = state;

  //states
  const [input, setInput] = useState("");
  const [dateState, setDateState] = useState(new Date());
  const [results, setResults] = useState<userType[]>([]);
  const [initialTouch, setInitalTouch] = useState(false);

  //change time
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  //get time of day
  const date = moment.utc(Date.now()).local();

  //calculate greeetings
  const hours = date.hour();
  if (hours < 12) {
    timeOfDay = "Morning";
    icon = <SunIcon className="home-icon" />;
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    icon = <CloudIcon className="home-icon" />;
  } else {
    timeOfDay = "Evening";
    icon = <MoonIcon className="home-icon" />;
  }

  return (
    <div className="container home">
      <div className="flex-between">
        <div className="home__main">
          <div className="home__greetings">
            <div className="home__greetings-inline">
              <div>{icon}</div>
              <p className="home__greetings-greet">Good {timeOfDay}.</p>
            </div>
            <div className="home__greetings-time">
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: false
              })}
            </div>
          </div>
          <div className="home__search-container">
            <div className="home__search-logo-input-container">
              <div>
                <img
                  src="https://www.appknox.com/hubfs/Frame%2027241.svg"
                  alt="logo"
                />
              </div>
              <SearchBar
                setResults={setResults}
                input={input}
                setInput={setInput}
                setInitalTouch={setInitalTouch}
              />

              {!initialTouch && results && results.length > 0 ? (
                <SearchResultsList results={results} />
              ) : initialTouch ? (
                <SearchResultsList results={results} history={history} />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div>
          <small>© Appnox, 2023. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};
