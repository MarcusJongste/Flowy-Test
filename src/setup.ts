import * as fs from 'fs';
import * as path from 'path';

import { type Config } from '../src/types';

const configPath = path.resolve('flowytest.config.json');
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
console.log('created flowytest.config.json');
console.log('[flowy-test] Installed successfully.');