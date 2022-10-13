class Game {
  test: number;

  constructor() {
    this.test = 0;
  }

  init = (): void => {
    console.log("Game init");
    console.log(this.test);
  };
}

export default Game;

// const game = new Game();
// game.init();
