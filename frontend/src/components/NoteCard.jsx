import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import formatDate from "../lib/utils.js"
import api from "../lib/axios.js"
import toast from 'react-hot-toast'

const NoteCard = ({ note, setNotes }) => {
    const handleDelete = async (e, id) => {
        e.preventDefault()

        if (!window.confirm("Are you sure u want to delete this note ?")) return
        try {
            await api.delete(`/notes/${id}`)
            setNotes((prev) => prev.filter((note) => note._id !== id))
            toast.success("Notes Deleted successfully")

        } catch (error) {
            toast.error("failed to delete the note")
        }
    }
    return (
        <Link to={`/note/${note._id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-sky-500' >
            <div className='card-body'>
                <h3>{note.title}</h3>
                <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
                <div className='card-actions flex justify-between items-center mt-4'>
                    <span className='text-sm text-base-content/60 '>{formatDate(note.createdAt)}</span>
                    <div className='flex items-center gap-1'>
                        <PenSquareIcon className='size-4' />
                        <button onClick={(e) => handleDelete(e, note._id)} className='btn btn-ghost btn-xs text-error'>
                            <Trash2Icon className='size-4' />
                        </button>

                    </div>
                </div>
            </div>

        </Link>
    )
}

export default NoteCard
