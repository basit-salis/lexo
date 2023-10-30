import mongoose, { Schema } from "mongoose";

const OTPSchema = new Schema({
  email: String,
  otp: String,
});

const OTP = mongoose.models.OTP || mongoose.model("OTP", OTPSchema);
export default OTP;
