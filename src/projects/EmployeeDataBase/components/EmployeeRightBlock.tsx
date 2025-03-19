/* eslint-disable @typescript-eslint/no-explicit-any */
import useEmpStore, { EmployeeStoreProps } from "../store/zustandStore";

const EmployeeRightBlock = () => {
  const { employees, choosenId } = useEmpStore(
    (state: EmployeeStoreProps) => state
  );
  // console.log(employees, choosenId);
  let selectedUser: any = {};
  if (choosenId >= 0) {
    selectedUser = employees[choosenId];
  }
  console.log("user", selectedUser, employees, choosenId);
  return (
    <div className="right-div">
      {choosenId >= 0 && employees.length > 0 && selectedUser ? (
        <div className="employee-no-text">
          <p>Name: {selectedUser.name}</p>
          <p>Age: {selectedUser.age}</p>
          <p>Mobile Number: {selectedUser.mobile}</p>
          <p>Email ID: {selectedUser.email}</p>
        </div>
      ) : (
        <div className="employee-no-text">Please select a user </div>
      )}
    </div>
  );
};
export default EmployeeRightBlock;
