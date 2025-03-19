import useEmpStore, {
  employeeProp,
  EmployeeStoreProps,
} from "../store/zustandStore";

const EmployeesLeftBlock = () => {
  const { employees, removeEmployee, choosenId, setChoosenId } = useEmpStore(
    (state: EmployeeStoreProps) => state
  );
  console.log(employees, choosenId);

  return (
    <div className="left-div">
      {employees.length > 0 ? (
        employees.map((item: employeeProp, index: number) => {
          return (
            <div
              className="employee-left-card"
              onClick={() => {
                setChoosenId(index);
              }}
            >
              <div key={item.id}>{item.name}</div>
              {/* <div key={item.id} onClick={setChoosenId(index)}>
                {item.name}
              </div> */}
              <button
                style={{ display: "flex", justifyContent: "flex-end" }}
                onClick={() => {
                  removeEmployee(index);
                  setChoosenId(-1);
                }}
              >
                X
              </button>
            </div>
          );
        })
      ) : (
        <div className="employee-no-text">No Data to show</div>
      )}
    </div>
  );
};
export default EmployeesLeftBlock;
