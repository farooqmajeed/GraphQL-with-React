import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const renderSongs = (props) => {

  console.log("====", props)
  return props.data && props.data.songs.map(x => {
     return( <li key={x.id}> {x.title}</li>)
  })
}

function SongList(props) {
  console.log("props", props)
  if (props.data.loading) { return <div>Loading ......</div> ;}
  return (
    <div>
      {renderSongs(props)}
    </div>
  );
}
const query = gql`
  {
      songs {
        id
        title
    }
  }
  `;
export default graphql(query)(SongList);
