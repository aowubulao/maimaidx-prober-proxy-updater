const config = {
  host: "maimai.bakapiano.com",
  dev: false,
  fetchTimeOut: 60 * 3 * 1000,
  fetchRetryCount: 3,
  stageRetryCount: 3,
  httpServer: {
    enable: true,
    port: 8081,
  },
  httpProxy: {
    enable: true,
    port: 2560,
  },
  wechatLogin: {
    enable: true,
    cmd2Execute: "python C:\\Users\\bakapiano\\wechat_login.py",
    cookiePath: "C:\\Users\\bakapiano\\cookie.json",
    token: "",
  }
};

const serverHost = process.argv.slice(2)[0];
if (serverHost !== undefined) {
  config.host = serverHost;
  config.dev |= ["127.0.0.1", "localhost"].includes(serverHost);
}

console.log(`SERVER_HOST=${serverHost}`);
console.log(config);

export default config;
