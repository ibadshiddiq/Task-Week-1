var age = 3

if (age >= 0 && age <= 1){
    document.write('Bayi');
} else if (age >= 2 && age <= 10) {
    document.write('Umur' + ' ' + age + ' ' + 'tahun adalah Anak-anak');
} else if (age >= 11 && age <= 19) {
    document.write('Umur' + ' ' + age + ' ' + 'tahun adalah Remaja');
} else if (age >= 20 && age <= 60) {
    document.write('Umur' + ' ' + age + ' ' + 'tahun adalah Dewasa');
} else {
    document.write('Umur' + ' ' + age + ' ' + 'tahun adalah Lanjut Usia');
};