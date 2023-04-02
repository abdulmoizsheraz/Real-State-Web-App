/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images:{
    remotePatterns:[
      {
        hostname:'images.unsplash.com'
      },{
        hostname:'bayut-production.s3.eu-central-1.amazonaws.com'
      }
    ]
  }
}
module.exports = nextConfig