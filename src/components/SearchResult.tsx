import { ClockIcon } from "@heroicons/react/24/outline";
import { useStateContext } from "../provider/StateProvide";
import { SearchActionKind, userType } from "../reducer/employee.reducer";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({
  result,
  isHistory = false
}: {
  result: string;
  isHistory: boolean;
}) => {
  const navigate = useNavigate();
  //context api
  const { state, dispatch } = useStateContext();
  const { users }: { users: userType[] } = state;

  const handleClick = () => {
    const results: userType[] = users.filter((user: userType) =>
      user.name.toLowerCase().includes(result.toLowerCase())
    );
    dispatch!({ type: SearchActionKind.HISTORY, payload: result });
    dispatch!({ type: SearchActionKind.SEARCH, payload: results });
    navigate("/search-result");
  };

  return (
    <div
      className={isHistory ? "search__result-history" : "search__result"}
      onClick={() => handleClick()}
    >
      {isHistory && (
        <ClockIcon
          className="close-icon__prop"
          style={{ marginRight: "10px" }}
        />
      )}
      {result}
    </div>
  );
};
