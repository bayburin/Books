export default function() {
  return function(arr) {
    if (!arr || arr.length === 0) { return ''; }

    return arr.map((el) => `${el.fName} ${el.sName}`).join(', ');
  }
}