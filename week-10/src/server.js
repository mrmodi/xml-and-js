const http = require("http");
const userController = require("./controllers/product");

const parseURLParams = (value) => {
    const params = new URLSearchParams(value);

    return Array.from(params.entries()).reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value }),
        {}
    );
}

const server = http.createServer(async (req, res) => {
   

    const [basePath, paramsString] = req.url.split("?");

    if (req.method === "GET") {

        if (basePath == '/api/users') {
            const params = parseURLParams(paramsString);

            let { code, data } = await userController.getAll(params)
            res.writeHead(code, { "Content-Type": "application/json" });
            res.end(data)

        } else if (basePath.match(/\/api\/users\/\w+/)) {
            const id = basePath.split("/")[3];

            const { code, data } = await userController.getById(id);

            res.writeHead(code, { "Content-Type": "application/json" });
            res.end(data);

        } else {
            res.end('Invalid route')

        }
    } else {
        res.end('Invalid method')
    }

})

const PORT = 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
//server.listen(8080, () => console.log(`listening at 8080`))