const database = 'Hamsia';
const collection = 'Tempat_wisata';


use('Hamsia');

db.createCollection(collection);

db.Tempat_wisata.insertOne({
  nama: "Pantai Lombang",
  lokasi: "Majene",
  kategori: "Pantai",
  rating: 4.5
});

