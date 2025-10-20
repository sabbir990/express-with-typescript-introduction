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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.infosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../../DB/DB.json");
exports.infosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("This is my dummy server And I'm starting to love it already and I'm gonna go even further!");
}));
exports.infosRouter.get("/all-infos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const infos = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json(infos);
}));
exports.infosRouter.post("/post-info", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postedInformation = req.body;
    console.log(postedInformation);
    res.send("This is sent!");
}));
