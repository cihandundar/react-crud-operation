import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./pages/EditBlog";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
