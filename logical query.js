const database = 'Hamsia';
const collection = 'Tempat_wisata';


use('Hamsia');
db.Tempat_wisata.find({
  $and: [
    { kategori: "Pantai" },
    { rating: { $gt: 4.5 } }
  ]
});

db.Tempat_wisata.find({
  $or: [
    { lokasi: "Majene" },
    { lokasi: "Mamuju" }
  ]
});

db.Tempat_wisata.find({
  kategori: { $not: { $eq: "Pegunungan" } }
});

db.Tempat_wisata.find({
  $nor: [
    { lokasi: "Majene" },
    { kategori: "Pulau" }
  ]
});