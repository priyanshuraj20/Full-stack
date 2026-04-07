const mongoose = require('mongoose');

const sub_todo = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password must be required"],
    },
  },
  { timeStamps: true },
);

export const sub_todoModel = mongoose.model("SUB_TODO",sub_todo)
