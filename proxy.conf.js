const PROXY_CONFIG = [
  {
    context: ["/"],
    target: "https://firstapi-production-09ff.up.railway.app",
    secure: false,
    logLevel: "debug",
  },
];

export default PROXY_CONFIG;
