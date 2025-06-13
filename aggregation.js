const database = 'Hamsia';
const collection = 'Tempat_wisata';


use('Hamsia');
db.Tempat_wisata.aggregate([
  { $match: { rating: { $gte: 4 } } },

  {
    $group: {
      _id: "$kategori",
      rata_rata_rating: { $avg: "$rating" },
      jumlah_tempat: { $sum: 1 }
    }
  },

  { $sort: { rata_rata_rating: -1 } },

  {
    $project: {
      kategori: "$_id",
      rata_rata_rating: 1,
      jumlah_tempat: 1,
      _id: 0
    }
  }
]);