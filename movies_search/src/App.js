import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    // console.log("This is my movie search ");

    // const movies = [
    //   {id: 0, poster_src: "", title: "Avengers", overview: "This is avengers"},
    //   {id: 1, title: "Avengers 2", overview: "This is 2 avengers"},
    //   {id: 2, title: "Avengers 3", overview: "This is 3 avengers"},
    //   {id: 3, title: "Avengers 4", overview: "This is 4 avengers"},
    // ]
    //
    //
    //   var movieRows = [];
    //   movies.forEach((movie) => {
    //     const movieRow = <MovieRow  movie={movie}/>
    //     movieRows.push(movieRow)
    //   });
    //
    //   this.state = { rows: movieRows}


    this.performSearch("wonder");
  }

  performSearch(query) {
    console.log("performing search");
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=161d8ed0498b6c294568193bcef8e4e7&language=en-US&page=1&query='+ query;

    $.ajax({
      url : urlString,
      success: (searchResults) => {
        console.log("fetched data");

        const results = searchResults.results;
        var movieRows = [];
        // console.log(results);
        results.forEach((movie) => {
          console.log(movie);
          movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key = {movie.id} movie={movie}/>;
          console.log(movie.poster_src );
          movieRows.push(movieRow);
        })

        this.setState({rows: movieRows});

      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data");
      }
    });
  }


  searchChangeHabndler(event) {
    const query = event.target.value;
    this.performSearch(query);
  }

  render() {
    return (
      <div className="App">

        <table className="titleBar">
          <tbody>
            <tr>
              <td><img alt="app icon" green_app_iconwidth="50" src="green_app_icon.svg"/></td>
              <td width="8"/>
              <td>
                <h1>Reach Movie DB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="searchBar" placeholder="Enter Search Term" onChange = {this.searchChangeHabndler.bind(this)} />
            {this.state.rows}
      </div>
    );
  }
}

export default App;
