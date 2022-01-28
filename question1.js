const longest_sequence = (str) => {
  const input = str.toLowerCase();

  let store = {};
  let count = 1;
  let prev = "";

  for (i in input) {
    let curr = input[i];

    // store current character if not present
    if (!store[curr]) store[curr] = 0;

    // update store and reset count if a sequence breaks
    if (curr != prev) {
      prev = curr;
      count = 1;
    } else {
      count++;
    }
    if (count > store[prev]) store[prev] = count;
  }

  const best = Object.keys(store).reduce((a, b) => {
    if (store[a] > store[b]) {
      return a;
    } else if (store[a] == store[b]) {
      if (a < b) {
        return a;
      } else {
        return b;
      }
    } else {
      return b;
    }
  });
  return { [best]: store[best] };
};

console.log(longest_sequence("dghhhmhmx")); // { h: 3 }
console.log(longest_sequence("dhkkhhKKKt")); // { k: 3 }
console.log(longest_sequence("aBbBadddadd")); // { b: 3 }
