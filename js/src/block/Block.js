import { setColor } from "./blockSettings.js";

class Block {
  constructor(color, x, y, width, height) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  drawRight(ctx) {
    // Right
    const rightX = this.x + (this.width) ;
    const rightY = this.y + (this.height / 2);
    ctx.save();
    ctx.beginPath();
    // AA'
    ctx.moveTo(rightX, rightY);
    // A'B'
    ctx.lineTo(rightX, rightY + this.height);
    // B'B
    ctx.lineTo(rightX - this.width, rightY + 3 * this.height/2);
    // BA
    ctx.lineTo(rightX - this.width, rightY + this.height/2);
    ctx.closePath();
    //colors
    ctx.fillStyle = setColor(this.color, "right");
    ctx.fill();
    // ctx.stroke();

    ctx.restore();
  }

  drawLeft(ctx) {
    //Left
    const leftX = this.x;
    const leftY = this.y + this.height;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(leftX, leftY);
    // BB'
    ctx.lineTo(leftX, leftY + this.height);
    // B'C'
    ctx.lineTo(leftX - this.width, leftY + this.height / 2);
    // C'C
    ctx.lineTo(leftX - this.width, leftY - this.height / 2);
    ctx.closePath();
    ctx.fillStyle = setColor(this.color, "left");
    ctx.fill();
    // ctx.stroke();

    ctx.restore();
  }
}

export default Block;
