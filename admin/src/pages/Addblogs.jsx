import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Admincontext } from '../context/Admincontext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Addblogs = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [summary, setSummary] = useState("")
  const [author, setAuthor] = useState("")
  const [category, setCategory] = useState("")
  const [published, setPublished] = useState(false)
  const [loading, setLoading] = useState(false)

  const {backendUrl} = useContext(Admincontext)

  const onSubmitHandler = async (e) => {
    
    setLoading(true)
    e.preventDefault()

    
    try {
      const formData = new FormData()

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      formData.append("title", title)
      formData.append("content", content)
      formData.append("category", category)
      formData.append("summary", summary)
      formData.append("published", published)
      formData.append("author", author)
      
      const {data} = await axios.post(backendUrl + "/api/blog/add", formData, {headers: {token}})
       if(data.success){
        setLoading(false)
        toast.success(data.message)
       }
       
       setImage1(false)
       setImage2(false)
       setImage3(false)
       setImage4(false)
       setTitle("")
       setAuthor("")
       setContent("")
       setCategory("")
       setSummary("")
       setPublished(false)

    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }


  } 

  if(loading){
      return (
            <div className="fixed top-0 left-0 w-full h-full z-50 grid place-items-center bg-[#EFFBFF]/70 backdrop-blur-md">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={assets.loading} 
                  alt="Loading..."
                  className="w-20 h-20 animate-spin"
                />
              </div>
            </div>
      )
    }

  return (
    <>
      <main >

      {/* upload image */}
      <form onSubmit={onSubmitHandler}>
        <div>
          <p className='mb-5 uppercase text-sm text-gray-500 font-medium'>Upload Image</p>

          <div className='grid grid-cols-2 sm:grid-cols-4 flex-wrap md:w-[600px] w-full gap-5'>
            <label className='' htmlFor="image1">
              <img className='sm:w-30 w-full' src={!image1 ? assets.upload_area : URL.createObjectURL(image1) } alt="" />
              <input type="file" hidden id='image1' onChange={(e) => setImage1(e.target.files[0])} />
              <p className='mt-2 text-[12px] text-gray-500 uppercase'>Blog image 1</p>
            </label>

              <label className='' htmlFor="image2">
              <img className='sm:w-30 w-full' src={!image2 ? assets.upload_area : URL.createObjectURL(image2) } alt="" />
              <input type="file" hidden id='image2' onChange={(e) => setImage2(e.target.files[0])} />
              <p className='mt-2 text-[12px] text-gray-500 uppercase'>Blog image 2</p>
            </label>


              <label className='' htmlFor="image3">
              <img className='sm:w-30 w-full' src={!image3 ? assets.upload_area : URL.createObjectURL(image3) } alt="" />
              <input type="file" hidden id='image3' onChange={(e) => setImage3(e.target.files[0])} />
              <p className='mt-2 text-[12px] text-gray-500 uppercase'>Author Image 1</p>
            </label>

              <label className='' htmlFor="image4">
              <img className='sm:w-30 w-full' src={!image4 ? assets.upload_area : URL.createObjectURL(image4) } alt="" />
              <input type="file" hidden id='image4' onChange={(e) => setImage4(e.target.files[0])} />
              <p className='mt-2 text-[12px] text-gray-500 uppercase'>Author Image 2</p>
            </label>
          </div>
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
      
      <button type='submit' className='uppercase text-sm bg-gray-500  text-white mt-5 px-6 py-3'>Add blog</button>
     </form>

      </main>
    </>
  )
}

export default Addblogs
