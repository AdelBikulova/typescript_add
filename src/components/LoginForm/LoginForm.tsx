import "./styles.css";
import Input from "../Input/Input";
import { emailInputProps, passwordInputProps} from "./types";

function LoginForm() {
  return (
    <div className="loginform-wrapper">
      <p className="loginform-name">Login form</p>
      <div className="inputs-container">
        <Input {...emailInputProps} />
        <Input {...passwordInputProps} />
      </div>
      {/* <Button {...loginButtonProps} /> */}
    </div>
  );
}

export default LoginForm;
