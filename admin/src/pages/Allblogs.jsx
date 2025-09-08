import axios from 'axios'
import React, {useState, useContext, useEffect} from 'react'
import { Admincontext } from '../context/Admincontext'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Allblogs = ({token}) => {


  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  const {backendUrl} = useContext(Admincontext)

  const fetchBlogs = async () => {

    try {
      const {data} = await axios.get(backendUrl + "/api/blog/getblogs", {})
      if(data.success){
        setBlogs(data.data)
        toast.success(data.message, {
        toastId : "success"
      })
      }else{
        toast.error(data.message, {
        toastId : "error"
      })
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        toastId : "error"
      })
      
    }

  }

  const deleteBlog = async (id) => {

    try {
      const {data} = await axios.post(backendUrl + "/api/blog/removeblog", {id}, {headers : {token}})
      if(data.success){
        fetchBlogs()
        toast.success(data.message, {
        toastId : "success"
      })
      }else{
        toast.error(data.message, {
        toastId : "error"
      })
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        toastId : "error"
      })
      
    }

  }


  useEffect(() => {
    fetchBlogs()
  }, [])

  console.log(blogs);
  

  return (
    <>
 <main className='bg-white rounded-lg p-5 w-full yeah'>
        <div className='flex justify-between items-center mb-8'>
          <p className='text-[#2F73F2]'>All Blogs</p>
          <img className='w-[30px]' src={assets.button2} alt="" />
        </div>
      
       <div className='w-full overflow-x-scroll hide'>
     
     <table border={1} className='w-full min-w-[700px] whitespace-nowrap '>
        <thead className=''>
        <tr className='text-gray-400'>
          <td className=''>BlogId</td>
          <td className=''>Image</td>
          <td>Title</td>
          <td>Published</td>
          <td>Author</td>
          <td>Category</td>
          <td>Action</td>
        </tr>
      </thead>
      {blogs.map((blog, index) => (

     
      <tbody key={index}>
        <tr className='text-[#102D47] border border-gray-300'>
          <td>{blog._id}</td>
         <td><img className='w-[50px]' src={blog.images[0]} alt="" /></td>
          <td>{blog.title}</td>
          <td>{blog.published ? "published" : "not published"}</td>
          <td>{blog.author}</td>
          <td>{blog.category}</td>
          <td className='flex gap-2'><img onClick={() => deleteBlog(blog._id)} className='w-[20px] cursor-pointer' src="https://cdn-icons-png.freepik.com/256/7695/7695673.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid" alt="" /> <img onClick={() => navigate(`/update/${blog._id}`)} className='w-[20px] cursor-pointer' src="https://cdn-icons-png.freepik.com/256/13645/13645172.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid" alt="" /></td>
        </tr>
      </tbody>
           ))}

     </table>
             </div>



      </main>   
      </>
  )
}

export default Allblogs
