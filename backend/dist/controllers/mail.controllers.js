"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const mailer_config_1 = require("../config/mailer.config");
const emailTemplates_1 = require("../mail-templates/emailTemplates");
const sendMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const info = yield mailer_config_1.transport.sendMail({
            to: email,
            subject: `[Sender Love]`,
            html: emailTemplates_1.giftIdeas,
        });
        return info;
    }
    catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(400).json({ message: 'Unknown error occurred' });
    }
});
exports.sendMail = sendMail;
