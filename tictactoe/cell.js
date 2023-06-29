class Cell{
    constructor(symbol){
        this.mark = symbol
    }
    static setCell(){
        return new Cell("z")
    }
    isMarked(){
        return this.mark != "z"
    }
    setMark(symbol){
        this.mark = symbol
    }
}
module.exports = Cell