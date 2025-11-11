import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import RateLimiterUI from '../components/RateLimiterUI'
import { useEffect } from 'react'
import axios from "axios"
import toast from "react-hot-toast"
import NoteCard from '../components/NoteCard'


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes")
        console.log(res.data)
        setNotes(res.data)

      } catch (error) {
        console.log("Error in fetching Notes ", error)
        if (error.response.status === 429) {
          setIsRateLimited(true)
        } else {
          toast.error("Failed to Load Notes")
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchNotes()
  }, [])
  return (
    <div data-theme="night" className='min-h-screen'>
      <NavBar />
      {isRateLimited && <RateLimiterUI />}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        { isLoading && <div className='text-3xl text-primary text-center'> Loading.. </div>}

        {notes.length >0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map((note)=>(
              <NoteCard key={note._id} note={note}/>
            ))}
          </div>
        )}
      </div>
    </div>
  
  )
}

export default HomePage
