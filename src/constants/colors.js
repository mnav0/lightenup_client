const Colors = {
  background: "#FFF3E0",
  text: "#003D52",
  14: "#719680",
  4: "#B2D3ED",
  34: "#311847",
  24: "#F8BA12",
  44: "#FFA5A4",
  focus: "#FDE3C4",
  gray: "#878E88"
};

const getColorCode = animationType => {
  return Colors[animationType];
};

export { Colors, getColorCode };
