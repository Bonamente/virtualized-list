const getColumnCount = (width: number) => {
  if (width >= 1110) return 4;
  if (width >= 830) return 3;
  if (width >= 500) return 2;

  return 1;
};

export default getColumnCount;
