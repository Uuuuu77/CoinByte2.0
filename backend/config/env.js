const required = ['MONGO_URI', 'JWT_SECRET_KEY'];

function loadConfig(env = process.env) {
  const missing = required.filter((name) => !env[name] || env[name].trim().length < 32 && name === 'JWT_SECRET_KEY');
  if (missing.length > 0) {
    throw new Error(`Missing or weak required environment variables: ${missing.join(', ')}`);
  }

  return {
    port: Number.parseInt(env.PORT || '5000', 10),
    mongoUri: env.MONGO_URI,
    jwtSecret: env.JWT_SECRET_KEY,
    corsOrigins: (env.CORS_ORIGINS || 'http://localhost:5173')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  };
}

module.exports = { loadConfig };
