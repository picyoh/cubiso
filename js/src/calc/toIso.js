function toIso(x, y, posZ, blockWidth, blockHeight, gridSize) {
  let xIso;
  let yIso;
  // recalculating x&y
  if (posZ > 0) {
    xIso = (x + posZ) * blockWidth + (y - posZ) * blockWidth + 2 * blockWidth;
    yIso = ((y - posZ) * blockHeight - (x + posZ) * blockHeight + gridSize) / 2;
  } else {
    // adapt x&y to Iso
    xIso = x * blockWidth + y * blockWidth + 2 * blockWidth;
    yIso = (y * blockHeight - x * blockHeight + gridSize) / 2;
  }
  return { xIso, yIso };
}

export default toIso;
