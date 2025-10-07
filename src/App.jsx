import "./App.css";
import { Route, Routes } from "react-router-dom";
import BlogSignup from "./Components/BlogSignup";
import Blog from "./Components/Blog";
import BlogCreate from "./Components/BlogCreate";
import BlogLogin from "./Components/BlogLogin";
import MainRootLayout from "./MainContext";

function App() {
  return (
    <MainRootLayout>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blogSignup" element={<BlogSignup />} />
        <Route path="/blogcreate" element={<BlogCreate />} />
        {/* <Route path='/listing' element={<BlogListing />} /> */}
        <Route path="/blogLogin" element={<BlogLogin />} />
      </Routes>
    </MainRootLayout>
  );
}

export default App;
