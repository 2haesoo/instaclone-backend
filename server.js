require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { getUser, protectedResolver } from "./users/users.utils";

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    return { loggedInUser: await getUser(req.headers.token), protectedResolver };
  },
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`Server is runnning on http://localhost:${PORT}`));
