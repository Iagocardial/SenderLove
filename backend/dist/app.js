"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const subscriber_1 = __importDefault(require("./routes/subscriber"));
const health_check_1 = __importDefault(require("./routes/health-check"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/api', subscriber_1.default);
app.use('/api', health_check_1.default);
const port = process.env.PORT || 5001;
console.log('Iniciando o servidor backend');
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
});
