import { useFormik } from "formik";
import Input from "components/Input/Input";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  EmployeeFormComponent,
} from "./styles";
import { EmployeeFormValues, EMPLOYEE_FIELD_NAMES } from "./types";
import Button from "components/Button/Button";
import * as Yup from "yup";

function EmployeeForm() {
  const schema = Yup.object().shape({
    [EMPLOYEE_FIELD_NAMES.NAME]: Yup.string()
      .required("Field name required")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    [EMPLOYEE_FIELD_NAMES.SURNAME]: Yup.string()
      .required("Field surname required")
      .max(15, "Max 15 symbols"),
    [EMPLOYEE_FIELD_NAMES.AGE]: Yup.number()
      .required("Field age required")
      .min(1, "Min value is 1")
      .max(999, "Max value is 999"),
    [EMPLOYEE_FIELD_NAMES.POSITION]: Yup.string().max(30, "Max 30 symbols"),
    [EMPLOYEE_FIELD_NAMES.AGREEMENT]: Yup.boolean(),
  });
  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FIELD_NAMES.NAME]: "",
      [EMPLOYEE_FIELD_NAMES.SURNAME]: "",
      [EMPLOYEE_FIELD_NAMES.AGE]: "",
      [EMPLOYEE_FIELD_NAMES.POSITION]: "",
      [EMPLOYEE_FIELD_NAMES.AGREEMENT]: false,
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });

  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <Input
        name={EMPLOYEE_FIELD_NAMES.NAME}
        placeholder="Enter your name"
        label="Name"
        onInputChange={formik.handleChange}
        value={formik.values[EMPLOYEE_FIELD_NAMES.NAME]}
        error={formik.errors[EMPLOYEE_FIELD_NAMES.NAME]}
      />
      <Input
        name={EMPLOYEE_FIELD_NAMES.SURNAME}
        placeholder="Enter your surname"
        label="Surname"
        onInputChange={formik.handleChange}
        value={formik.values[EMPLOYEE_FIELD_NAMES.SURNAME]}
        error={formik.errors[EMPLOYEE_FIELD_NAMES.SURNAME]}
      />
      <Input
        name={EMPLOYEE_FIELD_NAMES.AGE}
        placeholder="Enter your age"
        label="Age"
        onInputChange={formik.handleChange}
        value={formik.values[EMPLOYEE_FIELD_NAMES.AGE]}
        error={formik.errors[EMPLOYEE_FIELD_NAMES.AGE]}
      />
      <Input
        name={EMPLOYEE_FIELD_NAMES.POSITION}
        placeholder="Enter your position"
        label="Position"
        onInputChange={formik.handleChange}
        value={formik.values[EMPLOYEE_FIELD_NAMES.POSITION]}
        error={formik.errors[EMPLOYEE_FIELD_NAMES.POSITION]}
      />
      <CheckboxContainer>
        <Checkbox
          id="agreement-id"
          name={EMPLOYEE_FIELD_NAMES.AGREEMENT}
          type="checkbox"
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FIELD_NAMES.AGREEMENT]}
        />
        <CheckboxLabel htmlFor="agreement-id">I Agree</CheckboxLabel>
      </CheckboxContainer>
      <Button
        type="submit"
        name="Create"
        disabled={!formik.values[EMPLOYEE_FIELD_NAMES.AGREEMENT]}
      />
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
