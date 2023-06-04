const express = require('express');
const router = express.Router();
const {getAllMovies, addaMovie, getMovieById, updateMovie, deleteMovie, getMovie} = require('../controllers/movies')


router.route('/').get(getAllMovies).post(addaMovie);

router.route('/:id').get(getMovie,getMovieById).patch(getMovie,updateMovie).delete(getMovie,deleteMovie);

module.exports = router;