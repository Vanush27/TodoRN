export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    })
    .replace(/\//g, '-');

  return formattedDate;
};
