const team = {
  
	_players: [{firstName: "David", lastName: "Beckham", age: 43}, 									{firstName: "Lionel", lastName: "Messi", age: 30}, 
						{firstName: "Cristiano", lastName: "Ronaldo", age: 33}],
  
  _games: [{opponent: "France", teamPoints: 52, opponentPoints:10},
          {opponent: "Germany", teamPoints: 31, opponentPoints:32},
          {opponent: "Italy", teamPoints: 17, opponentPoints:27}],
  
  get games() {
    return this._games},
  
  get players() {
    return this._players},
  
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age}
    this.players.push(player)
    },
  
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints}
    this.games.push(game)
  }
  
};

team.addPlayer("Steph", "Curry", 28)
team.addPlayer("Lisa", "Leslie", 44)
team.addPlayer("Bugs", "Bunny", 76)

console.log(team.players)

team.addGame("Australia", 100, 98)
team.addGame("Thailand", 1, 8)
team.addGame("Japan", 10, 9)

console.log(team.games)