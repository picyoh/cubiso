function setColor(color, pos) {

    const light = [50, 62, 35];
    let currentLight;
  
    if (pos === "top") {
      currentLight = light[0];
    }
    if (pos === "left") {
      currentLight = light[1];
    }
    if (pos === "right") {
      currentLight = light[2];
    }
  
    const currentColor =
      "hsl(" +
      color[0] +
      "," +
      color[1] +
      "%," +
      currentLight +
      "%)";
    // console.log(currentColor);
    return currentColor;
  }

  export { setColor }