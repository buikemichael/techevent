import express from "express";
import { getEvents } from '../services/event.services'

const eventRouter = express.Router();
eventRouter.get("/events", async (req, res, next) => {
  try {
    const events = await getEvents(req.query);
    return res.status(200).json({ events });
  } catch (error) {
    next(error);
  }
});

export default eventRouter;
