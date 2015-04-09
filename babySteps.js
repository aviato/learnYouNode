var args, i, sum;
args = process.argv;
sum  = 0;

for (i = 2; i < args.length; i++) { sum += parseInt(args[i], 10); };

console.log(sum);