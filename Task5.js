
function number(x) {
    if(x % 2 != 0 || x == 2){
        if(x == 3 || x == 5 || x == 7 || x % 3 != 0 || x % 5 != 0 || x % 7 != 0){
        document.write(x + ' ' + 'adalah bilangan prima')
        }}else{
            document.write(x + ' ' + 'adalah bukan bilangan prima')
    }
}
number(23)