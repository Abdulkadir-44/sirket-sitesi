/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
};

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
    openAnalyzer: true, // analiz otomatik browser'da açılsın
    generateStatsFile: false, // stats.json istemiyorsan false
  });
  nextConfig = withBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
