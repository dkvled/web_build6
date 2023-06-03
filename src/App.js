import Login from "./Login";
import Signup from "./Signup";
import ProfileModify from "./ProfileModify";
import PostWrite from "./PostWrite";
import Post from "./Post";

import Header from './Header'; //밑에 3개 같이 사용
import PostFilter from './PostFilter';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return ( 
    <Router>
      <div >
        <Header/>

        <Routes>
          <Route path="/" element={ <PostFilter/> }></Route>
          <Route path="/login" element={ <Login/> }></Route>
          <Route path="/signup" element={ <Signup/> }></Route>
          <Route path="/profilemodify" element={ <ProfileModify/> }></Route>
          <Route path="/PostWrite" element={ <PostWrite/> }></Route> 
          <Route path="/Post" element={ <Post/> }></Route>     

        </Routes>
      </div>
    </Router>
  );
}

export default App;