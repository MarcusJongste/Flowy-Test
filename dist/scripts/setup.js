"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const projectRoot = path_1.default.resolve(__dirname, '../../../');
const configPath = path_1.default.join(projectRoot, 'flowytest.config.json');
if (fs_1.default.existsSync(configPath)) {
    console.log('Config already exists, skipping flowytest.config creation');
    process.exit(0);
}
const defaultConfig = {};
fs_1.default.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
console.log('created flowytest.config.json');
