import gc from "../../game_config";

class CellUIHandlers {
  handleOnClick(c) {
    gc.toggle(this.props.row, this.props.col);
  }
}

let cell_ui_handlers = new CellUIHandlers();
export default cell_ui_handlers;
