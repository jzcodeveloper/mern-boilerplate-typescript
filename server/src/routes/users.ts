import { Router } from "express";
import { validate } from "../middlewares/validate";
import * as UserController from "../controllers/user";
import * as UserValidation from "../validations/user";

const routes: Router = Router();

// @method GET | POST
// @access public
routes
  .route("/")
  .get(UserController.getUsers)
  .post(validate(UserValidation.createUser), UserController.createUser);

// @method GET | PUT | DELETE
// @access public
routes
  .route("/:id")
  .get(UserController.getUser)
  .put(validate(UserValidation.updateUser), UserController.updateUser)
  .delete(UserController.deleteUser);

export default routes;
