import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import {} from '../helper/validation.js';
import axios from '../api/axios.js';
import Input from './Input.jsx';
import TableNav from './TableNav';
import TableTd from './TableTd';
import {
  firstNameRules,
  lastNameRules,
  addressRules,
  zipCodeRules,
  cityRules,
  vatRules,
} from '../helper/validation.js';

const Panel = () => {
  // states
  const [data, setData] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get('/customers/getCustomers');
      const customers = response;
      setData(customers.data);
      // console.log(data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    for (const key in data) {
      if (typeof data[key] === 'string') {
        data[key] =
          data[key].charAt(0).toUpperCase() + data[key].slice(1).toLowerCase();
      }
    }
    try {
      if (editingCustomer) {
        await axios.put(
          `/customers/updateCustomer/${editingCustomer._id}`,
          data
        );
        toast.success('Customer updated!');
        reset();
      } else {
        await axios.post('/customers/addCustomer', data);
        toast.success('Customer created!');
        reset();
      }

      fetchData();
    } catch (error) {
      toast.error('Something went wrong!');
    }

    setEditingCustomer(null);
  };

  // useForm rules
  const firstnameProps = register('firstname', firstNameRules);
  const lastnameProps = register('lastname', lastNameRules);
  const addressProps = register('address', addressRules);
  const zipProps = register('zip', zipCodeRules);
  const cityProps = register('city', cityRules);
  const vatProps = register('vat', vatRules);

  // handler
  const onClickHandler = () => {
    {
      errors.firstname &&
        toast.error(errors.firstname.message, { duration: 2000 });

      errors.lastname &&
        toast.error(errors.lastname.message, { duration: 2000 });

      errors.address && toast.error(errors.address.message, { duration: 2000 });

      errors.zip && toast.error(errors.zip.message, { duration: 2000 });

      errors.city && toast.error(errors.city.message, { duration: 2000 });

      errors.vat && toast.error(errors.vat.message, { duration: 2000 });
    }
  };

  // handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/customers/deleteCustomer/${id}`);
      fetchData();
      toast.success('Customer deleted!');
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  // handle update
  const handleUpdate = (customer) => {
    setEditingCustomer(customer);
  };

  const cancelUpdate = () => {
    reset();
    setEditingCustomer(null);
  };

  useEffect(() => {
    if (editingCustomer) {
      setValue('firstname', editingCustomer.firstname);
      setValue('lastname', editingCustomer.lastname);
      setValue('vat', editingCustomer.vat);
      setValue('address', editingCustomer.address);
      setValue('city', editingCustomer.city);
      setValue('zip', editingCustomer.zip);
    }
  }, [editingCustomer]);

  return (
    <div className="bg-slate-100 flex flex-col w-full h-[calc(100vh-80px)] items-center justify-start mx-auto p-2 md:p-0">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="max-w-2xl flex justify-center items-center h-auto w-full border-2  rounded-lg border-slate-300 bg-slate-50 md:m-4">
        {/* form */}
        <form className="py-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center items-center gap-5 p-3">
            <h1 className="text-2xl font-medium">Customer Info</h1>

            <div className="flex justify-between gap-5 w-full">
              <Input
                props={firstnameProps}
                type="text"
                placeholder="First Name"
              />
              <Input
                props={lastnameProps}
                type="text"
                placeholder="Last Name"
              />
            </div>

            <Input
              props={vatProps}
              type="text"
              placeholder="VAT identification number"
            />

            <div className="flex justify-between items-center gap-5">
              <Input props={addressProps} type="text" placeholder="Adress" />
              <Input props={cityProps} type="text" placeholder="City" />
              <Input
                props={zipProps}
                type="text"
                placeholder="ZIP (only numbers)"
              />
            </div>

            <div className="w-full flex justify-center">
              <button
                onClick={onClickHandler}
                type="submit"
                className="font-normal text-xl h-fit  shadow-sm border-2 w-2/4 rounded-md p-3 bg-black text-white duration-300 hover:opacity-50"
              >
                {editingCustomer ? 'Confirm update' : 'Add Customer'}
              </button>

              {editingCustomer ? (
                <button
                  onClick={cancelUpdate}
                  type="submit"
                  className="font-normal text-xl h-fit  shadow-sm border-2 w-2/4 rounded-md p-3 bg-black text-white duration-300 hover:opacity-50"
                >
                  Cancel
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </form>
      </div>

      {/* customer list */}
      <div
        className={`max-w-screen-lg w-full flex flex-col items-center  m-3 h-full scrollable-div ${
          data.length === 0 ? '' : 'overflow-y-scroll'
        }`}
      >
        {/* up */}

        {data.length === 0 ? (
          <div className="w-full h-full flex items-start justify-center text-3xl font-light">
            {' '}
            No customers found
          </div>
        ) : (
          <div className="flex w-full justify-between items-center ">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <TableNav name="Name" />
                  <TableNav name="Adress" />
                  <TableNav name="VAT" />
                  <TableNav name="Created Date" />
                  <TableNav name="Options" />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((customer) => (
                  <TableTd
                    key={customer._id}
                    customer={customer}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Panel;
