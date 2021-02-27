var nilai = 80

if (nilai > 85 && nilai <= 100){
    document.write('A');
} else if (nilai > 69 && nilai <= 85) {
    document.write('B');
} else if (nilai > 49 && nilai <= 69) {
    document.write('C');
} else if (nilai > 29 && nilai <= 49) {
    document.write('D');
} else if (nilai >= 0 && nilai <=29) {
    document.write('E');
} else {
    document.write('Nilai Salah');
}