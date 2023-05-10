import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useStateContext } from "../provider/StateProvide";
import { userType } from "../reducer/employee.reducer";
import { useNavigate } from "react-router-dom";

import { UserInfo } from "../components/UserInfo";

export const SearchResults = () => {
  //naigate
  const navigate = useNavigate();

  //context api
  const { state } = useStateContext();
  const { users }: { users: userType[] } = state;

  return (
    <div className="container search-results">
      <div className="search-results_Nav">
        <div className="flex-center pointer" onClick={() => navigate("/")}>
          <ArrowLeftCircleIcon className="close-icon__prop" /> Go back
        </div>
        <div className="flex-center">
          <img
            src="https://www.appknox.com/hubfs/Imported_Blog_Media/logo-1.png"
            style={{ width: "40%" }}
          />
        </div>
      </div>
      <div className="search-results__length">
        <div className="home__greetings-greet">
          Total <span style={{ color: "#ff4d3f" }}>{users.length}</span> data
          found
        </div>
      </div>
      <div className="search-result__content">
        {users.length > 0 && users.map((user) => <UserInfo user={user} />)}
      </div>
    </div>
  );
};
