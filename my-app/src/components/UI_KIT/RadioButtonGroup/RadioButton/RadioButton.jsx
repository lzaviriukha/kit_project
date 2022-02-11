import s from "./RadioButton.module.css";

function RadioButton(props) {
  const {
    id,
    onClick = () => console.log("click"),
    active = false,
    label,
    classes,
    disabled,
  } = props;

  const handleOnClick = (evt) => {
    if (disabled) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      onClick();
    }
  };

  const radoClasses = `
    ${s.radio_btn} 
    ${active ? s.radio_btn__active : s.radio_btn} 
    ${disabled ? s.disable : ""}`.trim();
  
  const innerCircleClasses = active ? s.innerCircle__active : "";
  const labelClasses = `${s.label} ${classes.label}`.trim();

  return (
    <div className={classes.radio_item__wrapper}>
      <div 
        id={id} 
        className={radoClasses} 
        onClick={handleOnClick}
      >
        <div className={innerCircleClasses}></div>
      </div>
      <div 
        className={labelClasses} 
        onClick={handleOnClick}
      >
        {label}
      </div>
    </div>
  );
}

export default RadioButton;
