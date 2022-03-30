import Tile from "./Tile.js";
import toIso from "../calc/toIso.js";

function mappingTile(tile, blockWidth, blockHeight, gridSize) {
  // params
  const posX = tile.x;
  const posY = tile.y;
  const posZ = tile.z;
  const color = tile.color;
  // tile to Iso
  const calcIso = toIso(posX, posY, posZ, blockWidth, blockHeight, gridSize);
  const xIso = calcIso.xIso;
  const yIso = calcIso.yIso;
  // create Tile
  const currentTile = new Tile(xIso, yIso, blockWidth, blockHeight, color);
  return currentTile;
}

export { mappingTile };
