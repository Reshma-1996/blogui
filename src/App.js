import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Person from './Person'
import UsersList from './UsersList'
import Contact from './Contact'
import Home from './Home'
import PostsLists from './Posts'
//import PostsShow from './PostsShow'
import UserShow from './UserShow'





function App() {
  return (
    <BrowserRouter>
    <div>
     <Link to="/Person">Person</Link>|
     <Link to="/UsersList">UsersList</Link>|
     <Link to="/Contact">Contact</Link>|
     <Link to="/Home">Home</Link>|
     <Link to="/Posts">PostsLists</Link>|
     {/* <Link to="/PostsShows">PostsShow</Link>| */}
     


     <Route path="/Person" component={Person}/>
     <Route path="/UsersList" component={UsersList} />
     <Route path="/users/:id" component={UserShow}/>
     <Route path="/Contact" component={Contact}/>
     <Route path="/Home" component={Home}/>
     <Route path="/Posts" component={PostsLists}/>
     
     {/* <Route path="/UserShow" component={UserShow}/> */}
     
    </div>
    </BrowserRouter>
  );
}

export default App;
