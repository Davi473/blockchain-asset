export default interface HttpServer {
    register(method: string, url: string, callback: Function): Promise<void>;
}

import express from "express";

export class HttpServerExpress implements HttpServer{
    readonly server: any;
    constructor () {
        this.server = express();
        this.server.use(express.json());
    }

    public async register(method: string, url: string, callback: Function) {
        this.server[method](url, (req: any, res: any) => {
            try {
                const outputs = callback(req, res);
                if (outputs) res.json(outputs);
            } catch (e: any) {
                res.status(422).json({message: e.message});
            }
        });
    }
}