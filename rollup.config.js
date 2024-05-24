import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        { src: 'src/styles.css', dest: 'dist' },
      ],
    }),
  ]
};