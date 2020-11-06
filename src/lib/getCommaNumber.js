export default function getCommaNumber(number) {
  const floor = Math.floor(number);
  const formater = new Intl.NumberFormat();
  return formater.format(floor);
}
