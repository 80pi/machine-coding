import EmployeeRightBlock from "./EmployeeRightBlock";
import EmployeesLeftBlock from "./EmployeesLeftBlock";

const EmployeeBodyDivs = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <EmployeesLeftBlock />
        <EmployeeRightBlock />
      </div>
    </>
  );
};
export default EmployeeBodyDivs;
