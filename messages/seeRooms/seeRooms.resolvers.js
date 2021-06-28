import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeRooms: protectedResolver(async (_, __, { loggedInUser }) =>
      client.room.findMany({
        where: {
          user: {
            some: {
              id: loggedInUser.id,
            },
          },
        },
      })
    ),
  },
};
