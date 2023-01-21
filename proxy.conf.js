const PROXY_CONFIG = [
  {
    context: ["/"],
    target: "http://localhost:3500",
    secure: false,
    logLevel: "debug",
  },
];

export default PROXY_CONFIG;
