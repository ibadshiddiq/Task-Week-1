let checkNumber = 4

if(checkNumber % 1 !== 0 && checkNumber % 2 == 1) {
    document.write('Bukan Bilangan Prima');
} else if (checkNumber % 1 == 0) {
    document.write('Bilangan Prima');
} else if (checkNumber % checkNumber == 0) {
    document.write('Bilangan Prima');
}    