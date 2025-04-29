/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // added cd.dummyjson.com as external image sources to the allowed domains
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
