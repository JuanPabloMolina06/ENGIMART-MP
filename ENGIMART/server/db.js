import mongoose from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://admin:admin@cluster0.jmvha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}