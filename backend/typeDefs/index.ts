import { mergeTypeDefs } from "@graphql-tools/merge";

// typeDefs
import userTypeDef from "./user.typeDef";
import todoTypeDef from "./todo.typeDef";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, todoTypeDef]);

export default mergedTypeDefs;
