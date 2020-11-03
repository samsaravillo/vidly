import React, { Component } from 'react'
import TableHeader from './common/tableHeader';
import Like from '../components/common/like';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: ''},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { key: 'like'},
        { key: 'delete'}
    ];
    
    render() { 
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

        return (
            <table className="table">
                <TableHeader 
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
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
}
 
export default MoviesTable;