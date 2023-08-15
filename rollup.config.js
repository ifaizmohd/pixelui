const typescript = require('rollup-plugin-typescript2');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

module.exports = {
  input: './packages/components/src/index.ts', // Entry point for your library
  output: [
    {
      file: 'dist/pixel-ui.js',
      format: 'cjs', // CommonJS format for Node.js and bundlers
      exports: 'named',
    },
    {
      file: 'dist/pixel-ui.esm.js',
      format: 'esm', // ES modules format
    },
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json', // Path to your tsconfig.json
    }),
    resolve(),
    commonjs(),
  ],
  external: ['react', 'react-dom'], // List of external dependencies
};
