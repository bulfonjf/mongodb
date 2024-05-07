import { mergeTypeDefs } from "@graphql-tools/merge";

// typeDefs
import userTypeDef from "./user.typeDef.js";
import todoTypeDef from "./todo.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, todoTypeDef]);

export default mergedTypeDefs;
