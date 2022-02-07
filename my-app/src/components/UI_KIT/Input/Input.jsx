import s from "./Input.module.css";

function Input(props) {
  const {
    id,
    label,
    value,
    className,
    onChange,
    startIcon,
    endIcon,
    disabled = false,
    error = false,
  } = props;

  const handleOnClick = (evt) => {
    if (disabled) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      onChange(evt.target.value);
    }
  };

  let beforeIcon = null;
  if (startIcon !== undefined) {
    beforeIcon = <div className={s.iconBefore}>{props.startIcon}</div>;
  }

  let afterIcon = null;
  if (endIcon !== undefined) {
    afterIcon = <div className={s.iconAfter}>{props.endIcon}</div>;
  }

  let errorClass = error ? s.error : "";
  let disabledClass = disabled ? s.disabled : "";
  let disableValue = disabled ? "disabled" : "";
  let wrapperClasses = `${s.form__wrapper} ${errorClass} ${disabledClass} ${className.wrapper}`.trim();
  let inputClasses = `${s.form__input} ${errorClass}`.trim();

  return (
    <div className={wrapperClasses}>
      {beforeIcon}
      <input
        id={id}
        value={value}
        type="text"
        className={inputClasses}
        onChange={handleOnClick}
        disabled={disableValue}
        placeholder=" "
      />

      <label htmlFor="" className={s.form__label}>
        {label}
      </label>
      {afterIcon}
    </div>
  );
}

export default Input;
