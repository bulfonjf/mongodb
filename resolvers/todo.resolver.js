import Todo from "../models/todo.model.js";
import User from "../models/user.model.js";

const todoResolver = {
  Query: {
    todo: async (_, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;

        const todos = await Todo.find({ userId });
        return todos;

      } catch (err) {
        console.error("Error getting todos:", err);
        throw new Error("Error getting todos");
      }
    }
  },
  Todo: {
    user: async (parent) => {
      const userId = parent.userId;
      try {
        const user = await User.findById(userId);
        return user;
      } catch (err) {
        console.error("Error getting user:", err);
        throw new Error("Error getting user");
      }
    },
  },
};

export default todoResolver;
