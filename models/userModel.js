import mongoose from "mongoose";
const {Schema} = mongoose;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "please enter your firstname"],
    trim: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
    required: [true, "please enter your lastname"],
    trim: true,
    min: 3,
    max: 20,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required:[true, "please enter your email"],
    trim: true,
    unique: true,
    lowercase: true,
  },
password: {
    type: String,
    required: [true, "please enter your password"],
    minLength: 8,
    trim: true,
  },

  passwordConfirm: {
    type: String,
    required: [true, "please confirm your password"],
    minLength: 8,
    trim: true,
  },
  passwordChangedAt: Date,
  
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },


  contactNumber: { type: String },
  

  

}, { timestamps: true });


const userModel = mongoose.model("User", userSchema);
export default userModel;