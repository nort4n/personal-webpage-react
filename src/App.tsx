import { Route, Routes } from "react-router-dom";
import CustomLink from "./components/CustomLink";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SecondMind from "./pages/SecondMind";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-200">
      <header className="bg-slate-800 p-2">
        <nav className="flex text-slate-100 space-x-4">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/secondmind">Second Mind</CustomLink>
          
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/secondmind" element={<SecondMind />} />
      </Routes>
    </div>
  );
};

export default App;
