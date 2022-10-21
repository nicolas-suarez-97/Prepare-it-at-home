/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.istockphoto.com',
      'cdn.pixabay.com',
      'png.pngtree.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cursos/cocteleria-de-autor',
        permanent: true,
      },
      {
        source: '/cursos',
        destination: '/cursos/cocteleria-de-autor',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
