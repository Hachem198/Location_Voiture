import express from "express";
import validator from "validator";
export const CarSearch = async (req, res) => {
  try {
    console.log(req.body);
    //PICK-UP PLACE VALIDATION
    if (!req.body.pickUpLocation) {
      return res.json({ error: "Pick-Up Location required !" });
    }
    //return location validation
    if (!req.body.returnLocation) {
      return res.json({ error: "Drop-off Location required !" });
    }
    //Pick-up Date&Time validation
    const now = new Date();
    const pickUpDate = new Date(req.body.pickUpDate);
    if (pickUpDate < now) {
      return res.json({ error: "Pick-Up Date must be in the future!" });
    }
    const hours = pickUpDate.getHours();
    if (hours < 8 || hours >= 18) {
      return res.json({ error: "Pick-Up Time must be between 8 AM and 6 PM!" });
    }
    //Drop-off Date&Time validation
    const returnDate = new Date(req.body.returnDate);
    if (returnDate < pickUpDate) {
      return res.json({
        error: "Drop-off Date must be after the pick-up Date !",
      });
    }
    return res.status(201).send("ok");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};
