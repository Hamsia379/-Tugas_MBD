const database = 'Hamsia';
const collection = 'Tempat_wisata';


use('Hamsia');
db.Tempat_wisata.insertMany([
  { nama: "Pantai Lombang", lokasi: "Majene", kategori: "Pantai", rating: 4.5, harga: 50000 },
  { nama: "Pulau Karampuang", lokasi: "Mamuju", kategori: "Pulau", rating: 4.9, harga: 75000 },
  { nama: "Bukit Tinggi", lokasi: "Polewali", kategori: "Pegunungan", rating: 4.2, harga: 30000 },
  { nama: "Pantai Dato", lokasi: "Majene", kategori: "Pantai", rating: 4.3, harga: 45000 }
]);
