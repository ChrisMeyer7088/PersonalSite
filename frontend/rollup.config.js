/* eslint-disable */
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      browser: true,
    }),
    image(),
    json(),
    commonjs(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
      globalModulePaths: [/global.scss/],
    }),
    babel({
      presets: [
        ['@babel/preset-react',
        {
          'runtime': 'automatic',
        }]
      ],
      babelHelpers: 'bundled'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      preventAssignment: true,
    }),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        { src: 'src/assets/', dest: 'dist/' }
      ]
    }),
    process.argv.includes('--watch') &&
      serve({
        host: '0.0.0.0',
        port: 3001,
        contentBase: 'dist',
      }),
    process.argv.includes('--watch') && livereload({ watch: 'dist' }),
  ]
}
