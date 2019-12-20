import React from 'react'
import "./css/bootstrap.css"

import axios from 'axios' // npm install --save axios
import {Link} from 'react-router-dom'


class UsersList extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users/')
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((err)=>{
            alert(err)
        }) 
    }

    render(){
        return(
            <div>
                <ul>
            <h2>Listing users-{this.state.users.length}</h2>
        
            {this.state.users.map((user)=>{
                return<li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            })}
                </ul>
                </div>
        )
    }
}
export default UsersList
