class GameGridUIHandlers {
  handleOnCellClicked(i, j) {
    this.props.onCellClicked(i, j);
  }
}

let game_grid_ui_handlers = new GameGridUIHandlers();
export default game_grid_ui_handlers;
