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

  const handleOnChange = (evt) => {
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

  const errorClass = error ? s.error : "";
  const disabledClass = disabled ? s.disabled : "";
  const wrapperClasses = `${s.form__wrapper} ${errorClass} ${disabledClass} ${className.wrapper}`.trim();
  const inputClasses = `${s.form__input} ${errorClass} ${startIcon ? "" : s.without__icon}`.trim();
  const labelClasses = `${s.form__label} ${startIcon ? "" : s.without__icon}`.trim();

  return (
    <div className={wrapperClasses}>
      {beforeIcon}
      <input
        id={id}
        value={value}
        type="text"
        className={inputClasses}
        onChange={handleOnChange}
        disabled={disabled}
        placeholder=" "
      />

      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {afterIcon}
    </div>
  );
}

export default Input;
