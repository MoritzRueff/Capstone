import Dog from '../models/dog.model.js';

const getDogs = async (req, res) => {
  const dogs = await Dog.find();
  res.json(dogs);
};

const postDog = async (req, res) => {
  const dog = new Dog({
    name: req.body.name, 
    breed: req.body.breed,
    age: req.body.age,
    gender: req.body.gender,
    location: req.body.location,
    compatibility: req.body.compatibility
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
    compatibility: req.body.compatibility
  };

  // TODO: add try catch around this operation
  const result = await Dog.findByIdAndUpdate(dogId, DogData, {
    returnDocument: 'after',
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

export { deleteDog, getDogs, postDog, updateDog};