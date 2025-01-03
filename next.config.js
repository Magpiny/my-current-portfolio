// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'dist',

    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
