// Fungsi untuk menghitung luas persegi
function luasPersegi(sisi) {
    return sisi * sisi;
}

// Fungsi untuk menghitung keliling persegi
function kelilingPersegi(sisi) {
    return 4 * sisi;
}

// Fungsi untuk menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

// Fungsi untuk menghitung keliling persegi panjang
function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

// Fungsi untuk menghitung luas lingkaran
function luasLingkaran(jariJari) {
    return Math.PI * jariJari * jariJari;
}

// Fungsi untuk menghitung keliling lingkaran
function kelilingLingkaran(jariJari) {
    return 2 * Math.PI * jariJari;
}

// Fungsi untuk menghitung luas segitiga
function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

// Fungsi untuk menghitung keliling segitiga (hanya berlaku untuk segitiga siku-siku)
function kelilingSegitiga(alas, tinggi) {
    var sisiMiring = Math.sqrt(alas * alas + tinggi * tinggi);
    return alas + tinggi + sisiMiring;
}

// Contoh penggunaan fungsi-fungsi di atas
console.log("Luas Persegi dengan sisi 5:", luasPersegi(5));
console.log("Keliling Persegi dengan sisi 5:", kelilingPersegi(5));

console.log("Luas Persegi Panjang dengan panjang 5 dan lebar 3:", luasPersegiPanjang(5, 3));
console.log("Keliling Persegi Panjang dengan panjang 5 dan lebar 3:", kelilingPersegiPanjang(5, 3));

console.log("Luas Lingkaran dengan jari-jari 4:", luasLingkaran(4));
console.log("Keliling Lingkaran dengan jari-jari 4:", kelilingLingkaran(4));

console.log("Luas Segitiga dengan alas 4 dan tinggi 3:", luasSegitiga(4, 3));
console.log("Keliling Segitiga dengan alas 4 dan tinggi 3:", kelilingSegitiga(4, 3));
