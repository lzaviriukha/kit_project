import Button from "components/UI_KIT/Button";
import s from "./ButtonPicker.module.css";

function ButtonPicker(props) {
  const { onChange, options, classes, value, disable = false } = props;

  return (
    <div className={`${s.internalWrapperClasses} ${classes.wrapper}`}>
      {options.map((option) => {
        const isActive = value === option.id;

        const handleOnClick = (evt) => {
          if (props.disable) {
            evt.preventDefault();
            evt.stopPropagation();
          } else {
            onChange(option.id, option);
          }
        };

        const classGroup = `${classes.button} 
          ${isActive ? classes.activeButton : ""} 
          ${disable ? classes.disableButton : ""}`;

        return (
          <Button
            id={options.id}
            value={options.id}
            className={classGroup}
            onClick={handleOnClick}
            disable={disable}
            title={option.name}
          />
        );
      })}
    </div>
  );
}

export default ButtonPicker;
