# Backend oldalon kezdeti beállítások

[Főoldal](/markdown/megoldas.md)

## Első lépés - server.js és .env kezdeti beállítása

-   [ ] Lépjünk be a **backend** mappába <br> `mozi > cd backend`
-   [ ] Hozzuk létre a következő mappákat <br> `mozi/backend > mkdir models views controllers routes public middlewares`
    -   **models**: **mongoose** adatbázisnál használt **collection**-önök modelljeihez
    -   **views**: **ejs** állományokhoz
    -   **controllers**: **route**-okhoz tartozó **CRUD** függvények kidolgozásához
    -   **routes**: **route**-ok szétválasztásához
    -   **public**: statikus **html**, **css**, **js** állományokhoz és képekhez
    -   **middlewares**: függvényekhez a **request** és **response** között
-   [ ] `server.js` és `.env` állományok létrehozása <br> `mozi/backend > touch server.js .env`
    -   `server.js` - `backend` szerver kezelése
    -   `.env` - környezeti változók kezelése
-   [ ] `.env` állomány kezdeti szerkesztése:
    -   **PORT** - beállítása. Ezen a **PORT**-számon fogja fogadni a **request**-eket a szerver
    -   **MONGO_URI** -beállítása
        ![Harmadik kép](/markdown/images/kep_003.png)

## Második lépés - Adatbázis csatlakozás

-   [ ] Lépjünk be a `middlewares` mappába <br> `mozi/backend > cd middlewares`
-   [ ] Hozzunk létre egy `dbConnection.js` nevű állományt <br> `mozi/backend/middlewares > touch dbConnection.js`
-   [ ] Szerkesszük az így kapott állományt
        ![Negyedik kép](/markdown/images/kep_004.png)
-   [ ] Szerkesszük a `server.js` állományt
        ![Ötödik kép](/markdown/images/kep_005.png)
-   [ ] Menjünk vissza a gyökérmappába <br> `mozi/backend/middlewares > cd ..` <br> `mozi/backend/ > cd ..`
-   [ ] Adjuk ki a következő utasítást <br> `mozi > npm run dev` <br> Ha jól dolgoztunk, akkor a következőt olvashatjuk a konzolon
        ![Hatodik kép](/markdown/images/kep_006.png)
-   [ ] Bal `ctrl` + bal egérgomb klikk a `http://localhost:3500`-on hatására
        ![Hetedik kép](/markdown/images/kep_007.png)

## Harmadik lépés - MainRoute kezelése

-   [ ] Lépjünk be a `backend/controllers` mappába és hozzuk létre a `mainRouteControllers.js` állományt <br> `mozi > cd backend/controllers` <br> `mozi/backend/controllers > touch mainRouteControllers.js`
-   [ ] Szerkesszük az állományt
        ![Nyolcadik kép](/markdown/images/kep_008.png)
-   [ ] A `mainGet` metódust a `backend/routes/mainRoutes.js` állományban fogjuk meghívni. Ehhez <br> `mozi/backend/controllers > cd ..` <br> `mozi/backend > cd routes` <br> `mozi/backend/routes > touch mainRoutes.js`
        ![Kilencedik kép](/markdown/images/kep_009.png)
-   [ ] Végül térjünk vissza a `server.js` állományhoz és szerkesszük <br> `mozi/backend/routes > cd ..`
        ![Tizedik kép](/markdown/images/kep_010.png)
-   [ ] A `mainRouteControllers.js` állományban található `index.ejs` a következő
        ![Tizenegyedik kép](/markdown/images/kep_011.png)
-   [ ] Míg a `nav.ejs`. Mindkettő a `mozi/backend/views` mappában található.
        ![Tizenkettedik kép](/markdown/images/kep_012.png)
-   [ ] A `server.js` állományban állítsuk be a `public` mappát, mint a statikus állománykért felelős könyvtárat
        ![Tizenharmadik kép](/markdown/images/kep_013.png)
-   [ ] Kezdeti stílusolás a `stilus.css` állományban
        ![Tizennegyedik kép](/markdown/images/kep_014.png)
-   [ ] Futtatás eredménye
        ![Tizenötödik kép](/markdown/images/kep_015.png)

## Negyedik lépés - FilmRoute kezelése

-   [ ] Készítsük el a **filmek**, **nezok** és **foglalasok** route-okat is. Példaként a **filmek** route-ot vesszük végig. Készítsünk egy `filmekRouteControllers.js` állományt a `controllers` mappában <br> `mozi/backend/controllers > touch filmekRouteControllers.js`
        ![Tizenhatodik kép](/markdown/images/kep_016.png)
-   [ ] Ezután készítsünk egy `filmekRoutes.js` állományt a `routes` mappában <br> `mozi/backend/controllers > cd ..` <br> `mozi/backend > cd routes` <br> `mozi/backend/routes > touch filmekRoutes.js`
        ![Tizenhetedik kép](/markdown/images/kep_017.png)
-   [ ] Már csak a `server.js` van hátra
        ![Tizennyolcadik kép](/markdown/images/kep_018.png)
-   [ ] És a `filmek.ejs` a `views` mappában <br> `mozi/backend/routes > cd ..` <br> `mozi/backend > cd views` <br> `mozi/backend/views > touch filmek.ejs`
        ![Tizenkilencedik kép](/markdown/images/kep_019.png)
-   [ ] Futtatás után
        ![Huszadik kép](/markdown/images/kep_020.png)

## Ötödik lépés - Film modell létrehozása és használata

-   [ ] Lépjünk be a `models` mappába <br> `mozi/backend/views > cd ..` <br> `mozi/backend > cd models` <br> `mozi/backend/views > touch Film.js`
-   [ ] Szerkesszük az állományt
        ![Huszonegyedik kép](/markdown/images/kep_021.png)
