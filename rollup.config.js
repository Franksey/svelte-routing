import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import svelte from 'rollup-plugin-svelte';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/app.js',
    dest: 'public/dist/app.js',
    format: 'iife',
    plugins: [
        svelte(),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        (process.env.NODE_ENV === 'production' && uglify())
    ]
}
