import Dog from "../models/dog.model.js";

const getAllDog = async (req, res) => {
  const dog = await Dog.find();

  res.json(dog);
};

const getDog = async (req, res) => {
  const dogId = req.params.dogId;
  const foundDog = await Dog.findById(dogId);
  res.json(foundDog);
};

const postDog = async (req, res) => {
  const dog = new Dog({
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age,
    gender: req.body.gender,
    location: req.body.location,
    image: req.body.image,
  });

  try {
    const result = await dog.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const updateDog = async (req, res) => {
  const dogId = req.params.dogId;

  const DogData = {
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age,
    gender: req.body.gender,
    location: req.body.location,
    image: req.body.image,
  };

  const result = await Dog.findByIdAndUpdate(dogId, DogData, {
    returnDocument: "after",
  });

  res.json(result);
};

const deleteDog = async (req, res) => {
  const dogId = req.params.dogId;

  try {
    const result = await Dog.findByIdAndDelete(dogId);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export { getAllDog, deleteDog, getDog, postDog, updateDog };
