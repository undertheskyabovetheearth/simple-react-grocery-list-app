import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Item = ({item, handleCheck, handleDelete}) => {
    return (
        <li className="item">
          <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
          <label style={(item.checked) ? { textDecoration: 'line-through' } : null}>{item.item}</label>
          <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(item.id)} />
        </li>
    );
}

export default Item;