import Tile from "../tiles/Tile.js";
import Block from "../block/Block.js";
import toIso from "../calc/toIso.js";
import { mappingBlock } from "../block/mappingBlock.js";
import { mappingTile } from "../tiles/mappingTile.js";

class IsoMap {
  constructor(gridSize, map) {
    this.gridSize = gridSize;
    this.blockWidth = gridSize / 26;
    this.blockHeight = this.blockWidth / 2;
    this.map = map;
    this.hslColor = [
      [16, 100],
      [0, 0],
      [80, 60],
    ];
  }
  // TODO: ajouter top tile que si il n'existe pas dans tileMap
  // TODO: retirer tile cachées dans tileMap
  draw(ctx) {
    // maps to draw
    let leftTileMap = [];
    let rightTileMap = [];
    let tileMap = [];
    // filter blocks & tiles
    this.map.forEach((row, y) => {
      row.forEach((params, x) => {
        // parameters
        const posZ = params.z;
        const color = this.hslColor[params.type];
        const maxArrayLength = 11;
        // borders
        if (x === 0 && y === maxArrayLength) {
          return (
            leftTileMap.push({ x, y, z: posZ, color }),
            rightTileMap.push({ x, y, z: posZ, color }),
            tileMap.push({ x, y, z: posZ, color })
          );
        }
        // left border
        if (x === 0) {
          return (
            leftTileMap.push({ x, y, z: posZ, color }),
            tileMap.push({ x, y, z: posZ, color })
          );
        }
        // right border
        if (y === maxArrayLength) {
          return (
            rightTileMap.push({ x, y, z: posZ, color }),
            tileMap.push({ x, y, z: posZ, color })
          );
        }
        //check isBlock
        if (posZ > 0) {
          // adjacents tiles or blocks
          const map = this.map;
          const leftTileZ = map[y][x - 1].z;
          const rightTileZ = map[y + 1][x].z;
          const tileAheadZ = map[y + 1][x - 1].z;

          //push top position on tileMap
          tileMap.push({ x, y, z: posZ, color });

          for (let i = 0; i < posZ; i++) {
            const newZ = posZ - i;
            const newX = x - newZ;
            const newY = y + newZ;
            tileMap.filter((tile) => {
              if (tile.x === newX && tile.y === newY) {
                console.log(tile);
              }
            });
            // left case
            if (leftTileZ < newZ) {
              leftTileMap.push({ x, y, z: newZ, color });
            }
            // right case
            if (rightTileZ < newZ) {
              rightTileMap.push({ x, y, z: newZ, color });
            }
          }
        }
        // tile case
        tileMap.push({ x, y, z: posZ, color });
      });
    });
    console.log(tileMap);
    // draw Top tiles
    tileMap.forEach((tile) => {
      const currentTile = mappingTile(
        tile,
        this.blockWidth,
        this.blockHeight,
        this.gridSize
      );
      currentTile.draw(ctx);
    });
    // draw right block
    rightTileMap.forEach((block) => {
      const currentBlock = mappingBlock(
        block,
        this.blockWidth,
        this.blockHeight,
        this.gridSize
      );
      currentBlock.drawRight(ctx);
    });

    // draw left block
    leftTileMap.forEach((block) => {
      const currentBlock = mappingBlock(
        block,
        this.blockWidth,
        this.blockHeight,
        this.gridSize
      );
      currentBlock.drawLeft(ctx);
    });
  }

  displayHitbox(ctx, x, y, w, h) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.restore();
  }
}

export default IsoMap;
