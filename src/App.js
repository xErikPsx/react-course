import React, {useState} from 'react';
import logo from './logo.svg';
import Users from './Components/Users'
import './App.css';
import UserList from './Components/UserList'
import Users2 from './Components/Users.component'
import Button from './Components/Buttons/Button'

const App =  () => {

  const [showImg, setShowImg] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
  
        {
          showImg &&
          <img src={logo} className="App-logo" alt="logo" />
        }
        <Button className="toggle-btn" text="Toggle" onClick={() => setShowImg(!showImg)}></Button>
        <p>
          Monse BB
        </p>


        {/* <Users>
          
        </Users> */}

        <Users2>
          <h3>Hola</h3>
          <h3>Erik</h3>
          <h3>Parra</h3>
        </Users2>

        {/* <UserList 
          name = {person.name} 
          age = {person.age}
        /> */}
      </header>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           WEBOS
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
