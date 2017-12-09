const team = {
  _players: [
    {firstName: "Pablo", lastName:"Sanchez", age: 11},
    {firstName: "Yaya", lastName: "Toure", age: 32},
    {firstName: "kolo", lastName: "Toure", age: 34}
  ],
  _games: [
    {opponent: "Broncos", teamPoints: 42, opponentPoints: 27},
    {opponent: "Falcons", teamPoints: 42, opponentPoints: 27},
    {opponent: "Saints", teamPoints: 42, opponentPoints: 27}
  ],
  
  get players() {
  return this._players;
},
  get games() {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    team.players.push(player);
  },
  
    addGame(Opponent, HomePoints, OPpoints) {
    let game = {
      Opponent: Opponent,
      HomePoints: HomePoints,
      OPpoints: OPpoints
    };
    team.games.push(game);
  },
};



team.addPlayer("Steph", "Curry" , "28");
console.log(team.players);
