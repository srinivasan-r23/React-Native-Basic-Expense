export const getFormattedDate = (date) => {
  const month = date.toLocaleString("default", { month: "long" });
  return `${date.getDate()} ${month} ${date.getFullYear()}`;
};

export function getDateMinusDay(date, days) {
  return new Date(date.getFullYear(), date?.getMonth(), date.getDate() - days);
}
