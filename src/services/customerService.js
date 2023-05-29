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
export { createCustomerService };
