import Customer from "../models/Customers.js";
import aqp from "api-query-params";

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
const getAllCustomersService = async (queryString) => {
  try {
    let data = null;

    let limit = +queryString.limit;
    let page = +queryString.page;
  

    // if (page && limit) {
    //   let skip = (page - 1) * limit;
    //   if (name) {
    //     data = await Customer.find({
    //       name: { $regex: ".*" + name + ".*" },
    //     })
    //       .skip(skip)
    //       .limit(limit);
    //   } else {
    //     data = await Customer.find({}).skip(skip).limit(limit);
    //   }
    // }

    if (limit && page) {
      let skip = (page - 1) * limit;
      const { filter } = aqp(queryString);
      delete filter.page;
      data = await Customer.find(filter).skip(skip).limit(limit).exec();
      console.log("data",data)
    }
    // else {
    //   data = await Customer.find({}).skip(skip).limit(limit);
    // }
    else {
      data = await Customer.find({});
    }
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
