import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Admincontext } from '../context/Admincontext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBlog = ({token}) => {

 
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [summary, setSummary] = useState("")
  const [author, setAuthor] = useState("")
  const [category, setCategory] = useState("")
  const [published, setPublished] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()

  const {backendUrl} = useContext(Admincontext)

   const fetchBlogUpdate = async () => {

    try {
        const {data} = await axios.get(backendUrl + `/api/blog/singleblog/${id}`)
        if(data.success){
          setTitle(data.singleBlog.title)
          setContent(data.singleBlog.content)
          setAuthor(data.singleBlog.author)
          setCategory(data.singleBlog.category)
          setSummary(data.singleBlog.summary)
          setPublished(data.singleBlog.published)
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        console.log(error.message);
        toast.error(error.message)
        
    }

  }


  const onSubmitHandler = async (e) => {
    
    e.preventDefault()

    
    try {
    //   const formData = new FormData()
     


    //   formData.append("title", title)
    //   formData.append("content", content)
    //   formData.append("category", category)
    //   formData.append("summary", summary)
    //   formData.append("published", published)
    //   formData.append("author", author)
      
      const {data} = await axios.put(backendUrl + "/api/blog/updateblog", {id, title, content, category, summary, published, author}, {headers : {token}})
       if(data.success){
        toast.success(data.message)
       }else{
        toast.error(data.message)
       }

       setTitle("")
       setAuthor("")
       setContent("")
       setCategory("")
       setSummary("")
       setPublished(false)

       navigate('/allblogs')

    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }


  } 

  useEffect(() => {
   fetchBlogUpdate()
  }, [id])

  return (
    <>
      <main >

      {/* upload image */}
      <form onSubmit={onSubmitHandler}>
        <div>
          <p className='mb-5 uppercase text-sm text-gray-500 font-medium'>Update Blog</p>


        </div>


        <div className='flex flex-col gap-2 mt-10'>
          <p className='text-sm uppercase text-gray-500'>Blog Title</p>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter title here' className='outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full'/>
        </div>

          <div className='flex flex-col gap-2 mt-10'>
          <p className='text-sm uppercase text-gray-500'>Blog Content</p>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder='Enter content here' className='outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full' rows={5} cols={5}> </textarea>
        </div>

          <div className='flex flex-col gap-2 mt-10'>
          <p className='text-sm uppercase text-gray-500'>Author's name</p>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='Enter author"s name' className='outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full'/>
        </div>

        <div className='flex flex-col gap-2 mt-10'>
          <p className='text-sm uppercase text-gray-500'>Category</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)} name="" id="" className='w-full outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md'>
            <option value="" disabled>Category</option>
            <option value="type1 diabetes">Type 1</option>
            <option value="type2 diabetes">Type 2</option>
          </select>
        </div>

          <div className='flex flex-col gap-2 mt-10'>
          <p className='text-sm uppercase text-gray-500'>Blog Summary</p>
          <textarea value={summary} onChange={(e) => setSummary(e.target.value)} type="text" placeholder='Enter summary here' className='outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full' rows={5} cols={5}> </textarea>
        </div>

        <div className='flex items-center gap-2 mt-10'>
            <input value={published} onChange={() => setPublished(prev => !prev)} type="checkbox" id='published' className='w-[30px]'/>
          <label htmlFor="published" className='text-sm uppercase text-gray-500'>
            Published
          </label>
        </div>
      
      <button type='submit' className='uppercase text-sm bg-gray-500  text-white mt-5 px-6 py-3'>Update Blog</button>
     </form>

      </main>
    </>
  )
}

export default UpdateBlog
