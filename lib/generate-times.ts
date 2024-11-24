export const generateTimes = () => {
  const times = [];
  for (let i = 1; i <= 24; i++) {
    times.push(`${i}.00`);
  }
  return times;
};
