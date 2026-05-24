import fs from 'fs';
import path from 'path';

interface Config {

}

const projectRoot = path.resolve(__dirname, '../../../');
const configPath = path.join(projectRoot, 'flowytest.config.json');
if (fs.existsSync(configPath)) {
    console.log('Config already exists, skipping flowytest.config creation');
    process.exit(0);
}
const defaultConfig: Config = {

};

fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
console.log('created flowytest.config.json')