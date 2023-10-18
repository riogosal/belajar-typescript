const readlineSync = require('readline-sync')

// angkaajaib
export function guessNumber():string{
    console.log(`Selamat datang, Pahlawan Angka!
Anda berada di dalam ruangan magis Kerajaan Angka Ajaib.`)
    const randomNumber: number = Math.floor(Math.random() * 1000000) + 1;
    console.log(`Hari ini, angka acaknya adalah: ${randomNumber}`) 
    let inputNumber: number = parseFloat(readlineSync.question("Masukkan tebakan angka anda: "));
    
    do{
        if(inputNumber === randomNumber){
            return "Selamat! Mesin bersinar terang dan mengucapkan, Cocktail adalah seorang pahlawan sejati, Pahlawan Angka!"
        }
        console.log(`Maaf, itu bukan angka yang benar. Coba lagi.`) 
        inputNumber = parseFloat(readlineSync.question("Masukkan tebakan angka anda: "));
    } while (inputNumber !== randomNumber)
    
    return "Selamat! Mesin bersinar terang dan mengucapkan, Anda adalah seorang pahlawan sejati, Pahlawan Angka!"
    

    
}


// kekuatan kristal
export function kekuatanKristal():string{
    console.log(`Selamat datang kembali, Pahlawan Angka!
Anda berada di depan pintu Gua Angka yang misterius.`)
    let deretAngka: number[] = [1, 1];
   
    let pushNumber: number=deretAngka[0];
    for (let i = 0; i<8; i++){
        pushNumber += deretAngka[i];
        deretAngka.push(pushNumber);
    }
    console.log(`Pola angka: ${deretAngka}`)
    let inputNumber: number = parseFloat(readlineSync.question("Lanjutkan pola angka berikutnya: "));
    const resultNumber: number = deretAngka[8] + deretAngka[9];
    if(resultNumber===inputNumber){
        return "Selamat! Pintu Gua Angka terbuka, dan Anda berhasil menyelamatkan Kristal Kekuatan! 🌟"
    }
    return "pola angka yang anda masukka salah";
}


// fragment

export interface fragmenInterface{
    name: string,
    color: string,
    power:number,
}

export type fragment = fragmenInterface[];

export function findRock(config: fragmenInterface): { name: string, color: string, power: number } {
    return config;
}

export function fragmentOutput(arr: Array<fragmenInterface>) {
  
        console.log('Fragmen Batu Ajaib yang Ditemukan: ');
        arr.forEach((item,index) => {
            
            console.log(`
            ${index + 1}. Name : ${item.name}
               color: ${item.color}
               power: ${item.power}`);
               
        })
   
}