import React from "react";
import Button from "./Button";
import Field from "./Field";

const UserCreate = () => {
    return (
        <div className="ui form">
            <h3 className="ui header">Name</h3>
            <Field />
            <Button />
        </div>
    )
}

export default UserCreate;