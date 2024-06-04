function printFibonacci ( numTerms ) {
    let t1 = 0;
    let t2 = 1;
    let nextTerm = 0;
    for ( let i = 1; i <= numTerms; i++ ) {
        console.log( t1 );
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
        
}
printFibonacci( 10 )