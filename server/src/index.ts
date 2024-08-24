import { connectDb } from './framework/database/databaseServer/MongoDb'
import  './framework/server/ExpressServer'
import { ExpressServer } from './framework/server/ExpressServer';

const expressServer = new ExpressServer()
connectDb();
