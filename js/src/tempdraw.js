
    // // draw tiles
    // tileMap.forEach((tile) => {
    //   const currentTile = mappingTile(
    //     tile,
    //     this.blockWidth,
    //     this.blockHeight,
    //     this.gridSize
    //   );
    //   currentTile.draw(ctx);
    // });

    // // draw borders
    // blockMap.forEach((block) => {
    //   const currentBlock = mappingBlock(
    //     block,
    //     this.blockWidth,
    //     this.blockHeight,
    //     this.gridSize
    //   );
    //   // draw closest border block
    //   if ((block.x === 0) & (block.y === 11)) {
    //     return currentBlock.drawLeft(ctx), currentBlock.drawRight(ctx);
    //   }
    //   // draw left border block
    //   if (block.x === 0) return currentBlock.drawLeft(ctx);
    //   // draw right border block
    //   if (block.y === 11) return currentBlock.drawRight(ctx);
    // });

    // draw right block
    blockMap.forEach((block) => {
        const currentBlock = mappingBlock(
          block,
          this.blockWidth,
          this.blockHeight,
          this.gridSize
        );
        currentBlock.drawRight(ctx);
      });
  
      // draw Top tiles
      topTileMap.forEach((tile) => {
        const currentTile = mappingTile(
          tile,
          this.blockWidth,
          this.blockHeight,
          this.gridSize
        );
        currentTile.draw(ctx);
      });
  
      // // draw left block
      // blockMap.forEach((block) => {
      //   const currentBlock = mappingBlock(
      //     block,
      //     this.blockWidth,
      //     this.blockHeight,
      //     this.gridSize
      //   );
      //   currentBlock.drawLeft(ctx);
      // });