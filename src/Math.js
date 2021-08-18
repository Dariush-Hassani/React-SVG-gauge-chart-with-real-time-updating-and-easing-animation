const convertToRadian = (x) => {
  return (x * Math.PI) / 180;
};
export const drawArcSvg = (
  centerPoint,
  radius,
  nPoints,
  startAngle,
  endAngle
) => {
  let step = (endAngle - startAngle) / nPoints;
  let firstX = -radius * Math.cos(convertToRadian(startAngle)) + centerPoint.x;
  let fristY = -radius * Math.sin(convertToRadian(startAngle)) + centerPoint.y;
  let path = "M" + firstX.toString() + " " + fristY.toString() + " ";
  for (let theta = startAngle + step; theta <= endAngle; theta += step) {
    let x = -radius * Math.cos(convertToRadian(theta)) + centerPoint.x;
    let y = -radius * Math.sin(convertToRadian(theta)) + centerPoint.y;
    path += "L" + x + " " + y + " ";
  }
  return path;
};
