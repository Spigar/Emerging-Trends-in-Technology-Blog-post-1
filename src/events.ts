/* eslint-disable linebreak-style */
import { ProcessedEvent } from "./lib/types";

export const EVENTS: ProcessedEvent[] = [
  {
    event_id: 1,
    title: "Gym workout",
    start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
  },
  {
    event_id: 2,
    title: "Dentist appointment",
    start: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(13)).setMinutes(0)),
    admin_id: 2,
    color: "#50b500",
  },
  {
    event_id: 3,
    title: "Work",
    start: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(22)).setMinutes(0)),
  },
  
];
