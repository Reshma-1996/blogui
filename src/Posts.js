import React from 'react'
import axios from 'axios'
//import UserShow from './UserShow'

class PostsList extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
      axios.get(`http://jsonplaceholder.typicode.com/posts`)  
      .then((response ) => {
          const posts = response.data
          this.setState({posts})
      })

    }
    render(){
        return(
            <div>
<h2>Listing Posts - {this.state.posts.length}</h2>
{
    this.state.posts.map((post) => {
        return(
        <div key={post.id}>
        <h2>{post.title}</h2>
        <p>Body-{post.body}</p>
    <hr/>
                
            </div>
        )
    })
}
</div>
)
    }
}

export default PostsList