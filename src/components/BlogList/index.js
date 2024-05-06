// Write your JS code here
import Component from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')

    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <Loader type="Tail-spin" />
        ) : (
          <ul>
            {blogsData.map(eachItem => (
              <BlogItem key={eachItem.id} blogsData={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
