const Cell = require("./cell")

class Board{
    constructor(cells){
        this.cells = cells
        this.status = 9
    }
    static setBoard(){
        let cells = []
        for (let index = 0; index < 9; index++) {
            cells[index] = Cell.setCell()
        }
        return new Board(cells)
    }
    getCells(){
        return this.cells
    }
    isFull(){
        if(this.status < 1){
            return true
        }
        return false
    }
    displayBoard(){
        console.log("------------");
        console.log(`| ${this.cells[0].mark} | ${this.cells[1].mark} | ${this.cells[2].mark} |`);
        console.log(`| ${this.cells[3].mark} | ${this.cells[4].mark} | ${this.cells[5].mark} |`);
        console.log(`| ${this.cells[6].mark} | ${this.cells[7].mark} | ${this.cells[8].mark} |`);
        console.log("------------");
    }

    resultAnalyser(){
        let winningConditions = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]
        for (let condition of winningConditions) {
            let a = condition[0], b = condition[1],  c = condition[2]
            if(this.cells[a].isMarked() && this.cells[a].mark === this.cells[b].mark && this.cells[a].mark === this.cells[c].mark){
                return [this.cells[a].mark, "win"]
            }
        }
        if(this.isFull()
        ){
            return ["z", "draw"]
        }
        return ["z", "continue"]
    }

}
module.exports = Board