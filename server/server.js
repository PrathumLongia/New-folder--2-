import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import "./config/instrument.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';

let cachedApp = null;

const createServer = async () => {
  if (cachedApp) return cachedApp;

  const app = express();

  await connectDB();

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => res.send("API Working"));
  app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry Error!");
  });
  app.post('/webhooks', clerkWebhooks);

  Sentry.setupExpressErrorHandler(app);

  cachedApp = app;
  return app;
};

// Export handler for Vercel
export default async (req, res) => {
  const app = await createServer();
  return app(req, res);
};
