import s from "./RadioButton.module.css";

function RadioButton(props) {
  const {
    id,
    onClick = () => console.log("click"),
    active = false,
    disabled,
  } = props;

  const handleClick = (evt) => {
    if (disabled) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      onClick();
    }
  };

  const classesGroup = `
    ${s.radio_btn} 
    ${active ? s.radio_btn__active : s.radio_btn} 
    ${disabled ? s.disable : ""}`.trim();

  return (
    <div id={id} className={classesGroup} onClick={handleClick}>
      <div className={active ? s.innerCircle__active : ""}></div>
    </div>
  );
}

export default RadioButton;
