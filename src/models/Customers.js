import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,// createdAt.updatedAt
    // statics: {
    //   findByName(name) {
    //     return this.find({ name: new RegExp(name, "i") });
    //   },
    // },
  }
);
// customerSchema.plugin(mongoose_delete);
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Customer = mongoose.model("Customers", customerSchema);

export default Customer;
