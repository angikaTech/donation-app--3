const express = require("express");
const { createUser, loginUserCtrl, getallUser, getaUser, deleteaUser, updatedUser, blockUser, unblockUser, handleRefreshToken, logout, updateOrgnization, updatePassword } = require("../controller/userctrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createPayee, getPayee, successfullPayment, totalAmount, getsinglePayee } = require("../controller/payeectrl");

const router = express.Router();


router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
router.put("/edite-user", updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.get("/refresh", handleRefreshToken);
router.post("/add-payee/:id", createPayee);
router.get("/payee/:id", getPayee);
router.get('/successfullPayment/:id', successfullPayment);
router.get('/total-amount/:id', totalAmount);
router.put('/update-password', updatePassword);
router.get('/payee-by-id/:id', getsinglePayee)


module.exports = router;