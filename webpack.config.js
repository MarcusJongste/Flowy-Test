const path = require('path');

module.exports = {
    mode: 'production',

    // Browser entry point only — Node.js is handled by tsc directly
    entry: './src/browser.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'browser.js',
        // Expose as a CommonJS module so React projects can import it
        library: {
            type: 'commonjs2',
        },
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    // Don't bundle these — the consuming app will have them
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },

    target: 'web',
};