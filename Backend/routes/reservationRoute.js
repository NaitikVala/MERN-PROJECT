import express from "express";
import {sendReservation} from "../controller/reservation.js";

export const router = express.Router();

router.post("/send",sendReservation);


export default router;