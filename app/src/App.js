import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [barChartIndo, setbarChartIndo] = useState([]);

  const [ws, setWs] = useState({});


  useEffect(() => {
    setWs(ws => {
      let newWs = new WebSocket("ws://localhost:8080");
      newWs.addEventListener("message", (evt) => {
        let json = JSON.parse(evt.data);
        let token = json.token;
        localStorage.setItem("token", token);
        if(json.type === "barcharinformation"){
          setbarChartIndo([1,2,3,4,5,6]);
        }
      })
      return newWs;
    });
  }, [])
  
  function login(){
    setbarChartIndo([1,2,3,4,5,6]);
    ws.send("Login")
    setLoggedIn(true)
  }

  let componentToShow = (<Login data={barChartIndo}/>)

  if(!loggedIn){
    componentToShow = (<Register/>)
  }



  return (
    <div className="App">
      <button onClick={login}>Login</button>
      {componentToShow}
    </div>
  );
}

export default App;
