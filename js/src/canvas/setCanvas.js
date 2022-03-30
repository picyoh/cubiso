import map12z from '../../mockData/mapDatas/map12z.js';

import IsoMap from '../map/createMap.js'

function createGrid() {
  // get root
  const root = document.querySelector("#root");
  // create & append container
  const canvasContainer = document.createElement("div");
  canvasContainer.className = "canvasContainer";
  root.appendChild(canvasContainer);
  // create & set canvas
  const canvas = document.createElement("canvas");
  canvas.id = "grid";
  canvas.width = canvasContainer.offsetWidth;
  canvas.height = canvasContainer.offsetHeight;
  const ctx = canvas.getContext("2d");
  // get gridsize from canvas
  const gridSize = canvas.width;
  // draw iso map 
  const isoMap = new IsoMap(gridSize, map12z);
  isoMap.draw(ctx)
  // append canvas
  canvasContainer.appendChild(canvas);
  console.log("canvas grid");
}

export {
  createGrid
}
