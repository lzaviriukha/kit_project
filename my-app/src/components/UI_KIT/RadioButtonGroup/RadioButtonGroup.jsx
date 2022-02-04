import RadioButton from "./RadioButton";
import s from "./RadioButtonGroup.module.css";

function RadioButtonGroup(props) {
  const { value, onChange, options, classes, disabled } = props;

  return (
    <div className={classes.wrapper}>
      {options.map((option) => {
        const isActive = value === option.id;

        const handleOnClick = (evt) => {
          if (option.disable) {
            evt.preventDefault();
            evt.stopPropagation();
          } else {
            onChange(option.id, option);
          }
        };
        
        return (
          <RadioButton
            id={option.id}
            onClick={handleOnClick}
            active={isActive}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
}

export default RadioButtonGroup;
