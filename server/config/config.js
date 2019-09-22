///////=====================
// poertos                  
////////////==================

process.env.PORT = process.env.PORT || 3000;


///////=====================
// enviroment 
////////////==================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

///////=====================
// expiry token 
////////////==================

//60  segundo
//60 minutos
//24 horas
//30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;



///////=====================
// Seed
////////////==================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


///////=====================
// data Base
////////////==================

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://hamundnic:Latrivia1@cluster0-qbxnw.mongodb.net/cafe';
}

process.env.urlDB = urlDB;


///////=====================
// google clientID
////////////==================

process.env.CLIENT_ID = process.env.CLIENT_ID || '32826377538-3dvv0rdq7rr6eh5bsrr04jd53e96b904.apps.googleusercontent.com';