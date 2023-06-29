const Board = require("./board")
const Player = require("./player")

class Game{
    constructor(players, board, turn){
        this.players = players
        this.board = board
        this.turn = turn
        this.isGameActive = true
    }
    static setGame(player1Name, player2Name){
        let players = [Player.setPlayer(player1Name, "X"),Player.setPlayer(player2Name, "O")]
        let board = Board.setBoard()
        let turn = 0
        return new Game(players, board, turn)
    }

    play(cellNo){
        if(!this.isGameActive){
            return "Game has Ended"
        }
        let isCellMarked = this.board.cells[cellNo].isMarked()
        if(isCellMarked){
            return "CellNo Is Already Marked"
        }
        let currentPlayer = this.players[this.turn % 2]
        currentPlayer.markCell(this.board.cells[cellNo])
        this.board.status--
        this.turn += 1

        let [symbol, status] = this.board.resultAnalyser()
        if(status === "win"){
            this.isGameActive = false
            if(symbol === this.players[0].symbol){
                this.board.displayBoard()
                return `${this.players[0].name} Won`
            }
            return `${this.players[1].name} Won`
        }
        else if (status === "draw"){
            this.board.displayBoard()
            this.isGameActive = false
            return `It is Draw`
        }
        return "Game Continues"
    }
    resetGame(){
        this.board = Board.setBoard()
        this.turn = 0
        this.isGameActive = true
        console.log("game reset");
        this.board.displayBoard()
    }
}
module.exports= Game