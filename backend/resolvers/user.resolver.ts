import Todo from "../models/todo.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { MyContext } from "../types/MyContext";
import { MyUser } from "../types/MyUser";


const userResolver = {
  Mutation: {
    signUp: async (_: any, { input } : {input : MyUser}, context : MyContext) => {
      try {
        const { username, name, password, gender } = input;

        if (!username || !name || !password || !gender) {
          throw new Error("All fields are required");
        }
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          throw new Error("User already exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
          username,
          name,
          password: hashedPassword,
          gender,
          profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        await newUser.save();
        await context.login(newUser);
        return newUser;
      } catch (err: any) {
        console.error("Error in signUp: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },

    login: async (_: any, { input }: {input : MyUser}, context : MyContext) => {
      try {
        const { username, password } = input;
        if (!username || !password) throw new Error("All fields are required");
        const { user } = await context.authenticate("graphql-local", { username, password });

        await context.login(user);
        return user;
      } catch (err: any) {
        console.error("Error in login:", err);
        throw new Error(err.message || "Internal server error");
      }
    },
    logout: async (_: any, __: any, context : MyContext) => {
      try {
        await context.logout();
        context.req.session.destroy((err: any) => {
          if (err) throw err;
        });
        context.res.clearCookie("connect.sid");

        return { message: "Logged out successfully" };
      } catch (err: any) {
        console.error("Error in logout:", err);
        throw new Error(err.message || "Internal server error");
      }
    },
  },
  Query: {
    authUser: async (_: any, __: any, context : MyContext) => {
      try {
        const user = await context.getUser();
        return user;
      } catch (err) {
        console.error("Error in authUser: ", err);
        throw new Error("Internal server error");
      }
    },
    user: async (_: any, { userId }: {userId : string}) => {
      try {
        const user = await User.findById(userId);
        return user;
      } catch (err: any) {
        console.error("Error in user query:", err);
        throw new Error(err.message || "Error getting user by id");
      }
    },
    users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (err: any) {
        console.error("Error in user query:", err);
        throw new Error(err.message || "Error getting user");
      }
    }
  },
  User: {
    todos: async (parent: any) => {
      try {
        const todos = await Todo.find({ userId: parent._id });
        return todos;
      } catch (err: any) {
        console.log("Error in user.todos resolver: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },
  },
};

export default userResolver;
