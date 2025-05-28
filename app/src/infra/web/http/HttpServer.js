import express from "express";

export class HttpServerExpress {
    constructor () {
        this.server = express();
        this.server.use(express.json());
    }

    register(method, url, callback) {
        this.server[method](url, (req, res) => {
            try {
                const outputs = callback(req, res);
                if (outputs) res.json(outputs);
            } catch (e) {
                res.status(422).json({message: e.message});
            }
        });
    }
}