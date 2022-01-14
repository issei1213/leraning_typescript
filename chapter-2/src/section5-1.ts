type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7| 8

// チェスのゲームを表す
class Game {
    private pices = Game.makePieces()

    private static makePieces() {
        return [
            // キング
            new King('White', "E", 1),
            new King('White', "E", 8),

            // クイーン
            new Queen('White', "D", 1),
            new Queen('Black', "D", 8),

            // ビショップ
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8)

        ]
    }
}

// 駒の位置(座標)
// tslint:disable-next-line:max-classes-per-file
class Position {
    constructor(
        private file: File,
        private rank: Rank
    ) {}

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

// チェスの駒
// tslint:disable-next-line:max-classes-per-file
abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        file: File,
        rank: Rank
    ) {
        this.position = new Position(file, rank)
    }
    moveTo(position: Position) {
        this.position = position
    }
    abstract canMoveTo(position: Position): boolean
}


// キング
// tslint:disable-next-line:max-classes-per-file
class King extends Piece {
    canMoveTo(position: Position): boolean {
        const distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

// クイーン
// tslint:disable-next-line:max-classes-per-file
class Queen extends Piece {
    canMoveTo(position: Position): boolean {
        const distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

// ビショップ
// tslint:disable-next-line:max-classes-per-file
class Bishop extends Piece {
    canMoveTo(position: Position): boolean {
        const distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

console.log(new Game())
/**
 * Game {
  pices: [
    King { color: 'White', position: [Position] },
    King { color: 'White', position: [Position] },
    Queen { color: 'White', position: [Position] },
    Queen { color: 'Black', position: [Position] },
    Bishop { color: 'White', position: [Position] },
    Bishop { color: 'White', position: [Position] },
    Bishop { color: 'Black', position: [Position] },
    Bishop { color: 'Black', position: [Position] }
  ]
}

 */