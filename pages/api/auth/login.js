import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDb from '../../../lib/mongodb';
import { User } from '../../../models/User';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectDb();

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } else {
    res.status(405).json({ msg: 'Method not allowed' });
  }
}
