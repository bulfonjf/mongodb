import Todo from "../models/todo.model";
import {MyContext} from "../types/MyContext";


const todoResolver = {
  Query: {
    todo: async (_: any, { todoId }: { todoId: string }) => {
      try {
        const todo = await Todo.findById(todoId);
        return todo;
      } catch (err: any) {
        console.error("Error in todo query:", err);
        throw new Error(err.message || "Error getting todo by id");
      }
    },
    todos: async (_: any, __: any, context: MyContext) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = context.getUser()?._id;

        const todos = await Todo.find({ userId });
        return todos;

      } catch (err) {
        console.error("Error getting todos:", err);
        throw new Error("Error getting todos");
      }
    }
  },
  // Todo: {
  //   user: async (parent) => {
  //     const userId = parent.userId;
  //     try {
  //       const user = await User.findById(userId);
  //       return user;
  //     } catch (err) {
  //       console.error("Error getting user:", err);
  //       throw new Error("Error getting user");
  //     }
  //   },
  // },
};

export default todoResolver;
