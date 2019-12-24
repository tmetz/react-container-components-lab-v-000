import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: []
      searchTerm: ''
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(movieData => this.setState({ reviews: movieData.results }))
  }

  render() {
    return (
      <div className = "latest-movie-reviews">
        <h2>Latest movie reviews: </h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
