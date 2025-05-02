import connectDB from "../../../lib/mongodb";
import Employee from "@/models/Employee";

export default async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const emp = await Employee.findById(id);
      return res.status(200).json(emp);
    case "PUT":
      const updatedEmp = await Employee.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json(updatedEmp);
    case "DELETE":
      await Employee.findByIdAndDelete(id);
      return res.status(204).end();
    default:
      return res.status(405).end();
  }
}
