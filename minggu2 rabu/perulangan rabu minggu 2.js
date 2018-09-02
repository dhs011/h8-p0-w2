//1. MENGGUNAKAN LOOPING DENGAN WHILE
console.log('LOOPING PERTAMA')
var flag = 2;
while(flag<= 20) {
  console.log(+ flag + '- I love coding');
  flag = flag + 2;
}
console.log('LOOPING KEDUA')
var flag = 20;
while(flag>0) {
  console.log(+ flag + '- I will become fullstack developer');
  flag = flag-2;
}
//2. MENGGUNAKAN LOOPING DENGAN FOR
console.log('LOOPING PERTAMA')
for(var angka = 1; angka <= 20; angka++) {
  console.log(+ angka +'- I love coding');
}

console.log('LOOPING KEDUA')
for(var angka = 20; angka>0; angka--) {
  console.log(+ angka +'- I will become fullstack developer');
}

//3. ANGKA GANJIL GENAP
console.log('PENAMBAHAN COUNTER 1')
for(var angka = 1; angka <= 100; angka++) {
  if(angka%2===0){
  console.log('GENAP');
  } else {console.log('GANJIL')}
}

console.log('PENAMBAHAN COUNTER 2')
for(var angka = 1; angka <= 100; angka= angka + 2) {
  if(angka%3===0){
  console.log(+angka+'kelipatan 3');
  } else {console.log('')}
}

console.log('PENAMBAHAN COUNTER 5')
for(var angka = 1; angka <= 100; angka= angka + 5) {
  if(angka%6===0){
  console.log(+angka+'kelipatan 6');
  } else {console.log('')}
}

console.log('PENAMBAHAN COUNTER 9')
for(var angka = 1; angka <= 100; angka= angka + 9) {
  if(angka%10===0){
  console.log(+angka+'kelipatan 10');
  } else {console.log('')}
}
