import express from "express";
import cors from "cors";
import users from "./routes/user.js";
import {connect} from "./db/connection.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

await connect();

export default app;