import Customer from "../models/Customers.js";
import {
  uploadSingleFile,
  uploadMultipleFiles,
} from "../services/fileService.js";
import { createCustomerService } from "../services/customerService.js";
const postCreateCustomer = async (req, res) => {
  let { name, address, phone, email, description } = req.body;
  let imgUrl = "";
  if (!req.files || Object.keys(req.files).length === 0) {
  } else {
    let result = await uploadSingleFile(req?.files?.image);
    imgUrl = result.path;
  }
  let customerDataCreate = {
    name,
    address,
    phone,
    email,
    description,
    image: imgUrl,
  };
  let data = await createCustomerService(customerDataCreate);
  return res.status(200).json({
    EC: 0,
    data: data,
    message: "success",
  });
};
export { postCreateCustomer };
