// parameters
const posZ = params.z;
const color = this.hslColor[params.type];
const maxArrayLength = 11;
//check isBlock
if (posZ > 0) {
  //push top position on tileMap
  TileMap.push({ x, y, z: posZ, color });

  // push beneath tiles positions into blockMap
  for (let i = 0; i < posZ; i++) {
    const newZ = posZ - i;
    const newX = x - newZ;
    const newY = y + newZ;
    blockMap.push({ x, y, z: newZ, color });
    // remove hidden tiles
    // tileMap.filter((tile, index) => {
    //   console.log({x: tile.x, newX, y: tile.y, newY, index})
    //   if((tile.x === newX)){
    //     console.log(true)
    //   }
    // })
    antiTileMap.push({ x: newX, y: newY });
  }
}
// TODO: set xBorder & yBorder var for orientation
// border blocks
if (x === 0 || y === maxArrayLength) {
    blockMap.push({ x, y, z: posZ, color }),
    tileMap.push({ x, y, z: posZ, color })
}
// tile case
const map = this.map;
const leftTileZ = map[y][x - 1].z;
const rightTileZ = map[y + 1][x].z;
const tileAheadZ = map[y + 1][x - 1].z;
console.log(tileAheadZ <= posZ, tileAheadZ, posZ);
// push to tileMap when other cases not match
tileMap.push({ x, y, z: posZ, color: color });
// setHitbox(ctx, xIso - this.blockWidth / 2, yIso, this.blockWidth, this.blockHeight);