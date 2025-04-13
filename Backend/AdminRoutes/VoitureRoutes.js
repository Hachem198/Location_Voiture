import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/cars", async (req, res) => {
  try {
    if (
      !req.body.model ||
      !req.body.type ||
      !req.body.nombreSiege ||
      !req.body.transmission ||
      !req.body.prixParJour ||
      !req.body.imgUrl
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: model , type , nombreSiege , transmission , climatisation , prixParJour , imgUrl",
      });
    }
    const newcar = {
      model: req.body.model,
      type: req.body.type,
      nombreSiege: Number(req.body.nombreSiege),
      transmission: req.body.transmission,
      climatisation: req.body.climatisation == "true" ? true : false,
      prixParJour: Number(req.body.prixParJour),
      imgUrl: req.body.imgUrl,
    };
    const car = await prisma.Voiture.create({ data: newcar });
    return res.status(201).send(car);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/cars", async (req, res) => {
  try {
    const cars = await prisma.Voiture.findMany();
    return res.status(201).json(cars);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/cars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const car = await prisma.voiture.findUnique({ where: { id } });
    if (!car) {
      return res.status(404).send("Car not found !");
    }
    return res.status(201).json(car);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});
router.put("/cars/:id", async (req, res) => {
  try {
    if (
      !req.body.model ||
      !req.body.type ||
      !req.body.nombreSiege ||
      !req.body.transmission ||
      !req.body.prixParJour ||
      !req.body.imgUrl
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: model , type , nombreSiege , transmission , climatisation , prixParJour , imgUrl",
      });
    }
    const modifcar = {
      model: req.body.model,
      type: req.body.type,
      nombreSiege: Number(req.body.nombreSiege),
      transmission: req.body.transmission,
      climatisation: req.body.climatisation == "true" ? true : false,
      prixParJour: Number(req.body.prixParJour),
      imgUrl: req.body.imgUrl,
    };
    const id = req.params.id;
    const car = await prisma.Voiture.update({
      where: { id: id },
      data: modifcar,
    });
    if (!car) {
      return res.status(404).send("Car not found !");
    }
    return res.status(201).send("Car updated successfully !");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});
router.delete("/cars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedcar = await prisma.Voiture.delete({
      where: { id: id },
    });
    if (!deletedcar) {
      return res.status(404).send("Car not found");
    }
    return res.status(201).send("Car deleted !");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

export default router;
