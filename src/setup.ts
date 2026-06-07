import * as fs from 'fs';
import * as path from 'path';

import { type Config } from '../src/types';

const projectRoot = path.resolve(__dirname, '../../../');
const configPath = path.join(projectRoot, 'flowytest.config.json');
if (fs.existsSync(configPath)) {
    console.log('Config already exists, skipping flowytest.config creation');
    process.exit(0);
}
const defaultConfig: Config = {
    dirs: [],
    ignore: [/index\.(ts|js)$/],
    extensions: ['js', 'ts'],
    testFilePattern:/test\.(ts|js)$/
};

fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
console.log('created flowytest.config.json')