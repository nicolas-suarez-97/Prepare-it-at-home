/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'media.istockphoto.com',
            'cdn.pixabay.com',
            'png.pngtree.com',
            'cdn.discordapp.com',
            'static.vecteezy.com'
        ]
    }
}

module.exports = nextConfig
