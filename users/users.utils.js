import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await client.user.findUnique({ where: { id } });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

// ES6 function
// export const protectedResolver = (resolver) => (root, args, context, info) => {
//   if (!context.loggedInUser) {
//     return {
//       ok: false,
//       error: "Please log in to perform this action.",
//     };
//   }
//   return resolver(root, args, context, info);
// };

export function protectedResolver(resolver) {
  return function (root, args, context, info) {
    if (!context.loggedInUser) {
      const query = info.operation.operation === "query";
      if (query) {
        return null;
      } else {
        return {
          ok: false,
          error: "Please log in to perform this action.",
        };
      }
    }
    return resolver(root, args, context, info);
  };
}
