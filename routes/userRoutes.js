import express from 'express';

const userRoute = express.Router();
import { createUser, loginUser, deleteUser, getAllUsers, getSingleUser, updateUser } from '../controller/userController.js';

userRoute.post("/new-user", createUser);
userRoute.get("/login", loginUser);
userRoute.get("/all-users", getAllUsers);
userRoute.get("/get-one-user/:id", getSingleUser);
userRoute.delete("/delete-user/:id", deleteUser);
userRoute.patch("/update-user/:id", updateUser);

export default userRoute;
