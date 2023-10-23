const express = require ('express');
const app = express ();
const PORT = 8188;

app.use (express.json ());


app.get ('/tshirt', (req, res) => {
    res.status (200).send ({
        tshirt: 'Red Shirt',
        size: 'large'
    })
});

app.post ('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status (418).send ({ message: 'We need a logo!'})
    }

    res.send ({
        tshirt: `Red tshirt with your ${logo} and ID of ${id}`
    })
})

app.listen (
    PORT,
    () => console.log (`It's alive on http://localhost:${PORT}`)
);

