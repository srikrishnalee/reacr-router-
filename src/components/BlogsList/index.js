
import {Component} from 'react'
import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import {BounceLoader,BarLoader,BeatLoader} from 'react-spinner';





import BlogItem from '../BlogItem'

import './index.css'

// const blogsData = [
//   {
//     id: 1,
//     title: 'Blog 1',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
//     avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//     author: 'Author Name',
//     topic: 'React.js',
//   },
//   {
//     id: 2,
//     title: 'Blog 2',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
//     avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//     author: 'Author Name',
//     topic: 'React.js',
//   },
// ]
// hhtps://apis.ccbp.in/blogs

class BlogsList extends Component {

  state= {blogsData:[]}

    componentDidMount(){
        this.getBlogsData()
    }

    getBlogsData= async()=>{
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json()
       const updatedData = data.map((eachItem)=>({
         id : eachItem.id,
         title : eachItem.title,
         imageUrl:eachItem.image_url,
         avatarUrl:eachItem.avatar_url,
         author:eachItem.author,
         topic: eachItem.topic,
        
       }))
       this.setState({blogsData : updatedData});
    }
  render() {
    const {blogsData} = this.state
    return (
      <div className="flex flex-col items-center justify-center mt-[40px]">
        {/* {
          //  isLoading ? (<Backdrop
          //   sx={{ color: '#000000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          // >
          //   <CircularProgress color="#000000" />
          // </Backdrop>): 
        } */}
        {/* <BarLoader />
        <BounceLoader/>
        <BeatLoader/> */}
        {
          (blogsData.map(item => <BlogItem blogData={item} key={item.id} />))
        }
      </div>
    )
  }
}

export default BlogsList
