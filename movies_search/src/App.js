import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from './MovieRow.js';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("This is my movie search ");

    const movies = [
      {id: 0, poster_src: "", title: "Avengers", overview: "This is avengers"},
      {id: 1, title: "Avengers 2", overview: "This is 2 avengers"},
      {id: 2, title: "Avengers 3", overview: "This is 3 avengers"},
      {id: 3, title: "Avengers 4", overview: "This is 4 avengers"},
    ]


      var movieRows = [];
      movies.forEach((movie) => {
        const movieRow = <MovieRow  movie={movie}/>
        movieRows.push(movieRow)
      });

      this.state = { rows: movieRows}
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

        <input class="searchBar" placeholder="Enter Search Term" />
            {this.state.rows}
      </div>
    );
  }
}

export default App;
