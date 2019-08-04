import React, { Component } from "react";

import { connect } from "react-redux";

import MovieCard from "./MovieCard";
import NoResults from "../layout/NoResults";

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = "";

    content =
      movies.Response === "True" ? (
        movies.Search.map((index, movie) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        <NoResults />
      );
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
