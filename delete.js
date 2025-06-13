const database = 'Hamsia';
const collection = 'Tempat_wisata';


use('Hamsia');
db.Tempat_wisata.deleteOne({ nama: "Pantai Lombang" });


db.Tempat_wisata.deleteMany({ kategori: "Dataran Tinggi" });