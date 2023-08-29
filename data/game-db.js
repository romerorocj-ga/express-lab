const games = [
    {game: 'The Last Of Us', done: true},
    {game: 'God Of War', done: false},
    {game: 'Jedi Survior', done: false}
  ];

  module.exports = {
    getAll: function() {
        return games
    }
  }