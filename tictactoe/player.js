class Player{
    constructor(name, symbol){
        this.name = name
        this.symbol = symbol
    }
    static setPlayer(name, symbol){
        return new Player(name, symbol)
    }
    markCell(cell){
        cell.setMark(this.symbol)
    }
}
module.exports = Player