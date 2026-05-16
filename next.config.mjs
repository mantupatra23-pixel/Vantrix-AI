/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ye line mandatory hai static export ke liye
  images: {
    unoptimized: true, // Termux/Render static export mein image optimization bypass karne ke liye
  },
};

export default nextConfig;
