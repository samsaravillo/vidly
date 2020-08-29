import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component { 
    state = { 
        movies: getMovies()
    };

    handleDelete = (movie) => { 
        console.log(movie);
        const movies = this.state.movies.filter(item => item !== movie);
        this.setState({ movies });
    };

    render() { 
        const { length: count } = this.state.movies;
        if (count === 0) 
            return <h3>No movies available in the database.</h3>
        
        return (
            <div>    
                <h3>Showing { count } movies in the database.</h3>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.movies.map(movie => 
                        <tr key={ movie._id }>
                        <th>{ movie.title }</th>
                        <td>{ movie.genre.name }</td>
                        <td>{ movie.numberInStock }</td>
                        <td>{ movie.dailyRentalRate }</td>
                        <td><button onClick={ () => this.handleDelete(movie) } 
                                type="button" className="btn btn-danger">Delete</button></td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        );
    }
} 

export default Movies; 
