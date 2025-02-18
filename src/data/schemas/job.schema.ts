import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

import { Job } from "../dto/job.dto";

export type JobDocument = HydratedDocument<Job>;

export const JobSchema = SchemaFactory.createForClass(Job);
