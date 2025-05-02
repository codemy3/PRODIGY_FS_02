import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  salary: Number,
});

export default mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
