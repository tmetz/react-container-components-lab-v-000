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
      reviews: [],
      searchTerm: ''
    };
  }

  handleSubmit = event =>  {
    event.preventDefault();
    fetch(URL + '&query=' + this.state.searchTerm)
      .then(response => response.json())
      .then(movieData => this.setState({ reviews: movieData.results }))
  }

  render() {
    return (
      <div className = "searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h2>Results of reviews search: </h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
