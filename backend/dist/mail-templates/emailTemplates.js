"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.giftIdeas = exports.firstTemplateHtml = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const loadTemplate = (fileName) => {
    const filePath = path_1.default.join(__dirname, 'templates', fileName);
    return fs_1.default.readFileSync(filePath, 'utf8');
};
const firstTemplateHtml = loadTemplate('first-html.html');
exports.firstTemplateHtml = firstTemplateHtml;
const giftIdeas = loadTemplate('gifts-ideas.html');
exports.giftIdeas = giftIdeas;
