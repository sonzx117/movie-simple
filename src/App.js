import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";
import HomePage from "./pages/HomePage";
import Main from "./components/layout/Main";
import MoviePage from "./pages/MoviePage";
import MoviePageV2 from "./pages/MoviePageV2";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailPage></MovieDetailPage>}
          ></Route>
          <Route path="/upcoming" element={<MoviePageV2></MoviePageV2>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
