const database = 'Hamsia';
const collection = 'Tempat_wisata';


use('Hamsia');


db.Tempat_wisata.find();

db.Tempat_wisata.find({ lokasi: "Majene" });

db.Tempat_wisata.find(
  { lokasi: "Majene" },
  { nama: 1, rating: 1, _id: 0 }
);

