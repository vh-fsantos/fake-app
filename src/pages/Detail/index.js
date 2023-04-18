import React, { Component } from 'react'
import {CommentContainer } from './styles'

class Detail extends Component {

  state = {
    post: {}
  }

  componentDidMount () {
    // this.renderPost().then(resp => {
    //   this.setState({ post: resp })
    // })
    this.renderPost()
  }

  renderPost = async () => {
    const { id } = this.props.match.params
    let thumbs, comments

    try {
      thumbs = await this.getContentApi(`albums/${id}/photos?_limit=2`)
      comments = await this.getContentApi(`posts/${id}/comments?_limit=10`)
    } catch (err) {
      console.warn(err)
    } finally {
      const post = {
        ...this.props.location.state,
        thumbs,
        comments
      }

      this.setState({ post }, () => {
        console.warn(this.state.post)
      })
    }
  }

  getContentApi = (url) => {
    return fetch(`https://jsonplaceholder.typicode.com/${url}`)
      .then(response => response.json())
  }

  render() {
    const { body, title} = this.props.location.state
    const { post: { thumbs, comments } } = this.state

    return (
      <div>
        <h2>{title}</h2>
        <p>{ body }</p>

        {thumbs && thumbs.map(thumb =>
          <img src={thumb.url} alt={thumb.title}/>
        )}

        {!thumbs &&
          <div>loading</div>
        }

        <CommentContainer>
        {comments && comments.map(comment =>
          <div className="comment">
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        )}
        </CommentContainer>

        {!comments &&
          <div>loading</div>
        }
      </div>
    );
  }
}

export default Detail;