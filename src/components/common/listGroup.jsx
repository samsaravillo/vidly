import React from 'react';
import { genres } from '../../services/fakeGenreService';

const ListGroup = props => {
     const { genreList, onFilterChange } = props;
    return (  
        <ul className="list-group">
            { genres.map(genre  => (
                <li key={genre._id} className="list-group-item"
                    onClick={() => onFilterChange(genre)}
                >
                    {genre.name}
                </li>
            ))}
        </ul>
    );
}
 
export default ListGroup;