import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Post } from './styles'

import { history } from '../../routes'

class PostList extends Component{
  edit = post => {
    history.push(`/edit/${post.id}`, post)
  }

  render () {
    return (
      <Post>
          {this.props.posts.map(post =>
            <div className='postCard' key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={{pathname: `/detail/${post.id}`, state: post}} >Ver Detalhes</Link>
              <br></br>
              <button onClick={() => this.edit(post)}>Editar</button>
              <br></br>
              <button onClick={() => this.props.delete(post)}>Deletar</button>
            </div>
          )}
      </Post>
    );
  }
}

export default PostList
