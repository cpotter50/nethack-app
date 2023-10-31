import restana from 'restana';
import fs from 'fs-extra';
import bodyParser from 'body-parser';
const PORT = 9002;

export async function start () {
    let app;

    console.log (`- - - The Server Is Alive - - -`);
    console.log (`localhost:${PORT}/`);

    //create a new instance of Restana. Restana is a stripped down version of express specialized for APIs. 
    app = restana ();
    app.use (bodyParser.json ());

    app.get ('/newEndpoint', (req, res) => {
        res.send ('Hello World!!!');
    });

    
    app.get ('/monster', (req, res) => {
        res.send ({
            monsterName: "Giant Ant",
            monsterType: "Insect"
        });
    })

    app.get ('/monster/:type/:name', async (req, res) => {
        let content;
        let name = req.params.name;
        let type = req.params.type;
        try {
           content = await fs.readJSON (`storage/monster/${type}/${name}`);
           res.send (content);
        }
        catch (err) {
            console.error (err.message);
            res.send ({
                error: err.message
            });
        }
    })

    app.post ('/monster/:type/:name', async (req, res) => {
        let content;
        let name = req.params.name;
        let type = req.params.type;
        let monsterData = req.body;

        console.log ("my monster", type, name);

        try {
            let monster = JSON.stringify (monsterData, null, 2);


            await fs.outputFile (
                `storage/monster/${type}/${name}`,
                monster
            )
           
            res.send ({
                message: "Monster Created",
                content: monster
            });
        }
        catch (err) {
            console.error (err.message);
            res.send ({
                error: err.message
            });
        }
    })


    app.start (PORT);
}
