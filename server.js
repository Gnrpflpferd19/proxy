import http from "node:http";

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 8787);

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "no-store");

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200);
    res.end(JSON.stringify({
      ok: true,
      service: "private-server",
      message: "Der private Server läuft."
    }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ ok: false, error: "Not found" }));
});

server.listen(port, host, () => {
  console.log(`Private server listening on http://${host}:${port}`);
  console.log("Nur der /health-Endpunkt ist aktiviert; kein offener Proxy.");
});
