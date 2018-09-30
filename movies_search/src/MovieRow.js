import React from 'react';


class MovieRow extends React.Component {

// each class has a function called render that you can override
  render() {
    return  <div>
      <table key={this.props.movie.id}>
          <tbody>
            <tr>
              <td>
                <img alt="poster" width="120" src="{this.props.movie.poster_src}"/>
              </td>
              <td>{this.props.movie.title}</td>
              <p>{this.props.movie.overview}</p>
            </tr>
          </tbody>
      </table>
    </div>
  }                      
}


export default MovieRow;
