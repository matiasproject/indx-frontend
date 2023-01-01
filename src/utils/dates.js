export function formatDate(dateString) {
  if (!dateString) {
    return '-';
  }
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('es-ES', options);
  const formattedDate = formatter.format(date);

  return formattedDate;
}

export function convertMsToTime(milliseconds) {
  if (!milliseconds) {
    return '-';
  }

  const date = new Date(milliseconds);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
}
