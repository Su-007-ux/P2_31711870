"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.get('/', (_req, res) => {
    res.render('index', {
        nombre: 'Jesus Dobles',
        cedula: '31711870',
        seccion: '03'
    });
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
