import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Departamentos = dataBase.define('departamentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    pais_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

/* const departamentos = [
    {
        "id": 1,
        "pais_id": 3,
        "nombre": "Azerbaijan"
    },
    {
        "id": 2,
        "pais_id": 3,
        "nombre": "Nargorni Karabakh"
    },
    {
        "id": 3,
        "pais_id": 3,
        "nombre": "Nakhichevanskaya Region"
    },
    {
        "id": 4,
        "pais_id": 4,
        "nombre": "Anguilla"
    },
    {
        "id": 5,
        "pais_id": 7,
        "nombre": "Brestskaya obl."
    },
    {
        "id": 6,
        "pais_id": 7,
        "nombre": "Vitebskaya obl."
    },
    {
        "id": 7,
        "pais_id": 7,
        "nombre": "Gomelskaya obl."
    },
    {
        "id": 8,
        "pais_id": 7,
        "nombre": "Grodnenskaya obl."
    },
    {
        "id": 9,
        "pais_id": 7,
        "nombre": "Minskaya obl."
    },
    {
        "id": 10,
        "pais_id": 7,
        "nombre": "Mogilevskaya obl."
    },
    {
        "id": 11,
        "pais_id": 8,
        "nombre": "Belize"
    },
    {
        "id": 12,
        "pais_id": 10,
        "nombre": "Hamilton"
    },
    {
        "id": 13,
        "pais_id": 15,
        "nombre": "Dong Bang Song Cuu Long"
    },
    {
        "id": 14,
        "pais_id": 15,
        "nombre": "Dong Bang Song Hong"
    },
    {
        "id": 15,
        "pais_id": 15,
        "nombre": "Dong Nam Bo"
    },
    {
        "id": 16,
        "pais_id": 15,
        "nombre": "Duyen Hai Mien Trung"
    },
    {
        "id": 17,
        "pais_id": 15,
        "nombre": "Khu Bon Cu"
    },
    {
        "id": 18,
        "pais_id": 15,
        "nombre": "Mien Nui Va Trung Du"
    },
    {
        "id": 19,
        "pais_id": 15,
        "nombre": "Thai Nguyen"
    },
    {
        "id": 20,
        "pais_id": 16,
        "nombre": "Artibonite"
    },
    {
        "id": 21,
        "pais_id": 16,
        "nombre": "GrandAnse"
    },
    {
        "id": 22,
        "pais_id": 16,
        "nombre": "North West"
    },
    {
        "id": 23,
        "pais_id": 16,
        "nombre": "West"
    },
    {
        "id": 24,
        "pais_id": 16,
        "nombre": "South"
    },
    {
        "id": 25,
        "pais_id": 16,
        "nombre": "South East"
    },
    {
        "id": 26,
        "pais_id": 17,
        "nombre": "Grande-Terre"
    },
    {
        "id": 27,
        "pais_id": 17,
        "nombre": "Basse-Terre"
    },
    {
        "id": 28,
        "pais_id": 21,
        "nombre": "Abkhazia"
    },
    {
        "id": 29,
        "pais_id": 21,
        "nombre": "Ajaria"
    },
    {
        "id": 30,
        "pais_id": 21,
        "nombre": "Georgia"
    },
    {
        "id": 31,
        "pais_id": 21,
        "nombre": "South Ossetia"
    },
    {
        "id": 32,
        "pais_id": 23,
        "nombre": "Al QÃ„Â hira"
    },
    {
        "id": 33,
        "pais_id": 23,
        "nombre": "Aswan"
    },
    {
        "id": 34,
        "pais_id": 23,
        "nombre": "Asyut"
    },
    {
        "id": 35,
        "pais_id": 23,
        "nombre": "Beni Suef"
    },
    {
        "id": 36,
        "pais_id": 23,
        "nombre": "Gharbia"
    },
    {
        "id": 37,
        "pais_id": 23,
        "nombre": "Damietta"
    },
    {
        "id": 38,
        "pais_id": 24,
        "nombre": "Southern District"
    },
    {
        "id": 39,
        "pais_id": 24,
        "nombre": "Central District"
    },
    {
        "id": 40,
        "pais_id": 24,
        "nombre": "Northern District"
    },
    {
        "id": 41,
        "pais_id": 24,
        "nombre": "Haifa"
    },
    {
        "id": 42,
        "pais_id": 24,
        "nombre": "Tel Aviv"
    },
    {
        "id": 43,
        "pais_id": 24,
        "nombre": "Jerusalem"
    },
    {
        "id": 44,
        "pais_id": 25,
        "nombre": "Bangala"
    },
    {
        "id": 45,
        "pais_id": 25,
        "nombre": "Chhattisgarh"
    },
    {
        "id": 46,
        "pais_id": 25,
        "nombre": "Karnataka"
    },
    {
        "id": 47,
        "pais_id": 25,
        "nombre": "Uttaranchal"
    },
    {
        "id": 48,
        "pais_id": 25,
        "nombre": "Andhara Pradesh"
    },
    {
        "id": 49,
        "pais_id": 25,
        "nombre": "Assam"
    },
    {
        "id": 50,
        "pais_id": 25,
        "nombre": "Bihar"
    },
    {
        "id": 51,
        "pais_id": 25,
        "nombre": "Gujarat"
    },
    {
        "id": 52,
        "pais_id": 25,
        "nombre": "Jammu and Kashmir"
    },
    {
        "id": 53,
        "pais_id": 25,
        "nombre": "Kerala"
    },
    {
        "id": 54,
        "pais_id": 25,
        "nombre": "Madhya Pradesh"
    },
    {
        "id": 55,
        "pais_id": 25,
        "nombre": "Manipur"
    },
    {
        "id": 56,
        "pais_id": 25,
        "nombre": "Maharashtra"
    },
    {
        "id": 57,
        "pais_id": 25,
        "nombre": "Megahalaya"
    },
    {
        "id": 58,
        "pais_id": 25,
        "nombre": "Orissa"
    },
    {
        "id": 59,
        "pais_id": 25,
        "nombre": "Punjab"
    },
    {
        "id": 60,
        "pais_id": 25,
        "nombre": "Pondisheri"
    },
    {
        "id": 61,
        "pais_id": 25,
        "nombre": "Rajasthan"
    },
    {
        "id": 62,
        "pais_id": 25,
        "nombre": "Tamil Nadu"
    },
    {
        "id": 63,
        "pais_id": 25,
        "nombre": "Tripura"
    },
    {
        "id": 64,
        "pais_id": 25,
        "nombre": "Uttar Pradesh"
    },
    {
        "id": 65,
        "pais_id": 25,
        "nombre": "Haryana"
    },
    {
        "id": 66,
        "pais_id": 25,
        "nombre": "Chandigarh"
    },
    {
        "id": 67,
        "pais_id": 26,
        "nombre": "Azarbayjan-e Khavari"
    },
    {
        "id": 68,
        "pais_id": 26,
        "nombre": "Esfahan"
    },
    {
        "id": 69,
        "pais_id": 26,
        "nombre": "Hamadan"
    },
    {
        "id": 70,
        "pais_id": 26,
        "nombre": "Kordestan"
    },
    {
        "id": 71,
        "pais_id": 26,
        "nombre": "Markazi"
    },
    {
        "id": 72,
        "pais_id": 26,
        "nombre": "Sistan-e Baluches"
    },
    {
        "id": 73,
        "pais_id": 26,
        "nombre": "Yazd"
    },
    {
        "id": 74,
        "pais_id": 26,
        "nombre": "Kerman"
    },
    {
        "id": 75,
        "pais_id": 26,
        "nombre": "Kermanshakhan"
    },
    {
        "id": 76,
        "pais_id": 26,
        "nombre": "Mazenderan"
    },
    {
        "id": 77,
        "pais_id": 26,
        "nombre": "Tehran"
    },
    {
        "id": 78,
        "pais_id": 26,
        "nombre": "Fars"
    },
    {
        "id": 79,
        "pais_id": 26,
        "nombre": "Horasan"
    },
    {
        "id": 80,
        "pais_id": 26,
        "nombre": "Husistan"
    },
    {
        "id": 81,
        "pais_id": 30,
        "nombre": "Aktyubinskaya obl."
    },
    {
        "id": 82,
        "pais_id": 30,
        "nombre": "Alma-Atinskaya obl."
    },
    {
        "id": 83,
        "pais_id": 30,
        "nombre": "Vostochno-Kazahstanskaya obl."
    },
    {
        "id": 84,
        "pais_id": 30,
        "nombre": "Gurevskaya obl."
    },
    {
        "id": 85,
        "pais_id": 30,
        "nombre": "Zhambylskaya obl. (Dzhambulskaya obl.)"
    },
    {
        "id": 86,
        "pais_id": 30,
        "nombre": "Dzhezkazganskaya obl."
    },
    {
        "id": 87,
        "pais_id": 30,
        "nombre": "Karagandinskaya obl."
    },
    {
        "id": 88,
        "pais_id": 30,
        "nombre": "Kzyl-Ordinskaya obl."
    },
    {
        "id": 89,
        "pais_id": 30,
        "nombre": "Kokchetavskaya obl."
    },
    {
        "id": 90,
        "pais_id": 30,
        "nombre": "Kustanaiskaya obl."
    },
    {
        "id": 91,
        "pais_id": 30,
        "nombre": "Mangystauskaya (Mangyshlakskaya obl.)"
    },
    {
        "id": 92,
        "pais_id": 30,
        "nombre": "Pavlodarskaya obl."
    },
    {
        "id": 93,
        "pais_id": 30,
        "nombre": "Severo-Kazahstanskaya obl."
    },
    {
        "id": 94,
        "pais_id": 30,
        "nombre": "Taldy-Kurganskaya obl."
    },
    {
        "id": 95,
        "pais_id": 30,
        "nombre": "Turgaiskaya obl."
    },
    {
        "id": 96,
        "pais_id": 30,
        "nombre": "Akmolinskaya obl. (Tselinogradskaya obl.)"
    },
    {
        "id": 97,
        "pais_id": 30,
        "nombre": "Chimkentskaya obl."
    },
    {
        "id": 98,
        "pais_id": 31,
        "nombre": "Littoral"
    },
    {
        "id": 99,
        "pais_id": 31,
        "nombre": "Southwest Region"
    },
    {
        "id": 100,
        "pais_id": 31,
        "nombre": "North"
    },
    {
        "id": 101,
        "pais_id": 31,
        "nombre": "Central"
    },
    {
        "id": 102,
        "pais_id": 33,
        "nombre": "Government controlled area"
    },
    {
        "id": 103,
        "pais_id": 33,
        "nombre": "Turkish controlled area"
    },
    {
        "id": 104,
        "pais_id": 34,
        "nombre": "Issik Kulskaya Region"
    },
    {
        "id": 105,
        "pais_id": 34,
        "nombre": "Kyrgyzstan"
    },
    {
        "id": 106,
        "pais_id": 34,
        "nombre": "Narinskaya Region"
    },
    {
        "id": 107,
        "pais_id": 34,
        "nombre": "Oshskaya Region"
    },
    {
        "id": 108,
        "pais_id": 34,
        "nombre": "Tallaskaya Region"
    },
    {
        "id": 109,
        "pais_id": 37,
        "nombre": "al-Jahra"
    },
    {
        "id": 110,
        "pais_id": 37,
        "nombre": "al-Kuwait"
    },
    {
        "id": 111,
        "pais_id": 38,
        "nombre": "Latviya"
    },
    {
        "id": 112,
        "pais_id": 39,
        "nombre": "Tarabulus"
    },
    {
        "id": 113,
        "pais_id": 39,
        "nombre": "Bengasi"
    },
    {
        "id": 114,
        "pais_id": 40,
        "nombre": "Litva"
    },
    {
        "id": 115,
        "pais_id": 43,
        "nombre": "Moldova"
    },
    {
        "id": 116,
        "pais_id": 45,
        "nombre": "Auckland"
    },
    {
        "id": 117,
        "pais_id": 45,
        "nombre": "Bay of Plenty"
    },
    {
        "id": 118,
        "pais_id": 45,
        "nombre": "Canterbury"
    },
    {
        "id": 119,
        "pais_id": 45,
        "nombre": "Gisborne"
    },
    {
        "id": 120,
        "pais_id": 45,
        "nombre": "Hawkes Bay"
    },
    {
        "id": 121,
        "pais_id": 45,
        "nombre": "Manawatu-Wanganui"
    },
    {
        "id": 122,
        "pais_id": 45,
        "nombre": "Marlborough"
    },
    {
        "id": 123,
        "pais_id": 45,
        "nombre": "Nelson"
    },
    {
        "id": 124,
        "pais_id": 45,
        "nombre": "Northland"
    },
    {
        "id": 125,
        "pais_id": 45,
        "nombre": "Otago"
    },
    {
        "id": 126,
        "pais_id": 45,
        "nombre": "Southland"
    },
    {
        "id": 127,
        "pais_id": 45,
        "nombre": "Taranaki"
    },
    {
        "id": 128,
        "pais_id": 45,
        "nombre": "Tasman"
    },
    {
        "id": 129,
        "pais_id": 45,
        "nombre": "Waikato"
    },
    {
        "id": 130,
        "pais_id": 45,
        "nombre": "Wellington"
    },
    {
        "id": 131,
        "pais_id": 45,
        "nombre": "West Coast"
    },
    {
        "id": 132,
        "pais_id": 49,
        "nombre": "Saint-Denis"
    },
    {
        "id": 133,
        "pais_id": 50,
        "nombre": "Altaiskii krai"
    },
    {
        "id": 134,
        "pais_id": 50,
        "nombre": "Amurskaya obl."
    },
    {
        "id": 135,
        "pais_id": 50,
        "nombre": "Arhangelskaya obl."
    },
    {
        "id": 136,
        "pais_id": 50,
        "nombre": "Astrahanskaya obl."
    },
    {
        "id": 137,
        "pais_id": 50,
        "nombre": "Bashkiriya obl."
    },
    {
        "id": 138,
        "pais_id": 50,
        "nombre": "Belgorodskaya obl."
    },
    {
        "id": 139,
        "pais_id": 50,
        "nombre": "Bryanskaya obl."
    },
    {
        "id": 140,
        "pais_id": 50,
        "nombre": "Buryatiya"
    },
    {
        "id": 141,
        "pais_id": 50,
        "nombre": "Vladimirskaya obl."
    },
    {
        "id": 142,
        "pais_id": 50,
        "nombre": "Volgogradskaya obl."
    },
    {
        "id": 143,
        "pais_id": 50,
        "nombre": "Vologodskaya obl."
    },
    {
        "id": 144,
        "pais_id": 50,
        "nombre": "Voronezhskaya obl."
    },
    {
        "id": 145,
        "pais_id": 50,
        "nombre": "Nizhegorodskaya obl."
    },
    {
        "id": 146,
        "pais_id": 50,
        "nombre": "Dagestan"
    },
    {
        "id": 147,
        "pais_id": 50,
        "nombre": "Evreiskaya obl."
    },
    {
        "id": 148,
        "pais_id": 50,
        "nombre": "Ivanovskaya obl."
    },
    {
        "id": 149,
        "pais_id": 50,
        "nombre": "Irkutskaya obl."
    },
    {
        "id": 150,
        "pais_id": 50,
        "nombre": "Kabardino-Balkariya"
    },
    {
        "id": 151,
        "pais_id": 50,
        "nombre": "Kaliningradskaya obl."
    },
    {
        "id": 152,
        "pais_id": 50,
        "nombre": "Tverskaya obl."
    },
    {
        "id": 153,
        "pais_id": 50,
        "nombre": "Kalmykiya"
    },
    {
        "id": 154,
        "pais_id": 50,
        "nombre": "Kaluzhskaya obl."
    },
    {
        "id": 155,
        "pais_id": 50,
        "nombre": "Kamchatskaya obl."
    },
    {
        "id": 156,
        "pais_id": 50,
        "nombre": "Kareliya"
    },
    {
        "id": 157,
        "pais_id": 50,
        "nombre": "Kemerovskaya obl."
    },
    {
        "id": 158,
        "pais_id": 50,
        "nombre": "Kirovskaya obl."
    },
    {
        "id": 159,
        "pais_id": 50,
        "nombre": "Komi"
    },
    {
        "id": 160,
        "pais_id": 50,
        "nombre": "Kostromskaya obl."
    },
    {
        "id": 161,
        "pais_id": 50,
        "nombre": "Krasnodarskii krai"
    },
    {
        "id": 162,
        "pais_id": 50,
        "nombre": "Krasnoyarskii krai"
    },
    {
        "id": 163,
        "pais_id": 50,
        "nombre": "Kurganskaya obl."
    },
    {
        "id": 164,
        "pais_id": 50,
        "nombre": "Kurskaya obl."
    },
    {
        "id": 165,
        "pais_id": 50,
        "nombre": "Lipetskaya obl."
    },
    {
        "id": 166,
        "pais_id": 50,
        "nombre": "Magadanskaya obl."
    },
    {
        "id": 167,
        "pais_id": 50,
        "nombre": "Marii El"
    },
    {
        "id": 168,
        "pais_id": 50,
        "nombre": "Mordoviya"
    },
    {
        "id": 169,
        "pais_id": 50,
        "nombre": "Moscow Y Moscow Region"
    },
    {
        "id": 170,
        "pais_id": 50,
        "nombre": "Murmanskaya obl."
    },
    {
        "id": 171,
        "pais_id": 50,
        "nombre": "Novgorodskaya obl."
    },
    {
        "id": 172,
        "pais_id": 50,
        "nombre": "Novosibirskaya obl."
    },
    {
        "id": 173,
        "pais_id": 50,
        "nombre": "Omskaya obl."
    },
    {
        "id": 174,
        "pais_id": 50,
        "nombre": "Orenburgskaya obl."
    },
    {
        "id": 175,
        "pais_id": 50,
        "nombre": "Orlovskaya obl."
    },
    {
        "id": 176,
        "pais_id": 50,
        "nombre": "Penzenskaya obl."
    },
    {
        "id": 177,
        "pais_id": 50,
        "nombre": "Permskiy krai"
    },
    {
        "id": 178,
        "pais_id": 50,
        "nombre": "Primorskii krai"
    },
    {
        "id": 179,
        "pais_id": 50,
        "nombre": "Pskovskaya obl."
    },
    {
        "id": 180,
        "pais_id": 50,
        "nombre": "Rostovskaya obl."
    },
    {
        "id": 181,
        "pais_id": 50,
        "nombre": "Ryazanskaya obl."
    },
    {
        "id": 182,
        "pais_id": 50,
        "nombre": "Samarskaya obl."
    },
    {
        "id": 183,
        "pais_id": 50,
        "nombre": "Saint-Petersburg and Region"
    },
    {
        "id": 184,
        "pais_id": 50,
        "nombre": "Saratovskaya obl."
    },
    {
        "id": 185,
        "pais_id": 50,
        "nombre": "Saha (Yakutiya)"
    },
    {
        "id": 186,
        "pais_id": 50,
        "nombre": "Sahalin"
    },
    {
        "id": 187,
        "pais_id": 50,
        "nombre": "Sverdlovskaya obl."
    },
    {
        "id": 188,
        "pais_id": 50,
        "nombre": "Severnaya Osetiya"
    },
    {
        "id": 189,
        "pais_id": 50,
        "nombre": "Smolenskaya obl."
    },
    {
        "id": 190,
        "pais_id": 50,
        "nombre": "Stavropolskii krai"
    },
    {
        "id": 191,
        "pais_id": 50,
        "nombre": "Tambovskaya obl."
    },
    {
        "id": 192,
        "pais_id": 50,
        "nombre": "Tatarstan"
    },
    {
        "id": 193,
        "pais_id": 50,
        "nombre": "Tomskaya obl."
    },
    {
        "id": 195,
        "pais_id": 50,
        "nombre": "Tulskaya obl."
    },
    {
        "id": 196,
        "pais_id": 50,
        "nombre": "Tyumenskaya obl. i Hanty-Mansiiskii AO"
    },
    {
        "id": 197,
        "pais_id": 50,
        "nombre": "Udmurtiya"
    },
    {
        "id": 198,
        "pais_id": 50,
        "nombre": "Ulyanovskaya obl."
    },
    {
        "id": 199,
        "pais_id": 50,
        "nombre": "Uralskaya obl."
    },
    {
        "id": 200,
        "pais_id": 50,
        "nombre": "Habarovskii krai"
    },
    {
        "id": 201,
        "pais_id": 50,
        "nombre": "Chelyabinskaya obl."
    },
    {
        "id": 202,
        "pais_id": 50,
        "nombre": "Checheno-Ingushetiya"
    },
    {
        "id": 203,
        "pais_id": 50,
        "nombre": "Chitinskaya obl."
    },
    {
        "id": 204,
        "pais_id": 50,
        "nombre": "Chuvashiya"
    },
    {
        "id": 205,
        "pais_id": 50,
        "nombre": "Yaroslavskaya obl."
    },
    {
        "id": 206,
        "pais_id": 51,
        "nombre": "Ahuachapán"
    },
    {
        "id": 207,
        "pais_id": 51,
        "nombre": "Cuscatlán"
    },
    {
        "id": 208,
        "pais_id": 51,
        "nombre": "La Libertad"
    },
    {
        "id": 209,
        "pais_id": 51,
        "nombre": "La Paz"
    },
    {
        "id": 210,
        "pais_id": 51,
        "nombre": "La Unión"
    },
    {
        "id": 211,
        "pais_id": 51,
        "nombre": "San Miguel"
    },
    {
        "id": 212,
        "pais_id": 51,
        "nombre": "San Salvador"
    },
    {
        "id": 213,
        "pais_id": 51,
        "nombre": "Santa Ana"
    },
    {
        "id": 214,
        "pais_id": 51,
        "nombre": "Sonsonate"
    },
    {
        "id": 215,
        "pais_id": 54,
        "nombre": "Paramaribo"
    },
    {
        "id": 216,
        "pais_id": 56,
        "nombre": "Gorno-Badakhshan Region"
    },
    {
        "id": 217,
        "pais_id": 56,
        "nombre": "Kuljabsk Region"
    },
    {
        "id": 218,
        "pais_id": 56,
        "nombre": "Kurgan-Tjube Region"
    },
    {
        "id": 219,
        "pais_id": 56,
        "nombre": "Sughd Region"
    },
    {
        "id": 220,
        "pais_id": 56,
        "nombre": "Tajikistan"
    },
    {
        "id": 221,
        "pais_id": 57,
        "nombre": "Ashgabat Region"
    },
    {
        "id": 222,
        "pais_id": 57,
        "nombre": "Krasnovodsk Region"
    },
    {
        "id": 223,
        "pais_id": 57,
        "nombre": "Mary Region"
    },
    {
        "id": 224,
        "pais_id": 57,
        "nombre": "Tashauz Region"
    },
    {
        "id": 225,
        "pais_id": 57,
        "nombre": "Chardzhou Region"
    },
    {
        "id": 226,
        "pais_id": 58,
        "nombre": "Grand Turk"
    },
    {
        "id": 227,
        "pais_id": 59,
        "nombre": "Bartin"
    },
    {
        "id": 228,
        "pais_id": 59,
        "nombre": "Bayburt"
    },
    {
        "id": 229,
        "pais_id": 59,
        "nombre": "Karabuk"
    },
    {
        "id": 230,
        "pais_id": 59,
        "nombre": "Adana"
    },
    {
        "id": 231,
        "pais_id": 59,
        "nombre": "Aydin"
    },
    {
        "id": 232,
        "pais_id": 59,
        "nombre": "Amasya"
    },
    {
        "id": 233,
        "pais_id": 59,
        "nombre": "Ankara"
    },
    {
        "id": 234,
        "pais_id": 59,
        "nombre": "Antalya"
    },
    {
        "id": 235,
        "pais_id": 59,
        "nombre": "Artvin"
    },
    {
        "id": 236,
        "pais_id": 59,
        "nombre": "Afion"
    },
    {
        "id": 237,
        "pais_id": 59,
        "nombre": "Balikesir"
    },
    {
        "id": 238,
        "pais_id": 59,
        "nombre": "Bilecik"
    },
    {
        "id": 239,
        "pais_id": 59,
        "nombre": "Bursa"
    },
    {
        "id": 240,
        "pais_id": 59,
        "nombre": "Gaziantep"
    },
    {
        "id": 241,
        "pais_id": 59,
        "nombre": "Denizli"
    },
    {
        "id": 242,
        "pais_id": 59,
        "nombre": "Izmir"
    },
    {
        "id": 243,
        "pais_id": 59,
        "nombre": "Isparta"
    },
    {
        "id": 244,
        "pais_id": 59,
        "nombre": "Icel"
    },
    {
        "id": 245,
        "pais_id": 59,
        "nombre": "Kayseri"
    },
    {
        "id": 246,
        "pais_id": 59,
        "nombre": "Kars"
    },
    {
        "id": 247,
        "pais_id": 59,
        "nombre": "Kodjaeli"
    },
    {
        "id": 248,
        "pais_id": 59,
        "nombre": "Konya"
    },
    {
        "id": 249,
        "pais_id": 59,
        "nombre": "Kirklareli"
    },
    {
        "id": 250,
        "pais_id": 59,
        "nombre": "Kutahya"
    },
    {
        "id": 251,
        "pais_id": 59,
        "nombre": "Malatya"
    },
    {
        "id": 252,
        "pais_id": 59,
        "nombre": "Manisa"
    },
    {
        "id": 253,
        "pais_id": 59,
        "nombre": "Sakarya"
    },
    {
        "id": 254,
        "pais_id": 59,
        "nombre": "Samsun"
    },
    {
        "id": 255,
        "pais_id": 59,
        "nombre": "Sivas"
    },
    {
        "id": 256,
        "pais_id": 59,
        "nombre": "Istanbul"
    },
    {
        "id": 257,
        "pais_id": 59,
        "nombre": "Trabzon"
    },
    {
        "id": 258,
        "pais_id": 59,
        "nombre": "Corum"
    },
    {
        "id": 259,
        "pais_id": 59,
        "nombre": "Edirne"
    },
    {
        "id": 260,
        "pais_id": 59,
        "nombre": "Elazig"
    },
    {
        "id": 261,
        "pais_id": 59,
        "nombre": "Erzincan"
    },
    {
        "id": 262,
        "pais_id": 59,
        "nombre": "Erzurum"
    },
    {
        "id": 263,
        "pais_id": 59,
        "nombre": "Eskisehir"
    },
    {
        "id": 264,
        "pais_id": 60,
        "nombre": "Jinja"
    },
    {
        "id": 265,
        "pais_id": 60,
        "nombre": "Kampala"
    },
    {
        "id": 266,
        "pais_id": 61,
        "nombre": "Andijon Region"
    },
    {
        "id": 267,
        "pais_id": 61,
        "nombre": "Buxoro Region"
    },
    {
        "id": 268,
        "pais_id": 61,
        "nombre": "Jizzac Region"
    },
    {
        "id": 269,
        "pais_id": 61,
        "nombre": "Qaraqalpaqstan"
    },
    {
        "id": 270,
        "pais_id": 61,
        "nombre": "Qashqadaryo Region"
    },
    {
        "id": 271,
        "pais_id": 61,
        "nombre": "Navoiy Region"
    },
    {
        "id": 272,
        "pais_id": 61,
        "nombre": "Namangan Region"
    },
    {
        "id": 273,
        "pais_id": 61,
        "nombre": "Samarqand Region"
    },
    {
        "id": 274,
        "pais_id": 61,
        "nombre": "Surxondaryo Region"
    },
    {
        "id": 275,
        "pais_id": 61,
        "nombre": "Sirdaryo Region"
    },
    {
        "id": 276,
        "pais_id": 61,
        "nombre": "Tashkent Region"
    },
    {
        "id": 277,
        "pais_id": 61,
        "nombre": "Fergana Region"
    },
    {
        "id": 278,
        "pais_id": 61,
        "nombre": "Xorazm Region"
    },
    {
        "id": 279,
        "pais_id": 62,
        "nombre": "Vinnitskaya obl."
    },
    {
        "id": 280,
        "pais_id": 62,
        "nombre": "Volynskaya obl."
    },
    {
        "id": 281,
        "pais_id": 62,
        "nombre": "Dnepropetrovskaya obl."
    },
    {
        "id": 282,
        "pais_id": 62,
        "nombre": "Donetskaya obl."
    },
    {
        "id": 283,
        "pais_id": 62,
        "nombre": "Zhitomirskaya obl."
    },
    {
        "id": 284,
        "pais_id": 62,
        "nombre": "Zakarpatskaya obl."
    },
    {
        "id": 285,
        "pais_id": 62,
        "nombre": "Zaporozhskaya obl."
    },
    {
        "id": 286,
        "pais_id": 62,
        "nombre": "Ivano-Frankovskaya obl."
    },
    {
        "id": 287,
        "pais_id": 62,
        "nombre": "Kievskaya obl."
    },
    {
        "id": 288,
        "pais_id": 62,
        "nombre": "Kirovogradskaya obl."
    },
    {
        "id": 289,
        "pais_id": 62,
        "nombre": "Krymskaya obl."
    },
    {
        "id": 290,
        "pais_id": 62,
        "nombre": "Luganskaya obl."
    },
    {
        "id": 291,
        "pais_id": 62,
        "nombre": "Lvovskaya obl."
    },
    {
        "id": 292,
        "pais_id": 62,
        "nombre": "Nikolaevskaya obl."
    },
    {
        "id": 293,
        "pais_id": 62,
        "nombre": "Odesskaya obl."
    },
    {
        "id": 294,
        "pais_id": 62,
        "nombre": "Poltavskaya obl."
    },
    {
        "id": 295,
        "pais_id": 62,
        "nombre": "Rovenskaya obl."
    },
    {
        "id": 296,
        "pais_id": 62,
        "nombre": "Sumskaya obl."
    },
    {
        "id": 297,
        "pais_id": 62,
        "nombre": "Ternopolskaya obl."
    },
    {
        "id": 298,
        "pais_id": 62,
        "nombre": "Harkovskaya obl."
    },
    {
        "id": 299,
        "pais_id": 62,
        "nombre": "Hersonskaya obl."
    },
    {
        "id": 300,
        "pais_id": 62,
        "nombre": "Hmelnitskaya obl."
    },
    {
        "id": 301,
        "pais_id": 62,
        "nombre": "Cherkasskaya obl."
    },
    {
        "id": 302,
        "pais_id": 62,
        "nombre": "Chernigovskaya obl."
    },
    {
        "id": 303,
        "pais_id": 62,
        "nombre": "Chernovitskaya obl."
    },
    {
        "id": 304,
        "pais_id": 68,
        "nombre": "Estoniya"
    },
    {
        "id": 305,
        "pais_id": 69,
        "nombre": "Cheju"
    },
    {
        "id": 306,
        "pais_id": 69,
        "nombre": "Chollabuk"
    },
    {
        "id": 307,
        "pais_id": 69,
        "nombre": "Chollanam"
    },
    {
        "id": 308,
        "pais_id": 69,
        "nombre": "Chungcheongbuk"
    },
    {
        "id": 309,
        "pais_id": 69,
        "nombre": "Chungcheongnam"
    },
    {
        "id": 310,
        "pais_id": 69,
        "nombre": "Incheon"
    },
    {
        "id": 311,
        "pais_id": 69,
        "nombre": "Kangweon"
    },
    {
        "id": 312,
        "pais_id": 69,
        "nombre": "Kwangju"
    },
    {
        "id": 313,
        "pais_id": 69,
        "nombre": "Kyeonggi"
    },
    {
        "id": 314,
        "pais_id": 69,
        "nombre": "Kyeongsangbuk"
    },
    {
        "id": 315,
        "pais_id": 69,
        "nombre": "Kyeongsangnam"
    },
    {
        "id": 316,
        "pais_id": 69,
        "nombre": "Pusan"
    },
    {
        "id": 317,
        "pais_id": 69,
        "nombre": "Seoul"
    },
    {
        "id": 318,
        "pais_id": 69,
        "nombre": "Taegu"
    },
    {
        "id": 319,
        "pais_id": 69,
        "nombre": "Taejeon"
    },
    {
        "id": 320,
        "pais_id": 69,
        "nombre": "Ulsan"
    },
    {
        "id": 321,
        "pais_id": 70,
        "nombre": "Aichi"
    },
    {
        "id": 322,
        "pais_id": 70,
        "nombre": "Akita"
    },
    {
        "id": 323,
        "pais_id": 70,
        "nombre": "Aomori"
    },
    {
        "id": 324,
        "pais_id": 70,
        "nombre": "Wakayama"
    },
    {
        "id": 325,
        "pais_id": 70,
        "nombre": "Gifu"
    },
    {
        "id": 326,
        "pais_id": 70,
        "nombre": "Gunma"
    },
    {
        "id": 327,
        "pais_id": 70,
        "nombre": "Ibaraki"
    },
    {
        "id": 328,
        "pais_id": 70,
        "nombre": "Iwate"
    },
    {
        "id": 329,
        "pais_id": 70,
        "nombre": "Ishikawa"
    },
    {
        "id": 330,
        "pais_id": 70,
        "nombre": "Kagawa"
    },
    {
        "id": 331,
        "pais_id": 70,
        "nombre": "Kagoshima"
    },
    {
        "id": 332,
        "pais_id": 70,
        "nombre": "Kanagawa"
    },
    {
        "id": 333,
        "pais_id": 70,
        "nombre": "Kyoto"
    },
    {
        "id": 334,
        "pais_id": 70,
        "nombre": "Kochi"
    },
    {
        "id": 335,
        "pais_id": 70,
        "nombre": "Kumamoto"
    },
    {
        "id": 336,
        "pais_id": 70,
        "nombre": "Mie"
    },
    {
        "id": 337,
        "pais_id": 70,
        "nombre": "Miyagi"
    },
    {
        "id": 338,
        "pais_id": 70,
        "nombre": "Miyazaki"
    },
    {
        "id": 339,
        "pais_id": 70,
        "nombre": "Nagano"
    },
    {
        "id": 340,
        "pais_id": 70,
        "nombre": "Nagasaki"
    },
    {
        "id": 341,
        "pais_id": 70,
        "nombre": "Nara"
    },
    {
        "id": 342,
        "pais_id": 70,
        "nombre": "Niigata"
    },
    {
        "id": 343,
        "pais_id": 70,
        "nombre": "Okayama"
    },
    {
        "id": 344,
        "pais_id": 70,
        "nombre": "Okinawa"
    },
    {
        "id": 345,
        "pais_id": 70,
        "nombre": "Osaka"
    },
    {
        "id": 346,
        "pais_id": 70,
        "nombre": "Saga"
    },
    {
        "id": 347,
        "pais_id": 70,
        "nombre": "Saitama"
    },
    {
        "id": 348,
        "pais_id": 70,
        "nombre": "Shiga"
    },
    {
        "id": 349,
        "pais_id": 70,
        "nombre": "Shizuoka"
    },
    {
        "id": 350,
        "pais_id": 70,
        "nombre": "Shimane"
    },
    {
        "id": 351,
        "pais_id": 70,
        "nombre": "Tiba"
    },
    {
        "id": 352,
        "pais_id": 70,
        "nombre": "Tokyo"
    },
    {
        "id": 353,
        "pais_id": 70,
        "nombre": "Tokushima"
    },
    {
        "id": 354,
        "pais_id": 70,
        "nombre": "Tochigi"
    },
    {
        "id": 355,
        "pais_id": 70,
        "nombre": "Tottori"
    },
    {
        "id": 356,
        "pais_id": 70,
        "nombre": "Toyama"
    },
    {
        "id": 357,
        "pais_id": 70,
        "nombre": "Fukui"
    },
    {
        "id": 358,
        "pais_id": 70,
        "nombre": "Fukuoka"
    },
    {
        "id": 359,
        "pais_id": 70,
        "nombre": "Fukushima"
    },
    {
        "id": 360,
        "pais_id": 70,
        "nombre": "Hiroshima"
    },
    {
        "id": 361,
        "pais_id": 70,
        "nombre": "Hokkaido"
    },
    {
        "id": 362,
        "pais_id": 70,
        "nombre": "Hyogo"
    },
    {
        "id": 363,
        "pais_id": 70,
        "nombre": "Yoshimi"
    },
    {
        "id": 364,
        "pais_id": 70,
        "nombre": "Yamagata"
    },
    {
        "id": 365,
        "pais_id": 70,
        "nombre": "Yamaguchi"
    },
    {
        "id": 366,
        "pais_id": 70,
        "nombre": "Yamanashi"
    },
    {
        "id": 368,
        "pais_id": 73,
        "nombre": "Hong Kong"
    },
    {
        "id": 369,
        "pais_id": 74,
        "nombre": "Indonesia"
    },
    {
        "id": 370,
        "pais_id": 75,
        "nombre": "Jordan"
    },
    {
        "id": 371,
        "pais_id": 76,
        "nombre": "Malaysia"
    },
    {
        "id": 372,
        "pais_id": 77,
        "nombre": "Singapore"
    },
    {
        "id": 373,
        "pais_id": 78,
        "nombre": "Taiwan"
    },
    {
        "id": 374,
        "pais_id": 30,
        "nombre": "Kazahstan"
    },
    {
        "id": 375,
        "pais_id": 62,
        "nombre": "Ukraina"
    },
    {
        "id": 376,
        "pais_id": 25,
        "nombre": "India"
    },
    {
        "id": 377,
        "pais_id": 23,
        "nombre": "Egypt"
    },
    {
        "id": 378,
        "pais_id": 106,
        "nombre": "Damascus"
    },
    {
        "id": 379,
        "pais_id": 131,
        "nombre": "Isle of Man"
    },
    {
        "id": 380,
        "pais_id": 30,
        "nombre": "Zapadno-Kazahstanskaya obl."
    },
    {
        "id": 381,
        "pais_id": 50,
        "nombre": "Adygeya"
    },
    {
        "id": 382,
        "pais_id": 50,
        "nombre": "Hakasiya"
    },
    {
        "id": 383,
        "pais_id": 93,
        "nombre": "Dubai"
    },
    {
        "id": 384,
        "pais_id": 50,
        "nombre": "Chukotskii AO"
    },
    {
        "id": 385,
        "pais_id": 99,
        "nombre": "Beirut"
    },
    {
        "id": 386,
        "pais_id": 137,
        "nombre": "Tegucigalpa"
    },
    {
        "id": 387,
        "pais_id": 138,
        "nombre": "Santo Domingo"
    },
    {
        "id": 388,
        "pais_id": 139,
        "nombre": "Ulan Bator"
    },
    {
        "id": 389,
        "pais_id": 23,
        "nombre": "Sinai"
    },
    {
        "id": 390,
        "pais_id": 140,
        "nombre": "Baghdad"
    },
    {
        "id": 391,
        "pais_id": 140,
        "nombre": "Basra"
    },
    {
        "id": 392,
        "pais_id": 140,
        "nombre": "Mosul"
    },
    {
        "id": 393,
        "pais_id": 141,
        "nombre": "Johannesburg"
    },
    {
        "id": 394,
        "pais_id": 104,
        "nombre": "Morocco"
    },
    {
        "id": 395,
        "pais_id": 104,
        "nombre": "Tangier"
    },
    {
        "id": 396,
        "pais_id": 50,
        "nombre": "Yamalo-Nenetskii AO"
    },
    {
        "id": 397,
        "pais_id": 122,
        "nombre": "Tunisia"
    },
    {
        "id": 398,
        "pais_id": 92,
        "nombre": "Thailand"
    },
    {
        "id": 399,
        "pais_id": 117,
        "nombre": "Mozambique"
    },
    {
        "id": 400,
        "pais_id": 84,
        "nombre": "Korea"
    },
    {
        "id": 401,
        "pais_id": 87,
        "nombre": "Pakistan"
    },
    {
        "id": 402,
        "pais_id": 142,
        "nombre": "Aruba"
    },
    {
        "id": 403,
        "pais_id": 80,
        "nombre": "Bahamas"
    },
    {
        "id": 404,
        "pais_id": 69,
        "nombre": "South Korea"
    },
    {
        "id": 405,
        "pais_id": 132,
        "nombre": "Jamaica"
    },
    {
        "id": 406,
        "pais_id": 93,
        "nombre": "Sharjah"
    },
    {
        "id": 407,
        "pais_id": 93,
        "nombre": "Abu Dhabi"
    },
    {
        "id": 409,
        "pais_id": 24,
        "nombre": "Ramat Hagolan"
    },
    {
        "id": 410,
        "pais_id": 115,
        "nombre": "Nigeria"
    },
    {
        "id": 411,
        "pais_id": 64,
        "nombre": "Ain"
    },
    {
        "id": 412,
        "pais_id": 64,
        "nombre": "Haute-Savoie"
    },
    {
        "id": 413,
        "pais_id": 64,
        "nombre": "Aisne"
    },
    {
        "id": 414,
        "pais_id": 64,
        "nombre": "Allier"
    },
    {
        "id": 415,
        "pais_id": 64,
        "nombre": "Alpes-de-Haute-Provence"
    },
    {
        "id": 416,
        "pais_id": 64,
        "nombre": "Hautes-Alpes"
    },
    {
        "id": 417,
        "pais_id": 64,
        "nombre": "Alpes-Maritimes"
    },
    {
        "id": 418,
        "pais_id": 64,
        "nombre": "Ardèche"
    },
    {
        "id": 419,
        "pais_id": 64,
        "nombre": "Ardennes"
    },
    {
        "id": 420,
        "pais_id": 64,
        "nombre": "Ariège"
    },
    {
        "id": 421,
        "pais_id": 64,
        "nombre": "Aube"
    },
    {
        "id": 422,
        "pais_id": 64,
        "nombre": "Aude"
    },
    {
        "id": 423,
        "pais_id": 64,
        "nombre": "Aveyron"
    },
    {
        "id": 424,
        "pais_id": 64,
        "nombre": "Bouches-du-Rhône"
    },
    {
        "id": 425,
        "pais_id": 64,
        "nombre": "Calvados"
    },
    {
        "id": 426,
        "pais_id": 64,
        "nombre": "Cantal"
    },
    {
        "id": 427,
        "pais_id": 64,
        "nombre": "Charente"
    },
    {
        "id": 428,
        "pais_id": 64,
        "nombre": "Charente Maritime"
    },
    {
        "id": 429,
        "pais_id": 64,
        "nombre": "Cher"
    },
    {
        "id": 430,
        "pais_id": 64,
        "nombre": "Corrèze"
    },
    {
        "id": 431,
        "pais_id": 64,
        "nombre": "Dordogne"
    },
    {
        "id": 432,
        "pais_id": 64,
        "nombre": "Corse"
    },
    {
        "id": 433,
        "pais_id": 64,
        "nombre": "Côte dOr"
    },
    {
        "id": 434,
        "pais_id": 64,
        "nombre": "Saône et Loire"
    },
    {
        "id": 435,
        "pais_id": 64,
        "nombre": "Côtes dArmor"
    },
    {
        "id": 436,
        "pais_id": 64,
        "nombre": "Creuse"
    },
    {
        "id": 437,
        "pais_id": 64,
        "nombre": "Doubs"
    },
    {
        "id": 438,
        "pais_id": 64,
        "nombre": "Drôme"
    },
    {
        "id": 439,
        "pais_id": 64,
        "nombre": "Eure"
    },
    {
        "id": 440,
        "pais_id": 64,
        "nombre": "Eure-et-Loire"
    },
    {
        "id": 441,
        "pais_id": 64,
        "nombre": "Finistère"
    },
    {
        "id": 442,
        "pais_id": 64,
        "nombre": "Gard"
    },
    {
        "id": 443,
        "pais_id": 64,
        "nombre": "Haute-Garonne"
    },
    {
        "id": 444,
        "pais_id": 64,
        "nombre": "Gers"
    },
    {
        "id": 445,
        "pais_id": 64,
        "nombre": "Gironde"
    },
    {
        "id": 446,
        "pais_id": 64,
        "nombre": "Hérault"
    },
    {
        "id": 447,
        "pais_id": 64,
        "nombre": "Ille et Vilaine"
    },
    {
        "id": 448,
        "pais_id": 64,
        "nombre": "Indre"
    },
    {
        "id": 449,
        "pais_id": 64,
        "nombre": "Indre-et-Loire"
    },
    {
        "id": 450,
        "pais_id": 64,
        "nombre": "Isère"
    },
    {
        "id": 451,
        "pais_id": 64,
        "nombre": "Jura"
    },
    {
        "id": 452,
        "pais_id": 64,
        "nombre": "Landes"
    },
    {
        "id": 453,
        "pais_id": 64,
        "nombre": "Loir-et-Cher"
    },
    {
        "id": 454,
        "pais_id": 64,
        "nombre": "Loire"
    },
    {
        "id": 455,
        "pais_id": 64,
        "nombre": "Rhône"
    },
    {
        "id": 456,
        "pais_id": 64,
        "nombre": "Haute-Loire"
    },
    {
        "id": 457,
        "pais_id": 64,
        "nombre": "Loire Atlantique"
    },
    {
        "id": 458,
        "pais_id": 64,
        "nombre": "Loiret"
    },
    {
        "id": 459,
        "pais_id": 64,
        "nombre": "Lot"
    },
    {
        "id": 460,
        "pais_id": 64,
        "nombre": "Lot-et-Garonne"
    },
    {
        "id": 461,
        "pais_id": 64,
        "nombre": "Lozère"
    },
    {
        "id": 462,
        "pais_id": 64,
        "nombre": "Maine et Loire"
    },
    {
        "id": 463,
        "pais_id": 64,
        "nombre": "Manche"
    },
    {
        "id": 464,
        "pais_id": 64,
        "nombre": "Marne"
    },
    {
        "id": 465,
        "pais_id": 64,
        "nombre": "Haute-Marne"
    },
    {
        "id": 466,
        "pais_id": 64,
        "nombre": "Mayenne"
    },
    {
        "id": 467,
        "pais_id": 64,
        "nombre": "Meurthe-et-Moselle"
    },
    {
        "id": 468,
        "pais_id": 64,
        "nombre": "Meuse"
    },
    {
        "id": 469,
        "pais_id": 64,
        "nombre": "Morbihan"
    },
    {
        "id": 470,
        "pais_id": 64,
        "nombre": "Moselle"
    },
    {
        "id": 471,
        "pais_id": 64,
        "nombre": "Nièvre"
    },
    {
        "id": 472,
        "pais_id": 64,
        "nombre": "Nord"
    },
    {
        "id": 473,
        "pais_id": 64,
        "nombre": "Oise"
    },
    {
        "id": 474,
        "pais_id": 64,
        "nombre": "Orne"
    },
    {
        "id": 475,
        "pais_id": 64,
        "nombre": "Pas-de-Calais"
    },
    {
        "id": 476,
        "pais_id": 64,
        "nombre": "Puy-de-Dôme"
    },
    {
        "id": 477,
        "pais_id": 64,
        "nombre": "Pyrénées-Atlantiques"
    },
    {
        "id": 478,
        "pais_id": 64,
        "nombre": "Hautes-Pyrénées"
    },
    {
        "id": 479,
        "pais_id": 64,
        "nombre": "Pyrénées-Orientales"
    },
    {
        "id": 480,
        "pais_id": 64,
        "nombre": "Bas Rhin"
    },
    {
        "id": 481,
        "pais_id": 64,
        "nombre": "Haut Rhin"
    },
    {
        "id": 482,
        "pais_id": 64,
        "nombre": "Haute-Saône"
    },
    {
        "id": 483,
        "pais_id": 64,
        "nombre": "Sarthe"
    },
    {
        "id": 484,
        "pais_id": 64,
        "nombre": "Savoie"
    },
    {
        "id": 485,
        "pais_id": 64,
        "nombre": "Paris"
    },
    {
        "id": 486,
        "pais_id": 64,
        "nombre": "Seine-Maritime"
    },
    {
        "id": 487,
        "pais_id": 64,
        "nombre": "Seine-et-Marne"
    },
    {
        "id": 488,
        "pais_id": 64,
        "nombre": "Yvelines"
    },
    {
        "id": 489,
        "pais_id": 64,
        "nombre": "Deux-Sèvres"
    },
    {
        "id": 490,
        "pais_id": 64,
        "nombre": "Somme"
    },
    {
        "id": 491,
        "pais_id": 64,
        "nombre": "Tarn"
    },
    {
        "id": 492,
        "pais_id": 64,
        "nombre": "Tarn-et-Garonne"
    },
    {
        "id": 493,
        "pais_id": 64,
        "nombre": "Var"
    },
    {
        "id": 494,
        "pais_id": 64,
        "nombre": "Vaucluse"
    },
    {
        "id": 495,
        "pais_id": 64,
        "nombre": "Vendée"
    },
    {
        "id": 496,
        "pais_id": 64,
        "nombre": "Vienne"
    },
    {
        "id": 497,
        "pais_id": 64,
        "nombre": "Haute-Vienne"
    },
    {
        "id": 498,
        "pais_id": 64,
        "nombre": "Vosges"
    },
    {
        "id": 499,
        "pais_id": 64,
        "nombre": "Yonne"
    },
    {
        "id": 500,
        "pais_id": 64,
        "nombre": "Territoire de Belfort"
    },
    {
        "id": 501,
        "pais_id": 64,
        "nombre": "Essonne"
    },
    {
        "id": 502,
        "pais_id": 64,
        "nombre": "Hauts-de-Seine"
    },
    {
        "id": 503,
        "pais_id": 64,
        "nombre": "Seine-Saint-Denis"
    },
    {
        "id": 504,
        "pais_id": 64,
        "nombre": "Val-de-Marne"
    },
    {
        "id": 505,
        "pais_id": 64,
        "nombre": "Val-dOise"
    },
    {
        "id": 506,
        "pais_id": 29,
        "nombre": "Piemonte - Torino"
    },
    {
        "id": 507,
        "pais_id": 29,
        "nombre": "Piemonte - Alessandria"
    },
    {
        "id": 508,
        "pais_id": 29,
        "nombre": "Piemonte - Asti"
    },
    {
        "id": 509,
        "pais_id": 29,
        "nombre": "Piemonte - Biella"
    },
    {
        "id": 510,
        "pais_id": 29,
        "nombre": "Piemonte - Cuneo"
    },
    {
        "id": 511,
        "pais_id": 29,
        "nombre": "Piemonte - Novara"
    },
    {
        "id": 512,
        "pais_id": 29,
        "nombre": "Piemonte - Verbania"
    },
    {
        "id": 513,
        "pais_id": 29,
        "nombre": "Piemonte - Vercelli"
    },
    {
        "id": 514,
        "pais_id": 29,
        "nombre": "Valle dAosta - Aosta"
    },
    {
        "id": 515,
        "pais_id": 29,
        "nombre": "Lombardia - Milano"
    },
    {
        "id": 516,
        "pais_id": 29,
        "nombre": "Lombardia - Bergamo"
    },
    {
        "id": 517,
        "pais_id": 29,
        "nombre": "Lombardia - Brescia"
    },
    {
        "id": 518,
        "pais_id": 29,
        "nombre": "Lombardia - Como"
    },
    {
        "id": 519,
        "pais_id": 29,
        "nombre": "Lombardia - Cremona"
    },
    {
        "id": 520,
        "pais_id": 29,
        "nombre": "Lombardia - Lecco"
    },
    {
        "id": 521,
        "pais_id": 29,
        "nombre": "Lombardia - Lodi"
    },
    {
        "id": 522,
        "pais_id": 29,
        "nombre": "Lombardia - Mantova"
    },
    {
        "id": 523,
        "pais_id": 29,
        "nombre": "Lombardia - Pavia"
    },
    {
        "id": 524,
        "pais_id": 29,
        "nombre": "Lombardia - Sondrio"
    },
    {
        "id": 525,
        "pais_id": 29,
        "nombre": "Lombardia - Varese"
    },
    {
        "id": 526,
        "pais_id": 29,
        "nombre": "Trentino Alto Adige - Trento"
    },
    {
        "id": 527,
        "pais_id": 29,
        "nombre": "Trentino Alto Adige - Bolzano"
    },
    {
        "id": 528,
        "pais_id": 29,
        "nombre": "Veneto - Venezia"
    },
    {
        "id": 529,
        "pais_id": 29,
        "nombre": "Veneto - Belluno"
    },
    {
        "id": 530,
        "pais_id": 29,
        "nombre": "Veneto - Padova"
    },
    {
        "id": 531,
        "pais_id": 29,
        "nombre": "Veneto - Rovigo"
    },
    {
        "id": 532,
        "pais_id": 29,
        "nombre": "Veneto - Treviso"
    },
    {
        "id": 533,
        "pais_id": 29,
        "nombre": "Veneto - Verona"
    },
    {
        "id": 534,
        "pais_id": 29,
        "nombre": "Veneto - Vicenza"
    },
    {
        "id": 535,
        "pais_id": 29,
        "nombre": "Friuli Venezia Giulia - Trieste"
    },
    {
        "id": 536,
        "pais_id": 29,
        "nombre": "Friuli Venezia Giulia - Gorizia"
    },
    {
        "id": 537,
        "pais_id": 29,
        "nombre": "Friuli Venezia Giulia - Pordenone"
    },
    {
        "id": 538,
        "pais_id": 29,
        "nombre": "Friuli Venezia Giulia - Udine"
    },
    {
        "id": 539,
        "pais_id": 29,
        "nombre": "Liguria - Genova"
    },
    {
        "id": 540,
        "pais_id": 29,
        "nombre": "Liguria - Imperia"
    },
    {
        "id": 541,
        "pais_id": 29,
        "nombre": "Liguria - La Spezia"
    },
    {
        "id": 542,
        "pais_id": 29,
        "nombre": "Liguria - Savona"
    },
    {
        "id": 543,
        "pais_id": 29,
        "nombre": "Emilia Romagna - Bologna"
    },
    {
        "id": 544,
        "pais_id": 29,
        "nombre": "Emilia Romagna - Ferrara"
    },
    {
        "id": 545,
        "pais_id": 29,
        "nombre": "Emilia Romagna - Forlì-Cesena"
    },
    {
        "id": 546,
        "pais_id": 29,
        "nombre": "Emilia Romagna - Modena"
    },
    {
        "id": 547,
        "pais_id": 29,
        "nombre": "Emilia Romagna - Parma"
    },
    {
        "id": 548,
        "pais_id": 29,
        "nombre": "Emilia Romagna - Piacenza"
    },
    {
        "id": 549,
        "pais_id": 29,
        "nombre": "Emilia Romagna - Ravenna"
    },
    {
        "id": 550,
        "pais_id": 29,
        "nombre": "Emilia Romagna - Reggio Emilia"
    },
    {
        "id": 551,
        "pais_id": 29,
        "nombre": "Emilia Romagna - Rimini"
    },
    {
        "id": 552,
        "pais_id": 29,
        "nombre": "Toscana - Firenze"
    },
    {
        "id": 553,
        "pais_id": 29,
        "nombre": "Toscana - Arezzo"
    },
    {
        "id": 554,
        "pais_id": 29,
        "nombre": "Toscana - Grosseto"
    },
    {
        "id": 555,
        "pais_id": 29,
        "nombre": "Toscana - Livorno"
    },
    {
        "id": 556,
        "pais_id": 29,
        "nombre": "Toscana - Lucca"
    },
    {
        "id": 557,
        "pais_id": 29,
        "nombre": "Toscana - Massa Carrara"
    },
    {
        "id": 558,
        "pais_id": 29,
        "nombre": "Toscana - Pisa"
    },
    {
        "id": 559,
        "pais_id": 29,
        "nombre": "Toscana - Pistoia"
    },
    {
        "id": 560,
        "pais_id": 29,
        "nombre": "Toscana - Prato"
    },
    {
        "id": 561,
        "pais_id": 29,
        "nombre": "Toscana - Siena"
    },
    {
        "id": 562,
        "pais_id": 29,
        "nombre": "Umbria - Perugia"
    },
    {
        "id": 563,
        "pais_id": 29,
        "nombre": "Umbria - Terni"
    },
    {
        "id": 564,
        "pais_id": 29,
        "nombre": "Marche - Ancona"
    },
    {
        "id": 565,
        "pais_id": 29,
        "nombre": "Marche - Ascoli Piceno"
    },
    {
        "id": 566,
        "pais_id": 29,
        "nombre": "Marche - Macerata"
    },
    {
        "id": 567,
        "pais_id": 29,
        "nombre": "Marche - Pesaro - Urbino"
    },
    {
        "id": 568,
        "pais_id": 29,
        "nombre": "Lazio - Roma"
    },
    {
        "id": 569,
        "pais_id": 29,
        "nombre": "Lazio - Frosinone"
    },
    {
        "id": 570,
        "pais_id": 29,
        "nombre": "Lazio - Latina"
    },
    {
        "id": 571,
        "pais_id": 29,
        "nombre": "Lazio - Rieti"
    },
    {
        "id": 572,
        "pais_id": 29,
        "nombre": "Lazio - Viterbo"
    },
    {
        "id": 573,
        "pais_id": 29,
        "nombre": "Abruzzo - LAquila"
    },
    {
        "id": 574,
        "pais_id": 29,
        "nombre": "Abruzzo - Chieti"
    },
    {
        "id": 575,
        "pais_id": 29,
        "nombre": "Abruzzo - Pescara"
    },
    {
        "id": 576,
        "pais_id": 29,
        "nombre": "Abruzzo - Teramo"
    },
    {
        "id": 577,
        "pais_id": 29,
        "nombre": "Molise - Campobasso"
    },
    {
        "id": 578,
        "pais_id": 29,
        "nombre": "Molise - Isernia"
    },
    {
        "id": 579,
        "pais_id": 29,
        "nombre": "Campania - Napoli"
    },
    {
        "id": 580,
        "pais_id": 29,
        "nombre": "Campania - Avellino"
    },
    {
        "id": 581,
        "pais_id": 29,
        "nombre": "Campania - Benevento"
    },
    {
        "id": 582,
        "pais_id": 29,
        "nombre": "Campania - Caserta"
    },
    {
        "id": 583,
        "pais_id": 29,
        "nombre": "Campania - Salerno"
    },
    {
        "id": 584,
        "pais_id": 29,
        "nombre": "Puglia - Bari"
    },
    {
        "id": 585,
        "pais_id": 29,
        "nombre": "Puglia - Brindisi"
    },
    {
        "id": 586,
        "pais_id": 29,
        "nombre": "Puglia - Foggia"
    },
    {
        "id": 587,
        "pais_id": 29,
        "nombre": "Puglia - Lecce"
    },
    {
        "id": 588,
        "pais_id": 29,
        "nombre": "Puglia - Taranto"
    },
    {
        "id": 589,
        "pais_id": 29,
        "nombre": "Basilicata - Potenza"
    },
    {
        "id": 590,
        "pais_id": 29,
        "nombre": "Basilicata - Matera"
    },
    {
        "id": 591,
        "pais_id": 29,
        "nombre": "Calabria - Catanzaro"
    },
    {
        "id": 592,
        "pais_id": 29,
        "nombre": "Calabria - Cosenza"
    },
    {
        "id": 593,
        "pais_id": 29,
        "nombre": "Calabria - Crotone"
    },
    {
        "id": 594,
        "pais_id": 29,
        "nombre": "Calabria - Reggio Calabria"
    },
    {
        "id": 595,
        "pais_id": 29,
        "nombre": "Calabria - Vibo Valentia"
    },
    {
        "id": 596,
        "pais_id": 29,
        "nombre": "Sicilia - Palermo"
    },
    {
        "id": 597,
        "pais_id": 29,
        "nombre": "Sicilia - Agrigento"
    },
    {
        "id": 598,
        "pais_id": 29,
        "nombre": "Sicilia - Caltanissetta"
    },
    {
        "id": 599,
        "pais_id": 29,
        "nombre": "Sicilia - Catania"
    },
    {
        "id": 600,
        "pais_id": 29,
        "nombre": "Sicilia - Enna"
    },
    {
        "id": 601,
        "pais_id": 29,
        "nombre": "Sicilia - Messina"
    },
    {
        "id": 602,
        "pais_id": 29,
        "nombre": "Sicilia - Ragusa"
    },
    {
        "id": 603,
        "pais_id": 29,
        "nombre": "Sicilia - Siracusa"
    },
    {
        "id": 604,
        "pais_id": 29,
        "nombre": "Sicilia - Trapani"
    },
    {
        "id": 605,
        "pais_id": 29,
        "nombre": "Sardegna - Cagliari"
    },
    {
        "id": 606,
        "pais_id": 29,
        "nombre": "Sardegna - Nuoro"
    },
    {
        "id": 607,
        "pais_id": 29,
        "nombre": "Sardegna - Oristano"
    },
    {
        "id": 608,
        "pais_id": 29,
        "nombre": "Sardegna - Sassari"
    },
    {
        "id": 609,
        "pais_id": 28,
        "nombre": "Las Palmas"
    },
    {
        "id": 610,
        "pais_id": 28,
        "nombre": "Soria"
    },
    {
        "id": 611,
        "pais_id": 28,
        "nombre": "Palencia"
    },
    {
        "id": 612,
        "pais_id": 28,
        "nombre": "Zamora"
    },
    {
        "id": 613,
        "pais_id": 28,
        "nombre": "Cádiz"
    },
    {
        "id": 614,
        "pais_id": 28,
        "nombre": "Navarra"
    },
    {
        "id": 615,
        "pais_id": 28,
        "nombre": "Ourense"
    },
    {
        "id": 616,
        "pais_id": 28,
        "nombre": "Segovia"
    },
    {
        "id": 617,
        "pais_id": 28,
        "nombre": "Guipúzcoa"
    },
    {
        "id": 618,
        "pais_id": 28,
        "nombre": "Ciudad Real"
    },
    {
        "id": 619,
        "pais_id": 28,
        "nombre": "Vizcaya"
    },
    {
        "id": 620,
        "pais_id": 28,
        "nombre": "Álava"
    },
    {
        "id": 621,
        "pais_id": 28,
        "nombre": "A Coruña"
    },
    {
        "id": 622,
        "pais_id": 28,
        "nombre": "Cantabria"
    },
    {
        "id": 623,
        "pais_id": 28,
        "nombre": "Almería"
    },
    {
        "id": 624,
        "pais_id": 28,
        "nombre": "Zaragoza"
    },
    {
        "id": 625,
        "pais_id": 28,
        "nombre": "Santa Cruz de Tenerife"
    },
    {
        "id": 626,
        "pais_id": 28,
        "nombre": "Cáceres"
    },
    {
        "id": 627,
        "pais_id": 28,
        "nombre": "Guadalajara"
    },
    {
        "id": 628,
        "pais_id": 28,
        "nombre": "Ávila"
    },
    {
        "id": 629,
        "pais_id": 28,
        "nombre": "Toledo"
    },
    {
        "id": 630,
        "pais_id": 28,
        "nombre": "Castellón"
    },
    {
        "id": 631,
        "pais_id": 28,
        "nombre": "Tarragona"
    },
    {
        "id": 632,
        "pais_id": 28,
        "nombre": "Lugo"
    },
    {
        "id": 633,
        "pais_id": 28,
        "nombre": "La Rioja"
    },
    {
        "id": 634,
        "pais_id": 28,
        "nombre": "Ceuta"
    },
    {
        "id": 635,
        "pais_id": 28,
        "nombre": "Murcia"
    },
    {
        "id": 636,
        "pais_id": 28,
        "nombre": "Salamanca"
    },
    {
        "id": 637,
        "pais_id": 28,
        "nombre": "Valladolid"
    },
    {
        "id": 638,
        "pais_id": 28,
        "nombre": "Jaén"
    },
    {
        "id": 639,
        "pais_id": 28,
        "nombre": "Girona"
    },
    {
        "id": 640,
        "pais_id": 28,
        "nombre": "Granada"
    },
    {
        "id": 641,
        "pais_id": 28,
        "nombre": "Alacant"
    },
    {
        "id": 642,
        "pais_id": 28,
        "nombre": "Córdoba"
    },
    {
        "id": 643,
        "pais_id": 28,
        "nombre": "Albacete"
    },
    {
        "id": 644,
        "pais_id": 28,
        "nombre": "Cuenca"
    },
    {
        "id": 645,
        "pais_id": 28,
        "nombre": "Pontevedra"
    },
    {
        "id": 646,
        "pais_id": 28,
        "nombre": "Teruel"
    },
    {
        "id": 647,
        "pais_id": 28,
        "nombre": "Melilla"
    },
    {
        "id": 648,
        "pais_id": 28,
        "nombre": "Barcelona"
    },
    {
        "id": 649,
        "pais_id": 28,
        "nombre": "Badajoz"
    },
    {
        "id": 650,
        "pais_id": 28,
        "nombre": "Madrid"
    },
    {
        "id": 651,
        "pais_id": 28,
        "nombre": "Sevilla"
    },
    {
        "id": 652,
        "pais_id": 28,
        "nombre": "València"
    },
    {
        "id": 653,
        "pais_id": 28,
        "nombre": "Huelva"
    },
    {
        "id": 654,
        "pais_id": 28,
        "nombre": "Lleida"
    },
    {
        "id": 655,
        "pais_id": 28,
        "nombre": "León"
    },
    {
        "id": 656,
        "pais_id": 28,
        "nombre": "Illes Balears"
    },
    {
        "id": 657,
        "pais_id": 28,
        "nombre": "Burgos"
    },
    {
        "id": 658,
        "pais_id": 28,
        "nombre": "Huesca"
    },
    {
        "id": 659,
        "pais_id": 28,
        "nombre": "Asturias"
    },
    {
        "id": 660,
        "pais_id": 28,
        "nombre": "Málaga"
    },
    {
        "id": 661,
        "pais_id": 144,
        "nombre": "Afghanistan"
    },
    {
        "id": 662,
        "pais_id": 210,
        "nombre": "Niger"
    },
    {
        "id": 663,
        "pais_id": 133,
        "nombre": "Mali"
    },
    {
        "id": 664,
        "pais_id": 156,
        "nombre": "Burkina Faso"
    },
    {
        "id": 665,
        "pais_id": 136,
        "nombre": "Togo"
    },
    {
        "id": 666,
        "pais_id": 151,
        "nombre": "Benin"
    },
    {
        "id": 667,
        "pais_id": 119,
        "nombre": "Angola"
    },
    {
        "id": 668,
        "pais_id": 102,
        "nombre": "Namibia"
    },
    {
        "id": 669,
        "pais_id": 100,
        "nombre": "Botswana"
    },
    {
        "id": 670,
        "pais_id": 134,
        "nombre": "Madagascar"
    },
    {
        "id": 671,
        "pais_id": 202,
        "nombre": "Mauritius"
    },
    {
        "id": 672,
        "pais_id": 196,
        "nombre": "Laos"
    },
    {
        "id": 673,
        "pais_id": 158,
        "nombre": "Cambodia"
    },
    {
        "id": 674,
        "pais_id": 90,
        "nombre": "Philippines"
    },
    {
        "id": 675,
        "pais_id": 88,
        "nombre": "Papua New Guinea"
    },
    {
        "id": 676,
        "pais_id": 228,
        "nombre": "Solomon Islands"
    },
    {
        "id": 677,
        "pais_id": 240,
        "nombre": "Vanuatu"
    },
    {
        "id": 678,
        "pais_id": 176,
        "nombre": "Fiji"
    },
    {
        "id": 679,
        "pais_id": 223,
        "nombre": "Samoa"
    },
    {
        "id": 680,
        "pais_id": 206,
        "nombre": "Nauru"
    },
    {
        "id": 681,
        "pais_id": 168,
        "nombre": "Cote DIvoire"
    },
    {
        "id": 682,
        "pais_id": 198,
        "nombre": "Liberia"
    },
    {
        "id": 683,
        "pais_id": 187,
        "nombre": "Guinea"
    },
    {
        "id": 684,
        "pais_id": 189,
        "nombre": "Guyana"
    },
    {
        "id": 685,
        "pais_id": 98,
        "nombre": "Algeria"
    },
    {
        "id": 686,
        "pais_id": 147,
        "nombre": "Antigua and Barbuda"
    },
    {
        "id": 687,
        "pais_id": 127,
        "nombre": "Bahrain"
    },
    {
        "id": 688,
        "pais_id": 149,
        "nombre": "Bangladesh"
    },
    {
        "id": 689,
        "pais_id": 128,
        "nombre": "Barbados"
    },
    {
        "id": 690,
        "pais_id": 152,
        "nombre": "Bhutan"
    },
    {
        "id": 691,
        "pais_id": 155,
        "nombre": "Brunei"
    },
    {
        "id": 692,
        "pais_id": 157,
        "nombre": "Burundi"
    },
    {
        "id": 693,
        "pais_id": 159,
        "nombre": "Cape Verde"
    },
    {
        "id": 694,
        "pais_id": 130,
        "nombre": "Chad"
    },
    {
        "id": 695,
        "pais_id": 164,
        "nombre": "Comoros"
    },
    {
        "id": 696,
        "pais_id": 112,
        "nombre": "Congo (Brazzaville)"
    },
    {
        "id": 697,
        "pais_id": 169,
        "nombre": "Djibouti"
    },
    {
        "id": 698,
        "pais_id": 171,
        "nombre": "East Timor"
    },
    {
        "id": 699,
        "pais_id": 173,
        "nombre": "Eritrea"
    },
    {
        "id": 700,
        "pais_id": 121,
        "nombre": "Ethiopia"
    },
    {
        "id": 701,
        "pais_id": 180,
        "nombre": "Gabon"
    },
    {
        "id": 702,
        "pais_id": 181,
        "nombre": "Gambia"
    },
    {
        "id": 703,
        "pais_id": 105,
        "nombre": "Ghana"
    },
    {
        "id": 704,
        "pais_id": 197,
        "nombre": "Lesotho"
    },
    {
        "id": 705,
        "pais_id": 125,
        "nombre": "Malawi"
    },
    {
        "id": 706,
        "pais_id": 200,
        "nombre": "Maldives"
    },
    {
        "id": 707,
        "pais_id": 205,
        "nombre": "Myanmar (Burma)"
    },
    {
        "id": 708,
        "pais_id": 107,
        "nombre": "Nepal"
    },
    {
        "id": 709,
        "pais_id": 213,
        "nombre": "Oman"
    },
    {
        "id": 710,
        "pais_id": 217,
        "nombre": "Rwanda"
    },
    {
        "id": 711,
        "pais_id": 91,
        "nombre": "Saudi Arabia"
    },
    {
        "id": 712,
        "pais_id": 120,
        "nombre": "Sri Lanka"
    },
    {
        "id": 713,
        "pais_id": 232,
        "nombre": "Sudan"
    },
    {
        "id": 714,
        "pais_id": 234,
        "nombre": "Swaziland"
    },
    {
        "id": 715,
        "pais_id": 101,
        "nombre": "Tanzania"
    },
    {
        "id": 716,
        "pais_id": 236,
        "nombre": "Tonga"
    },
    {
        "id": 717,
        "pais_id": 239,
        "nombre": "Tuvalu"
    },
    {
        "id": 718,
        "pais_id": 242,
        "nombre": "Western Sahara"
    },
    {
        "id": 719,
        "pais_id": 243,
        "nombre": "Yemen"
    },
    {
        "id": 720,
        "pais_id": 116,
        "nombre": "Zambia"
    },
    {
        "id": 721,
        "pais_id": 96,
        "nombre": "Zimbabwe"
    },
    {
        "id": 722,
        "pais_id": 66,
        "nombre": "Aargau"
    },
    {
        "id": 723,
        "pais_id": 66,
        "nombre": "Appenzell Innerrhoden"
    },
    {
        "id": 724,
        "pais_id": 66,
        "nombre": "Appenzell Ausserrhoden"
    },
    {
        "id": 725,
        "pais_id": 66,
        "nombre": "Bern"
    },
    {
        "id": 726,
        "pais_id": 66,
        "nombre": "Basel-Landschaft"
    },
    {
        "id": 727,
        "pais_id": 66,
        "nombre": "Basel-Stadt"
    },
    {
        "id": 728,
        "pais_id": 66,
        "nombre": "Fribourg"
    },
    {
        "id": 729,
        "pais_id": 66,
        "nombre": "Genève"
    },
    {
        "id": 730,
        "pais_id": 66,
        "nombre": "Glarus"
    },
    {
        "id": 731,
        "pais_id": 66,
        "nombre": "Graubünden"
    },
    {
        "id": 732,
        "pais_id": 66,
        "nombre": "Jura"
    },
    {
        "id": 733,
        "pais_id": 66,
        "nombre": "Luzern"
    },
    {
        "id": 734,
        "pais_id": 66,
        "nombre": "Neuchâtel"
    },
    {
        "id": 735,
        "pais_id": 66,
        "nombre": "Nidwalden"
    },
    {
        "id": 736,
        "pais_id": 66,
        "nombre": "Obwalden"
    },
    {
        "id": 737,
        "pais_id": 66,
        "nombre": "Sankt Gallen"
    },
    {
        "id": 738,
        "pais_id": 66,
        "nombre": "Schaffhausen"
    },
    {
        "id": 739,
        "pais_id": 66,
        "nombre": "Solothurn"
    },
    {
        "id": 740,
        "pais_id": 66,
        "nombre": "Schwyz"
    },
    {
        "id": 741,
        "pais_id": 66,
        "nombre": "Thurgau"
    },
    {
        "id": 742,
        "pais_id": 66,
        "nombre": "Ticino"
    },
    {
        "id": 743,
        "pais_id": 66,
        "nombre": "Uri"
    },
    {
        "id": 744,
        "pais_id": 66,
        "nombre": "Vaud"
    },
    {
        "id": 745,
        "pais_id": 66,
        "nombre": "Valais"
    },
    {
        "id": 746,
        "pais_id": 66,
        "nombre": "Zug"
    },
    {
        "id": 747,
        "pais_id": 66,
        "nombre": "Zürich"
    },
    {
        "id": 749,
        "pais_id": 48,
        "nombre": "Aveiro"
    },
    {
        "id": 750,
        "pais_id": 48,
        "nombre": "Beja"
    },
    {
        "id": 751,
        "pais_id": 48,
        "nombre": "Braga"
    },
    {
        "id": 752,
        "pais_id": 48,
        "nombre": "Braganca"
    },
    {
        "id": 753,
        "pais_id": 48,
        "nombre": "Castelo Branco"
    },
    {
        "id": 754,
        "pais_id": 48,
        "nombre": "Coimbra"
    },
    {
        "id": 755,
        "pais_id": 48,
        "nombre": "Evora"
    },
    {
        "id": 756,
        "pais_id": 48,
        "nombre": "Faro"
    },
    {
        "id": 757,
        "pais_id": 48,
        "nombre": "Madeira"
    },
    {
        "id": 758,
        "pais_id": 48,
        "nombre": "Guarda"
    },
    {
        "id": 759,
        "pais_id": 48,
        "nombre": "Leiria"
    },
    {
        "id": 760,
        "pais_id": 48,
        "nombre": "Lisboa"
    },
    {
        "id": 761,
        "pais_id": 48,
        "nombre": "Portalegre"
    },
    {
        "id": 762,
        "pais_id": 48,
        "nombre": "Porto"
    },
    {
        "id": 763,
        "pais_id": 48,
        "nombre": "Santarem"
    },
    {
        "id": 764,
        "pais_id": 48,
        "nombre": "Setubal"
    },
    {
        "id": 765,
        "pais_id": 48,
        "nombre": "Viana do Castelo"
    },
    {
        "id": 766,
        "pais_id": 48,
        "nombre": "Vila Real"
    },
    {
        "id": 767,
        "pais_id": 48,
        "nombre": "Viseu"
    },
    {
        "id": 768,
        "pais_id": 48,
        "nombre": "Azores"
    },
    {
        "id": 769,
        "pais_id": 55,
        "nombre": "Armed Forces Americas"
    },
    {
        "id": 770,
        "pais_id": 55,
        "nombre": "Armed Forces Europe"
    },
    {
        "id": 771,
        "pais_id": 55,
        "nombre": "Alaska"
    },
    {
        "id": 772,
        "pais_id": 55,
        "nombre": "Alabama"
    },
    {
        "id": 773,
        "pais_id": 55,
        "nombre": "Armed Forces Pacific"
    },
    {
        "id": 774,
        "pais_id": 55,
        "nombre": "Arkansas"
    },
    {
        "id": 775,
        "pais_id": 55,
        "nombre": "American Samoa"
    },
    {
        "id": 776,
        "pais_id": 55,
        "nombre": "Arizona"
    },
    {
        "id": 777,
        "pais_id": 55,
        "nombre": "California"
    },
    {
        "id": 778,
        "pais_id": 55,
        "nombre": "Colorado"
    },
    {
        "id": 779,
        "pais_id": 55,
        "nombre": "Connecticut"
    },
    {
        "id": 780,
        "pais_id": 55,
        "nombre": "District of Columbia"
    },
    {
        "id": 781,
        "pais_id": 55,
        "nombre": "Delaware"
    },
    {
        "id": 782,
        "pais_id": 55,
        "nombre": "Florida"
    },
    {
        "id": 783,
        "pais_id": 55,
        "nombre": "Federated States of Micronesia"
    },
    {
        "id": 784,
        "pais_id": 55,
        "nombre": "Georgia"
    },
    {
        "id": 786,
        "pais_id": 55,
        "nombre": "Hawaii"
    },
    {
        "id": 787,
        "pais_id": 55,
        "nombre": "Iowa"
    },
    {
        "id": 788,
        "pais_id": 55,
        "nombre": "Idaho"
    },
    {
        "id": 789,
        "pais_id": 55,
        "nombre": "Illinois"
    },
    {
        "id": 790,
        "pais_id": 55,
        "nombre": "Indiana"
    },
    {
        "id": 791,
        "pais_id": 55,
        "nombre": "Kansas"
    },
    {
        "id": 792,
        "pais_id": 55,
        "nombre": "Kentucky"
    },
    {
        "id": 793,
        "pais_id": 55,
        "nombre": "Louisiana"
    },
    {
        "id": 794,
        "pais_id": 55,
        "nombre": "Massachusetts"
    },
    {
        "id": 795,
        "pais_id": 55,
        "nombre": "Maryland"
    },
    {
        "id": 796,
        "pais_id": 55,
        "nombre": "Maine"
    },
    {
        "id": 797,
        "pais_id": 55,
        "nombre": "Marshall Islands"
    },
    {
        "id": 798,
        "pais_id": 55,
        "nombre": "Michigan"
    },
    {
        "id": 799,
        "pais_id": 55,
        "nombre": "Minnesota"
    },
    {
        "id": 800,
        "pais_id": 55,
        "nombre": "Missouri"
    },
    {
        "id": 801,
        "pais_id": 55,
        "nombre": "Northern Mariana Islands"
    },
    {
        "id": 802,
        "pais_id": 55,
        "nombre": "Mississippi"
    },
    {
        "id": 803,
        "pais_id": 55,
        "nombre": "Montana"
    },
    {
        "id": 804,
        "pais_id": 55,
        "nombre": "North Carolina"
    },
    {
        "id": 805,
        "pais_id": 55,
        "nombre": "North Dakota"
    },
    {
        "id": 806,
        "pais_id": 55,
        "nombre": "Nebraska"
    },
    {
        "id": 807,
        "pais_id": 55,
        "nombre": "New Hampshire"
    },
    {
        "id": 808,
        "pais_id": 55,
        "nombre": "New Jersey"
    },
    {
        "id": 809,
        "pais_id": 55,
        "nombre": "New Mexico"
    },
    {
        "id": 810,
        "pais_id": 55,
        "nombre": "Nevada"
    },
    {
        "id": 811,
        "pais_id": 55,
        "nombre": "New York"
    },
    {
        "id": 812,
        "pais_id": 55,
        "nombre": "Ohio"
    },
    {
        "id": 813,
        "pais_id": 55,
        "nombre": "Oklahoma"
    },
    {
        "id": 814,
        "pais_id": 55,
        "nombre": "Oregon"
    },
    {
        "id": 815,
        "pais_id": 55,
        "nombre": "Pennsylvania"
    },
    {
        "id": 816,
        "pais_id": 246,
        "nombre": "Puerto Rico"
    },
    {
        "id": 817,
        "pais_id": 55,
        "nombre": "Palau"
    },
    {
        "id": 818,
        "pais_id": 55,
        "nombre": "Rhode Island"
    },
    {
        "id": 819,
        "pais_id": 55,
        "nombre": "South Carolina"
    },
    {
        "id": 820,
        "pais_id": 55,
        "nombre": "South Dakota"
    },
    {
        "id": 821,
        "pais_id": 55,
        "nombre": "Tennessee"
    },
    {
        "id": 822,
        "pais_id": 55,
        "nombre": "Texas"
    },
    {
        "id": 823,
        "pais_id": 55,
        "nombre": "Utah"
    },
    {
        "id": 824,
        "pais_id": 55,
        "nombre": "Virginia"
    },
    {
        "id": 825,
        "pais_id": 55,
        "nombre": "Virgin Islands"
    },
    {
        "id": 826,
        "pais_id": 55,
        "nombre": "Vermont"
    },
    {
        "id": 827,
        "pais_id": 55,
        "nombre": "Washington"
    },
    {
        "id": 828,
        "pais_id": 55,
        "nombre": "West Virginia"
    },
    {
        "id": 829,
        "pais_id": 55,
        "nombre": "Wisconsin"
    },
    {
        "id": 830,
        "pais_id": 55,
        "nombre": "Wyoming"
    },
    {
        "id": 831,
        "pais_id": 94,
        "nombre": "Greenland"
    },
    {
        "id": 832,
        "pais_id": 18,
        "nombre": "Brandenburg"
    },
    {
        "id": 833,
        "pais_id": 18,
        "nombre": "Baden-Württemberg"
    },
    {
        "id": 834,
        "pais_id": 18,
        "nombre": "Bayern"
    },
    {
        "id": 835,
        "pais_id": 18,
        "nombre": "Hessen"
    },
    {
        "id": 836,
        "pais_id": 18,
        "nombre": "Hamburg"
    },
    {
        "id": 837,
        "pais_id": 18,
        "nombre": "Mecklenburg-Vorpommern"
    },
    {
        "id": 838,
        "pais_id": 18,
        "nombre": "Niedersachsen"
    },
    {
        "id": 839,
        "pais_id": 18,
        "nombre": "Nordrhein-Westfalen"
    },
    {
        "id": 840,
        "pais_id": 18,
        "nombre": "Rheinland-Pfalz"
    },
    {
        "id": 841,
        "pais_id": 18,
        "nombre": "Schleswig-Holstein"
    },
    {
        "id": 842,
        "pais_id": 18,
        "nombre": "Sachsen"
    },
    {
        "id": 843,
        "pais_id": 18,
        "nombre": "Sachsen-Anhalt"
    },
    {
        "id": 844,
        "pais_id": 18,
        "nombre": "Thüringen"
    },
    {
        "id": 845,
        "pais_id": 18,
        "nombre": "Berlin"
    },
    {
        "id": 846,
        "pais_id": 18,
        "nombre": "Bremen"
    },
    {
        "id": 847,
        "pais_id": 18,
        "nombre": "Saarland"
    },
    {
        "id": 848,
        "pais_id": 13,
        "nombre": "Scotland North"
    },
    {
        "id": 849,
        "pais_id": 13,
        "nombre": "England - East"
    },
    {
        "id": 850,
        "pais_id": 13,
        "nombre": "England - West Midlands"
    },
    {
        "id": 851,
        "pais_id": 13,
        "nombre": "England - South West"
    },
    {
        "id": 852,
        "pais_id": 13,
        "nombre": "England - North West"
    },
    {
        "id": 853,
        "pais_id": 13,
        "nombre": "England - Yorks Y Humber"
    },
    {
        "id": 854,
        "pais_id": 13,
        "nombre": "England - South East"
    },
    {
        "id": 855,
        "pais_id": 13,
        "nombre": "England - London"
    },
    {
        "id": 856,
        "pais_id": 13,
        "nombre": "Northern Ireland"
    },
    {
        "id": 857,
        "pais_id": 13,
        "nombre": "England - North East"
    },
    {
        "id": 858,
        "pais_id": 13,
        "nombre": "Wales South"
    },
    {
        "id": 859,
        "pais_id": 13,
        "nombre": "Wales North"
    },
    {
        "id": 860,
        "pais_id": 13,
        "nombre": "England - East Midlands"
    },
    {
        "id": 861,
        "pais_id": 13,
        "nombre": "Scotland Central"
    },
    {
        "id": 862,
        "pais_id": 13,
        "nombre": "Scotland South"
    },
    {
        "id": 863,
        "pais_id": 13,
        "nombre": "Channel Islands"
    },
    {
        "id": 864,
        "pais_id": 13,
        "nombre": "Isle of Man"
    },
    {
        "id": 865,
        "pais_id": 2,
        "nombre": "Burgenland"
    },
    {
        "id": 866,
        "pais_id": 2,
        "nombre": "Kärnten"
    },
    {
        "id": 867,
        "pais_id": 2,
        "nombre": "Niederösterreich"
    },
    {
        "id": 868,
        "pais_id": 2,
        "nombre": "Oberösterreich"
    },
    {
        "id": 869,
        "pais_id": 2,
        "nombre": "Salzburg"
    },
    {
        "id": 870,
        "pais_id": 2,
        "nombre": "Steiermark"
    },
    {
        "id": 871,
        "pais_id": 2,
        "nombre": "Tirol"
    },
    {
        "id": 872,
        "pais_id": 2,
        "nombre": "Vorarlberg"
    },
    {
        "id": 873,
        "pais_id": 2,
        "nombre": "Wien"
    },
    {
        "id": 874,
        "pais_id": 9,
        "nombre": "Bruxelles"
    },
    {
        "id": 875,
        "pais_id": 9,
        "nombre": "West-Vlaanderen"
    },
    {
        "id": 876,
        "pais_id": 9,
        "nombre": "Oost-Vlaanderen"
    },
    {
        "id": 877,
        "pais_id": 9,
        "nombre": "Limburg"
    },
    {
        "id": 878,
        "pais_id": 9,
        "nombre": "Vlaams Brabant"
    },
    {
        "id": 879,
        "pais_id": 9,
        "nombre": "Antwerpen"
    },
    {
        "id": 880,
        "pais_id": 9,
        "nombre": "LiÃ„Â ge"
    },
    {
        "id": 881,
        "pais_id": 9,
        "nombre": "Namur"
    },
    {
        "id": 882,
        "pais_id": 9,
        "nombre": "Hainaut"
    },
    {
        "id": 883,
        "pais_id": 9,
        "nombre": "Luxembourg"
    },
    {
        "id": 884,
        "pais_id": 9,
        "nombre": "Brabant Wallon"
    },
    {
        "id": 887,
        "pais_id": 67,
        "nombre": "Blekinge Lan"
    },
    {
        "id": 888,
        "pais_id": 67,
        "nombre": "Gavleborgs Lan"
    },
    {
        "id": 890,
        "pais_id": 67,
        "nombre": "Gotlands Lan"
    },
    {
        "id": 891,
        "pais_id": 67,
        "nombre": "Hallands Lan"
    },
    {
        "id": 892,
        "pais_id": 67,
        "nombre": "Jamtlands Lan"
    },
    {
        "id": 893,
        "pais_id": 67,
        "nombre": "Jonkopings Lan"
    },
    {
        "id": 894,
        "pais_id": 67,
        "nombre": "Kalmar Lan"
    },
    {
        "id": 895,
        "pais_id": 67,
        "nombre": "Dalarnas Lan"
    },
    {
        "id": 897,
        "pais_id": 67,
        "nombre": "Kronobergs Lan"
    },
    {
        "id": 899,
        "pais_id": 67,
        "nombre": "Norrbottens Lan"
    },
    {
        "id": 900,
        "pais_id": 67,
        "nombre": "Orebro Lan"
    },
    {
        "id": 901,
        "pais_id": 67,
        "nombre": "Ostergotlands Lan"
    },
    {
        "id": 903,
        "pais_id": 67,
        "nombre": "Sodermanlands Lan"
    },
    {
        "id": 904,
        "pais_id": 67,
        "nombre": "Uppsala Lan"
    },
    {
        "id": 905,
        "pais_id": 67,
        "nombre": "Varmlands Lan"
    },
    {
        "id": 906,
        "pais_id": 67,
        "nombre": "Vasterbottens Lan"
    },
    {
        "id": 907,
        "pais_id": 67,
        "nombre": "Vasternorrlands Lan"
    },
    {
        "id": 908,
        "pais_id": 67,
        "nombre": "Vastmanlands Lan"
    },
    {
        "id": 909,
        "pais_id": 67,
        "nombre": "Stockholms Lan"
    },
    {
        "id": 910,
        "pais_id": 67,
        "nombre": "Skane Lan"
    },
    {
        "id": 911,
        "pais_id": 67,
        "nombre": "Vastra Gotaland"
    },
    {
        "id": 913,
        "pais_id": 46,
        "nombre": "Akershus"
    },
    {
        "id": 914,
        "pais_id": 46,
        "nombre": "Aust-Agder"
    },
    {
        "id": 915,
        "pais_id": 46,
        "nombre": "Buskerud"
    },
    {
        "id": 916,
        "pais_id": 46,
        "nombre": "Finnmark"
    },
    {
        "id": 917,
        "pais_id": 46,
        "nombre": "Hedmark"
    },
    {
        "id": 918,
        "pais_id": 46,
        "nombre": "Hordaland"
    },
    {
        "id": 919,
        "pais_id": 46,
        "nombre": "More og Romsdal"
    },
    {
        "id": 920,
        "pais_id": 46,
        "nombre": "Nordland"
    },
    {
        "id": 921,
        "pais_id": 46,
        "nombre": "Nord-Trondelag"
    },
    {
        "id": 922,
        "pais_id": 46,
        "nombre": "Oppland"
    },
    {
        "id": 923,
        "pais_id": 46,
        "nombre": "Oslo"
    },
    {
        "id": 924,
        "pais_id": 46,
        "nombre": "Ostfold"
    },
    {
        "id": 925,
        "pais_id": 46,
        "nombre": "Rogaland"
    },
    {
        "id": 926,
        "pais_id": 46,
        "nombre": "Sogn og Fjordane"
    },
    {
        "id": 927,
        "pais_id": 46,
        "nombre": "Sor-Trondelag"
    },
    {
        "id": 928,
        "pais_id": 46,
        "nombre": "Telemark"
    },
    {
        "id": 929,
        "pais_id": 46,
        "nombre": "Troms"
    },
    {
        "id": 930,
        "pais_id": 46,
        "nombre": "Vest-Agder"
    },
    {
        "id": 931,
        "pais_id": 46,
        "nombre": "Vestfold"
    },
    {
        "id": 933,
        "pais_id": 63,
        "nombre": "Ð•land"
    },
    {
        "id": 934,
        "pais_id": 63,
        "nombre": "Lapland"
    },
    {
        "id": 935,
        "pais_id": 63,
        "nombre": "Oulu"
    },
    {
        "id": 936,
        "pais_id": 63,
        "nombre": "Southern Finland"
    },
    {
        "id": 937,
        "pais_id": 63,
        "nombre": "Eastern Finland"
    },
    {
        "id": 938,
        "pais_id": 63,
        "nombre": "Western Finland"
    },
    {
        "id": 940,
        "pais_id": 22,
        "nombre": "Arhus"
    },
    {
        "id": 941,
        "pais_id": 22,
        "nombre": "Bornholm"
    },
    {
        "id": 942,
        "pais_id": 22,
        "nombre": "Frederiksborg"
    },
    {
        "id": 943,
        "pais_id": 22,
        "nombre": "Fyn"
    },
    {
        "id": 944,
        "pais_id": 22,
        "nombre": "Kobenhavn"
    },
    {
        "id": 945,
        "pais_id": 22,
        "nombre": "Staden Kobenhavn"
    },
    {
        "id": 946,
        "pais_id": 22,
        "nombre": "Nordjylland"
    },
    {
        "id": 947,
        "pais_id": 22,
        "nombre": "Ribe"
    },
    {
        "id": 948,
        "pais_id": 22,
        "nombre": "Ringkobing"
    },
    {
        "id": 949,
        "pais_id": 22,
        "nombre": "Roskilde"
    },
    {
        "id": 950,
        "pais_id": 22,
        "nombre": "Sonderjylland"
    },
    {
        "id": 951,
        "pais_id": 22,
        "nombre": "Storstrom"
    },
    {
        "id": 952,
        "pais_id": 22,
        "nombre": "Vejle"
    },
    {
        "id": 953,
        "pais_id": 22,
        "nombre": "Vestsjalland"
    },
    {
        "id": 954,
        "pais_id": 22,
        "nombre": "Viborg"
    },
    {
        "id": 956,
        "pais_id": 65,
        "nombre": "Hlavni Mesto Praha"
    },
    {
        "id": 957,
        "pais_id": 65,
        "nombre": "Jihomoravsky Kraj"
    },
    {
        "id": 958,
        "pais_id": 65,
        "nombre": "Jihocesky Kraj"
    },
    {
        "id": 959,
        "pais_id": 65,
        "nombre": "Vysocina"
    },
    {
        "id": 960,
        "pais_id": 65,
        "nombre": "Karlovarsky Kraj"
    },
    {
        "id": 961,
        "pais_id": 65,
        "nombre": "Kralovehradecky Kraj"
    },
    {
        "id": 962,
        "pais_id": 65,
        "nombre": "Liberecky Kraj"
    },
    {
        "id": 963,
        "pais_id": 65,
        "nombre": "Olomoucky Kraj"
    },
    {
        "id": 964,
        "pais_id": 65,
        "nombre": "Moravskoslezsky Kraj"
    },
    {
        "id": 965,
        "pais_id": 65,
        "nombre": "Pardubicky Kraj"
    },
    {
        "id": 966,
        "pais_id": 65,
        "nombre": "Plzensky Kraj"
    },
    {
        "id": 967,
        "pais_id": 65,
        "nombre": "Stredocesky Kraj"
    },
    {
        "id": 968,
        "pais_id": 65,
        "nombre": "Ustecky Kraj"
    },
    {
        "id": 969,
        "pais_id": 65,
        "nombre": "Zlinsky Kraj"
    },
    {
        "id": 971,
        "pais_id": 114,
        "nombre": "Berat"
    },
    {
        "id": 972,
        "pais_id": 114,
        "nombre": "Diber"
    },
    {
        "id": 973,
        "pais_id": 114,
        "nombre": "Durres"
    },
    {
        "id": 974,
        "pais_id": 114,
        "nombre": "Elbasan"
    },
    {
        "id": 975,
        "pais_id": 114,
        "nombre": "Fier"
    },
    {
        "id": 976,
        "pais_id": 114,
        "nombre": "Gjirokaster"
    },
    {
        "id": 977,
        "pais_id": 114,
        "nombre": "Korce"
    },
    {
        "id": 978,
        "pais_id": 114,
        "nombre": "Kukes"
    },
    {
        "id": 979,
        "pais_id": 114,
        "nombre": "Lezhe"
    },
    {
        "id": 980,
        "pais_id": 114,
        "nombre": "Shkoder"
    },
    {
        "id": 981,
        "pais_id": 114,
        "nombre": "Tirane"
    },
    {
        "id": 982,
        "pais_id": 114,
        "nombre": "Vlore"
    },
    {
        "id": 984,
        "pais_id": 145,
        "nombre": "Canillo"
    },
    {
        "id": 985,
        "pais_id": 145,
        "nombre": "Encamp"
    },
    {
        "id": 986,
        "pais_id": 145,
        "nombre": "La Massana"
    },
    {
        "id": 987,
        "pais_id": 145,
        "nombre": "Ordino"
    },
    {
        "id": 988,
        "pais_id": 145,
        "nombre": "Sant Julia de Loria"
    },
    {
        "id": 989,
        "pais_id": 145,
        "nombre": "Andorra la Vella"
    },
    {
        "id": 990,
        "pais_id": 145,
        "nombre": "Escaldes-Engordany"
    },
    {
        "id": 992,
        "pais_id": 6,
        "nombre": "Aragatsotn"
    },
    {
        "id": 993,
        "pais_id": 6,
        "nombre": "Ararat"
    },
    {
        "id": 994,
        "pais_id": 6,
        "nombre": "Armavir"
    },
    {
        "id": 995,
        "pais_id": 6,
        "nombre": "Gegharkunik"
    },
    {
        "id": 996,
        "pais_id": 6,
        "nombre": "Kotayk"
    },
    {
        "id": 997,
        "pais_id": 6,
        "nombre": "Lorri"
    },
    {
        "id": 998,
        "pais_id": 6,
        "nombre": "Shirak"
    },
    {
        "id": 999,
        "pais_id": 6,
        "nombre": "Syunik"
    },
    {
        "id": 1000,
        "pais_id": 6,
        "nombre": "Tavush"
    },
    {
        "id": 1001,
        "pais_id": 6,
        "nombre": "Vayots Dzor"
    },
    {
        "id": 1002,
        "pais_id": 6,
        "nombre": "Yerevan"
    },
    {
        "id": 1004,
        "pais_id": 79,
        "nombre": "Federation of Bosnia and Herzegovina"
    },
    {
        "id": 1005,
        "pais_id": 79,
        "nombre": "Republika Srpska"
    },
    {
        "id": 1007,
        "pais_id": 11,
        "nombre": "Mikhaylovgrad"
    },
    {
        "id": 1008,
        "pais_id": 11,
        "nombre": "Blagoevgrad"
    },
    {
        "id": 1009,
        "pais_id": 11,
        "nombre": "Burgas"
    },
    {
        "id": 1010,
        "pais_id": 11,
        "nombre": "Dobrich"
    },
    {
        "id": 1011,
        "pais_id": 11,
        "nombre": "Gabrovo"
    },
    {
        "id": 1012,
        "pais_id": 11,
        "nombre": "Grad Sofiya"
    },
    {
        "id": 1013,
        "pais_id": 11,
        "nombre": "Khaskovo"
    },
    {
        "id": 1014,
        "pais_id": 11,
        "nombre": "Kurdzhali"
    },
    {
        "id": 1015,
        "pais_id": 11,
        "nombre": "Kyustendil"
    },
    {
        "id": 1016,
        "pais_id": 11,
        "nombre": "Lovech"
    },
    {
        "id": 1017,
        "pais_id": 11,
        "nombre": "Montana"
    },
    {
        "id": 1018,
        "pais_id": 11,
        "nombre": "Pazardzhik"
    },
    {
        "id": 1019,
        "pais_id": 11,
        "nombre": "Pernik"
    },
    {
        "id": 1020,
        "pais_id": 11,
        "nombre": "Pleven"
    },
    {
        "id": 1021,
        "pais_id": 11,
        "nombre": "Plovdiv"
    },
    {
        "id": 1022,
        "pais_id": 11,
        "nombre": "Razgrad"
    },
    {
        "id": 1023,
        "pais_id": 11,
        "nombre": "Ruse"
    },
    {
        "id": 1024,
        "pais_id": 11,
        "nombre": "Shumen"
    },
    {
        "id": 1025,
        "pais_id": 11,
        "nombre": "Silistra"
    },
    {
        "id": 1026,
        "pais_id": 11,
        "nombre": "Sliven"
    },
    {
        "id": 1027,
        "pais_id": 11,
        "nombre": "Smolyan"
    },
    {
        "id": 1028,
        "pais_id": 11,
        "nombre": "Sofiya"
    },
    {
        "id": 1029,
        "pais_id": 11,
        "nombre": "Stara Zagora"
    },
    {
        "id": 1030,
        "pais_id": 11,
        "nombre": "Turgovishte"
    },
    {
        "id": 1031,
        "pais_id": 11,
        "nombre": "Varna"
    },
    {
        "id": 1032,
        "pais_id": 11,
        "nombre": "Veliko Turnovo"
    },
    {
        "id": 1033,
        "pais_id": 11,
        "nombre": "Vidin"
    },
    {
        "id": 1034,
        "pais_id": 11,
        "nombre": "Vratsa"
    },
    {
        "id": 1035,
        "pais_id": 11,
        "nombre": "Yambol"
    },
    {
        "id": 1037,
        "pais_id": 71,
        "nombre": "Bjelovarsko-Bilogorska"
    },
    {
        "id": 1038,
        "pais_id": 71,
        "nombre": "Brodsko-Posavska"
    },
    {
        "id": 1039,
        "pais_id": 71,
        "nombre": "Dubrovacko-Neretvanska"
    },
    {
        "id": 1040,
        "pais_id": 71,
        "nombre": "Istarska"
    },
    {
        "id": 1041,
        "pais_id": 71,
        "nombre": "Karlovacka"
    },
    {
        "id": 1042,
        "pais_id": 71,
        "nombre": "Koprivnicko-Krizevacka"
    },
    {
        "id": 1043,
        "pais_id": 71,
        "nombre": "Krapinsko-Zagorska"
    },
    {
        "id": 1044,
        "pais_id": 71,
        "nombre": "Licko-Senjska"
    },
    {
        "id": 1045,
        "pais_id": 71,
        "nombre": "Medimurska"
    },
    {
        "id": 1046,
        "pais_id": 71,
        "nombre": "Osjecko-Baranjska"
    },
    {
        "id": 1047,
        "pais_id": 71,
        "nombre": "Pozesko-Slavonska"
    },
    {
        "id": 1048,
        "pais_id": 71,
        "nombre": "Primorsko-Goranska"
    },
    {
        "id": 1049,
        "pais_id": 71,
        "nombre": "Sibensko-Kninska"
    },
    {
        "id": 1050,
        "pais_id": 71,
        "nombre": "Sisacko-Moslavacka"
    },
    {
        "id": 1051,
        "pais_id": 71,
        "nombre": "Splitsko-Dalmatinska"
    },
    {
        "id": 1052,
        "pais_id": 71,
        "nombre": "Varazdinska"
    },
    {
        "id": 1053,
        "pais_id": 71,
        "nombre": "Viroviticko-Podravska"
    },
    {
        "id": 1054,
        "pais_id": 71,
        "nombre": "Vukovarsko-Srijemska"
    },
    {
        "id": 1055,
        "pais_id": 71,
        "nombre": "Zadarska"
    },
    {
        "id": 1056,
        "pais_id": 71,
        "nombre": "Zagrebacka"
    },
    {
        "id": 1057,
        "pais_id": 71,
        "nombre": "Grad Zagreb"
    },
    {
        "id": 1059,
        "pais_id": 143,
        "nombre": "Gibraltar"
    },
    {
        "id": 1060,
        "pais_id": 20,
        "nombre": "Evros"
    },
    {
        "id": 1061,
        "pais_id": 20,
        "nombre": "Rodhopi"
    },
    {
        "id": 1062,
        "pais_id": 20,
        "nombre": "Xanthi"
    },
    {
        "id": 1063,
        "pais_id": 20,
        "nombre": "Drama"
    },
    {
        "id": 1064,
        "pais_id": 20,
        "nombre": "Serrai"
    },
    {
        "id": 1065,
        "pais_id": 20,
        "nombre": "Kilkis"
    },
    {
        "id": 1066,
        "pais_id": 20,
        "nombre": "Pella"
    },
    {
        "id": 1067,
        "pais_id": 20,
        "nombre": "Florina"
    },
    {
        "id": 1068,
        "pais_id": 20,
        "nombre": "Kastoria"
    },
    {
        "id": 1069,
        "pais_id": 20,
        "nombre": "Grevena"
    },
    {
        "id": 1070,
        "pais_id": 20,
        "nombre": "Kozani"
    },
    {
        "id": 1071,
        "pais_id": 20,
        "nombre": "Imathia"
    },
    {
        "id": 1072,
        "pais_id": 20,
        "nombre": "Thessaloniki"
    },
    {
        "id": 1073,
        "pais_id": 20,
        "nombre": "Kavala"
    },
    {
        "id": 1074,
        "pais_id": 20,
        "nombre": "Khalkidhiki"
    },
    {
        "id": 1075,
        "pais_id": 20,
        "nombre": "Pieria"
    },
    {
        "id": 1076,
        "pais_id": 20,
        "nombre": "Ioannina"
    },
    {
        "id": 1077,
        "pais_id": 20,
        "nombre": "Thesprotia"
    },
    {
        "id": 1078,
        "pais_id": 20,
        "nombre": "Preveza"
    },
    {
        "id": 1079,
        "pais_id": 20,
        "nombre": "Arta"
    },
    {
        "id": 1080,
        "pais_id": 20,
        "nombre": "Larisa"
    },
    {
        "id": 1081,
        "pais_id": 20,
        "nombre": "Trikala"
    },
    {
        "id": 1082,
        "pais_id": 20,
        "nombre": "Kardhitsa"
    },
    {
        "id": 1083,
        "pais_id": 20,
        "nombre": "Magnisia"
    },
    {
        "id": 1084,
        "pais_id": 20,
        "nombre": "Kerkira"
    },
    {
        "id": 1085,
        "pais_id": 20,
        "nombre": "Levkas"
    },
    {
        "id": 1086,
        "pais_id": 20,
        "nombre": "Kefallinia"
    },
    {
        "id": 1087,
        "pais_id": 20,
        "nombre": "Zakinthos"
    },
    {
        "id": 1088,
        "pais_id": 20,
        "nombre": "Fthiotis"
    },
    {
        "id": 1089,
        "pais_id": 20,
        "nombre": "Evritania"
    },
    {
        "id": 1090,
        "pais_id": 20,
        "nombre": "Aitolia kai Akarnania"
    },
    {
        "id": 1091,
        "pais_id": 20,
        "nombre": "Fokis"
    },
    {
        "id": 1092,
        "pais_id": 20,
        "nombre": "Voiotia"
    },
    {
        "id": 1093,
        "pais_id": 20,
        "nombre": "Evvoia"
    },
    {
        "id": 1094,
        "pais_id": 20,
        "nombre": "Attiki"
    },
    {
        "id": 1095,
        "pais_id": 20,
        "nombre": "Argolis"
    },
    {
        "id": 1096,
        "pais_id": 20,
        "nombre": "Korinthia"
    },
    {
        "id": 1097,
        "pais_id": 20,
        "nombre": "Akhaia"
    },
    {
        "id": 1098,
        "pais_id": 20,
        "nombre": "Ilia"
    },
    {
        "id": 1099,
        "pais_id": 20,
        "nombre": "Messinia"
    },
    {
        "id": 1100,
        "pais_id": 20,
        "nombre": "Arkadhia"
    },
    {
        "id": 1101,
        "pais_id": 20,
        "nombre": "Lakonia"
    },
    {
        "id": 1102,
        "pais_id": 20,
        "nombre": "Khania"
    },
    {
        "id": 1103,
        "pais_id": 20,
        "nombre": "Rethimni"
    },
    {
        "id": 1104,
        "pais_id": 20,
        "nombre": "Iraklion"
    },
    {
        "id": 1105,
        "pais_id": 20,
        "nombre": "Lasithi"
    },
    {
        "id": 1106,
        "pais_id": 20,
        "nombre": "Dhodhekanisos"
    },
    {
        "id": 1107,
        "pais_id": 20,
        "nombre": "Samos"
    },
    {
        "id": 1108,
        "pais_id": 20,
        "nombre": "Kikladhes"
    },
    {
        "id": 1109,
        "pais_id": 20,
        "nombre": "Khios"
    },
    {
        "id": 1110,
        "pais_id": 20,
        "nombre": "Lesvos"
    },
    {
        "id": 1112,
        "pais_id": 14,
        "nombre": "Bacs-Kiskun"
    },
    {
        "id": 1113,
        "pais_id": 14,
        "nombre": "Baranya"
    },
    {
        "id": 1114,
        "pais_id": 14,
        "nombre": "Bekes"
    },
    {
        "id": 1115,
        "pais_id": 14,
        "nombre": "Borsod-Abauj-Zemplen"
    },
    {
        "id": 1116,
        "pais_id": 14,
        "nombre": "Budapest"
    },
    {
        "id": 1117,
        "pais_id": 14,
        "nombre": "Csongrad"
    },
    {
        "id": 1118,
        "pais_id": 14,
        "nombre": "Debrecen"
    },
    {
        "id": 1119,
        "pais_id": 14,
        "nombre": "Fejer"
    },
    {
        "id": 1120,
        "pais_id": 14,
        "nombre": "Gyor-Moson-Sopron"
    },
    {
        "id": 1121,
        "pais_id": 14,
        "nombre": "Hajdu-Bihar"
    },
    {
        "id": 1122,
        "pais_id": 14,
        "nombre": "Heves"
    },
    {
        "id": 1123,
        "pais_id": 14,
        "nombre": "Komarom-Esztergom"
    },
    {
        "id": 1124,
        "pais_id": 14,
        "nombre": "Miskolc"
    },
    {
        "id": 1125,
        "pais_id": 14,
        "nombre": "Nograd"
    },
    {
        "id": 1126,
        "pais_id": 14,
        "nombre": "Pecs"
    },
    {
        "id": 1127,
        "pais_id": 14,
        "nombre": "Pest"
    },
    {
        "id": 1128,
        "pais_id": 14,
        "nombre": "Somogy"
    },
    {
        "id": 1129,
        "pais_id": 14,
        "nombre": "Szabolcs-Szatmar-Bereg"
    },
    {
        "id": 1130,
        "pais_id": 14,
        "nombre": "Szeged"
    },
    {
        "id": 1131,
        "pais_id": 14,
        "nombre": "Jasz-Nagykun-Szolnok"
    },
    {
        "id": 1132,
        "pais_id": 14,
        "nombre": "Tolna"
    },
    {
        "id": 1133,
        "pais_id": 14,
        "nombre": "Vas"
    },
    {
        "id": 1134,
        "pais_id": 14,
        "nombre": "Veszprem"
    },
    {
        "id": 1135,
        "pais_id": 14,
        "nombre": "Zala"
    },
    {
        "id": 1136,
        "pais_id": 14,
        "nombre": "Gyor"
    },
    {
        "id": 1150,
        "pais_id": 14,
        "nombre": "Veszprem"
    },
    {
        "id": 1152,
        "pais_id": 126,
        "nombre": "Balzers"
    },
    {
        "id": 1153,
        "pais_id": 126,
        "nombre": "Eschen"
    },
    {
        "id": 1154,
        "pais_id": 126,
        "nombre": "Gamprin"
    },
    {
        "id": 1155,
        "pais_id": 126,
        "nombre": "Mauren"
    },
    {
        "id": 1156,
        "pais_id": 126,
        "nombre": "Planken"
    },
    {
        "id": 1157,
        "pais_id": 126,
        "nombre": "Ruggell"
    },
    {
        "id": 1158,
        "pais_id": 126,
        "nombre": "Schaan"
    },
    {
        "id": 1159,
        "pais_id": 126,
        "nombre": "Schellenberg"
    },
    {
        "id": 1160,
        "pais_id": 126,
        "nombre": "Triesen"
    },
    {
        "id": 1161,
        "pais_id": 126,
        "nombre": "Triesenberg"
    },
    {
        "id": 1162,
        "pais_id": 126,
        "nombre": "Vaduz"
    },
    {
        "id": 1163,
        "pais_id": 41,
        "nombre": "Diekirch"
    },
    {
        "id": 1164,
        "pais_id": 41,
        "nombre": "Grevenmacher"
    },
    {
        "id": 1165,
        "pais_id": 41,
        "nombre": "Luxembourg"
    },
    {
        "id": 1167,
        "pais_id": 85,
        "nombre": "Aracinovo"
    },
    {
        "id": 1168,
        "pais_id": 85,
        "nombre": "Bac"
    },
    {
        "id": 1169,
        "pais_id": 85,
        "nombre": "Belcista"
    },
    {
        "id": 1170,
        "pais_id": 85,
        "nombre": "Berovo"
    },
    {
        "id": 1171,
        "pais_id": 85,
        "nombre": "Bistrica"
    },
    {
        "id": 1172,
        "pais_id": 85,
        "nombre": "Bitola"
    },
    {
        "id": 1173,
        "pais_id": 85,
        "nombre": "Blatec"
    },
    {
        "id": 1174,
        "pais_id": 85,
        "nombre": "Bogdanci"
    },
    {
        "id": 1175,
        "pais_id": 85,
        "nombre": "Bogomila"
    },
    {
        "id": 1176,
        "pais_id": 85,
        "nombre": "Bogovinje"
    },
    {
        "id": 1177,
        "pais_id": 85,
        "nombre": "Bosilovo"
    },
    {
        "id": 1179,
        "pais_id": 85,
        "nombre": "Cair"
    },
    {
        "id": 1180,
        "pais_id": 85,
        "nombre": "Capari"
    },
    {
        "id": 1181,
        "pais_id": 85,
        "nombre": "Caska"
    },
    {
        "id": 1182,
        "pais_id": 85,
        "nombre": "Cegrane"
    },
    {
        "id": 1184,
        "pais_id": 85,
        "nombre": "Centar Zupa"
    },
    {
        "id": 1187,
        "pais_id": 85,
        "nombre": "Debar"
    },
    {
        "id": 1188,
        "pais_id": 85,
        "nombre": "Delcevo"
    },
    {
        "id": 1190,
        "pais_id": 85,
        "nombre": "Demir Hisar"
    },
    {
        "id": 1191,
        "pais_id": 85,
        "nombre": "Demir Kapija"
    },
    {
        "id": 1195,
        "pais_id": 85,
        "nombre": "Dorce Petrov"
    },
    {
        "id": 1198,
        "pais_id": 85,
        "nombre": "Gazi Baba"
    },
    {
        "id": 1199,
        "pais_id": 85,
        "nombre": "Gevgelija"
    },
    {
        "id": 1200,
        "pais_id": 85,
        "nombre": "Gostivar"
    },
    {
        "id": 1201,
        "pais_id": 85,
        "nombre": "Gradsko"
    },
    {
        "id": 1204,
        "pais_id": 85,
        "nombre": "Jegunovce"
    },
    {
        "id": 1205,
        "pais_id": 85,
        "nombre": "Kamenjane"
    },
    {
        "id": 1207,
        "pais_id": 85,
        "nombre": "Karpos"
    },
    {
        "id": 1208,
        "pais_id": 85,
        "nombre": "Kavadarci"
    },
    {
        "id": 1209,
        "pais_id": 85,
        "nombre": "Kicevo"
    },
    {
        "id": 1210,
        "pais_id": 85,
        "nombre": "Kisela Voda"
    },
    {
        "id": 1211,
        "pais_id": 85,
        "nombre": "Klecevce"
    },
    {
        "id": 1212,
        "pais_id": 85,
        "nombre": "Kocani"
    },
    {
        "id": 1214,
        "pais_id": 85,
        "nombre": "Kondovo"
    },
    {
        "id": 1217,
        "pais_id": 85,
        "nombre": "Kratovo"
    },
    {
        "id": 1219,
        "pais_id": 85,
        "nombre": "Krivogastani"
    },
    {
        "id": 1220,
        "pais_id": 85,
        "nombre": "Krusevo"
    },
    {
        "id": 1223,
        "pais_id": 85,
        "nombre": "Kumanovo"
    },
    {
        "id": 1224,
        "pais_id": 85,
        "nombre": "Labunista"
    },
    {
        "id": 1225,
        "pais_id": 85,
        "nombre": "Lipkovo"
    },
    {
        "id": 1228,
        "pais_id": 85,
        "nombre": "Makedonska Kamenica"
    },
    {
        "id": 1229,
        "pais_id": 85,
        "nombre": "Makedonski Brod"
    },
    {
        "id": 1234,
        "pais_id": 85,
        "nombre": "Murtino"
    },
    {
        "id": 1235,
        "pais_id": 85,
        "nombre": "Negotino"
    },
    {
        "id": 1238,
        "pais_id": 85,
        "nombre": "Novo Selo"
    },
    {
        "id": 1240,
        "pais_id": 85,
        "nombre": "Ohrid"
    },
    {
        "id": 1242,
        "pais_id": 85,
        "nombre": "Orizari"
    },
    {
        "id": 1245,
        "pais_id": 85,
        "nombre": "Petrovec"
    },
    {
        "id": 1248,
        "pais_id": 85,
        "nombre": "Prilep"
    },
    {
        "id": 1249,
        "pais_id": 85,
        "nombre": "Probistip"
    },
    {
        "id": 1250,
        "pais_id": 85,
        "nombre": "Radovis"
    },
    {
        "id": 1252,
        "pais_id": 85,
        "nombre": "Resen"
    },
    {
        "id": 1253,
        "pais_id": 85,
        "nombre": "Rosoman"
    },
    {
        "id": 1256,
        "pais_id": 85,
        "nombre": "Saraj"
    },
    {
        "id": 1260,
        "pais_id": 85,
        "nombre": "Srbinovo"
    },
    {
        "id": 1262,
        "pais_id": 85,
        "nombre": "Star Dojran"
    },
    {
        "id": 1264,
        "pais_id": 85,
        "nombre": "Stip"
    },
    {
        "id": 1265,
        "pais_id": 85,
        "nombre": "Struga"
    },
    {
        "id": 1266,
        "pais_id": 85,
        "nombre": "Strumica"
    },
    {
        "id": 1267,
        "pais_id": 85,
        "nombre": "Studenicani"
    },
    {
        "id": 1268,
        "pais_id": 85,
        "nombre": "Suto Orizari"
    },
    {
        "id": 1269,
        "pais_id": 85,
        "nombre": "Sveti Nikole"
    },
    {
        "id": 1270,
        "pais_id": 85,
        "nombre": "Tearce"
    },
    {
        "id": 1271,
        "pais_id": 85,
        "nombre": "Tetovo"
    },
    {
        "id": 1273,
        "pais_id": 85,
        "nombre": "Valandovo"
    },
    {
        "id": 1275,
        "pais_id": 85,
        "nombre": "Veles"
    },
    {
        "id": 1277,
        "pais_id": 85,
        "nombre": "Vevcani"
    },
    {
        "id": 1278,
        "pais_id": 85,
        "nombre": "Vinica"
    },
    {
        "id": 1281,
        "pais_id": 85,
        "nombre": "Vrapciste"
    },
    {
        "id": 1286,
        "pais_id": 85,
        "nombre": "Zelino"
    },
    {
        "id": 1289,
        "pais_id": 85,
        "nombre": "Zrnovci"
    },
    {
        "id": 1291,
        "pais_id": 86,
        "nombre": "Malta"
    },
    {
        "id": 1292,
        "pais_id": 44,
        "nombre": "La Condamine"
    },
    {
        "id": 1293,
        "pais_id": 44,
        "nombre": "Monaco"
    },
    {
        "id": 1294,
        "pais_id": 44,
        "nombre": "Monte-Carlo"
    },
    {
        "id": 1295,
        "pais_id": 47,
        "nombre": "Biala Podlaska"
    },
    {
        "id": 1296,
        "pais_id": 47,
        "nombre": "Bialystok"
    },
    {
        "id": 1297,
        "pais_id": 47,
        "nombre": "Bielsko"
    },
    {
        "id": 1298,
        "pais_id": 47,
        "nombre": "Bydgoszcz"
    },
    {
        "id": 1299,
        "pais_id": 47,
        "nombre": "Chelm"
    },
    {
        "id": 1300,
        "pais_id": 47,
        "nombre": "Ciechanow"
    },
    {
        "id": 1301,
        "pais_id": 47,
        "nombre": "Czestochowa"
    },
    {
        "id": 1302,
        "pais_id": 47,
        "nombre": "Elblag"
    },
    {
        "id": 1303,
        "pais_id": 47,
        "nombre": "Gdansk"
    },
    {
        "id": 1304,
        "pais_id": 47,
        "nombre": "Gorzow"
    },
    {
        "id": 1305,
        "pais_id": 47,
        "nombre": "Jelenia Gora"
    },
    {
        "id": 1306,
        "pais_id": 47,
        "nombre": "Kalisz"
    },
    {
        "id": 1307,
        "pais_id": 47,
        "nombre": "Katowice"
    },
    {
        "id": 1308,
        "pais_id": 47,
        "nombre": "Kielce"
    },
    {
        "id": 1309,
        "pais_id": 47,
        "nombre": "Konin"
    },
    {
        "id": 1310,
        "pais_id": 47,
        "nombre": "Koszalin"
    },
    {
        "id": 1311,
        "pais_id": 47,
        "nombre": "Krakow"
    },
    {
        "id": 1312,
        "pais_id": 47,
        "nombre": "Krosno"
    },
    {
        "id": 1313,
        "pais_id": 47,
        "nombre": "Legnica"
    },
    {
        "id": 1314,
        "pais_id": 47,
        "nombre": "Leszno"
    },
    {
        "id": 1315,
        "pais_id": 47,
        "nombre": "Lodz"
    },
    {
        "id": 1316,
        "pais_id": 47,
        "nombre": "Lomza"
    },
    {
        "id": 1317,
        "pais_id": 47,
        "nombre": "Lublin"
    },
    {
        "id": 1318,
        "pais_id": 47,
        "nombre": "Nowy Sacz"
    },
    {
        "id": 1319,
        "pais_id": 47,
        "nombre": "Olsztyn"
    },
    {
        "id": 1320,
        "pais_id": 47,
        "nombre": "Opole"
    },
    {
        "id": 1321,
        "pais_id": 47,
        "nombre": "Ostroleka"
    },
    {
        "id": 1322,
        "pais_id": 47,
        "nombre": "Pila"
    },
    {
        "id": 1323,
        "pais_id": 47,
        "nombre": "Piotrkow"
    },
    {
        "id": 1324,
        "pais_id": 47,
        "nombre": "Plock"
    },
    {
        "id": 1325,
        "pais_id": 47,
        "nombre": "Poznan"
    },
    {
        "id": 1326,
        "pais_id": 47,
        "nombre": "Przemysl"
    },
    {
        "id": 1327,
        "pais_id": 47,
        "nombre": "Radom"
    },
    {
        "id": 1328,
        "pais_id": 47,
        "nombre": "Rzeszow"
    },
    {
        "id": 1329,
        "pais_id": 47,
        "nombre": "Siedlce"
    },
    {
        "id": 1330,
        "pais_id": 47,
        "nombre": "Sieradz"
    },
    {
        "id": 1331,
        "pais_id": 47,
        "nombre": "Skierniewice"
    },
    {
        "id": 1332,
        "pais_id": 47,
        "nombre": "Slupsk"
    },
    {
        "id": 1333,
        "pais_id": 47,
        "nombre": "Suwalki"
    },
    {
        "id": 1335,
        "pais_id": 47,
        "nombre": "Tarnobrzeg"
    },
    {
        "id": 1336,
        "pais_id": 47,
        "nombre": "Tarnow"
    },
    {
        "id": 1337,
        "pais_id": 47,
        "nombre": "Torun"
    },
    {
        "id": 1338,
        "pais_id": 47,
        "nombre": "Walbrzych"
    },
    {
        "id": 1339,
        "pais_id": 47,
        "nombre": "Warszawa"
    },
    {
        "id": 1340,
        "pais_id": 47,
        "nombre": "Wloclawek"
    },
    {
        "id": 1341,
        "pais_id": 47,
        "nombre": "Wroclaw"
    },
    {
        "id": 1342,
        "pais_id": 47,
        "nombre": "Zamosc"
    },
    {
        "id": 1343,
        "pais_id": 47,
        "nombre": "Zielona Gora"
    },
    {
        "id": 1344,
        "pais_id": 47,
        "nombre": "Dolnoslaskie"
    },
    {
        "id": 1345,
        "pais_id": 47,
        "nombre": "Kujawsko-Pomorskie"
    },
    {
        "id": 1346,
        "pais_id": 47,
        "nombre": "Lodzkie"
    },
    {
        "id": 1347,
        "pais_id": 47,
        "nombre": "Lubelskie"
    },
    {
        "id": 1348,
        "pais_id": 47,
        "nombre": "Lubuskie"
    },
    {
        "id": 1349,
        "pais_id": 47,
        "nombre": "Malopolskie"
    },
    {
        "id": 1350,
        "pais_id": 47,
        "nombre": "Mazowieckie"
    },
    {
        "id": 1351,
        "pais_id": 47,
        "nombre": "Opolskie"
    },
    {
        "id": 1352,
        "pais_id": 47,
        "nombre": "Podkarpackie"
    },
    {
        "id": 1353,
        "pais_id": 47,
        "nombre": "Podlaskie"
    },
    {
        "id": 1354,
        "pais_id": 47,
        "nombre": "Pomorskie"
    },
    {
        "id": 1355,
        "pais_id": 47,
        "nombre": "Slaskie"
    },
    {
        "id": 1356,
        "pais_id": 47,
        "nombre": "Swietokrzyskie"
    },
    {
        "id": 1357,
        "pais_id": 47,
        "nombre": "Warminsko-Mazurskie"
    },
    {
        "id": 1358,
        "pais_id": 47,
        "nombre": "Wielkopolskie"
    },
    {
        "id": 1359,
        "pais_id": 47,
        "nombre": "Zachodniopomorskie"
    },
    {
        "id": 1361,
        "pais_id": 72,
        "nombre": "Alba"
    },
    {
        "id": 1362,
        "pais_id": 72,
        "nombre": "Arad"
    },
    {
        "id": 1363,
        "pais_id": 72,
        "nombre": "Arges"
    },
    {
        "id": 1364,
        "pais_id": 72,
        "nombre": "Bacau"
    },
    {
        "id": 1365,
        "pais_id": 72,
        "nombre": "Bihor"
    },
    {
        "id": 1366,
        "pais_id": 72,
        "nombre": "Bistrita-Nasaud"
    },
    {
        "id": 1367,
        "pais_id": 72,
        "nombre": "Botosani"
    },
    {
        "id": 1368,
        "pais_id": 72,
        "nombre": "Braila"
    },
    {
        "id": 1369,
        "pais_id": 72,
        "nombre": "Brasov"
    },
    {
        "id": 1370,
        "pais_id": 72,
        "nombre": "Bucuresti"
    },
    {
        "id": 1371,
        "pais_id": 72,
        "nombre": "Buzau"
    },
    {
        "id": 1372,
        "pais_id": 72,
        "nombre": "Caras-Severin"
    },
    {
        "id": 1373,
        "pais_id": 72,
        "nombre": "Cluj"
    },
    {
        "id": 1374,
        "pais_id": 72,
        "nombre": "Constanta"
    },
    {
        "id": 1375,
        "pais_id": 72,
        "nombre": "Covasna"
    },
    {
        "id": 1376,
        "pais_id": 72,
        "nombre": "Dambovita"
    },
    {
        "id": 1377,
        "pais_id": 72,
        "nombre": "Dolj"
    },
    {
        "id": 1378,
        "pais_id": 72,
        "nombre": "Galati"
    },
    {
        "id": 1379,
        "pais_id": 72,
        "nombre": "Gorj"
    },
    {
        "id": 1380,
        "pais_id": 72,
        "nombre": "Harghita"
    },
    {
        "id": 1381,
        "pais_id": 72,
        "nombre": "Hunedoara"
    },
    {
        "id": 1382,
        "pais_id": 72,
        "nombre": "Ialomita"
    },
    {
        "id": 1383,
        "pais_id": 72,
        "nombre": "Iasi"
    },
    {
        "id": 1384,
        "pais_id": 72,
        "nombre": "Maramures"
    },
    {
        "id": 1385,
        "pais_id": 72,
        "nombre": "Mehedinti"
    },
    {
        "id": 1386,
        "pais_id": 72,
        "nombre": "Mures"
    },
    {
        "id": 1387,
        "pais_id": 72,
        "nombre": "Neamt"
    },
    {
        "id": 1388,
        "pais_id": 72,
        "nombre": "Olt"
    },
    {
        "id": 1389,
        "pais_id": 72,
        "nombre": "Prahova"
    },
    {
        "id": 1390,
        "pais_id": 72,
        "nombre": "Salaj"
    },
    {
        "id": 1391,
        "pais_id": 72,
        "nombre": "Satu Mare"
    },
    {
        "id": 1392,
        "pais_id": 72,
        "nombre": "Sibiu"
    },
    {
        "id": 1393,
        "pais_id": 72,
        "nombre": "Suceava"
    },
    {
        "id": 1394,
        "pais_id": 72,
        "nombre": "Teleorman"
    },
    {
        "id": 1395,
        "pais_id": 72,
        "nombre": "Timis"
    },
    {
        "id": 1396,
        "pais_id": 72,
        "nombre": "Tulcea"
    },
    {
        "id": 1397,
        "pais_id": 72,
        "nombre": "Vaslui"
    },
    {
        "id": 1398,
        "pais_id": 72,
        "nombre": "Valcea"
    },
    {
        "id": 1399,
        "pais_id": 72,
        "nombre": "Vrancea"
    },
    {
        "id": 1400,
        "pais_id": 72,
        "nombre": "Calarasi"
    },
    {
        "id": 1401,
        "pais_id": 72,
        "nombre": "Giurgiu"
    },
    {
        "id": 1404,
        "pais_id": 224,
        "nombre": "Acquaviva"
    },
    {
        "id": 1405,
        "pais_id": 224,
        "nombre": "Chiesanuova"
    },
    {
        "id": 1406,
        "pais_id": 224,
        "nombre": "Domagnano"
    },
    {
        "id": 1407,
        "pais_id": 224,
        "nombre": "Faetano"
    },
    {
        "id": 1408,
        "pais_id": 224,
        "nombre": "Fiorentino"
    },
    {
        "id": 1409,
        "pais_id": 224,
        "nombre": "Borgo Maggiore"
    },
    {
        "id": 1410,
        "pais_id": 224,
        "nombre": "San Marino"
    },
    {
        "id": 1411,
        "pais_id": 224,
        "nombre": "Monte Giardino"
    },
    {
        "id": 1412,
        "pais_id": 224,
        "nombre": "Serravalle"
    },
    {
        "id": 1413,
        "pais_id": 52,
        "nombre": "Banska Bystrica"
    },
    {
        "id": 1414,
        "pais_id": 52,
        "nombre": "Bratislava"
    },
    {
        "id": 1415,
        "pais_id": 52,
        "nombre": "Kosice"
    },
    {
        "id": 1416,
        "pais_id": 52,
        "nombre": "Nitra"
    },
    {
        "id": 1417,
        "pais_id": 52,
        "nombre": "Presov"
    },
    {
        "id": 1418,
        "pais_id": 52,
        "nombre": "Trencin"
    },
    {
        "id": 1419,
        "pais_id": 52,
        "nombre": "Trnava"
    },
    {
        "id": 1420,
        "pais_id": 52,
        "nombre": "Zilina"
    },
    {
        "id": 1423,
        "pais_id": 53,
        "nombre": "Beltinci"
    },
    {
        "id": 1425,
        "pais_id": 53,
        "nombre": "Bohinj"
    },
    {
        "id": 1426,
        "pais_id": 53,
        "nombre": "Borovnica"
    },
    {
        "id": 1427,
        "pais_id": 53,
        "nombre": "Bovec"
    },
    {
        "id": 1428,
        "pais_id": 53,
        "nombre": "Brda"
    },
    {
        "id": 1429,
        "pais_id": 53,
        "nombre": "Brezice"
    },
    {
        "id": 1430,
        "pais_id": 53,
        "nombre": "Brezovica"
    },
    {
        "id": 1432,
        "pais_id": 53,
        "nombre": "Cerklje na Gorenjskem"
    },
    {
        "id": 1434,
        "pais_id": 53,
        "nombre": "Cerkno"
    },
    {
        "id": 1436,
        "pais_id": 53,
        "nombre": "Crna na Koroskem"
    },
    {
        "id": 1437,
        "pais_id": 53,
        "nombre": "Crnomelj"
    },
    {
        "id": 1438,
        "pais_id": 53,
        "nombre": "Divaca"
    },
    {
        "id": 1439,
        "pais_id": 53,
        "nombre": "Dobrepolje"
    },
    {
        "id": 1440,
        "pais_id": 53,
        "nombre": "Dol pri Ljubljani"
    },
    {
        "id": 1443,
        "pais_id": 53,
        "nombre": "Duplek"
    },
    {
        "id": 1447,
        "pais_id": 53,
        "nombre": "Gornji Grad"
    },
    {
        "id": 1450,
        "pais_id": 53,
        "nombre": "Hrastnik"
    },
    {
        "id": 1451,
        "pais_id": 53,
        "nombre": "Hrpelje-Kozina"
    },
    {
        "id": 1452,
        "pais_id": 53,
        "nombre": "Idrija"
    },
    {
        "id": 1453,
        "pais_id": 53,
        "nombre": "Ig"
    },
    {
        "id": 1454,
        "pais_id": 53,
        "nombre": "Ilirska Bistrica"
    },
    {
        "id": 1455,
        "pais_id": 53,
        "nombre": "Ivancna Gorica"
    },
    {
        "id": 1462,
        "pais_id": 53,
        "nombre": "Komen"
    },
    {
        "id": 1463,
        "pais_id": 53,
        "nombre": "Koper-Capodistria"
    },
    {
        "id": 1464,
        "pais_id": 53,
        "nombre": "Kozje"
    },
    {
        "id": 1465,
        "pais_id": 53,
        "nombre": "Kranj"
    },
    {
        "id": 1466,
        "pais_id": 53,
        "nombre": "Kranjska Gora"
    },
    {
        "id": 1467,
        "pais_id": 53,
        "nombre": "Krsko"
    },
    {
        "id": 1469,
        "pais_id": 53,
        "nombre": "Lasko"
    },
    {
        "id": 1470,
        "pais_id": 53,
        "nombre": "Ljubljana"
    },
    {
        "id": 1471,
        "pais_id": 53,
        "nombre": "Ljubno"
    },
    {
        "id": 1472,
        "pais_id": 53,
        "nombre": "Logatec"
    },
    {
        "id": 1475,
        "pais_id": 53,
        "nombre": "Medvode"
    },
    {
        "id": 1476,
        "pais_id": 53,
        "nombre": "Menges"
    },
    {
        "id": 1478,
        "pais_id": 53,
        "nombre": "Mezica"
    },
    {
        "id": 1480,
        "pais_id": 53,
        "nombre": "Moravce"
    },
    {
        "id": 1482,
        "pais_id": 53,
        "nombre": "Mozirje"
    },
    {
        "id": 1483,
        "pais_id": 53,
        "nombre": "Murska Sobota"
    },
    {
        "id": 1487,
        "pais_id": 53,
        "nombre": "Nova Gorica"
    },
    {
        "id": 1489,
        "pais_id": 53,
        "nombre": "Ormoz"
    },
    {
        "id": 1491,
        "pais_id": 53,
        "nombre": "Pesnica"
    },
    {
        "id": 1494,
        "pais_id": 53,
        "nombre": "Postojna"
    },
    {
        "id": 1497,
        "pais_id": 53,
        "nombre": "Radece"
    },
    {
        "id": 1498,
        "pais_id": 53,
        "nombre": "Radenci"
    },
    {
        "id": 1500,
        "pais_id": 53,
        "nombre": "Radovljica"
    },
    {
        "id": 1502,
        "pais_id": 53,
        "nombre": "Rogaska Slatina"
    },
    {
        "id": 1505,
        "pais_id": 53,
        "nombre": "Sencur"
    },
    {
        "id": 1506,
        "pais_id": 53,
        "nombre": "Sentilj"
    },
    {
        "id": 1508,
        "pais_id": 53,
        "nombre": "Sevnica"
    },
    {
        "id": 1509,
        "pais_id": 53,
        "nombre": "Sezana"
    },
    {
        "id": 1511,
        "pais_id": 53,
        "nombre": "Skofja Loka"
    },
    {
        "id": 1513,
        "pais_id": 53,
        "nombre": "Slovenj Gradec"
    },
    {
        "id": 1514,
        "pais_id": 53,
        "nombre": "Slovenske Konjice"
    },
    {
        "id": 1515,
        "pais_id": 53,
        "nombre": "Smarje pri Jelsah"
    },
    {
        "id": 1521,
        "pais_id": 53,
        "nombre": "Tolmin"
    },
    {
        "id": 1522,
        "pais_id": 53,
        "nombre": "Trbovlje"
    },
    {
        "id": 1524,
        "pais_id": 53,
        "nombre": "Trzic"
    },
    {
        "id": 1526,
        "pais_id": 53,
        "nombre": "Velenje"
    },
    {
        "id": 1528,
        "pais_id": 53,
        "nombre": "Vipava"
    },
    {
        "id": 1531,
        "pais_id": 53,
        "nombre": "Vrhnika"
    },
    {
        "id": 1532,
        "pais_id": 53,
        "nombre": "Vuzenica"
    },
    {
        "id": 1533,
        "pais_id": 53,
        "nombre": "Zagorje ob Savi"
    },
    {
        "id": 1535,
        "pais_id": 53,
        "nombre": "Zelezniki"
    },
    {
        "id": 1536,
        "pais_id": 53,
        "nombre": "Ziri"
    },
    {
        "id": 1537,
        "pais_id": 53,
        "nombre": "Zrece"
    },
    {
        "id": 1539,
        "pais_id": 53,
        "nombre": "Domzale"
    },
    {
        "id": 1540,
        "pais_id": 53,
        "nombre": "Jesenice"
    },
    {
        "id": 1541,
        "pais_id": 53,
        "nombre": "Kamnik"
    },
    {
        "id": 1542,
        "pais_id": 53,
        "nombre": "Kocevje"
    },
    {
        "id": 1544,
        "pais_id": 53,
        "nombre": "Lenart"
    },
    {
        "id": 1545,
        "pais_id": 53,
        "nombre": "Litija"
    },
    {
        "id": 1546,
        "pais_id": 53,
        "nombre": "Ljutomer"
    },
    {
        "id": 1550,
        "pais_id": 53,
        "nombre": "Maribor"
    },
    {
        "id": 1552,
        "pais_id": 53,
        "nombre": "Novo Mesto"
    },
    {
        "id": 1553,
        "pais_id": 53,
        "nombre": "Piran"
    },
    {
        "id": 1554,
        "pais_id": 53,
        "nombre": "Preddvor"
    },
    {
        "id": 1555,
        "pais_id": 53,
        "nombre": "Ptuj"
    },
    {
        "id": 1556,
        "pais_id": 53,
        "nombre": "Ribnica"
    },
    {
        "id": 1558,
        "pais_id": 53,
        "nombre": "Sentjur pri Celju"
    },
    {
        "id": 1559,
        "pais_id": 53,
        "nombre": "Slovenska Bistrica"
    },
    {
        "id": 1560,
        "pais_id": 53,
        "nombre": "Videm"
    },
    {
        "id": 1562,
        "pais_id": 53,
        "nombre": "Zalec"
    },
    {
        "id": 1564,
        "pais_id": 109,
        "nombre": "Seychelles"
    },
    {
        "id": 1565,
        "pais_id": 108,
        "nombre": "Mauritania"
    },
    {
        "id": 1566,
        "pais_id": 135,
        "nombre": "Senegal"
    },
    {
        "id": 1567,
        "pais_id": 154,
        "nombre": "Road Town"
    },
    {
        "id": 1568,
        "pais_id": 165,
        "nombre": "Congo"
    },
    {
        "id": 1569,
        "pais_id": 166,
        "nombre": "Avarua"
    },
    {
        "id": 1570,
        "pais_id": 172,
        "nombre": "Malabo"
    },
    {
        "id": 1571,
        "pais_id": 175,
        "nombre": "Torshavn"
    },
    {
        "id": 1572,
        "pais_id": 178,
        "nombre": "Papeete"
    },
    {
        "id": 1573,
        "pais_id": 184,
        "nombre": "St Georges"
    },
    {
        "id": 1574,
        "pais_id": 186,
        "nombre": "St Peter Port"
    },
    {
        "id": 1575,
        "pais_id": 188,
        "nombre": "Bissau"
    },
    {
        "id": 1576,
        "pais_id": 193,
        "nombre": "Saint Helier"
    },
    {
        "id": 1577,
        "pais_id": 201,
        "nombre": "Fort-de-France"
    },
    {
        "id": 1578,
        "pais_id": 207,
        "nombre": "Willemstad"
    },
    {
        "id": 1579,
        "pais_id": 208,
        "nombre": "Noumea"
    },
    {
        "id": 1580,
        "pais_id": 212,
        "nombre": "Kingston"
    },
    {
        "id": 1581,
        "pais_id": 215,
        "nombre": "Adamstown"
    },
    {
        "id": 1582,
        "pais_id": 216,
        "nombre": "Doha"
    },
    {
        "id": 1583,
        "pais_id": 218,
        "nombre": "Jamestown"
    },
    {
        "id": 1584,
        "pais_id": 219,
        "nombre": "Basseterre"
    },
    {
        "id": 1585,
        "pais_id": 220,
        "nombre": "Castries"
    },
    {
        "id": 1586,
        "pais_id": 221,
        "nombre": "Saint Pierre"
    },
    {
        "id": 1587,
        "pais_id": 222,
        "nombre": "Kingstown"
    },
    {
        "id": 1588,
        "pais_id": 225,
        "nombre": "San Tome"
    },
    {
        "id": 1589,
        "pais_id": 226,
        "nombre": "Belgrade"
    },
    {
        "id": 1590,
        "pais_id": 227,
        "nombre": "Freetown"
    },
    {
        "id": 1591,
        "pais_id": 229,
        "nombre": "Mogadishu"
    },
    {
        "id": 1592,
        "pais_id": 235,
        "nombre": "Fakaofo"
    },
    {
        "id": 1593,
        "pais_id": 237,
        "nombre": "Port of Spain"
    },
    {
        "id": 1594,
        "pais_id": 241,
        "nombre": "Mata-Utu"
    },
    {
        "id": 1596,
        "pais_id": 89,
        "nombre": "Amazonas"
    },
    {
        "id": 1597,
        "pais_id": 89,
        "nombre": "Ancash"
    },
    {
        "id": 1598,
        "pais_id": 89,
        "nombre": "Apurímac"
    },
    {
        "id": 1599,
        "pais_id": 89,
        "nombre": "Arequipa"
    },
    {
        "id": 1600,
        "pais_id": 89,
        "nombre": "Ayacucho"
    },
    {
        "id": 1601,
        "pais_id": 89,
        "nombre": "Cajamarca"
    },
    {
        "id": 1602,
        "pais_id": 89,
        "nombre": "Callao"
    },
    {
        "id": 1603,
        "pais_id": 89,
        "nombre": "Cusco"
    },
    {
        "id": 1604,
        "pais_id": 89,
        "nombre": "Huancavelica"
    },
    {
        "id": 1605,
        "pais_id": 89,
        "nombre": "Huánuco"
    },
    {
        "id": 1606,
        "pais_id": 89,
        "nombre": "Ica"
    },
    {
        "id": 1607,
        "pais_id": 89,
        "nombre": "Junín"
    },
    {
        "id": 1608,
        "pais_id": 89,
        "nombre": "La Libertad"
    },
    {
        "id": 1609,
        "pais_id": 89,
        "nombre": "Lambayeque"
    },
    {
        "id": 1610,
        "pais_id": 89,
        "nombre": "Lima"
    },
    {
        "id": 1611,
        "pais_id": 89,
        "nombre": "Loreto"
    },
    {
        "id": 1612,
        "pais_id": 89,
        "nombre": "Madre de Dios"
    },
    {
        "id": 1613,
        "pais_id": 89,
        "nombre": "Moquegua"
    },
    {
        "id": 1614,
        "pais_id": 89,
        "nombre": "Pasco"
    },
    {
        "id": 1615,
        "pais_id": 89,
        "nombre": "Piura"
    },
    {
        "id": 1616,
        "pais_id": 89,
        "nombre": "Puno"
    },
    {
        "id": 1617,
        "pais_id": 89,
        "nombre": "San Martín"
    },
    {
        "id": 1618,
        "pais_id": 89,
        "nombre": "Tacna"
    },
    {
        "id": 1619,
        "pais_id": 89,
        "nombre": "Tumbes"
    },
    {
        "id": 1620,
        "pais_id": 89,
        "nombre": "Ucayali"
    },
    {
        "id": 1622,
        "pais_id": 110,
        "nombre": "Alto Paraná"
    },
    {
        "id": 1623,
        "pais_id": 110,
        "nombre": "Amambay"
    },
    {
        "id": 1624,
        "pais_id": 110,
        "nombre": "Boquerón"
    },
    {
        "id": 1625,
        "pais_id": 110,
        "nombre": "Caaguazú"
    },
    {
        "id": 1626,
        "pais_id": 110,
        "nombre": "Caazapá"
    },
    {
        "id": 1627,
        "pais_id": 110,
        "nombre": "Central"
    },
    {
        "id": 1628,
        "pais_id": 110,
        "nombre": "Concepción"
    },
    {
        "id": 1629,
        "pais_id": 110,
        "nombre": "Cordillera"
    },
    {
        "id": 1630,
        "pais_id": 110,
        "nombre": "Guairá"
    },
    {
        "id": 1631,
        "pais_id": 110,
        "nombre": "Itapúa"
    },
    {
        "id": 1632,
        "pais_id": 110,
        "nombre": "Misiones"
    },
    {
        "id": 1633,
        "pais_id": 110,
        "nombre": "Neembucú"
    },
    {
        "id": 1634,
        "pais_id": 110,
        "nombre": "Paraguarí"
    },
    {
        "id": 1635,
        "pais_id": 110,
        "nombre": "Presidente Hayes"
    },
    {
        "id": 1636,
        "pais_id": 110,
        "nombre": "San Pedro"
    },
    {
        "id": 1637,
        "pais_id": 110,
        "nombre": "Alto Paraguay"
    },
    {
        "id": 1638,
        "pais_id": 110,
        "nombre": "Canindeyú"
    },
    {
        "id": 1639,
        "pais_id": 110,
        "nombre": "Chaco"
    },
    {
        "id": 1642,
        "pais_id": 111,
        "nombre": "Artigas"
    },
    {
        "id": 1643,
        "pais_id": 111,
        "nombre": "Canelones"
    },
    {
        "id": 1644,
        "pais_id": 111,
        "nombre": "Cerro Largo"
    },
    {
        "id": 1645,
        "pais_id": 111,
        "nombre": "Colonia"
    },
    {
        "id": 1646,
        "pais_id": 111,
        "nombre": "Durazno"
    },
    {
        "id": 1647,
        "pais_id": 111,
        "nombre": "Flores"
    },
    {
        "id": 1648,
        "pais_id": 111,
        "nombre": "Florida"
    },
    {
        "id": 1649,
        "pais_id": 111,
        "nombre": "Lavalleja"
    },
    {
        "id": 1650,
        "pais_id": 111,
        "nombre": "Maldonado"
    },
    {
        "id": 1651,
        "pais_id": 111,
        "nombre": "Montevideo"
    },
    {
        "id": 1652,
        "pais_id": 111,
        "nombre": "Paysandú"
    },
    {
        "id": 1653,
        "pais_id": 111,
        "nombre": "Río Negro"
    },
    {
        "id": 1654,
        "pais_id": 111,
        "nombre": "Rivera"
    },
    {
        "id": 1655,
        "pais_id": 111,
        "nombre": "Rocha"
    },
    {
        "id": 1656,
        "pais_id": 111,
        "nombre": "Salto"
    },
    {
        "id": 1657,
        "pais_id": 111,
        "nombre": "San José"
    },
    {
        "id": 1658,
        "pais_id": 111,
        "nombre": "Soriano"
    },
    {
        "id": 1659,
        "pais_id": 111,
        "nombre": "Tacuarembó"
    },
    {
        "id": 1660,
        "pais_id": 111,
        "nombre": "Treinta y Tres"
    },
    {
        "id": 1662,
        "pais_id": 81,
        "nombre": "Valparaíso"
    },
    {
        "id": 1663,
        "pais_id": 81,
        "nombre": "Aisén del General Carlos Ibánez del Campo"
    },
    {
        "id": 1664,
        "pais_id": 81,
        "nombre": "Antofagasta"
    },
    {
        "id": 1665,
        "pais_id": 81,
        "nombre": "Araucanía"
    },
    {
        "id": 1666,
        "pais_id": 81,
        "nombre": "Atacama"
    },
    {
        "id": 1667,
        "pais_id": 81,
        "nombre": "Bío-Bío"
    },
    {
        "id": 1668,
        "pais_id": 81,
        "nombre": "Coquimbo"
    },
    {
        "id": 1669,
        "pais_id": 81,
        "nombre": "Libertador General Bernardo OHiggins"
    },
    {
        "id": 1670,
        "pais_id": 81,
        "nombre": "Los Lagos"
    },
    {
        "id": 1671,
        "pais_id": 81,
        "nombre": "Magallanes y de la Antártica Chilena"
    },
    {
        "id": 1672,
        "pais_id": 81,
        "nombre": "Maule"
    },
    {
        "id": 1673,
        "pais_id": 81,
        "nombre": "Region Metropolitana"
    },
    {
        "id": 1674,
        "pais_id": 81,
        "nombre": "Tarapacá"
    },
    {
        "id": 1676,
        "pais_id": 185,
        "nombre": "Alta Verapaz"
    },
    {
        "id": 1677,
        "pais_id": 185,
        "nombre": "Baja Verapaz"
    },
    {
        "id": 1678,
        "pais_id": 185,
        "nombre": "Chimaltenango"
    },
    {
        "id": 1679,
        "pais_id": 185,
        "nombre": "Chiquimula"
    },
    {
        "id": 1680,
        "pais_id": 185,
        "nombre": "El Progreso"
    },
    {
        "id": 1681,
        "pais_id": 185,
        "nombre": "Escuintla"
    },
    {
        "id": 1682,
        "pais_id": 185,
        "nombre": "Guatemala"
    },
    {
        "id": 1683,
        "pais_id": 185,
        "nombre": "Huehuetenango"
    },
    {
        "id": 1684,
        "pais_id": 185,
        "nombre": "Izabal"
    },
    {
        "id": 1685,
        "pais_id": 185,
        "nombre": "Jalapa"
    },
    {
        "id": 1686,
        "pais_id": 185,
        "nombre": "Jutiapa"
    },
    {
        "id": 1687,
        "pais_id": 185,
        "nombre": "Petén"
    },
    {
        "id": 1688,
        "pais_id": 185,
        "nombre": "Quetzaltenango"
    },
    {
        "id": 1689,
        "pais_id": 185,
        "nombre": "Quiché"
    },
    {
        "id": 1690,
        "pais_id": 185,
        "nombre": "Retalhuleu"
    },
    {
        "id": 1691,
        "pais_id": 185,
        "nombre": "Sacatepéquez"
    },
    {
        "id": 1692,
        "pais_id": 185,
        "nombre": "San Marcos"
    },
    {
        "id": 1693,
        "pais_id": 185,
        "nombre": "Santa Rosa"
    },
    {
        "id": 1694,
        "pais_id": 185,
        "nombre": "Sololá"
    },
    {
        "id": 1695,
        "pais_id": 185,
        "nombre": "Suchitepequez"
    },
    {
        "id": 1696,
        "pais_id": 185,
        "nombre": "Totonicapán"
    },
    {
        "id": 1697,
        "pais_id": 185,
        "nombre": "Zacapa"
    },
    {
        "id": 1699,
        "pais_id": 82,
        "nombre": "Amazonas"
    },
    {
        "id": 1700,
        "pais_id": 82,
        "nombre": "Antioquia"
    },
    {
        "id": 1701,
        "pais_id": 82,
        "nombre": "Arauca"
    },
    {
        "id": 1702,
        "pais_id": 82,
        "nombre": "Atlántico"
    },
    {
        "id": 1703,
        "pais_id": 82,
        "nombre": "Caquetá"
    },
    {
        "id": 1704,
        "pais_id": 82,
        "nombre": "Cauca"
    },
    {
        "id": 1705,
        "pais_id": 82,
        "nombre": "César"
    },
    {
        "id": 1706,
        "pais_id": 82,
        "nombre": "Chocó"
    },
    {
        "id": 1707,
        "pais_id": 82,
        "nombre": "Córdoba"
    },
    {
        "id": 1708,
        "pais_id": 82,
        "nombre": "Guaviare"
    },
    {
        "id": 1709,
        "pais_id": 82,
        "nombre": "Guainía"
    },
    {
        "id": 1710,
        "pais_id": 82,
        "nombre": "Huila"
    },
    {
        "id": 1711,
        "pais_id": 82,
        "nombre": "La Guajira"
    },
    {
        "id": 1712,
        "pais_id": 82,
        "nombre": "Meta"
    },
    {
        "id": 1713,
        "pais_id": 82,
        "nombre": "Narino"
    },
    {
        "id": 1714,
        "pais_id": 82,
        "nombre": "Norte de Santander"
    },
    {
        "id": 1715,
        "pais_id": 82,
        "nombre": "Putumayo"
    },
    {
        "id": 1716,
        "pais_id": 82,
        "nombre": "Quindío"
    },
    {
        "id": 1717,
        "pais_id": 82,
        "nombre": "Risaralda"
    },
    {
        "id": 1718,
        "pais_id": 82,
        "nombre": "San Andrés y Providencia"
    },
    {
        "id": 1719,
        "pais_id": 82,
        "nombre": "Santander"
    },
    {
        "id": 1720,
        "pais_id": 82,
        "nombre": "Sucre"
    },
    {
        "id": 1721,
        "pais_id": 82,
        "nombre": "Tolima"
    },
    {
        "id": 1722,
        "pais_id": 82,
        "nombre": "Valle del Cauca"
    },
    {
        "id": 1723,
        "pais_id": 82,
        "nombre": "Vaupés"
    },
    {
        "id": 1724,
        "pais_id": 82,
        "nombre": "Vichada"
    },
    {
        "id": 1725,
        "pais_id": 82,
        "nombre": "Casanare"
    },
    {
        "id": 1726,
        "pais_id": 82,
        "nombre": "Cundinamarca"
    },
    {
        "id": 1727,
        "pais_id": 82,
        "nombre": "Distrito Capital"
    },
    {
        "id": 1730,
        "pais_id": 82,
        "nombre": "Caldas"
    },
    {
        "id": 1731,
        "pais_id": 82,
        "nombre": "Magdalena"
    },
    {
        "id": 1733,
        "pais_id": 42,
        "nombre": "Aguascalientes"
    },
    {
        "id": 1734,
        "pais_id": 42,
        "nombre": "Baja California"
    },
    {
        "id": 1735,
        "pais_id": 42,
        "nombre": "Baja California Sur"
    },
    {
        "id": 1736,
        "pais_id": 42,
        "nombre": "Campeche"
    },
    {
        "id": 1737,
        "pais_id": 42,
        "nombre": "Chiapas"
    },
    {
        "id": 1738,
        "pais_id": 42,
        "nombre": "Chihuahua"
    },
    {
        "id": 1739,
        "pais_id": 42,
        "nombre": "Coahuila de Zaragoza"
    },
    {
        "id": 1740,
        "pais_id": 42,
        "nombre": "Colima"
    },
    {
        "id": 1741,
        "pais_id": 42,
        "nombre": "Distrito Federal"
    },
    {
        "id": 1742,
        "pais_id": 42,
        "nombre": "Durango"
    },
    {
        "id": 1743,
        "pais_id": 42,
        "nombre": "Guanajuato"
    },
    {
        "id": 1744,
        "pais_id": 42,
        "nombre": "Guerrero"
    },
    {
        "id": 1745,
        "pais_id": 42,
        "nombre": "Hidalgo"
    },
    {
        "id": 1746,
        "pais_id": 42,
        "nombre": "Jalisco"
    },
    {
        "id": 1747,
        "pais_id": 42,
        "nombre": "México"
    },
    {
        "id": 1748,
        "pais_id": 42,
        "nombre": "Michoacán de Ocampo"
    },
    {
        "id": 1749,
        "pais_id": 42,
        "nombre": "Morelos"
    },
    {
        "id": 1750,
        "pais_id": 42,
        "nombre": "Nayarit"
    },
    {
        "id": 1751,
        "pais_id": 42,
        "nombre": "Nuevo León"
    },
    {
        "id": 1752,
        "pais_id": 42,
        "nombre": "Oaxaca"
    },
    {
        "id": 1753,
        "pais_id": 42,
        "nombre": "Puebla"
    },
    {
        "id": 1754,
        "pais_id": 42,
        "nombre": "Querétaro de Arteaga"
    },
    {
        "id": 1755,
        "pais_id": 42,
        "nombre": "Quintana Roo"
    },
    {
        "id": 1756,
        "pais_id": 42,
        "nombre": "San Luis Potosí"
    },
    {
        "id": 1757,
        "pais_id": 42,
        "nombre": "Sinaloa"
    },
    {
        "id": 1758,
        "pais_id": 42,
        "nombre": "Sonora"
    },
    {
        "id": 1759,
        "pais_id": 42,
        "nombre": "Tabasco"
    },
    {
        "id": 1760,
        "pais_id": 42,
        "nombre": "Tamaulipas"
    },
    {
        "id": 1761,
        "pais_id": 42,
        "nombre": "Tlaxcala"
    },
    {
        "id": 1762,
        "pais_id": 42,
        "nombre": "Veracruz-Llave"
    },
    {
        "id": 1763,
        "pais_id": 42,
        "nombre": "Yucatán"
    },
    {
        "id": 1764,
        "pais_id": 42,
        "nombre": "Zacatecas"
    },
    {
        "id": 1766,
        "pais_id": 124,
        "nombre": "Bocas del Toro"
    },
    {
        "id": 1767,
        "pais_id": 124,
        "nombre": "Chiriquí"
    },
    {
        "id": 1768,
        "pais_id": 124,
        "nombre": "Coclé"
    },
    {
        "id": 1769,
        "pais_id": 124,
        "nombre": "Colón"
    },
    {
        "id": 1770,
        "pais_id": 124,
        "nombre": "Darién"
    },
    {
        "id": 1771,
        "pais_id": 124,
        "nombre": "Herrera"
    },
    {
        "id": 1772,
        "pais_id": 124,
        "nombre": "Los Santos"
    },
    {
        "id": 1773,
        "pais_id": 124,
        "nombre": "Panamá"
    },
    {
        "id": 1774,
        "pais_id": 124,
        "nombre": "San Blas"
    },
    {
        "id": 1775,
        "pais_id": 124,
        "nombre": "Veraguas"
    },
    {
        "id": 1777,
        "pais_id": 123,
        "nombre": "Chuquisaca"
    },
    {
        "id": 1778,
        "pais_id": 123,
        "nombre": "Cochabamba"
    },
    {
        "id": 1779,
        "pais_id": 123,
        "nombre": "El Beni"
    },
    {
        "id": 1780,
        "pais_id": 123,
        "nombre": "La Paz"
    },
    {
        "id": 1781,
        "pais_id": 123,
        "nombre": "Oruro"
    },
    {
        "id": 1782,
        "pais_id": 123,
        "nombre": "Pando"
    },
    {
        "id": 1783,
        "pais_id": 123,
        "nombre": "Potosí"
    },
    {
        "id": 1784,
        "pais_id": 123,
        "nombre": "Santa Cruz"
    },
    {
        "id": 1785,
        "pais_id": 123,
        "nombre": "Tarija"
    },
    {
        "id": 1787,
        "pais_id": 36,
        "nombre": "Alajuela"
    },
    {
        "id": 1788,
        "pais_id": 36,
        "nombre": "Cartago"
    },
    {
        "id": 1789,
        "pais_id": 36,
        "nombre": "Guanacaste"
    },
    {
        "id": 1790,
        "pais_id": 36,
        "nombre": "Heredia"
    },
    {
        "id": 1791,
        "pais_id": 36,
        "nombre": "Limón"
    },
    {
        "id": 1792,
        "pais_id": 36,
        "nombre": "Puntarenas"
    },
    {
        "id": 1793,
        "pais_id": 36,
        "nombre": "San José"
    },
    {
        "id": 1795,
        "pais_id": 103,
        "nombre": "Galápagos"
    },
    {
        "id": 1796,
        "pais_id": 103,
        "nombre": "Azuay"
    },
    {
        "id": 1797,
        "pais_id": 103,
        "nombre": "Bolívar"
    },
    {
        "id": 1798,
        "pais_id": 103,
        "nombre": "Canar"
    },
    {
        "id": 1799,
        "pais_id": 103,
        "nombre": "Carchi"
    },
    {
        "id": 1800,
        "pais_id": 103,
        "nombre": "Chimborazo"
    },
    {
        "id": 1801,
        "pais_id": 103,
        "nombre": "Cotopaxi"
    },
    {
        "id": 1802,
        "pais_id": 103,
        "nombre": "El Oro"
    },
    {
        "id": 1803,
        "pais_id": 103,
        "nombre": "Esmeraldas"
    },
    {
        "id": 1804,
        "pais_id": 103,
        "nombre": "Guayas"
    },
    {
        "id": 1805,
        "pais_id": 103,
        "nombre": "Imbabura"
    },
    {
        "id": 1806,
        "pais_id": 103,
        "nombre": "Loja"
    },
    {
        "id": 1807,
        "pais_id": 103,
        "nombre": "Los Ríos"
    },
    {
        "id": 1808,
        "pais_id": 103,
        "nombre": "Manabí"
    },
    {
        "id": 1809,
        "pais_id": 103,
        "nombre": "Morona-Santiago"
    },
    {
        "id": 1810,
        "pais_id": 103,
        "nombre": "Pastaza"
    },
    {
        "id": 1811,
        "pais_id": 103,
        "nombre": "Pichincha"
    },
    {
        "id": 1812,
        "pais_id": 103,
        "nombre": "Tungurahua"
    },
    {
        "id": 1813,
        "pais_id": 103,
        "nombre": "Zamora-Chinchipe"
    },
    {
        "id": 1814,
        "pais_id": 103,
        "nombre": "Sucumbíos"
    },
    {
        "id": 1815,
        "pais_id": 103,
        "nombre": "Napo"
    },
    {
        "id": 1816,
        "pais_id": 103,
        "nombre": "Orellana"
    },
    {
        "id": 1818,
        "pais_id": 5,
        "nombre": "Buenos Aires"
    },
    {
        "id": 1819,
        "pais_id": 5,
        "nombre": "Catamarca"
    },
    {
        "id": 1820,
        "pais_id": 5,
        "nombre": "Chaco"
    },
    {
        "id": 1821,
        "pais_id": 5,
        "nombre": "Chubut"
    },
    {
        "id": 1822,
        "pais_id": 5,
        "nombre": "Córdoba"
    },
    {
        "id": 1823,
        "pais_id": 5,
        "nombre": "Corrientes"
    },
    {
        "id": 1824,
        "pais_id": 5,
        "nombre": "Distrito Federal"
    },
    {
        "id": 1825,
        "pais_id": 5,
        "nombre": "Entre Ríos"
    },
    {
        "id": 1826,
        "pais_id": 5,
        "nombre": "Formosa"
    },
    {
        "id": 1827,
        "pais_id": 5,
        "nombre": "Jujuy"
    },
    {
        "id": 1828,
        "pais_id": 5,
        "nombre": "La Pampa"
    },
    {
        "id": 1829,
        "pais_id": 5,
        "nombre": "La Rioja"
    },
    {
        "id": 1830,
        "pais_id": 5,
        "nombre": "Mendoza"
    },
    {
        "id": 1831,
        "pais_id": 5,
        "nombre": "Misiones"
    },
    {
        "id": 1832,
        "pais_id": 5,
        "nombre": "Neuquén"
    },
    {
        "id": 1833,
        "pais_id": 5,
        "nombre": "Río Negro"
    },
    {
        "id": 1834,
        "pais_id": 5,
        "nombre": "Salta"
    },
    {
        "id": 1835,
        "pais_id": 5,
        "nombre": "San Juan"
    },
    {
        "id": 1836,
        "pais_id": 5,
        "nombre": "San Luis"
    },
    {
        "id": 1837,
        "pais_id": 5,
        "nombre": "Santa Cruz"
    },
    {
        "id": 1838,
        "pais_id": 5,
        "nombre": "Santa Fe"
    },
    {
        "id": 1839,
        "pais_id": 5,
        "nombre": "Santiago del Estero"
    },
    {
        "id": 1840,
        "pais_id": 5,
        "nombre": "Tierra del Fuego"
    },
    {
        "id": 1841,
        "pais_id": 5,
        "nombre": "Tucumán"
    },
    {
        "id": 1843,
        "pais_id": 95,
        "nombre": "Amazonas"
    },
    {
        "id": 1844,
        "pais_id": 95,
        "nombre": "Anzoategui"
    },
    {
        "id": 1845,
        "pais_id": 95,
        "nombre": "Apure"
    },
    {
        "id": 1846,
        "pais_id": 95,
        "nombre": "Aragua"
    },
    {
        "id": 1847,
        "pais_id": 95,
        "nombre": "Barinas"
    },
    {
        "id": 1848,
        "pais_id": 95,
        "nombre": "Bolívar"
    },
    {
        "id": 1849,
        "pais_id": 95,
        "nombre": "Carabobo"
    },
    {
        "id": 1850,
        "pais_id": 95,
        "nombre": "Cojedes"
    },
    {
        "id": 1851,
        "pais_id": 95,
        "nombre": "Delta Amacuro"
    },
    {
        "id": 1852,
        "pais_id": 95,
        "nombre": "Falcón"
    },
    {
        "id": 1853,
        "pais_id": 95,
        "nombre": "Guárico"
    },
    {
        "id": 1854,
        "pais_id": 95,
        "nombre": "Lara"
    },
    {
        "id": 1855,
        "pais_id": 95,
        "nombre": "Mérida"
    },
    {
        "id": 1856,
        "pais_id": 95,
        "nombre": "Miranda"
    },
    {
        "id": 1857,
        "pais_id": 95,
        "nombre": "Monagas"
    },
    {
        "id": 1858,
        "pais_id": 95,
        "nombre": "Nueva Esparta"
    },
    {
        "id": 1859,
        "pais_id": 95,
        "nombre": "Portuguesa"
    },
    {
        "id": 1860,
        "pais_id": 95,
        "nombre": "Sucre"
    },
    {
        "id": 1861,
        "pais_id": 95,
        "nombre": "Táchira"
    },
    {
        "id": 1862,
        "pais_id": 95,
        "nombre": "Trujillo"
    },
    {
        "id": 1863,
        "pais_id": 95,
        "nombre": "Yaracuy"
    },
    {
        "id": 1864,
        "pais_id": 95,
        "nombre": "Zulia"
    },
    {
        "id": 1865,
        "pais_id": 95,
        "nombre": "Dependencias Federales"
    },
    {
        "id": 1866,
        "pais_id": 95,
        "nombre": "Distrito Federal"
    },
    {
        "id": 1867,
        "pais_id": 95,
        "nombre": "Vargas"
    },
    {
        "id": 1869,
        "pais_id": 209,
        "nombre": "Boaco"
    },
    {
        "id": 1870,
        "pais_id": 209,
        "nombre": "Carazo"
    },
    {
        "id": 1871,
        "pais_id": 209,
        "nombre": "Chinandega"
    },
    {
        "id": 1872,
        "pais_id": 209,
        "nombre": "Chontales"
    },
    {
        "id": 1873,
        "pais_id": 209,
        "nombre": "Estelí"
    },
    {
        "id": 1874,
        "pais_id": 209,
        "nombre": "Granada"
    },
    {
        "id": 1875,
        "pais_id": 209,
        "nombre": "Jinotega"
    },
    {
        "id": 1876,
        "pais_id": 209,
        "nombre": "León"
    },
    {
        "id": 1877,
        "pais_id": 209,
        "nombre": "Madriz"
    },
    {
        "id": 1878,
        "pais_id": 209,
        "nombre": "Managua"
    },
    {
        "id": 1879,
        "pais_id": 209,
        "nombre": "Masaya"
    },
    {
        "id": 1880,
        "pais_id": 209,
        "nombre": "Matagalpa"
    },
    {
        "id": 1881,
        "pais_id": 209,
        "nombre": "Nueva Segovia"
    },
    {
        "id": 1882,
        "pais_id": 209,
        "nombre": "Rio San Juan"
    },
    {
        "id": 1883,
        "pais_id": 209,
        "nombre": "Rivas"
    },
    {
        "id": 1884,
        "pais_id": 209,
        "nombre": "Zelaya"
    },
    {
        "id": 1886,
        "pais_id": 113,
        "nombre": "Pinar del Rio"
    },
    {
        "id": 1887,
        "pais_id": 113,
        "nombre": "Ciudad de la Habana"
    },
    {
        "id": 1888,
        "pais_id": 113,
        "nombre": "Matanzas"
    },
    {
        "id": 1889,
        "pais_id": 113,
        "nombre": "Isla de la Juventud"
    },
    {
        "id": 1890,
        "pais_id": 113,
        "nombre": "Camaguey"
    },
    {
        "id": 1891,
        "pais_id": 113,
        "nombre": "Ciego de Avila"
    },
    {
        "id": 1892,
        "pais_id": 113,
        "nombre": "Cienfuegos"
    },
    {
        "id": 1893,
        "pais_id": 113,
        "nombre": "Granma"
    },
    {
        "id": 1894,
        "pais_id": 113,
        "nombre": "Guantanamo"
    },
    {
        "id": 1895,
        "pais_id": 113,
        "nombre": "La Habana"
    },
    {
        "id": 1896,
        "pais_id": 113,
        "nombre": "Holguin"
    },
    {
        "id": 1897,
        "pais_id": 113,
        "nombre": "Las Tunas"
    },
    {
        "id": 1898,
        "pais_id": 113,
        "nombre": "Sancti Spiritus"
    },
    {
        "id": 1899,
        "pais_id": 113,
        "nombre": "Santiago de Cuba"
    },
    {
        "id": 1900,
        "pais_id": 113,
        "nombre": "Villa Clara"
    },
    {
        "id": 1901,
        "pais_id": 12,
        "nombre": "Acre"
    },
    {
        "id": 1902,
        "pais_id": 12,
        "nombre": "Alagoas"
    },
    {
        "id": 1903,
        "pais_id": 12,
        "nombre": "Amapa"
    },
    {
        "id": 1904,
        "pais_id": 12,
        "nombre": "Amazonas"
    },
    {
        "id": 1905,
        "pais_id": 12,
        "nombre": "Bahia"
    },
    {
        "id": 1906,
        "pais_id": 12,
        "nombre": "Ceara"
    },
    {
        "id": 1907,
        "pais_id": 12,
        "nombre": "Distrito Federal"
    },
    {
        "id": 1908,
        "pais_id": 12,
        "nombre": "Espirito Santo"
    },
    {
        "id": 1909,
        "pais_id": 12,
        "nombre": "Mato Grosso do Sul"
    },
    {
        "id": 1910,
        "pais_id": 12,
        "nombre": "Maranhao"
    },
    {
        "id": 1911,
        "pais_id": 12,
        "nombre": "Mato Grosso"
    },
    {
        "id": 1912,
        "pais_id": 12,
        "nombre": "Minas Gerais"
    },
    {
        "id": 1913,
        "pais_id": 12,
        "nombre": "Para"
    },
    {
        "id": 1914,
        "pais_id": 12,
        "nombre": "Paraiba"
    },
    {
        "id": 1915,
        "pais_id": 12,
        "nombre": "Parana"
    },
    {
        "id": 1916,
        "pais_id": 12,
        "nombre": "Piaui"
    },
    {
        "id": 1917,
        "pais_id": 12,
        "nombre": "Rio de Janeiro"
    },
    {
        "id": 1918,
        "pais_id": 12,
        "nombre": "Rio Grande do Norte"
    },
    {
        "id": 1919,
        "pais_id": 12,
        "nombre": "Rio Grande do Sul"
    },
    {
        "id": 1920,
        "pais_id": 12,
        "nombre": "Rondonia"
    },
    {
        "id": 1921,
        "pais_id": 12,
        "nombre": "Roraima"
    },
    {
        "id": 1922,
        "pais_id": 12,
        "nombre": "Santa Catarina"
    },
    {
        "id": 1923,
        "pais_id": 12,
        "nombre": "Sao Paulo"
    },
    {
        "id": 1924,
        "pais_id": 12,
        "nombre": "Sergipe"
    },
    {
        "id": 1925,
        "pais_id": 12,
        "nombre": "Goias"
    },
    {
        "id": 1926,
        "pais_id": 12,
        "nombre": "Pernambuco"
    },
    {
        "id": 1927,
        "pais_id": 12,
        "nombre": "Tocantins"
    },
    {
        "id": 1930,
        "pais_id": 83,
        "nombre": "Akureyri"
    },
    {
        "id": 1931,
        "pais_id": 83,
        "nombre": "Arnessysla"
    },
    {
        "id": 1932,
        "pais_id": 83,
        "nombre": "Austur-Bardastrandarsysla"
    },
    {
        "id": 1933,
        "pais_id": 83,
        "nombre": "Austur-Hunavatnssysla"
    },
    {
        "id": 1934,
        "pais_id": 83,
        "nombre": "Austur-Skaftafellssysla"
    },
    {
        "id": 1935,
        "pais_id": 83,
        "nombre": "Borgarfjardarsysla"
    },
    {
        "id": 1936,
        "pais_id": 83,
        "nombre": "Dalasysla"
    },
    {
        "id": 1937,
        "pais_id": 83,
        "nombre": "Eyjafjardarsysla"
    },
    {
        "id": 1938,
        "pais_id": 83,
        "nombre": "Gullbringusysla"
    },
    {
        "id": 1939,
        "pais_id": 83,
        "nombre": "Hafnarfjordur"
    },
    {
        "id": 1943,
        "pais_id": 83,
        "nombre": "Kjosarsysla"
    },
    {
        "id": 1944,
        "pais_id": 83,
        "nombre": "Kopavogur"
    },
    {
        "id": 1945,
        "pais_id": 83,
        "nombre": "Myrasysla"
    },
    {
        "id": 1946,
        "pais_id": 83,
        "nombre": "Neskaupstadur"
    },
    {
        "id": 1947,
        "pais_id": 83,
        "nombre": "Nordur-Isafjardarsysla"
    },
    {
        "id": 1948,
        "pais_id": 83,
        "nombre": "Nordur-Mulasysla"
    },
    {
        "id": 1949,
        "pais_id": 83,
        "nombre": "Nordur-Tingeyjarsysla"
    },
    {
        "id": 1950,
        "pais_id": 83,
        "nombre": "Olafsfjordur"
    },
    {
        "id": 1951,
        "pais_id": 83,
        "nombre": "Rangarvallasysla"
    },
    {
        "id": 1952,
        "pais_id": 83,
        "nombre": "Reykjavik"
    },
    {
        "id": 1953,
        "pais_id": 83,
        "nombre": "Saudarkrokur"
    },
    {
        "id": 1954,
        "pais_id": 83,
        "nombre": "Seydisfjordur"
    },
    {
        "id": 1956,
        "pais_id": 83,
        "nombre": "Skagafjardarsysla"
    },
    {
        "id": 1957,
        "pais_id": 83,
        "nombre": "Snafellsnes- og Hnappadalssysla"
    },
    {
        "id": 1958,
        "pais_id": 83,
        "nombre": "Strandasysla"
    },
    {
        "id": 1959,
        "pais_id": 83,
        "nombre": "Sudur-Mulasysla"
    },
    {
        "id": 1960,
        "pais_id": 83,
        "nombre": "Sudur-Tingeyjarsysla"
    },
    {
        "id": 1961,
        "pais_id": 83,
        "nombre": "Vestmannaeyjar"
    },
    {
        "id": 1962,
        "pais_id": 83,
        "nombre": "Vestur-Bardastrandarsysla"
    },
    {
        "id": 1964,
        "pais_id": 83,
        "nombre": "Vestur-Isafjardarsysla"
    },
    {
        "id": 1965,
        "pais_id": 83,
        "nombre": "Vestur-Skaftafellssysla"
    },
    {
        "id": 1966,
        "pais_id": 35,
        "nombre": "Anhui"
    },
    {
        "id": 1967,
        "pais_id": 35,
        "nombre": "Zhejiang"
    },
    {
        "id": 1968,
        "pais_id": 35,
        "nombre": "Jiangxi"
    },
    {
        "id": 1969,
        "pais_id": 35,
        "nombre": "Jiangsu"
    },
    {
        "id": 1970,
        "pais_id": 35,
        "nombre": "Jilin"
    },
    {
        "id": 1971,
        "pais_id": 35,
        "nombre": "Qinghai"
    },
    {
        "id": 1972,
        "pais_id": 35,
        "nombre": "Fujian"
    },
    {
        "id": 1973,
        "pais_id": 35,
        "nombre": "Heilongjiang"
    },
    {
        "id": 1974,
        "pais_id": 35,
        "nombre": "Henan"
    },
    {
        "id": 1975,
        "pais_id": 35,
        "nombre": "Hebei"
    },
    {
        "id": 1976,
        "pais_id": 35,
        "nombre": "Hunan"
    },
    {
        "id": 1977,
        "pais_id": 35,
        "nombre": "Hubei"
    },
    {
        "id": 1978,
        "pais_id": 35,
        "nombre": "Xinjiang"
    },
    {
        "id": 1979,
        "pais_id": 35,
        "nombre": "Xizang"
    },
    {
        "id": 1980,
        "pais_id": 35,
        "nombre": "Gansu"
    },
    {
        "id": 1981,
        "pais_id": 35,
        "nombre": "Guangxi"
    },
    {
        "id": 1982,
        "pais_id": 35,
        "nombre": "Guizhou"
    },
    {
        "id": 1983,
        "pais_id": 35,
        "nombre": "Liaoning"
    },
    {
        "id": 1984,
        "pais_id": 35,
        "nombre": "Nei Mongol"
    },
    {
        "id": 1985,
        "pais_id": 35,
        "nombre": "Ningxia"
    },
    {
        "id": 1986,
        "pais_id": 35,
        "nombre": "Beijing"
    },
    {
        "id": 1987,
        "pais_id": 35,
        "nombre": "Shanghai"
    },
    {
        "id": 1988,
        "pais_id": 35,
        "nombre": "Shanxi"
    },
    {
        "id": 1989,
        "pais_id": 35,
        "nombre": "Shandong"
    },
    {
        "id": 1990,
        "pais_id": 35,
        "nombre": "Shaanxi"
    },
    {
        "id": 1991,
        "pais_id": 35,
        "nombre": "Sichuan"
    },
    {
        "id": 1992,
        "pais_id": 35,
        "nombre": "Tianjin"
    },
    {
        "id": 1993,
        "pais_id": 35,
        "nombre": "Yunnan"
    },
    {
        "id": 1994,
        "pais_id": 35,
        "nombre": "Guangdong"
    },
    {
        "id": 1995,
        "pais_id": 35,
        "nombre": "Hainan"
    },
    {
        "id": 1996,
        "pais_id": 35,
        "nombre": "Chongqing"
    },
    {
        "id": 1997,
        "pais_id": 97,
        "nombre": "Central"
    },
    {
        "id": 1998,
        "pais_id": 97,
        "nombre": "Coast"
    },
    {
        "id": 1999,
        "pais_id": 97,
        "nombre": "Eastern"
    },
    {
        "id": 2000,
        "pais_id": 97,
        "nombre": "Nairobi Area"
    },
    {
        "id": 2001,
        "pais_id": 97,
        "nombre": "North-Eastern"
    },
    {
        "id": 2002,
        "pais_id": 97,
        "nombre": "Nyanza"
    },
    {
        "id": 2003,
        "pais_id": 97,
        "nombre": "Rift Valley"
    },
    {
        "id": 2004,
        "pais_id": 97,
        "nombre": "Western"
    },
    {
        "id": 2006,
        "pais_id": 195,
        "nombre": "Gilbert Islands"
    },
    {
        "id": 2007,
        "pais_id": 195,
        "nombre": "Line Islands"
    },
    {
        "id": 2008,
        "pais_id": 195,
        "nombre": "Phoenix Islands"
    },
    {
        "id": 2010,
        "pais_id": 1,
        "nombre": "Australian Capital Territory"
    },
    {
        "id": 2011,
        "pais_id": 1,
        "nombre": "New South Wales"
    },
    {
        "id": 2012,
        "pais_id": 1,
        "nombre": "Northern Territory"
    },
    {
        "id": 2013,
        "pais_id": 1,
        "nombre": "Queensland"
    },
    {
        "id": 2014,
        "pais_id": 1,
        "nombre": "South Australia"
    },
    {
        "id": 2015,
        "pais_id": 1,
        "nombre": "Tasmania"
    },
    {
        "id": 2016,
        "pais_id": 1,
        "nombre": "Victoria"
    },
    {
        "id": 2017,
        "pais_id": 1,
        "nombre": "Western Australia"
    },
    {
        "id": 2018,
        "pais_id": 27,
        "nombre": "Dublin"
    },
    {
        "id": 2019,
        "pais_id": 27,
        "nombre": "Galway"
    },
    {
        "id": 2020,
        "pais_id": 27,
        "nombre": "Kildare"
    },
    {
        "id": 2021,
        "pais_id": 27,
        "nombre": "Leitrim"
    },
    {
        "id": 2022,
        "pais_id": 27,
        "nombre": "Limerick"
    },
    {
        "id": 2023,
        "pais_id": 27,
        "nombre": "Mayo"
    },
    {
        "id": 2024,
        "pais_id": 27,
        "nombre": "Meath"
    },
    {
        "id": 2025,
        "pais_id": 27,
        "nombre": "Carlow"
    },
    {
        "id": 2026,
        "pais_id": 27,
        "nombre": "Kilkenny"
    },
    {
        "id": 2027,
        "pais_id": 27,
        "nombre": "Laois"
    },
    {
        "id": 2028,
        "pais_id": 27,
        "nombre": "Longford"
    },
    {
        "id": 2029,
        "pais_id": 27,
        "nombre": "Louth"
    },
    {
        "id": 2030,
        "pais_id": 27,
        "nombre": "Offaly"
    },
    {
        "id": 2031,
        "pais_id": 27,
        "nombre": "Westmeath"
    },
    {
        "id": 2032,
        "pais_id": 27,
        "nombre": "Wexford"
    },
    {
        "id": 2033,
        "pais_id": 27,
        "nombre": "Wicklow"
    },
    {
        "id": 2034,
        "pais_id": 27,
        "nombre": "Roscommon"
    },
    {
        "id": 2035,
        "pais_id": 27,
        "nombre": "Sligo"
    },
    {
        "id": 2036,
        "pais_id": 27,
        "nombre": "Clare"
    },
    {
        "id": 2037,
        "pais_id": 27,
        "nombre": "Cork"
    },
    {
        "id": 2038,
        "pais_id": 27,
        "nombre": "Kerry"
    },
    {
        "id": 2039,
        "pais_id": 27,
        "nombre": "Tipperary"
    },
    {
        "id": 2040,
        "pais_id": 27,
        "nombre": "Waterford"
    },
    {
        "id": 2041,
        "pais_id": 27,
        "nombre": "Cavan"
    },
    {
        "id": 2042,
        "pais_id": 27,
        "nombre": "Donegal"
    },
    {
        "id": 2043,
        "pais_id": 27,
        "nombre": "Monaghan"
    },
    {
        "id": 2044,
        "pais_id": 50,
        "nombre": "Karachaeva-Cherkesskaya Respublica"
    },
    {
        "id": 2045,
        "pais_id": 50,
        "nombre": "Raimirskii (Dolgano-Nenetskii) AO"
    },
    {
        "id": 2046,
        "pais_id": 50,
        "nombre": "Respublica Tiva"
    },
    {
        "id": 2047,
        "pais_id": 32,
        "nombre": "Newfoundland"
    },
    {
        "id": 2048,
        "pais_id": 32,
        "nombre": "Nova Scotia"
    },
    {
        "id": 2049,
        "pais_id": 32,
        "nombre": "Prince Edward Island"
    },
    {
        "id": 2050,
        "pais_id": 32,
        "nombre": "New Brunswick"
    },
    {
        "id": 2051,
        "pais_id": 32,
        "nombre": "Quebec"
    },
    {
        "id": 2052,
        "pais_id": 32,
        "nombre": "Ontario"
    },
    {
        "id": 2053,
        "pais_id": 32,
        "nombre": "Manitoba"
    },
    {
        "id": 2054,
        "pais_id": 32,
        "nombre": "Saskatchewan"
    },
    {
        "id": 2055,
        "pais_id": 32,
        "nombre": "Alberta"
    },
    {
        "id": 2056,
        "pais_id": 32,
        "nombre": "British Columbia"
    },
    {
        "id": 2057,
        "pais_id": 32,
        "nombre": "Nunavut"
    },
    {
        "id": 2058,
        "pais_id": 32,
        "nombre": "Northwest Territories"
    },
    {
        "id": 2059,
        "pais_id": 32,
        "nombre": "Yukon Territory"
    },
    {
        "id": 2060,
        "pais_id": 19,
        "nombre": "Drenthe"
    },
    {
        "id": 2061,
        "pais_id": 19,
        "nombre": "Friesland"
    },
    {
        "id": 2062,
        "pais_id": 19,
        "nombre": "Gelderland"
    },
    {
        "id": 2063,
        "pais_id": 19,
        "nombre": "Groningen"
    },
    {
        "id": 2064,
        "pais_id": 19,
        "nombre": "Limburg"
    },
    {
        "id": 2065,
        "pais_id": 19,
        "nombre": "Noord-Brabant"
    },
    {
        "id": 2066,
        "pais_id": 19,
        "nombre": "Noord-Holland"
    },
    {
        "id": 2067,
        "pais_id": 19,
        "nombre": "Utrecht"
    },
    {
        "id": 2068,
        "pais_id": 19,
        "nombre": "Zeeland"
    },
    {
        "id": 2069,
        "pais_id": 19,
        "nombre": "Zuid-Holland"
    },
    {
        "id": 2071,
        "pais_id": 19,
        "nombre": "Overijssel"
    },
    {
        "id": 2072,
        "pais_id": 19,
        "nombre": "Flevoland"
    },
    {
        "id": 2073,
        "pais_id": 138,
        "nombre": "Duarte"
    },
    {
        "id": 2074,
        "pais_id": 138,
        "nombre": "Puerto Plata"
    },
    {
        "id": 2075,
        "pais_id": 138,
        "nombre": "Valverde"
    },
    {
        "id": 2076,
        "pais_id": 138,
        "nombre": "María Trinidad Sánchez"
    },
    {
        "id": 2077,
        "pais_id": 138,
        "nombre": "Azua"
    },
    {
        "id": 2078,
        "pais_id": 138,
        "nombre": "Santiago"
    },
    {
        "id": 2079,
        "pais_id": 138,
        "nombre": "San Cristóbal"
    },
    {
        "id": 2080,
        "pais_id": 138,
        "nombre": "Peravia"
    },
    {
        "id": 2081,
        "pais_id": 138,
        "nombre": "Elías Piña"
    },
    {
        "id": 2082,
        "pais_id": 138,
        "nombre": "Barahona"
    },
    {
        "id": 2083,
        "pais_id": 138,
        "nombre": "Monte Plata"
    },
    {
        "id": 2084,
        "pais_id": 138,
        "nombre": "Salcedo"
    },
    {
        "id": 2085,
        "pais_id": 138,
        "nombre": "La Altagracia"
    },
    {
        "id": 2086,
        "pais_id": 138,
        "nombre": "San Juan"
    },
    {
        "id": 2087,
        "pais_id": 138,
        "nombre": "Monseñor Nouel"
    },
    {
        "id": 2088,
        "pais_id": 138,
        "nombre": "Monte Cristi"
    },
    {
        "id": 2089,
        "pais_id": 138,
        "nombre": "Espaillat"
    },
    {
        "id": 2090,
        "pais_id": 138,
        "nombre": "Sánchez Ramírez"
    },
    {
        "id": 2091,
        "pais_id": 138,
        "nombre": "La Vega"
    },
    {
        "id": 2092,
        "pais_id": 138,
        "nombre": "San Pedro de Macorís"
    },
    {
        "id": 2093,
        "pais_id": 138,
        "nombre": "Independencia"
    },
    {
        "id": 2094,
        "pais_id": 138,
        "nombre": "Dajabón"
    },
    {
        "id": 2095,
        "pais_id": 138,
        "nombre": "Baoruco"
    },
    {
        "id": 2096,
        "pais_id": 138,
        "nombre": "El Seibo"
    },
    {
        "id": 2097,
        "pais_id": 138,
        "nombre": "Hato Mayor"
    },
    {
        "id": 2098,
        "pais_id": 138,
        "nombre": "La Romana"
    },
    {
        "id": 2099,
        "pais_id": 138,
        "nombre": "Pedernales"
    },
    {
        "id": 2100,
        "pais_id": 138,
        "nombre": "Samaná"
    },
    {
        "id": 2101,
        "pais_id": 138,
        "nombre": "Santiago Rodríguez"
    },
    {
        "id": 2102,
        "pais_id": 138,
        "nombre": "San José de Ocoa"
    },
    {
        "id": 2103,
        "pais_id": 70,
        "nombre": "Chiba"
    },
    {
        "id": 2104,
        "pais_id": 70,
        "nombre": "Ehime"
    },
    {
        "id": 2105,
        "pais_id": 70,
        "nombre": "Oita"
    },
    {
        "id": 2106,
        "pais_id": 85,
        "nombre": "Skopje"
    },
    {
        "id": 2108,
        "pais_id": 35,
        "nombre": "Schanghai"
    },
    {
        "id": 2109,
        "pais_id": 35,
        "nombre": "Hongkong"
    },
    {
        "id": 2110,
        "pais_id": 35,
        "nombre": "Neimenggu"
    },
    {
        "id": 2111,
        "pais_id": 35,
        "nombre": "Aomen"
    },
    {
        "id": 2112,
        "pais_id": 92,
        "nombre": "Amnat Charoen"
    },
    {
        "id": 2113,
        "pais_id": 92,
        "nombre": "Ang Thong"
    },
    {
        "id": 2114,
        "pais_id": 92,
        "nombre": "Bangkok"
    },
    {
        "id": 2115,
        "pais_id": 92,
        "nombre": "Buri Ram"
    },
    {
        "id": 2116,
        "pais_id": 92,
        "nombre": "Chachoengsao"
    },
    {
        "id": 2117,
        "pais_id": 92,
        "nombre": "Chai Nat"
    },
    {
        "id": 2118,
        "pais_id": 92,
        "nombre": "Chaiyaphum"
    },
    {
        "id": 2119,
        "pais_id": 92,
        "nombre": "Chanthaburi"
    },
    {
        "id": 2120,
        "pais_id": 92,
        "nombre": "Chiang Mai"
    },
    {
        "id": 2121,
        "pais_id": 92,
        "nombre": "Chiang Rai"
    },
    {
        "id": 2122,
        "pais_id": 92,
        "nombre": "Chon Buri"
    },
    {
        "id": 2124,
        "pais_id": 92,
        "nombre": "Kalasin"
    },
    {
        "id": 2126,
        "pais_id": 92,
        "nombre": "Kanchanaburi"
    },
    {
        "id": 2127,
        "pais_id": 92,
        "nombre": "Khon Kaen"
    },
    {
        "id": 2128,
        "pais_id": 92,
        "nombre": "Krabi"
    },
    {
        "id": 2129,
        "pais_id": 92,
        "nombre": "Lampang"
    },
    {
        "id": 2131,
        "pais_id": 92,
        "nombre": "Loei"
    },
    {
        "id": 2132,
        "pais_id": 92,
        "nombre": "Lop Buri"
    },
    {
        "id": 2133,
        "pais_id": 92,
        "nombre": "Mae Hong Son"
    },
    {
        "id": 2134,
        "pais_id": 92,
        "nombre": "Maha Sarakham"
    },
    {
        "id": 2137,
        "pais_id": 92,
        "nombre": "Nakhon Pathom"
    },
    {
        "id": 2139,
        "pais_id": 92,
        "nombre": "Nakhon Ratchasima"
    },
    {
        "id": 2140,
        "pais_id": 92,
        "nombre": "Nakhon Sawan"
    },
    {
        "id": 2141,
        "pais_id": 92,
        "nombre": "Nakhon Si Thammarat"
    },
    {
        "id": 2143,
        "pais_id": 92,
        "nombre": "Narathiwat"
    },
    {
        "id": 2144,
        "pais_id": 92,
        "nombre": "Nong Bua Lam Phu"
    },
    {
        "id": 2145,
        "pais_id": 92,
        "nombre": "Nong Khai"
    },
    {
        "id": 2146,
        "pais_id": 92,
        "nombre": "Nonthaburi"
    },
    {
        "id": 2147,
        "pais_id": 92,
        "nombre": "Pathum Thani"
    },
    {
        "id": 2148,
        "pais_id": 92,
        "nombre": "Pattani"
    },
    {
        "id": 2149,
        "pais_id": 92,
        "nombre": "Phangnga"
    },
    {
        "id": 2150,
        "pais_id": 92,
        "nombre": "Phatthalung"
    },
    {
        "id": 2154,
        "pais_id": 92,
        "nombre": "Phichit"
    },
    {
        "id": 2155,
        "pais_id": 92,
        "nombre": "Phitsanulok"
    },
    {
        "id": 2156,
        "pais_id": 92,
        "nombre": "Phra Nakhon Si Ayutthaya"
    },
    {
        "id": 2157,
        "pais_id": 92,
        "nombre": "Phrae"
    },
    {
        "id": 2158,
        "pais_id": 92,
        "nombre": "Phuket"
    },
    {
        "id": 2159,
        "pais_id": 92,
        "nombre": "Prachin Buri"
    },
    {
        "id": 2160,
        "pais_id": 92,
        "nombre": "Prachuap Khiri Khan"
    },
    {
        "id": 2162,
        "pais_id": 92,
        "nombre": "Ratchaburi"
    },
    {
        "id": 2163,
        "pais_id": 92,
        "nombre": "Rayong"
    },
    {
        "id": 2164,
        "pais_id": 92,
        "nombre": "Roi Et"
    },
    {
        "id": 2165,
        "pais_id": 92,
        "nombre": "Sa Kaeo"
    },
    {
        "id": 2166,
        "pais_id": 92,
        "nombre": "Sakon Nakhon"
    },
    {
        "id": 2167,
        "pais_id": 92,
        "nombre": "Samut Prakan"
    },
    {
        "id": 2168,
        "pais_id": 92,
        "nombre": "Samut Sakhon"
    },
    {
        "id": 2169,
        "pais_id": 92,
        "nombre": "Samut Songkhran"
    },
    {
        "id": 2170,
        "pais_id": 92,
        "nombre": "Saraburi"
    },
    {
        "id": 2172,
        "pais_id": 92,
        "nombre": "Si Sa Ket"
    },
    {
        "id": 2173,
        "pais_id": 92,
        "nombre": "Sing Buri"
    },
    {
        "id": 2174,
        "pais_id": 92,
        "nombre": "Songkhla"
    },
    {
        "id": 2175,
        "pais_id": 92,
        "nombre": "Sukhothai"
    },
    {
        "id": 2176,
        "pais_id": 92,
        "nombre": "Suphan Buri"
    },
    {
        "id": 2177,
        "pais_id": 92,
        "nombre": "Surat Thani"
    },
    {
        "id": 2178,
        "pais_id": 92,
        "nombre": "Surin"
    },
    {
        "id": 2180,
        "pais_id": 92,
        "nombre": "Trang"
    },
    {
        "id": 2182,
        "pais_id": 92,
        "nombre": "Ubon Ratchathani"
    },
    {
        "id": 2183,
        "pais_id": 92,
        "nombre": "Udon Thani"
    },
    {
        "id": 2184,
        "pais_id": 92,
        "nombre": "Uthai Thani"
    },
    {
        "id": 2185,
        "pais_id": 92,
        "nombre": "Uttaradit"
    },
    {
        "id": 2186,
        "pais_id": 92,
        "nombre": "Yala"
    },
    {
        "id": 2187,
        "pais_id": 92,
        "nombre": "Yasothon"
    },
    {
        "id": 2188,
        "pais_id": 69,
        "nombre": "Busan"
    },
    {
        "id": 2189,
        "pais_id": 69,
        "nombre": "Daegu"
    },
    {
        "id": 2191,
        "pais_id": 69,
        "nombre": "Gangwon"
    },
    {
        "id": 2192,
        "pais_id": 69,
        "nombre": "Gwangju"
    },
    {
        "id": 2193,
        "pais_id": 69,
        "nombre": "Gyeonggi"
    },
    {
        "id": 2194,
        "pais_id": 69,
        "nombre": "Gyeongsangbuk"
    },
    {
        "id": 2195,
        "pais_id": 69,
        "nombre": "Gyeongsangnam"
    },
    {
        "id": 2196,
        "pais_id": 69,
        "nombre": "Jeju"
    },
    {
        "id": 2201,
        "pais_id": 25,
        "nombre": "Delhi"
    },
    {
        "id": 2202,
        "pais_id": 82,
        "nombre": "Bolivar"
    },
    {
        "id": 2203,
        "pais_id": 82,
        "nombre": "Boyacá"
    }
] */

/* departamentos.forEach(departamento => Departamentos.findOrCreate(
    {
        where: { id: departamento.id }, defaults: departamento
    }
)); */

Departamentos.sync({ force: false });

export {
    Departamentos
}
