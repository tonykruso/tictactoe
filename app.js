let board = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

let p1Counter = 1;
let p2Counter = 2;

class Player {
    constructor(){
        this.isTurn = false;
        this.win = false;
    }
}

class Space {
    constructor(id) {
        this.played = false;
        this.id = id;
    }

    addSymbolX(space) {
        $(space).append("<div class='x'>X</div>");
    }

    addSymbolO(space) {
        $(space).append("<div class='0'>O</div>");
    }
}