export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export interface ButtonProps {
  type: string;
  name: string;
}

export const emailInputProps: InputProps = {
  name: "login-email",
  type: "email",
  placeholder: "Enter your email",
  label: "Email",
};

export const passwordInputProps: InputProps = {
  name: "login-password",
  type: "password",
  placeholder: "Enter your password",
  label: "Password",
};

export const loginButtonProps: ButtonProps = {
  type: "submit",
  name: "Login",
};
