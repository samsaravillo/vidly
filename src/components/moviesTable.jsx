import React, { Component } from 'react'
import TableHeader from './common/tableHeader';
import TableBody from './common/TableBody';
import Like from '../components/common/like';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: ''},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { 
            key: 'like', 
            content: 
                movie => <Like liked={movie.liked} onLikeToggle={() => this.props.onLike(movie)} />
        },
        { 
            key: 'delete', 
            content: movie => 
                <button onClick={ () => this.props.onDelete(movie) } 
                type="button" className="btn btn-danger">
                    Delete
                </button>
        }
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
                <TableBody columns={this.columns} data={movies} />
            </table>
        );
    }
}
 
export default MoviesTable;