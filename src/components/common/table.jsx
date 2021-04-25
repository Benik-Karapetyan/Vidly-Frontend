import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, items, onSort }) => {
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />

            <TableBody items={items} columns={columns} />
        </table>
    );
};

export default Table;
