export default (key, value, hours) => {
  const now = new Date();
  const item = {
    value,
    expiry: hours
      ? (now.getTime() + (hours * 60 * 60 * 1000))
      : (now.getTime() + (1 * 60 * 60 * 1000)),
  };
  localStorage.setItem(key, JSON.stringify(item));
};
