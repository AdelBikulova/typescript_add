import { Button, ButtonProps } from "./styles";

function Homework08() {
  const buttonProps: ButtonProps = {
    name: "Button",
    type: "button",
    width: "100px",
    height: "50px",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#75cbe6",
    color: "white",
    fontSize: "16px",
    margin: "20px",
  };

  return (
    <div>
      <Button
        name={buttonProps.name}
        type={buttonProps.type}
        width={buttonProps.width}
        height={buttonProps.height}
        borderRadius={buttonProps.borderRadius}
        padding={buttonProps.padding}
        backgroundColor={buttonProps.backgroundColor}
        color={buttonProps.color}
        fontSize={buttonProps.fontSize}
        margin={buttonProps.margin}
      />
      <Button
        name={buttonProps.name}
        type={buttonProps.type}
        width={buttonProps.width}
        height={buttonProps.height}
        borderRadius={buttonProps.borderRadius}
        padding={buttonProps.padding}
        backgroundColor="gray"
        color={buttonProps.color}
        fontSize={buttonProps.fontSize}
        disabled={true}
        margin={buttonProps.margin}
      />
    </div>
  );
}

export default Homework08;
