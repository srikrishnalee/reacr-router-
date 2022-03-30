import './index.css'
import {Link} from "react-router-dom"

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <Link  to={`/blogs/${id}`} className="blog-item-link">
    <div className="item-container">
      <img className="item-image" src={imageUrl} alt={`item${id}`} />

      <div className="flex flex-col">
        <p className="font-light text-red-400 hover:text-black">{topic}</p>

        <p className="text-xl font-bold ">{title}</p>
        <div className="flex mt-[10px]">
          <img className="h-[30px] w-[30px] ml-[10px] rounded-md" src={avatarUrl} alt={`avatar${id}`} />
          <p className="ml-[10px] font-light">{author}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default BlogItem
