import React, { Component } from 'react';
import Like from '../components/common/like';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';

class Movies extends Component { 
    state = { 
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4,
        genres: getGenres(),
        currentGenre: 'All Genres'
    };

    handleDelete = movie => { 
        const movies = this.state.movies.filter(item => item !== movie);
        this.setState({ movies });
    };

    handleLike = movie => { 
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handlePageChange = page => {
        this.setState({ currentPage: page});
    };

    handleListGroup = genre => { 
        console.log('genre');
        this.setState({ currentGenre: genre});
    };


    render() { 
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies, genres } = this.state;

        if (count === 0) 
            return <h3>No movies available in the database.</h3>
        
        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <div>    
                <div className="row">
                    <div className="col-2">
                        <ListGroup 
                            genreList={genres}
                            onFilterChange={this.handleListGroup}
                        />
                    </div>
                    <div className="col">
                        <h3>Showing { count } movies in the database.</h3>
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            { movies.map(movie => 
                                <tr key={ movie._id }>
                                <th>{ movie.title }</th>
                                <td>{ movie.genre.name }</td>
                                <td>{ movie.numberInStock }</td>
                                <td>{ movie.dailyRentalRate }</td>
                                <td>
                                    <Like liked={movie.liked} onLikeToggle={() => this.handleLike(movie)} />
                                </td>
                                <td>
                                    <button 
                                        onClick={ () => this.handleDelete(movie) } 
                                        type="button" className="btn btn-danger">
                                            Delete
                                    </button>
                                </td>
                                </tr>
                            )}
                        </tbody>
                        </table>
                        <Pagination 
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
                
            </div>
        );
    }

} 

export default Movies; 
