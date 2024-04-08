export function formatDate(date: Date | string): string {
  const day = String(date).slice(8, 10);
  const month = String(date).slice(5, 7);
  const year = String(date).slice(0, 4);
  return `${day}/${month}/${year}`;
}