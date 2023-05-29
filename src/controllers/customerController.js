import Customer from "../models/Customers.js";
import {
  uploadSingleFile,
  uploadMultipleFiles,
} from "../services/fileService.js";
import {
  createCustomerService,
  createCustomerArrService,
} from "../services/customerService.js";
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
const postCreateCustomerArr = async (req, res) => {
  console.log(">>> check req,body", req.body.customers);
  let data = await createCustomerArrService(req.body.customers);
  console.log(">>> check data", data);
  if (data) {
    return res.status(200).json({
      EC: 0,
      data: data,
      message: "create arr cus success",
    });
  }else{
    return res.status(500).json({
        EC: -1,
        data: null,
        message: "create arr cus failed",
      });
  }
};
export { postCreateCustomer, postCreateCustomerArr };
