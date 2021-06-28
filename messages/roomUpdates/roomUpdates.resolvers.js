import { withFilter } from "apollo-server-express";
import { NEW_MESSAGE } from "../../constants";
import pubsub from "../../pubsub";

export default {
    Subscription: {
        roomUpdates: {
            subscribe: withFilter(
                () => pubsub.asyncIterator(NEW_MESSAGE),
                // (payload, variables) => return true (true 일 경우에만 subscribe)
                ({ roomUpdates }, { id }) => {
                    return roomUpdates.roomId === id;
                }
            )
        }
    }
}