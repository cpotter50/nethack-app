import restana from 'restana';

export async function start () {
    let app;

    console.log (`- - - The Server Is Alive - - -`);
    
    //create a new instance of Restana. Restana is a stripped down version of express specialized for APIs. 
    app = restana ();

    app.get ('/newEndpoint', (req, res) => {
        res.send ('Hello World!!!');
    });


    app.start (9002);

}
