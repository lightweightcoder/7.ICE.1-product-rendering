import './styles.scss';
import React from 'react';
import { render } from 'react-dom';
import data from './data.json';
import moment from 'moment';

const listEvenItems = data.items.filter((item) => 
  item.id % 2 === 0
);

listEvenItems.forEach(item => {
  item.bgColor = 'even-color';
})

const listOddItems = data.items.filter((item) => 
  item.id % 2 !== 0
);

listOddItems.forEach(item => {
  item.bgColor = 'odd-color';
})

const listItems = data.items.map((item, listOddItems) => 
  <li className={item.bgColor} key={item.id.toString()}>
    <p>id: {item.id}</p>
    <p>name: {item.name}</p>
    <p>description: {item.description}</p>
    <p>createdAt: {moment(item.createdAt).fromNow()}</p>
    <p>updatedAt: {moment(item.updatedAt).fromNow()}</p>
  </li>
);


console.log('listOddItems', listOddItems);

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
