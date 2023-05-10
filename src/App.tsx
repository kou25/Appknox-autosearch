import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/search-result" element={<SearchResults />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
