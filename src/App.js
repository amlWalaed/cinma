import { Route, Routes } from "react-router-dom";
import Footer from "./components/global/Footer/Footer";
import Navbar from "./components/global/Navbar/Navbar";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.scss";
import More from "./components/More/More";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route element={<PageNotFound />} />
        <Route path="/More" element={<More />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
