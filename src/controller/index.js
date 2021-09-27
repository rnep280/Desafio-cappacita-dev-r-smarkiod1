const axios = require('axios');
const {env} = require('../common/constants');


async function popularMovies(req, res){

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: {api_key: env.key, language: 'pt-BR', page: '1'}
    };
      
    axios.request(options).then(function (response) {
        return res.status(response.status).json({
            statusCode: response.status,
            result: response.data
        });
    }).catch(function (error) {
        return res.status(response.status).json({
            statusCode: response.status,
            error
        });
    });
}

async function movies(req, res){

    const {id} = req.query;

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/'+id,
        params: {api_key: env.key, language: 'pt-BR'}
    };

    axios.request(options).then(function (response) {
        return res.status(response.status).json({
            statusCode: response.status,
            result: response.data
        });
    }).catch(function (error) {
        return res.status(response.status).json({
            statusCode: response.status,
            error
        });
    });
}

module.exports = {
    popularMovies,
    movies
}