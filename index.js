const { Client } = require("kubernetes-client");
const Request = require("kubernetes-client/backends/request");

const backend = new Request(
  Request.config.fromKubeconfig(process.env.KUBECONFIG)
);

const client = new Client({ backend, version: "1.13" });
client.api.v1.namespaces.get().then(console.log, console.error);
