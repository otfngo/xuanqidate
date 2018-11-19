import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: [{
    format: 'iife',
    name: 'xuanqidate',
    file: 'dist/index.iife.js'
  }, {
    format: 'umd',
    name: 'xuanqidate',
    file: 'dist/index.umd.js'
  }, {
    format: 'cjs',
    file: 'dist/index.js'
  }],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}