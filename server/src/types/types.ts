import { Redis } from "ioredis";
import { Session, SessionData } from "express-session";

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export type MyContext = {
  req: Request & {
    session: Session & Partial<SessionData> & { userId: string };
  };
  redis: Redis;
  res: Response;
};

export type IError = { [name: string]: string };
