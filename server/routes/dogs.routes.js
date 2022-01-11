import express from 'express';

import {
  deleteDog,
  getDogs,
  postDog,
  updateDog,
} from '../controllers/dogs.controller.js';

const router = express.Router();

router.get('/dogs', getDogs);
router.post('/dogs', postDog);
router.put('/dogs/:dogId', updateDog);
router.delete('/dogs/:dogId', deleteDog);

export default router;