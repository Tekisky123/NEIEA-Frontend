export type DonorUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  donorType: string;
  donations: string[];
  createdAt: string;
  lastLogin: string;
};

export type Donation = {
  _id: string;
  amount: number;
  frequency: string;
  donorType: string;
  createdAt: string;
  razorpayPaymentId: string;
  status: string;
};