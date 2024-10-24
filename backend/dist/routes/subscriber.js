"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_controllers_1 = require("../controllers/mail.controllers");
const router = (0, express_1.Router)();
router.post('/subscribe', (req, res) => {
    (0, mail_controllers_1.sendMail)(req, res);
    res.status(200).json({ message: "Successfully sent message" });
});
exports.default = router;
