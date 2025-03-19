/* eslint-disable @typescript-eslint/no-explicit-any */
import EmployeeFields from "./EmployeeFields";
import { useFormik } from "formik";
import * as Yup from "yup";

interface EmployeePopUpProps {
  handlePopUp: () => void;
}

const EmployeeAddPopUp = ({ handlePopUp }: EmployeePopUpProps) => {
  const formikForm: any = useFormik({
    initialValues: {
      name: "",
      age: "",
      mobile: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(5, "Must be 5 characters or less")
        .required("Required"),
      age: Yup.number()
        .min(18, "Age must be Greater than 18")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("form val", values);
    },
  });
  return (
    <div className="pop-up-outer">
      <div className="pop-up">
        <div className="pop-up-header">
          <h2>Add Employee</h2>
          <button onClick={handlePopUp} className="pop-up-header-cross">
            X
          </button>
        </div>
        <div className="pop-up-body">
          <form onSubmit={formikForm.handleSubmit}>
            <EmployeeFields
              label="Name"
              fieldName="name"
              fieldType="text"
              placeHolder="Name"
              empFormik={formikForm}
            />
            <EmployeeFields
              label="Age"
              fieldName="age"
              fieldType="number"
              placeHolder="Age"
              empFormik={formikForm}
            />
            <EmployeeFields
              label="Mobile"
              fieldName="mobile"
              placeHolder="Mobile Number"
              fieldType="text"
              empFormik={formikForm}
            />
            <EmployeeFields
              label="Email"
              fieldName="email"
              placeHolder="Email Id"
              fieldType="email"
              empFormik={formikForm}
            />
            <div className="pop-up-btn">
              <button type="submit">Submit</button>
              <button type="reset">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EmployeeAddPopUp;
