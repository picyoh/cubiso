import { setColor } from "../block/blockSettings.js";

class Tile {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();

    // Top block
    ctx.moveTo(this.x, this.y);
    // OA
    ctx.lineTo(this.x + this.width, this.y + this.height / 2);
    // AB
    ctx.lineTo(this.x, this.y + this.height);
    // BC
    ctx.lineTo(this.x - this.width, this.y + this.height / 2);
    // CO
    ctx.closePath();

    //colors
    ctx.fillStyle = setColor(this.color, "top");
    ctx.fill();
    // ctx.stroke();
    ctx.restore();
  }
}

export default Tile;
