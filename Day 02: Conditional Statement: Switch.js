.
function getLetter(s) {
    let letter = "";
    
    // Write your code here
    switch (s.charAt(0)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("A");
            break;
        case 'b':
        case 'c':
        case 'c':
        case 'f':
        case 'g':
            console.log("B");
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            console.log("C");
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'u':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            console.log("D");
            break;
    }
    
    return letter;
}
