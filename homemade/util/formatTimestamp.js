export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.getDate();
  const formattedDate = `${month} ${day}`;
  return formattedDate;
};
