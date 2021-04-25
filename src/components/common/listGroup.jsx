import React from "react";

const ListGroup = ({
    items,
    itemText,
    itemValue,
    selectedItem,
    onItemSelect,
}) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    key={item[itemValue]}
                    className={
                        item === selectedItem
                            ? "list-group-item active"
                            : "list-group-item"
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => onItemSelect(item)}
                >
                    {item[itemText]}
                </li>
            ))}
        </ul>
    );
};

ListGroup.defaultProps = {
    itemText: "name",
    itemValue: "_id",
};

export default ListGroup;
