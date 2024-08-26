"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (mongoUri) {
            await mongoose_1.default.connect(mongoUri);
            console.log("mongoDb connected");
        }
        else {
            console.log("No uri available");
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectDb = connectDb;
