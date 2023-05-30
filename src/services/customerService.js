import Customer from "../models/Customers.js";

const createCustomerService = async (data) => {
  let { name, address, phone, email, description, image } = data;
  try {
    let data = await Customer.create({
      name,
      address,
      phone,
      email,
      description,
      image,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const createCustomerArrService = async (cusArr) => {
  try {
    let data = await Customer.insertMany(cusArr);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getAllCustomersService = async () => {
  try {
    let data = await Customer.find({});
    return data;
  } catch (error) {
    console.log(error);
  }
};
const updateCustomerService = async (id, name, email, address) => {
  let res = await Customer.updateOne({ _id: id }, { name, email, address });
  return res;
};
const deleteCustomerService = async (id) => {
  try {
    let res = await Customer.deleteById(id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const deleteCustomersService = async (listIdDelete) => {
  try {
    let res = await Customer.delete({ _id: { $in: listIdDelete } });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export {
  createCustomerService,
  createCustomerArrService,
  getAllCustomersService,
  updateCustomerService,
  deleteCustomerService,
  deleteCustomersService,
};
