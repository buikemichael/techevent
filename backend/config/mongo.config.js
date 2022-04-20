require("dotenv").config();

export const mongoDB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.f728h.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&ssl=true`;
