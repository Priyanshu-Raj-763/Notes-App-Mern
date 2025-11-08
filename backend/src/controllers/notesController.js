
 export const getAllNotes = (req,res)=>{
    res.status(200).send("you got 20 notes")
}

export const createNotes = (req,res)=>{
    res.status(201).json({message:"Notes Created Successfully"})
}

export const updateNotes = (req,res)=>{
    res.status(201).json({message:"Notes Updated Successfully"})
}

export const deleteNotes = (req,res)=>{
    res.status(201).json({message:"Notes Deleted Successfully"})
}