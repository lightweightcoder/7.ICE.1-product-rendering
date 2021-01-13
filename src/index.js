import './styles.scss';
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import data from './data.json';

const listItems = data.items.map((item) => {
  let isIdOdd = false;
  let jsxForitem;

  // check if id is odd or even
  if (item.id % 2 === 1) {
    isIdOdd = true;
  }

  if (isIdOdd) {
    jsxForitem = (
      <li className="odd-color" key={item.id.toString()}>
        <p>
          id:
          {item.id}
        </p>
        <p>
          name:
          {item.name}
        </p>
        <p>
          description:
          {item.description}
        </p>
        <p>
          createdAt:
          {moment(item.createdAt).fromNow()}
        </p>
        <p>
          updatedAt:
          {moment(item.updatedAt).fromNow()}
        </p>
      </li>
    );
  } else {
    jsxForitem = (
      <li className="even-color" key={item.id.toString()}>
        <p>
          id:
          {item.id}
        </p>
        <p>
          name:
          {item.name}
        </p>
        <p>
          description:
          {item.description}
        </p>
        <p>
          createdAt:
          {moment(item.createdAt).fromNow()}
        </p>
        <p>
          updatedAt:
          {moment(item.updatedAt).fromNow()}
        </p>
      </li>
    );
  }

  return jsxForitem;
});

const myEl = (
  <div>
    <ul>
      {listItems}
    </ul>
  </div>
);

const rootElement = document.createElement('div');

document.body.append(rootElement);

render(myEl, rootElement);
