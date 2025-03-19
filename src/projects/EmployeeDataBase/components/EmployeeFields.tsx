/* eslint-disable @typescript-eslint/no-explicit-any */
interface FeildsProps {
  label: string;
  fieldName: string;
  placeHolder: string;
  fieldType: string;
  touchCheck: any;
  errorCheck: any;
  empFormik: any;
}

const EmployeeFields = ({
  label,
  fieldName,
  fieldType,
  placeHolder,
  touchCheck,
  errorCheck,
  empFormik,
}: FeildsProps) => {
  return (
    <>
      <div className="pop-up-field">
        <div style={{ width: "4rem" }}>
          <label htmlFor={fieldName} style={{ marginRight: "10px" }}>
            {label}
          </label>
        </div>
        <input
          type={fieldType}
          name={fieldName}
          placeholder={placeHolder}
          {...empFormik.getFieldProps(`${fieldName}`)}
        />
      </div>
      {touchCheck && errorCheck ? (
        <div className="pop-up-feild-error">{errorCheck}</div>
      ) : null}
    </>
  );
};
export default EmployeeFields;
