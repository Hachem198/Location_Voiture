import express from "express";
import { PrismaClient } from "@prisma/client";
import validator from "validator";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
//signup router
export const userSignup = async (req, res) => {
  try {
    //check for username
    const Usernameexist = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });
    if (!req.body.username) {
      return res.json({ error: "Username is required!" });
    }
    if (Usernameexist) {
      return res.json({ error: "This username is taken already!" });
    }
    //check for email
    if (!req.body.email) {
      return res.json({ error: "Email is required!" });
    }
    const emailexist = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (emailexist) {
      return res.json({ error: "This Email is taken already!" });
    }
    if (!validator.isEmail(req.body.email)) {
      return res.json({ error: "Email must be valid!" });
    }
    //check for number
    if (!req.body.number) {
      return res.json({ error: "Number is required!" });
    }
    if (!validator.isNumeric(req.body.number)) {
      return res.json({ error: "Number is not valid" });
    }
    //check for mdp
    if (!req.body.mdp) {
      return res.json({ error: "Password is required!" });
    }
    if (
      req.body.mdp.length < 6 ||
      !(req.body.mdp[0].toUpperCase() === req.body.mdp.charAt(0))
    ) {
      return res.json({
        error:
          "First letter of the password must be uppercase and should be at least 6 characters long",
      });
    }
    const newuser = {
      username: req.body.username,
      email: req.body.email,
      number: Number(req.body.number),
      mdp: await hashPassword(req.body.mdp),
      isadmin: req.body.isadmin,
    };
    const user = await prisma.User.create({ data: newuser });
    return res.status(201).json(newuser);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};
//login router
export const userlogin = async (req, res) => {
  try {
    //check for username or email
    const user = await prisma.user.findUnique({
      where: { username: req.body.username },
    });
    if (!user) {
      return res.json({ error: "The username doesnt exist" });
    }
    //check for password
    const VerifPass = await comparePassword(req.body.mdp, user.mdp);
    if (!VerifPass) {
      return res.json({ error: "The password is wrong !" });
    }
    if (VerifPass) {
      jwt.sign(
        { email: user.email, id: user.id, username: user.username },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
          console.log(req.cookies);
        }
      );
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};
