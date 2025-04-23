import mongoose from "mongoose";

const connectToDataBase = () => {
    mongoose.connect(`${process.env.DB_CONNECTION_STRING}StackNotesDB`)
    .then(() => {
        console.log('Database connection sucessfull');
    })
    .catch(() => {
        console.log('Database connection unsucessfull');
    });
};

export default connectToDataBase;