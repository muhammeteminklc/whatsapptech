/** @type {import('next').NextConfig} */

export default {
  experimental: {
    serverComponentsExternalPackages: ['canvas'],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    AZURE_API_KEY: process.env.AZURE_API_KEY,
    AZURE_REGION: process.env.AZURE_REGION,
    OPENAI_PROXY_API_KEY: process.env.OPENAI_PROXY_API_KEY,
    OPENAI_PROXY_MAX_TOKENS: process.env.OPENAI_PROXY_MAX_TOKENS,
    WIT_API_KEY: process.env.WIT_API_KEY,
    WIT_API_URL: process.env.WIT_API_URL,
    FFMPEG_SUPPORTED: process.env.FFMPEG_SUPPORTED || 'false',
    LOCAL_STORAGE_PATH: process.env.LOCAL_STORAGE_PATH,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};