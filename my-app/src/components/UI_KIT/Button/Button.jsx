import s from './Button.module.css';

function Button(props) {

  const handleClick = evt => {
    if (props.disable) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      return props.onClick(evt);
    }
  }

  let startIcon = null;
  if (props.startIcon !== undefined) {
    startIcon = <div className={s.btn__icon__start}>{props.startIcon}</div>
  }

  let endIcon = null;
  if (props.endIcon !== undefined) {
    endIcon = <div className={s.btn__icon__end}>{props.endIcon}</div>
  }

  let disableClass = props.disable ? s.btn_disable : "";

  let buttonTypeCLass = props.type === "primary" ? s.btn_primary :
    props.type === "secondary" ? s.btn_secondary : "";

  return (
    <div
      className={`${props.className} ${s.btn} ${buttonTypeCLass} ${disableClass}`}
      id={props.id}
      onClick={handleClick}
    >
      {startIcon}{props.title}{endIcon}
    </div>
  );
}

export default Button;