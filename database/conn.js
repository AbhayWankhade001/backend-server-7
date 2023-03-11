// import mongoose from "mongoose";

// import { MongoMemoryServer } from "mongodb-memory-server";
// import ENV from '../router/config.js'

// async function connect(){

//     const mongod = await MongoMemoryServer.create();
//     const getUri = mongod.getUri();

//     mongoose.set('strictQuery', true)
//     // const db = await mongoose.connect(getUri);
//     const db = await mongoose.connect(ENV.ATLAS_URI);
//     console.log("Database Connected")
//     return db;
// }

// export default connect;
// import mongoose from "mongoose";
// import ENV from '../router/config.js';

// async function connect(){
//     const db = await mongoose.connect(ENV.ATLAS_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     console.log("Database Connected");
//     return db;
// }

// export default connect;


import mongoose from "mongoose";
import ENV from '../router/config.js';

async function connect(){
    try {
        const db = await mongoose.connect(ENV.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
  useCreateIndex: true,
            serverSelectionTimeoutMS: 5000 // Add this option
        });
        console.log("Database Connected");
        return db;
    } catch (error) {
        console.error("Error connecting to database:", error.message);
        process.exit(1); // Exit the process with an error code
    }
}

