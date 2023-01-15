import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Paises = dataBase.define('paises', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(70),
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

/* const paises = [
    {
        "id": 144,
        "nombre": "Afganistán"
    },
    {
        "id": 114,
        "nombre": "Albania"
    },
    {
        "id": 18,
        "nombre": "Alemania"
    },
    {
        "id": 98,
        "nombre": "Algeria"
    },
    {
        "id": 145,
        "nombre": "Andorra"
    },
    {
        "id": 119,
        "nombre": "Angola"
    },
    {
        "id": 4,
        "nombre": "Anguilla"
    },
    {
        "id": 147,
        "nombre": "Antigua y Barbuda"
    },
    {
        "id": 207,
        "nombre": "Antillas Holandesas"
    },
    {
        "id": 91,
        "nombre": "Arabia Saudita"
    },
    {
        "id": 5,
        "nombre": "Argentina"
    },
    {
        "id": 6,
        "nombre": "Armenia"
    },
    {
        "id": 142,
        "nombre": "Aruba"
    },
    {
        "id": 1,
        "nombre": "Australia"
    },
    {
        "id": 2,
        "nombre": "Austria"
    },
    {
        "id": 3,
        "nombre": "Azerbaiyán"
    },
    {
        "id": 80,
        "nombre": "Bahamas"
    },
    {
        "id": 127,
        "nombre": "Bahrein"
    },
    {
        "id": 149,
        "nombre": "Bangladesh"
    },
    {
        "id": 128,
        "nombre": "Barbados"
    },
    {
        "id": 9,
        "nombre": "Bélgica"
    },
    {
        "id": 8,
        "nombre": "Belice"
    },
    {
        "id": 151,
        "nombre": "Benín"
    },
    {
        "id": 10,
        "nombre": "Bermudas"
    },
    {
        "id": 7,
        "nombre": "Bielorrusia"
    },
    {
        "id": 123,
        "nombre": "Bolivia"
    },
    {
        "id": 79,
        "nombre": "Bosnia y Herzegovina"
    },
    {
        "id": 100,
        "nombre": "Botsuana"
    },
    {
        "id": 12,
        "nombre": "Brasil"
    },
    {
        "id": 155,
        "nombre": "Brunéi"
    },
    {
        "id": 11,
        "nombre": "Bulgaria"
    },
    {
        "id": 156,
        "nombre": "Burkina Faso"
    },
    {
        "id": 157,
        "nombre": "Burundi"
    },
    {
        "id": 152,
        "nombre": "Bután"
    },
    {
        "id": 159,
        "nombre": "Cabo Verde"
    },
    {
        "id": 158,
        "nombre": "Camboya"
    },
    {
        "id": 31,
        "nombre": "Camerún"
    },
    {
        "id": 32,
        "nombre": "Canadá"
    },
    {
        "id": 130,
        "nombre": "Chad"
    },
    {
        "id": 81,
        "nombre": "Chile"
    },
    {
        "id": 35,
        "nombre": "China"
    },
    {
        "id": 33,
        "nombre": "Chipre"
    },
    {
        "id": 82,
        "nombre": "Colombia"
    },
    {
        "id": 164,
        "nombre": "Comores"
    },
    {
        "id": 112,
        "nombre": "Congo (Brazzaville)"
    },
    {
        "id": 165,
        "nombre": "Congo (Kinshasa)"
    },
    {
        "id": 166,
        "nombre": "Cook, Islas"
    },
    {
        "id": 84,
        "nombre": "Corea del Norte"
    },
    {
        "id": 69,
        "nombre": "Corea del Sur"
    },
    {
        "id": 168,
        "nombre": "Costa de Marfil"
    },
    {
        "id": 36,
        "nombre": "Costa Rica"
    },
    {
        "id": 71,
        "nombre": "Croacia"
    },
    {
        "id": 113,
        "nombre": "Cuba"
    },
    {
        "id": 22,
        "nombre": "Dinamarca"
    },
    {
        "id": 169,
        "nombre": "Djibouti, Yibuti"
    },
    {
        "id": 103,
        "nombre": "Ecuador"
    },
    {
        "id": 23,
        "nombre": "Egipto"
    },
    {
        "id": 51,
        "nombre": "El Salvador"
    },
    {
        "id": 93,
        "nombre": "Emiratos Árabes Unidos"
    },
    {
        "id": 173,
        "nombre": "Eritrea"
    },
    {
        "id": 52,
        "nombre": "Eslovaquia"
    },
    {
        "id": 53,
        "nombre": "Eslovenia"
    },
    {
        "id": 28,
        "nombre": "España"
    },
    {
        "id": 55,
        "nombre": "Estados Unidos"
    },
    {
        "id": 68,
        "nombre": "Estonia"
    },
    {
        "id": 121,
        "nombre": "Etiopía"
    },
    {
        "id": 175,
        "nombre": "Feroe, Islas"
    },
    {
        "id": 90,
        "nombre": "Filipinas"
    },
    {
        "id": 63,
        "nombre": "Finlandia"
    },
    {
        "id": 176,
        "nombre": "Fiyi"
    },
    {
        "id": 64,
        "nombre": "Francia"
    },
    {
        "id": 180,
        "nombre": "Gabón"
    },
    {
        "id": 181,
        "nombre": "Gambia"
    },
    {
        "id": 21,
        "nombre": "Georgia"
    },
    {
        "id": 105,
        "nombre": "Ghana"
    },
    {
        "id": 143,
        "nombre": "Gibraltar"
    },
    {
        "id": 184,
        "nombre": "Granada"
    },
    {
        "id": 20,
        "nombre": "Grecia"
    },
    {
        "id": 94,
        "nombre": "Groenlandia"
    },
    {
        "id": 17,
        "nombre": "Guadalupe"
    },
    {
        "id": 185,
        "nombre": "Guatemala"
    },
    {
        "id": 186,
        "nombre": "Guernsey"
    },
    {
        "id": 187,
        "nombre": "Guinea"
    },
    {
        "id": 172,
        "nombre": "Guinea Ecuatorial"
    },
    {
        "id": 188,
        "nombre": "Guinea-Bissau"
    },
    {
        "id": 189,
        "nombre": "Guyana"
    },
    {
        "id": 16,
        "nombre": "Haiti"
    },
    {
        "id": 137,
        "nombre": "Honduras"
    },
    {
        "id": 73,
        "nombre": "Hong Kong"
    },
    {
        "id": 14,
        "nombre": "Hungría"
    },
    {
        "id": 25,
        "nombre": "India"
    },
    {
        "id": 74,
        "nombre": "Indonesia"
    },
    {
        "id": 140,
        "nombre": "Irak"
    },
    {
        "id": 26,
        "nombre": "Irán"
    },
    {
        "id": 27,
        "nombre": "Irlanda"
    },
    {
        "id": 215,
        "nombre": "Isla Pitcairn"
    },
    {
        "id": 83,
        "nombre": "Islandia"
    },
    {
        "id": 228,
        "nombre": "Islas Salomón"
    },
    {
        "id": 58,
        "nombre": "Islas Turcas y Caicos"
    },
    {
        "id": 154,
        "nombre": "Islas Virgenes Británicas"
    },
    {
        "id": 24,
        "nombre": "Israel"
    },
    {
        "id": 29,
        "nombre": "Italia"
    },
    {
        "id": 132,
        "nombre": "Jamaica"
    },
    {
        "id": 70,
        "nombre": "Japón"
    },
    {
        "id": 193,
        "nombre": "Jersey"
    },
    {
        "id": 75,
        "nombre": "Jordania"
    },
    {
        "id": 30,
        "nombre": "Kazajstán"
    },
    {
        "id": 97,
        "nombre": "Kenia"
    },
    {
        "id": 34,
        "nombre": "Kirguistán"
    },
    {
        "id": 195,
        "nombre": "Kiribati"
    },
    {
        "id": 37,
        "nombre": "Kuwait"
    },
    {
        "id": 196,
        "nombre": "Laos"
    },
    {
        "id": 197,
        "nombre": "Lesotho"
    },
    {
        "id": 38,
        "nombre": "Letonia"
    },
    {
        "id": 99,
        "nombre": "Líbano"
    },
    {
        "id": 198,
        "nombre": "Liberia"
    },
    {
        "id": 39,
        "nombre": "Libia"
    },
    {
        "id": 126,
        "nombre": "Liechtenstein"
    },
    {
        "id": 40,
        "nombre": "Lituania"
    },
    {
        "id": 41,
        "nombre": "Luxemburgo"
    },
    {
        "id": 85,
        "nombre": "Macedonia"
    },
    {
        "id": 134,
        "nombre": "Madagascar"
    },
    {
        "id": 76,
        "nombre": "Malasia"
    },
    {
        "id": 125,
        "nombre": "Malawi"
    },
    {
        "id": 200,
        "nombre": "Maldivas"
    },
    {
        "id": 133,
        "nombre": "Malí"
    },
    {
        "id": 86,
        "nombre": "Malta"
    },
    {
        "id": 131,
        "nombre": "Man, Isla de"
    },
    {
        "id": 104,
        "nombre": "Marruecos"
    },
    {
        "id": 201,
        "nombre": "Martinica"
    },
    {
        "id": 202,
        "nombre": "Mauricio"
    },
    {
        "id": 108,
        "nombre": "Mauritania"
    },
    {
        "id": 42,
        "nombre": "México"
    },
    {
        "id": 43,
        "nombre": "Moldavia"
    },
    {
        "id": 44,
        "nombre": "Mónaco"
    },
    {
        "id": 139,
        "nombre": "Mongolia"
    },
    {
        "id": 117,
        "nombre": "Mozambique"
    },
    {
        "id": 205,
        "nombre": "Myanmar"
    },
    {
        "id": 102,
        "nombre": "Namibia"
    },
    {
        "id": 206,
        "nombre": "Nauru"
    },
    {
        "id": 107,
        "nombre": "Nepal"
    },
    {
        "id": 209,
        "nombre": "Nicaragua"
    },
    {
        "id": 210,
        "nombre": "Níger"
    },
    {
        "id": 115,
        "nombre": "Nigeria"
    },
    {
        "id": 212,
        "nombre": "Norfolk Island"
    },
    {
        "id": 46,
        "nombre": "Noruega"
    },
    {
        "id": 208,
        "nombre": "Nueva Caledonia"
    },
    {
        "id": 45,
        "nombre": "Nueva Zelanda"
    },
    {
        "id": 213,
        "nombre": "Omán"
    },
    {
        "id": 19,
        "nombre": "Países Bajos, Holanda"
    },
    {
        "id": 87,
        "nombre": "Pakistán"
    },
    {
        "id": 124,
        "nombre": "Panamá"
    },
    {
        "id": 88,
        "nombre": "Papúa-Nueva Guinea"
    },
    {
        "id": 110,
        "nombre": "Paraguay"
    },
    {
        "id": 89,
        "nombre": "Perú"
    },
    {
        "id": 178,
        "nombre": "Polinesia Francesa"
    },
    {
        "id": 47,
        "nombre": "Polonia"
    },
    {
        "id": 48,
        "nombre": "Portugal"
    },
    {
        "id": 246,
        "nombre": "Puerto Rico"
    },
    {
        "id": 216,
        "nombre": "Qatar"
    },
    {
        "id": 13,
        "nombre": "Reino Unido"
    },
    {
        "id": 65,
        "nombre": "República Checa"
    },
    {
        "id": 138,
        "nombre": "República Dominicana"
    },
    {
        "id": 49,
        "nombre": "Reunión"
    },
    {
        "id": 217,
        "nombre": "Ruanda"
    },
    {
        "id": 72,
        "nombre": "Rumanía"
    },
    {
        "id": 50,
        "nombre": "Rusia"
    },
    {
        "id": 242,
        "nombre": "Sáhara Occidental"
    },
    {
        "id": 223,
        "nombre": "Samoa"
    },
    {
        "id": 219,
        "nombre": "San Cristobal y Nevis"
    },
    {
        "id": 224,
        "nombre": "San Marino"
    },
    {
        "id": 221,
        "nombre": "San Pedro y Miquelón"
    },
    {
        "id": 225,
        "nombre": "San Tomé y Príncipe"
    },
    {
        "id": 222,
        "nombre": "San Vincente y Granadinas"
    },
    {
        "id": 218,
        "nombre": "Santa Elena"
    },
    {
        "id": 220,
        "nombre": "Santa Lucía"
    },
    {
        "id": 135,
        "nombre": "Senegal"
    },
    {
        "id": 226,
        "nombre": "Serbia y Montenegro"
    },
    {
        "id": 109,
        "nombre": "Seychelles"
    },
    {
        "id": 227,
        "nombre": "Sierra Leona"
    },
    {
        "id": 77,
        "nombre": "Singapur"
    },
    {
        "id": 106,
        "nombre": "Siria"
    },
    {
        "id": 229,
        "nombre": "Somalia"
    },
    {
        "id": 120,
        "nombre": "Sri Lanka"
    },
    {
        "id": 141,
        "nombre": "Sudáfrica"
    },
    {
        "id": 232,
        "nombre": "Sudán"
    },
    {
        "id": 67,
        "nombre": "Suecia"
    },
    {
        "id": 66,
        "nombre": "Suiza"
    },
    {
        "id": 54,
        "nombre": "Surinam"
    },
    {
        "id": 234,
        "nombre": "Swazilandia"
    },
    {
        "id": 56,
        "nombre": "Tadjikistan"
    },
    {
        "id": 92,
        "nombre": "Tailandia"
    },
    {
        "id": 78,
        "nombre": "Taiwan"
    },
    {
        "id": 101,
        "nombre": "Tanzania"
    },
    {
        "id": 171,
        "nombre": "Timor Oriental"
    },
    {
        "id": 136,
        "nombre": "Togo"
    },
    {
        "id": 235,
        "nombre": "Tokelau"
    },
    {
        "id": 236,
        "nombre": "Tonga"
    },
    {
        "id": 237,
        "nombre": "Trinidad y Tobago"
    },
    {
        "id": 122,
        "nombre": "Túnez"
    },
    {
        "id": 57,
        "nombre": "Turkmenistan"
    },
    {
        "id": 59,
        "nombre": "Turquía"
    },
    {
        "id": 239,
        "nombre": "Tuvalu"
    },
    {
        "id": 62,
        "nombre": "Ucrania"
    },
    {
        "id": 60,
        "nombre": "Uganda"
    },
    {
        "id": 111,
        "nombre": "Uruguay"
    },
    {
        "id": 61,
        "nombre": "Uzbekistán"
    },
    {
        "id": 240,
        "nombre": "Vanuatu"
    },
    {
        "id": 95,
        "nombre": "Venezuela"
    },
    {
        "id": 15,
        "nombre": "Vietnam"
    },
    {
        "id": 241,
        "nombre": "Wallis y Futuna"
    },
    {
        "id": 243,
        "nombre": "Yemen"
    },
    {
        "id": 116,
        "nombre": "Zambia"
    },
    {
        "id": 96,
        "nombre": "Zimbabwe"
    }
]
 */
/* paises.forEach(pais => Paises.findOrCreate(
    {
        where: { id: pais.id }, defaults: pais
    }
)); */


//para sincronizar el modelo con la base de datos.
//Al pasarle el parámetro force: false, Sequelize sólo creará la tabla si no existe.
Paises.sync({ force: false });

export {
    Paises
}