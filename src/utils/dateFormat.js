export const getMonthAndDay = dateStr => {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (month >= 10 ? '' : '0') + month + '-' + (day >= 10 ? '' : '0') + day;
};

export const getYear = dateStr => {
  const date = new Date(dateStr);
  const year = date.getYear();
  return (1900 + year);
}

export const getDate = dateStr => {
  const date = new Date(dateStr);
  const year = date.getYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (1900 + year) + '-' + (month >= 10 ? '' : '0') + month + '-' + (day >= 10 ? '' : '0') + day;
};

export const currentYear = () => {
  const date = new Date();
  return (1900 + date.getYear());
}
