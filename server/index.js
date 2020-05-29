require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    ctrl = require('./controller'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    port = SERVER_PORT,
    app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
})

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.newProduct)
// app.put()
// app.delete()

app.listen(port, () => console.log(`Server is running on port ${port}`));