import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  userId: { type: String, required: true },
  password: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  cards: [
    {
      id: Number,
      title: String,
      agency: String,
      balance: Number,
      bank: String,
      card: String,
      expire: String,
      CVV: String,
      logo: String,
    },
  ],
  quickTransactions: [
    {
      title: String,
      src: String,
    },
  ],
  Tranasactions: [
    {
      img: String,
      amount: String,
      desc: String,
      date: String,
      time: String,
      status: String,
    },
  ],
  Analytics: [
    {
      id: Number,
      spent: String,
      saved: String,
      week: String,
    },
  ],
  Notifications: [
    {
      id: Number,
      head: String,
      body: String,
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
