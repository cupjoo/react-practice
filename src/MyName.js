import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      My name is <b>{name}</b>
    </div>
  );
}

MyName.defaultProps = {
  name: 'None'
}

export default MyName;
