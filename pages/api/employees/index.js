import connectDB from "../../../lib/mongodb";
import Employee from "@/models/Employee";

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "GET":
      const employees = await Employee.find();
      return res.status(200).json(employees);
    case "POST":
      const newEmp = new Employee(req.body);
      await newEmp.save();
      return res.status(201).json(newEmp);
    default:
      return res.status(405).end();
  }
}
