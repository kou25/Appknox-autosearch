import { ClockIcon } from "@heroicons/react/24/outline";

export const SearchResult = ({
  result,
  isHistory = false
}: {
  result: string;
  isHistory: boolean;
}) => {
  return (
    <div className={isHistory ? "search__result-history" : "search__result"}>
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
