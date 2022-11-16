const env = import.meta.env

const isDevelopment = env.DEV
const isProduction = env.PROD

export { env, isDevelopment, isProduction }
