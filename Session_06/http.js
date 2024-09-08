import http from "http";

const server = http.createServer();

server.listen(3000, () => {
    console.log("server start on port " + 3000);
});

server.on("request", (req, res) => {
    res.setHeader("Content-Type", "application/json")


    // res.end(JSON.stringify(req.headers));
    // res.end(JSON.stringify(req.rawHeaders));

    const obj = {
        httpVersion: req.httpVersion,
        method: req.method,
        url: req.url,
        host: req.headers.host
    }

    res.end(JSON.stringify(obj));

});
