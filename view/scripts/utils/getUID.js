export const getUID = () => {
  const randomNum = Math.floor(Math.random() * 10000) + 1;
  return `${Date.now()}_${randomNum}`;
};
