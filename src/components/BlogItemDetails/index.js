// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}
  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`http://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {updatedData} = this.state
    const {title, author, imageUrl, avatarUrl, content} = updatedData

    return (
      <div className="blog-info">
        <h1 className="title">{title}</h1>
        <div className="author-details">
          <img src={avatarUrl} alt={author} className="avatar-img" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? <Loader type="Tail-spin" /> : this.renderBlogItemDetails()}
      </div>
    )
  }
}
export default BlogItemDetails
