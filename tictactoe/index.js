const Game = require("./game")

try {
    const game = Game.setGame("Praveen", "Pavan")
    console.log(game.play(5))
    console.log(game.play(1))
    console.log(game.play(4))
    console.log(game.play(3))
    console.log(game.play(2))
    game.resetGame()
    console.log(game.play(7))
    console.log(game.play(8))
    console.log(game.play(6))
    console.log(game.play(0))
    console.log(game.play(5))
    console.log(game.play(1))
    console.log(game.play(4))
    console.log(game.play(3))
    console.log(game.play(2))

} catch (error) {
    console.log(error.message)
}