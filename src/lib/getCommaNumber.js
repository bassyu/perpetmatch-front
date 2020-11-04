export default function getCommaNumber(number) {
  const formater = new Intl.NumberFormat();
  return formater.format(number);
}
