import Customer from '../model/Customer.model.js';

export const hello = (req, res) => {
  res.json('Hello ');
};

export const addCustomer = async (req, res) => {
  if (!req.body) {
    return res.status(401).json('Missed data');
  }

  try {
    const newCustomer = new Customer({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      vat: req.body.vat,
      address: req.body.address,
      city: req.body.city,
      zip: req.body.zip,
    });

    await newCustomer.save();
    return res.status(201).json('New customer created');
  } catch (error) {
    return res.status(401).json('Error');
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    return res.status(201).json(customers);
  } catch (error) {
    return res.status(401).json('Error');
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    console.log(req.params.id);

    if (!deletedCustomer) {
      return res.status(404).json('Customer not found');
    }

    return res.status(200).json('Customer deleted');
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error deleting customer');
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const { firstname, lastname, vat, address, city, zip } = req.body;

    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      { firstname, lastname, vat, address, city, zip },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json('Customer not found');
    }

    return res.status(200).json('Customer updated');
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error updating customer');
  }
};
