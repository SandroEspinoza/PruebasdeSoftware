export default function calculateWhile(n){
    let n, index;
    index = 2;
    while (index <= n - 1){
        if (n % index == 0){
            console.log("It ins not a prime number");
            break;
        }
        index++;
    }

}