const [ fibN ] = process.argv.slice(2);

function fib(n){
    if(n <= 1) {
        return n;
    }
    let prev = 0, curr = 1;
    for(let i = 1; i < n; i++) {
        [ prev, curr ] = [ curr, prev + curr ];
    }
    return curr;
}
const result = fib(fibN);

console.log(result);
