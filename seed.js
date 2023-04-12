import mongoose from "mongoose";
import UserModel from "./models/userModel.js"
import dotenv from "dotenv";
dotenv.config();

const connection_URL = process.env.MONGO_URL;
mongoose.connect(connection_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe123",
    email: "johndoe@example.com",
    password: "password123",
    passwordConfirm: "password123",
    role: "user",
    contactNumber: "+1234567890",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe123",
    email: "janedoe@example.com",
    password: "password123",
    passwordConfirm: "password123",
    role: "user",
    contactNumber: "+1234567890",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    username: "bobsmith123",
    email: "bobsmith@example.com",
    password: "password123",
    passwordConfirm: "password123",
    role: "user",
    contactNumber: "+1234567890",
  },
  {
    firstName: "Alice",
    lastName: "Jones",
    username: "alicejones123",
    email: "alicejones@example.com",
    password: "password123",
    passwordConfirm: "password123",
    role: "admin",
    contactNumber: "+1234567890",
  },
];

UserModel.create(users)
.then((user) => {
  console.log(user);
})
.catch((err) => {
  console.log(err);
});