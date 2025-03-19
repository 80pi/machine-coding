/* eslint-disable @typescript-eslint/no-explicit-any */
import EmployeeFields from "./EmployeeFields";
import { useFormik } from "formik";
import * as Yup from "yup";
import useEmpStore, { EmployeeStoreProps } from "../store/zustandStore";
import { nanoid } from "nanoid";

interface EmployeePopUpProps {
  handlePopUp: () => void;
}

const EmployeeAddPopUp = ({ handlePopUp }: EmployeePopUpProps) => {
  const addEmployee = useEmpStore(
    (state: EmployeeStoreProps) => state.addEmployee
  );
  const empFormikForm: any = useFormik({
    initialValues: {
      name: "",
      age: "",
      mobile: "",
      email: "",
      id: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Must be greater than 5 characters")
        .required("Required"),
      age: Yup.number()
        .min(18, "Age must be Greater than 18")
        .required("Required"),
      mobile: Yup.string()
        .min(10, "Enter a valid mobile number")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values, action) => {
      action.resetForm();
      handlePopUp();
      values.id = nanoid();
      console.log("form val", values);
      addEmployee(values);
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
          <form onSubmit={empFormikForm.handleSubmit}>
            <EmployeeFields
              label="Name"
              fieldName="name"
              fieldType="text"
              placeHolder="Name"
              touchCheck={empFormikForm.touched.name}
              errorCheck={empFormikForm.errors.name}
              empFormik={empFormikForm}
            />
            <EmployeeFields
              label="Age"
              fieldName="age"
              fieldType="number"
              placeHolder="Age"
              touchCheck={empFormikForm.touched.age}
              errorCheck={empFormikForm.errors.age}
              empFormik={empFormikForm}
            />
            <EmployeeFields
              label="Mobile"
              fieldName="mobile"
              placeHolder="Mobile Number"
              fieldType="text"
              touchCheck={empFormikForm.touched.mobile}
              errorCheck={empFormikForm.errors.mobile}
              empFormik={empFormikForm}
            />
            <EmployeeFields
              label="Email"
              fieldName="email"
              placeHolder="Email Id"
              fieldType="email"
              touchCheck={empFormikForm.touched.email}
              errorCheck={empFormikForm.errors.email}
              empFormik={empFormikForm}
            />
            <div className="pop-up-btn">
              <button type="submit">Submit</button>
              <button type="reset" onClick={empFormikForm.handleReset}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EmployeeAddPopUp;
