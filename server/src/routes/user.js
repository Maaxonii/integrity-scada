const {Router} = require(`express`);
const userRouter = new Router();
const userController = require("../controllers/user.js");
const {authenticateToken, adminAuth} = require("../utils/token")

userRouter.get("/users", adminAuth, userController.getUsersData);
userRouter.get("/user/:id", userController.getOneUserData);
userRouter.get("/login", userController.checkAuth);
userRouter.post("/login", userController.login);
userRouter.get("/logout", userController.logout);
userRouter.post("/registration", userController.registration);

module.exports = userRouter;
