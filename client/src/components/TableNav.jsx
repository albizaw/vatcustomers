import React from 'react';

const TableNav = ({ name }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-2 border-r w-1/5"
    >
      {name}
    </th>
  );
};

export default TableNav;
