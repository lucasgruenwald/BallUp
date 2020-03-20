import axios from 'axios';

export const createGame = (game) => {
  return axios.post('/api/games/creategame', game)
};

export const getGames = () => {
  return axios.get('/api/games/')
};

export const getGame = gameId => {
  return axios.get(`/api/games/${gameId}`)
};

export const updateGame = game => {
  return axios.patch(`/api/games/${game._id}`, game)
}

export const deleteGame = game => {
  debugger
  return axios.patch(`/api/games/${game}`)
};

