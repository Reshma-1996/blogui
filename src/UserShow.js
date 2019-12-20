import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
       }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            const user = response.data
            this.setState({user})
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
        .then(response=>{
            const posts = response.data
            this.setState({posts})
        })
        .catch(err=>{
            console.log(err)
        })

    }
    render(){
        console.log(this.state.user)
        console.log(this.state.posts)
        return(
            <div>
                <h3>Name:</h3>-{this.state.user.name}
                <h3>Email:</h3>-{this.state.user.email}
                <ul>
                    
                <h3>Posts:</h3>
                    {this.state.posts.map(post=> {
                        return <li key={post.id}>{post.title}</li>
                        // return<PostItem key={post.id} id={post.id} title={post.body}/>
                    })}
                    
                </ul>
                <Link to="/posts">back</Link>
                
            </div>
        )
    }   
}

export default UserShow