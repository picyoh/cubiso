import Block from './Block.js'
import toIso from '../calc/toIso.js';

function mappingBlock(block, blockWidth, blockHeight, gridSize) {
  // params
  const posX = block.x;
  const posY = block.y;
  const posZ = block.z;
  const color = block.color;
  // block to Iso
  const calcIso = toIso(posX, posY, posZ, blockWidth, blockHeight, gridSize);
  const xIso = calcIso.xIso;
  const yIso = calcIso.yIso;
  // create block
  const currentBlock = new Block(color, xIso, yIso, blockWidth, blockHeight);
  return currentBlock;
}

export { mappingBlock };
