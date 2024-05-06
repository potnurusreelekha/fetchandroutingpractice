// Write your JS code here
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogsData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogsData

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`}>
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} />
          <div className="blog-item-info">
            <h1 className="title">{title}</h1>
            <p className="topic">{topic}</p>
            <div className="author-info">
              <img
                src={avatarUrl}
                alt={`avatar${id}`}
                className="author-image"
              />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
