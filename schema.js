const database = 'Hamsia';
const collection = 'Tempat_wisata';


use('Hamsia');
db.runCommand({
  collMod: "Tempat_wisata",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "lokasi", "kategori"],
      properties: {
        nama: { bsonType: "string" },
        lokasi: { bsonType: "string" },
        kategori: { enum: ["Pantai", "Gunung", "Pulau", "Air Terjun"] },
        rating: { bsonType: "double", minimum: 1, maximum: 5 },
        harga: { bsonType: "int", minimum: 0 }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});