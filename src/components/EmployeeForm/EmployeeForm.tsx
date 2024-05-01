import { useFormik } from "formik";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { EmployeeFormComponent, InputsContainer } from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
      position: "",
      termsOfUse: false,
    },
    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });

  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          name="firstname"
          type="text"
          placeholder="Enter your first name"
          label="First name"
          onInputChange={formik.handleChange}
          value={formik.values.firstname}
        />

        <Input
          name="lastname"
          type="text"
          placeholder="Enter your last name"
          label="Last name"
          onInputChange={formik.handleChange}
          value={formik.values.lastname}
        />

        <Input
          name="age"
          type="text"
          placeholder="Enter your age"
          label="Age"
          onInputChange={formik.handleChange}
          value={formik.values.age}
        />

        <Input
          name="position"
          type="text"
          placeholder="Enter your position"
          label="Position"
          onInputChange={formik.handleChange}
          value={formik.values.position}
        />

        <label>
          <input
            name="termsOfUse"
            type="checkbox"
            checked={formik.values.termsOfUse}
            onChange={formik.handleChange}
          />
          Terms of Use
        </label>
      </InputsContainer>
      <Button type="submit" name="Create" />
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
