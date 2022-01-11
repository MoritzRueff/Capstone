import mongoose  from "mongoose";

const dogScheme = new mongoose.Schema( {
    name: String,
    breed: String,
    age: Number,
    gender: String,
    location: String,
    compatibility: String
} )

const Dog = mongoose.model('Dog', dogScheme)

export default Dog