export default {
  base: "#33333e",
  primary: "#363740",
  primaryText: "#ffffff",
  secundaryText: "#5dc8ab"
};

export function lighten(col, amt) {
  return lightenDarkenColor(col, amt);
}

export function darken(col, amt) {
  return lightenDarkenColor(col, -amt);
}

export function opacity(hex, opc) {
  hex = hex.replace("#", "");
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  result = "rgba(" + "00" + "," + "00" + "," + "00" + "," + opc / 100 + ")";
  return result;
}

function lightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
