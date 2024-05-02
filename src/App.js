import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Courses from "./pages/Courses";
import NoPage from "./pages/NoPage";
import Radiotekniikka from "./pages/RF/Radiotekniikka";
import Siirtolinjat from "./pages/RF/Siirtolinjat";
import Emaallot from "./pages/RF/Emaallot";
import { Provider } from "./Context";

export default function App() {
  return (
    <Provider>
      <BrowserRouter>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<Layout />}>
            {" "}
            <Route index element={<Home />} />{" "}
            <Route path="blogs" element={<Blogs />} />{" "}
            <Route path="courses" element={<Courses />} />{" "}
            <Route path="radiotekniikka" element={<Radiotekniikka />} />{" "}
            <Route path="siirtolinjat" element={<Siirtolinjat />} />{" "}
            <Route path="emaallot" element={<Emaallot />} />{" "}
            <Route path="*" element={<NoPage />} />{" "}
          </Route>{" "}
        </Routes>{" "}
      </BrowserRouter>
    </Provider>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
