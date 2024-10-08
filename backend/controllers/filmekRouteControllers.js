const path = require('node:path');

exports.getFilmek = (req, res) => {
    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'filmek.ejs');
        res.status(200).render(viewsUt);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
