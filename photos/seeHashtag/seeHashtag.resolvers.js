import client from "../../client";

export default {
  Query: {
    seeHashtag: (_, { hashtag }) =>
      client.hashtag.findMany({
        where: { hashtag },
      }),
  },
};
