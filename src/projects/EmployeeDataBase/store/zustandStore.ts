import { create } from "zustand";
export interface employeeProp {
  name: string;
  age: number;
  mobile: string;
  email: string;
  id: string;
}

export interface EmployeeStoreProps {
  employees: employeeProp[];
  addEmployee: (newUser: employeeProp) => void;
  removeEmployee: (id: number) => void;
  choosenId: number;
  setChoosenId: (id: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useEmpStore: any = create((set) => ({
  employees: [
    {
      name: "gopi",
      age: 23,
      mobile: "1231121234",
      email: "rr@re.com",
      id: "12wq",
    },
  ],
  addEmployee: (newUser: employeeProp) =>
    set((state: EmployeeStoreProps) => ({
      employees: [...state.employees, newUser],
    })),
  removeEmployee: (id: number) =>
    set((state: EmployeeStoreProps) => {
      const empData = state.employees;
      const deleteEmp = [...empData.slice(0, id), ...empData.slice(id + 1)];
      return {
        employees: deleteEmp,
      };
    }),
  choosenId: -1,
  setChoosenId: (id: number) => set({ choosenId: id }),
}));

export default useEmpStore;
