import React from 'react';
import { genres } from '../../services/fakeGenreService';

const ListGroup = props => {
     const { items, onItemSelect } = props;
    return (  
        <ul className="list-group">
            { genres.map(genre  => (
                <li key={genre._id} 
                    className={genre.name === onItemSelect ? '' : 'list-group-item'}
                    onClick={() => onItemSelect(genre)}
                >
                    {genre.name}
                </li>
            ))}
        </ul>
    );
}
 
export default ListGroup;