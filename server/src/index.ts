import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for users and OTPs
const users: { [key: string]: { mobileNumber: string; otp: string } } = {};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/request-otp', (req, res) => {
  const { mobileNumber } = req.body;
  if (!mobileNumber) {
    return res.status(400).json({ error: 'Mobile number is required' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  users[mobileNumber] = { mobileNumber, otp };

  console.log(`OTP for ${mobileNumber} is: ${otp}`);

  res.json({ message: 'OTP sent successfully' });
});

app.post('/api/verify-otp', (req, res) => {
  const { mobileNumber, otp } = req.body;
  if (!mobileNumber || !otp) {
    return res.status(400).json({ error: 'Mobile number and OTP are required' });
  }

  const user = users[mobileNumber];
  if (!user || user.otp !== otp) {
    return res.status(400).json({ error: 'Invalid OTP' });
  }

  // In a real application, you would create a session or JWT here
  res.json({ message: 'Login successful' });
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
