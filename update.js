const database = 'Hamsia';
const collection = 'Tempat_wisata';


use('Hamsia');

db.Tempat_wisata.updateOne(
  { nama: "Pantai Lombang" },          
  { $set: { rating: 4.8 } }           
);


db.Tempat_wisata.updateMany(
  { kategori: "Pegunungan" },
  { $set: { kategori: "Dataran Tinggi" } }
);