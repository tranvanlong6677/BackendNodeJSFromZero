import mongoose from "mongoose";
import mongoose_delete from 'mongoose-delete';
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);
// customerSchema.plugin(mongoose_delete);
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Customer = mongoose.model("Customers", customerSchema);

export default Customer;
