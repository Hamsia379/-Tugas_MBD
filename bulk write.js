const database = 'Hamsia';
const collection = 'Tempat_wisata';


use('Hamsia');
db.tempat_wisata.bulkWrite([
  {
    insertOne: {
      document: {
        nama: "Air Terjun Tamasapi",
        lokasi: "Mamasa",
        kategori: "Air Terjun",
        rating: 4.7,
        harga: 40000
      }
    }
  },
  {
    updateOne: {
      filter: { nama: "Pantai Lombang" },
      update: { $set: { rating: 4.9 } }
    }
  },
  {
    deleteOne: {
      filter: { nama: "Bukit Tinggi" }
    }
  },
  {
    updateMany: {
      filter: { kategori: "Pantai" },
      update: { $set: { harga: 55000 } }
    }
  }
]);