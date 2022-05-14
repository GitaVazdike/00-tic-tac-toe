export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    const countEmptyCells: number = this.cells.filter((cell) => cell === "-")
      .length;
    return countEmptyCells % 2 === 0 ? "O" : "X";
  }

  getWinner(): XO {
    const winningPositions: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const position of winningPositions) {
      if (
        this.cells[position[0]] === this.cells[position[1]] &&
        this.cells[position[1]] === this.cells[position[2]] &&
        this.cells[position[0]] !== "-"
      ) {
        return this.cells[position[0]];
      }
    }
    return "-";
  }

  isTie(): boolean {
    if (this.cells.includes("-")) {
      return false;
    }
    if (this.getWinner() !== "-") {
      return false;
    }
    return true;
  }

  onClick(i: number): void {
    if (this.cells[i] === "-" && this.getWinner() === "-") {
      this.cells[i] = this.getTurn();
    }
    console.log(`cell ${i} clicked`);
  }

  restart(): void {
    if (this.getWinner() !== "-" || this.isTie()) {
      this.cells.fill("-");
    }
    console.log("restart called");
  }
}
