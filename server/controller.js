module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(error => res.status(500).send(error))
    },
    newProduct: (req, res) => {
        const db = req.app.get('db');

        const {name, price, imgUrl} = req.body;

        db.create_product(name, price, imgUrl)
            .then(product => res.status(200).send(product))
            .catch(error => res.status(500).send(error))
    },

    editProduct: (req, res) => {

    },

    deleteProduct: (req, res) => {

    }
}