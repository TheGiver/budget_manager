import { useEffect, useState } from 'react';

function Login(props) {
  let elements = [];
    props.data.forEach((element, index) => {
      elements.push(<p key={index}>{element}</p>)
    })
  
  return (
    <div >
      {elements}
    </div>
  );
}

export default Login;
