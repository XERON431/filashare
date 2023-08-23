import mongoose from "mongoose";



const DBConnection = async () => {

    const MONGO_URI = 'mongodb+srv://user:siddhant1234@cluster0.nbhspyk.mongodb.net/?retryWrites=true&w=majority';
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;