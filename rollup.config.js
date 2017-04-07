// import { rollup } from 'rollup';
// import jsx from 'rollup-plugin-jsx'
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
// import buble from 'rollup-plugin-buble'
// import extern from 'babel-plugin-external-helpers';

export default {
  entry: 'src/index.js',
  dest: 'build.app.js',
  moduleName: 'React3',
  sourceMap: true,
  format: 'iife',
  plugins: [
    // buble(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        "es2015-rollup",
        "stage-0",
        "react"
      ],
      plugins: [
        "transform-decorators-legacy",
        "external-helpers"
      ]
    }),
    nodeResolve({
      jsnext: true,
      browser: true,
      extensions: [ '.js', '.json', '.jsx' ],
      preferBuiltins: false
    }),
    commonjs()
  ]
};
