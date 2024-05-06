import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import todoResolver from "./todo.resolver.js";

const mergedResolvers = mergeResolvers([userResolver, todoResolver]);

export default mergedResolvers;
