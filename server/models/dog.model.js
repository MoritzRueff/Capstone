import mongoose from "mongoose";

const dogScheme = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  gender: String,
  /* size: String, */
  image: String,
  location: String,
});

const Dog = mongoose.model("Dog", dogScheme);

export default Dog;
