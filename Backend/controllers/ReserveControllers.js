import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const ShowCars = async (req, res) => {
  try {
    const start = new Date(req.body.pickUpDate);
    const end = new Date(req.body.returnDate);
    const availableCars = await prisma.voiture.findMany({
      where: {
        Location: {
          none: {
            // malezmsh : ya malezmsh lpickupDate(base) 9bal returnDate(requete) || malezmsh returnDate(base) baed pickUpdate(requete)
            OR: [
              {
                pickUpDate: { lte: end }, // Booking ends after the selected start date
                returnDate: { gte: start }, // Booking starts before the selected end date
              },
            ],
          },
        },
      },
    });
    res.json(availableCars);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching available cars" });
  }
};
export const ReserveCar = async (req, res) => {
  try {
    const id = req.body.id;
    const car = await prisma.voiture.findUnique({ where: { id } });
    if (!car) {
      return res.status(404).send("Car not found !");
    }
    return res.json(car);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
