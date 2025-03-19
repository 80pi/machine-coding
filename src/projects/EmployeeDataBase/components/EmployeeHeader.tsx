import { useState } from "react";
import EmployeeAddPopUp from "./EmployeeAddPopUp";

const EmployeeHeader = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const handlePopUp = () => {
    setShowPopUp(!showPopUp);
  };
  return (
    <>
      <div className="employee-db-header">
        <h2>Employee Data Base</h2>
        <button onClick={handlePopUp}>Add Employee</button>
      </div>
      {showPopUp && <EmployeeAddPopUp handlePopUp={handlePopUp} />}
    </>
  );
};

export default EmployeeHeader;
