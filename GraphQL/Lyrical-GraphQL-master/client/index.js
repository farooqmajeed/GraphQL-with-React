import React from 'react';
import ReactDOM from 'react-dom';
import SongList from './Components/SongList '

const Root = () => {
  return <div><SongList /></div>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
