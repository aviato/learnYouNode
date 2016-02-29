var args = process.argv.slice(2);
var sum  = args.reduce(function(accum, currentNum) {
  return accum += Number(currentNum);
}, 0);

console.log(sum);
