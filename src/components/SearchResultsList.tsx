import { userType } from "../reducer/employee.reducer";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({
  results,
  history,
  input
}: {
  results: userType[];
  history?: string[];
  input: string;
}) => {
  return (
    <div className="search__results-list">
      {input !== "" && <SearchResult result={input} isHistory={false} />}
      {(history ? history : results).slice(0, 5).map((result, id) => {
        return (
          <SearchResult
            result={typeof result !== "string" ? result?.name : result}
            key={id}
            isHistory={typeof result === "string"}
          />
        );
      })}
    </div>
  );
};
