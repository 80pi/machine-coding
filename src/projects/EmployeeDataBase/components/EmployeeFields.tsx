/* eslint-disable @typescript-eslint/no-explicit-any */
interface FeildsProps {
  label: string;
  fieldName: string;
  placeHolder: string;
  fieldType: string;
  empFormik: any;
}

const EmployeeFields = ({
  label,
  fieldName,
  fieldType,
  placeHolder,
  empFormik,
}: FeildsProps) => {
  return (
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
        onChange={empFormik.handleChange}
        onBlur={empFormik.handleBlur}
      />
      {/* {touchedError  ? (
        <div>{`empFormik.errors.${fieldName}`}</div>
      ) : null} */}
    </div>
  );
};
export default EmployeeFields;
