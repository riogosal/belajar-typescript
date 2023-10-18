"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fragmentOutput = exports.findRock = exports.kekuatanKristal = exports.guessNumber = void 0;
const readlineSync = require('readline-sync');
function guessNumber() {
    console.log(`Selamat datang, Pahlawan Angka!
Anda berada di dalam ruangan magis Kerajaan Angka Ajaib.`);
    const randomNumber = Math.floor(Math.random() * 1000000) + 1;
    console.log(`Hari ini, angka acaknya adalah: ${randomNumber}`);
    let inputNumber = parseFloat(readlineSync.question("Masukkan tebakan angka anda: "));
    do {
        if (inputNumber === randomNumber) {
            return "Selamat! Mesin bersinar terang dan mengucapkan, Cocktail adalah seorang pahlawan sejati, Pahlawan Angka!";
        }
        console.log(`Maaf, itu bukan angka yang benar. Coba lagi.`);
        inputNumber = parseFloat(readlineSync.question("Masukkan tebakan angka anda: "));
    } while (inputNumber !== randomNumber);
    return "Selamat! Mesin bersinar terang dan mengucapkan, Anda adalah seorang pahlawan sejati, Pahlawan Angka!";
}
exports.guessNumber = guessNumber;
function kekuatanKristal() {
    console.log(`Selamat datang kembali, Pahlawan Angka!
Anda berada di depan pintu Gua Angka yang misterius.`);
    let deretAngka = [1, 1];
    let pushNumber = deretAngka[0];
    for (let i = 0; i < 8; i++) {
        pushNumber += deretAngka[i];
        deretAngka.push(pushNumber);
    }
    console.log(`Pola angka: ${deretAngka}`);
    let inputNumber = parseFloat(readlineSync.question("Lanjutkan pola angka berikutnya: "));
    const resultNumber = deretAngka[8] + deretAngka[9];
    if (resultNumber === inputNumber) {
        return "Selamat! Pintu Gua Angka terbuka, dan Anda berhasil menyelamatkan Kristal Kekuatan! 🌟";
    }
    return "pola angka yang anda masukka salah";
}
exports.kekuatanKristal = kekuatanKristal;
function findRock(config) {
    return config;
}
exports.findRock = findRock;
function fragmentOutput(arr) {
    console.log('Fragmen Batu Ajaib yang Ditemukan: ');
    arr.forEach((item, index) => {
        console.log(`
            ${index + 1}. Name : ${item.name}
               color: ${item.color}
               power: ${item.power}`);
    });
}
exports.fragmentOutput = fragmentOutput;
//# sourceMappingURL=AngkaAjaib.js.map