import { world_config } from "./GameComponents/config";
import GameController from "./GameOfLife/GameController";
let num_rows = Math.ceil(window.innerHeight / world_config.height);
let num_cols = Math.ceil(window.innerWidth / world_config.width);
let game_controller = new GameController(num_rows, num_cols);

export default game_controller;
