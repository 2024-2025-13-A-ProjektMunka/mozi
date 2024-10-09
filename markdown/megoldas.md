# Mozi - projektfeladat

## Első lépés - Feladat megbeszélése

-   [ ] Ötletelés - Mi legyen a projekt témája?
-   [ ] Csapatmunka megszervezése, feladatok kiosztása
-   [ ] Fejlesztői eszközök kiválasztása
    -   **Visual Studio Code**
    -   **GitHub**
    -   **MongoDb Atlas** és/vagy **MongoDb Compass**
    -   **Cloudinary** stb.
-   [ ] Előzetes tervek készítése - **Figma**
-   [ ] Programozói eszközök kiválasztása - **MERN**

## Második lépés - Projekt kezdeti beállításai

-   [ ] **GitHub repository** létrehozása **mozi** néven
-   [ ] **Visual Studio Code**-ban projekt indítása a repository URL-jével
-   [ ] **GitBash** felület megnyitása: `ctrl + j`
-   [ ] **node** aktiválása a mappában: `mozi > npm init -y`
-   [ ] `backend` mappa létrehozása: `mozi > mkdir backend`
-   [ ] `frontend` mappa létrehozása: `mozi > npm create vite@latest`
-   [ ] `.gitignore` állomány létrehozása a létrejött "mozi" mappában: `mozi > touch .gitignore`

## Harmadik lépés - MongoDb adatbázis beállítása

-   [ ] **MongoDb** projekt létrehozása **mozi** néven
-   [ ] **MongoDb** cluster létrehozása **mozimusor** néven
-   [ ] **MongoDb** adatbázis létrehozása **filmek** néven
-   [ ] **MongoDb** gyűjtemény (**collection**) létrehozása **films** néven az adatbázisban
-   [ ] Csatlakozási link kiolvasása az oldalról

## Negyedik lépés - Node.js környezet kialakítása

-   [ ] `backend`-hez szükséges **npm** csomagok első telepítése: `mozi > npm install express ejs mongoose dotenv cors`
-   [ ] Fejlesztői függőség (**devDependency**) telepítése: `mozi > npm install -D nodemon`
-   [ ] `.gitignore` első szerkesztése:
        ![Első kép](/markdown/images/kep_001.png)
-   [ ] `package.json` első szerkesztése:
        ![Második kép](/markdown/images/kep_002.png)

## Ötödik lépés - Irány a backend

-   [ ] [Backend oldalon kezdeti beállítások](/markdown/backend_1.md)
