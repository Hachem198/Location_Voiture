import { rejects } from "assert";
import bcrypt from "bcrypt";
import { resolve } from "path";
import Module from "module";
export const hashPassword = async (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};
export const comparePassword = async (password, hashed) => {
  return await bcrypt.compare(password, hashed);
};
