import express from "express"
import { createNotes, deleteNotes, getAllNotes, updateNotes } from "../controllers/notesController"

const router = express.Router()

router.get("/",getAllNotes)

router.post("/",createNotes)
router.put("/:id",updateNotes)
router.delete("/:id",deleteNotes)

export default router