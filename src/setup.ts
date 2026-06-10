import * as fs from 'fs';
import * as path from 'path';

import { type Config } from '../src/types';

const defaultConfig: Config = {
    dirs: [],
    ignore: [/index\.(ts|js)$/],
    extensions: ['js', 'ts'],
    testFilePattern: /test\.(ts|js)$/
};

const projectRoot = path.resolve(__dirname, '..', '..', '..');
const configPath = path.resolve(projectRoot, 'flowytest.config.json');
if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    console.log('created flowytest.config.json');
} else {
    console.log('Config already exists, skipping flowytest.config creation');
}

console.log('[flowy-test] Installed successfully.');