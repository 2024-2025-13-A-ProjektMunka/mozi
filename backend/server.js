require('dotenv').config({ path: './backend/.env' });
const express = require('express');
const path = require('node:path');
const mongoDbConnection = require('./middlewares/dbConnection');

const PORT = process.env.PORT || 3500;
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

mongoDbConnection()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Valami hiba történt: ${error}`);
    });

app.use('/api/mozi', require('./routes/mainRoutes'));
