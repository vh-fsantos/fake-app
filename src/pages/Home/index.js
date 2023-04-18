import React, { Component } from 'react';
import PostList from '../../components/PostList/index'

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(json => this.setState({posts: json}))
      .then(() => this.checkParams())
  }

  checkParams = () => {
    const { state } = this.props.location

    if (state) {
      if (Object.entries(state).length === 0 && state.constructor === Object) return false

      const { posts } = this.state

      if (posts.length > 0) {
        const newPosts = posts.map(post => {
          if (post.id === parseInt(state.id)){
            post = {
              ...post,
              body: state.body,
              title: state.title
            }
          }

          return post
        })

        this.setState({posts: newPosts})
      }
    }
  }

  deletePost = (forDeletePost) => {
    const { posts } = this.state
    const newPosts = posts.filter(post => post.id !== parseInt(forDeletePost.id))

    this.setState({posts: newPosts})
  }

  render() {
    return (
        <PostList posts={this.state.posts} delete={this.deletePost}/>
    );
  }
}

export default Home;