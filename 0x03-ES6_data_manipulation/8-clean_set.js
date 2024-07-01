export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const result = [];
  for (let item of set) {
    if (item.startsWith(startString)) {
      item = item.slice(startString.length);
      result.push(item);
    }
  }
  return result.join('-');
}
