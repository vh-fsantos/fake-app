import React, { Component } from 'react'

import { history } from '../../routes'

class Edit extends Component {

  state = {
    body: this.props.location.state.body,
    title: this.props.location.state.title
  }

  editPost = () => {
    const {body, title} = this.state
    const { id } = this.props.match.params

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))



  }

  goHome = () => history.goBack('/', {...this.state})


  render() {
    return (
      <div>
        <input type='text' onChange={e => this.setState({title: e.target.value})} placeholder='Edit the title'/>
        <input type='text' onChange={e => this.setState({body: e.target.value})} placeholder='Edit the body'/>
        <button onClick={this.editPost}>editar</button>

        <button onClick={this.goHome}>go home</button>
      </div>
    );
  }
}

export default Edit;