import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to make a move", () => {
    const game = new Game();
    game.onClick(0);
    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("both players should be able to make moves", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(2);
    game.onClick(5);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      "X",
      "-",
      "O",
      "-",
      "-",
      "X",
      "-",
      "-",
      "O",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should not be allowed to overwrite cell", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to win by placing symbols in the first row", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(5);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X",
      "X",
      "X",
      "-",
      "O",
      "O",
      "-",
      "-",
      "-",
    ]);
    expect(game.getWinner()).toBe("X");
  });
  it("should be able to win by placing symbols in the third row", () => {
    const game = new Game();
    game.onClick(6);
    game.onClick(4);
    game.onClick(7);
    game.onClick(5);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "O",
      "O",
      "X",
      "X",
      "X",
    ]);
    expect(game.getWinner()).toBe("X");
  });

  it("should be able to win by placing symbols in the first column", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(3);
    game.onClick(2);
    game.onClick(6);

    expect(game.getCells()).toEqual([
      "X",
      "O",
      "O",
      "X",
      "-",
      "-",
      "X",
      "-",
      "-",
    ]);
    expect(game.getWinner()).toBe("X");
  });

  it("should be able to win by placing symbols in the diagonal (right to left)", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      "X",
      "O",
      "O",
      "-",
      "X",
      "-",
      "-",
      "-",
      "X",
    ]);
    expect(game.getWinner()).toBe("X");
  });

  it("should be able to win by placing symbols in the diagonal (left to right)", () => {
    const game = new Game();
    game.onClick(2);
    game.onClick(1);
    game.onClick(4);
    game.onClick(3);
    game.onClick(6);

    expect(game.getCells()).toEqual([
      "-",
      "O",
      "X",
      "O",
      "X",
      "-",
      "X",
      "-",
      "-",
    ]);
    expect(game.getWinner()).toBe("X");
  });

  it("should be tie if there are no free cells and there is no winner", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    game.onClick(5);
    game.onClick(4);
    game.onClick(8);
    game.onClick(7);
    game.onClick(6);
    game.onClick(3);

    expect(game.getCells()).toEqual([
      "X",
      "O",
      "X",
      "X",
      "X",
      "O",
      "O",
      "X",
      "O",
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });

  it("should not be allowed to place symbols in empty cells if there is a winner", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(5);
    game.onClick(2);
    game.onClick(3);

    expect(game.getCells()).toEqual([
      "X",
      "X",
      "X",
      "-",
      "O",
      "O",
      "-",
      "-",
      "-",
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should restart game if there is tie and there is no winner", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    game.onClick(5);
    game.onClick(4);
    game.onClick(8);
    game.onClick(7);
    game.onClick(6);
    game.onClick(3);

    expect(game.getCells()).toEqual([
      "X",
      "O",
      "X",
      "X",
      "X",
      "O",
      "O",
      "X",
      "O",
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
    expect(game.restart());
  });
});
