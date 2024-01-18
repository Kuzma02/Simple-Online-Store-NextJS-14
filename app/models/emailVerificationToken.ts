import { Document, ObjectId } from "mongoose";

interface EmailVerificationTokenDocument extends Document {
    user: ObjectId,
    token: string;
    createdAt: Date;
}