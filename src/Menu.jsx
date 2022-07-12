import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">Контакты</Link>
        </li>
        <li>
          <Link to="/users">Пользователи</Link>
        </li>
      </ul>
    </nav>
  );
}
