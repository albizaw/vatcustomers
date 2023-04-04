import React from 'react';

const TableTd = ({ customer, handleDelete, handleUpdate }) => {
  const formattedDate = new Date(customer.date).toISOString().slice(0, 10);

  const onDeleteClick = () => {
    handleDelete(customer._id);
  };

  const onUpdateClick = () => {
    handleUpdate(customer);
  };

  return (
    <tr className="even:bg-slate-50">
      <td className="px-6 py-4 whitespace-nowrap w-1/5">
        {customer.firstname} {customer.lastname}
      </td>
      <td className="px-6 py-4 whitespace-nowrap w-1/5">{customer.address}</td>
      <td className="px-6 py-4 whitespace-nowrap w-1/5">{customer.vat}</td>
      <td className="px-6 py-4 whitespace-nowrap w-1/5">{formattedDate}</td>
      <td className="px-6 py-4 whitespace-nowrap w-1/5">
        <div className="flex justify-between">
          <p
            onClick={onUpdateClick}
            className="font-medium p-2 bg-slate-300 rounded-xl shadow-xl hover:cursor-pointer hover:bg-slate-400 duration-300"
          >
            EDIT
          </p>
          <p
            onClick={onDeleteClick}
            className="font-medium  p-2 bg-slate-300 rounded-xl shadow-xl hover:cursor-pointer hover:bg-slate-400 duration-300"
          >
            DELETE
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableTd;
