import mongoose, { mongo } from "mongoose"
 // 1st : we have to create a schema 
 // 2nd : then a model based off that schema

const noteSchema = new mongoose.Schema({
    title : {
        type : String,
        required  : true
    },
    content : {
        type : String,
        required : true
    },
},{
    timestamps :true  //mongodb automatically add created At and Updated At
})

const Note = mongoose.model("Note",noteSchema)

export default Note