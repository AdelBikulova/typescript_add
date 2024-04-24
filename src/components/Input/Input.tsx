import "./styles.css";
import { InputProps } from "./types";

function Input({ name, type = "text", placeholder, label }: InputProps) {
  return (
    <div className="input-component-container">
      <label className="input-component-label">{label}</label>
      <input
        className="input-component"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
