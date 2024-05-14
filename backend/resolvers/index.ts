import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver";
import todoResolver from "./todo.resolver";

const mergedResolvers = mergeResolvers([userResolver, todoResolver]);

export default mergedResolvers;
