import mongoose from "mongoose";


const passwordSchema = new mongoose.Schema({
    user:{ 
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
},
name: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
}
},{timestamps: true});


export const PasswordModel = mongoose.model('Password', passwordSchema);