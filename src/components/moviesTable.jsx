import React from 'react'
import Like from '../components/common/like';

const MoviesTable = props => {
    const { movies, onDelete, onLike } = props;

    return (
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
                        <Like 
                            liked={movie.liked} 
                            onLikeToggle={() => onLike(movie)} 
                        />
                    </td>
                    <td>
                        <button 
                            onClick={ () => onDelete(movie) } 
                            type="button" className="btn btn-danger">
                                Delete
                        </button>
                    </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
 
export default MoviesTable;