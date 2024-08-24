import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";
import { createServer, Server as HTTPServer } from 'http';
import dotenv from "dotenv";
import { userRoutes } from "../routes/user/UserRoutes";


dotenv.config();

export class ExpressServer {
    private app: Application;
    private server: HTTPServer;


    constructor() {
        this.app = express();
        this.server = createServer(this.app);

        this.configureMiddleware();
        this.configureRoutes();
        this.configureErrorHandling();
        this.startServer();
    }

    private configureMiddleware(): void {
        this.app.use(express.json());
          
    
        const publicPath = path.join(__dirname, '..', 'public');
        this.app.use(express.static(publicPath));
    }

    private configureRoutes(): void {
        this.app.use("/api", userRoutes);

        this.app.use('*', (req: Request, res: Response) => {
            res.status(404).json({
                success: false,
                message: 'Route not found'
            });
        });
    }

    private configureErrorHandling(): void {
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            const statusCode: number = err.statusCode || 500;
            const message = err.message || "Internal server error";
            res.status(statusCode).json({
                success: false,
                statusCode,
                message,
            });
        });
    }

    private startServer(): void {
        const port = process.env.PORT || 7000;  
        this.server.listen(port, () => {
            console.log(`Express server running on port ${port}`);
        });
    }
}

// To initialize the server, create an instance of ExpressServer
// new ExpressServer();



