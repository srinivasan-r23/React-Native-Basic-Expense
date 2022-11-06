export const getFormattedDate = (date) => {
  const month = date.toLocaleString("default", { month: "long" });
  return `${date.getDate()} ${month} ${date.getFullYear()}`;
};
