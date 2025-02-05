//mongodb://jsonDataAdmin:<insertYourPassword>@jsondatacluster.cluster-cr8kuaqgugig.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false

const conButton = document.getElementById('connect');
conButton.addEventListener("click", con);

function con(){

    var MongoClient = require('mongodb').MongoClient

    //Create a MongoDB client, open a connection to DocDB; as a replica set,
    //  and specify the read preference as secondary preferred

    var client = MongoClient.connect(
    'mongodb://jsonDataAdmin:Tester99!@jsondatacluster.cluster-cr8kuaqgugig.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false',
    {
    tlsCAFile: `global-bundle.pem` //Specify the DocDB; cert
    },
    function(err, client) {
        if(err)
            throw err;

        //Specify the database to be used
        db = client.db('test');

        //Specify the collection to be used
        col = db.collection('courses');

        console.log(col)

        client.close();
    });
}