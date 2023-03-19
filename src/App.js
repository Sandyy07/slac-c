import React  from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  // const [user, setUser] = useState();
  const [{user}, dispatch] = useStateValue();

  return (
   
    <div className="App">
       <BrowserRouter>

     {/* <h1>Hello ??</h1> */}
      {!user? (
        <Login />
      ) : (
        <>
        <Header />
        <div className="app__body">
           <Sidebar/>
           <Routes>
             <Route path = "/room/:roomId" element={ <Chat/>}></Route>
             <Route path = "/" element={ <h1>Welcome</h1>}>
              
             </Route>
           </Routes>
         </div>
         </>
      )}
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
