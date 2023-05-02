module.exports = {
  secret: "bezkoder-secret-key",
  // jwtExpiration: 3600,         // 1 hour
  // jwtRefreshExpiration: 86400, // 24 hours

  /* for test */
  jwtExpiration: 525960 * 60, // 1 minute
  jwtRefreshExpiration: 525960 * 60, // 2 minutes
};
