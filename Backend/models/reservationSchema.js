import mongoose from "mongoose";
import validator from "validator";

export const reservationSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters !!!"],
        maxLength: [30, "First name cannot exceed 30 characters !!!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters !!!"],
        maxLength: [30, "Last name cannot exceed 30 characters !!!"],
    },
    email:{
        type: String,
        required:true,
        validate:[validator.isEmail,"Provide a Valid Email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number contain 11 digits"],
        maxLength: [11, "Phone number contain 11 digits"],
    },
    time : {
        type : String,
        required:true,
    },
    date: {
        type: String,
        required:true,
    },
});

export const Reservation = mongoose.model("Reservation",reservationSchema);