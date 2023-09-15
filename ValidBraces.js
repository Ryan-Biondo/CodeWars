const braces = '([{}])';

function validBraces(braces) {
  const cache = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < braces.length; i++) {
    const brace = braces[i]; // assigns the current brace to the variable 'brace'

    if (pairs[brace]) {
      cache.push(brace);
      console.log(cache);
    } else {
      const last = cache.pop(); // removes the last element from the cache array and stores it in variable last.
      if (pairs[last] !== brace) {
        return false;
      }
    }
  }
  return cache.length === 0;
}

validBraces(braces);
const result = validBraces(braces);
console.log(result);
