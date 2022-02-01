import Button from "components/UI_KIT/Button";
import s from './ButtonPicker.module.css';

function ButtonPicker (props) {
  const {
    onChange,
    options,
    classes,
    value,
    disable = false
  } = props

  return (
    <div className={`${s.internalWrapperClasses} ${classes.wrapper}`}>
      {options.map((option) => {
        const isActive = value === option.id;

        const handleOnClick = (evt) => {
          if (props.disable) {
            evt.preventDefault();
            evt.stopPropagation();
          } else {
            return onChange(option.id, option);
          }
          
        }

        return (
          <Button
            id={options.id}
            value={options.id}
            className={`${classes.button} ${isActive ? classes.activeButton : ''} ${disable ? classes.disableButton : ''}`}
            onClick={handleOnClick}
            disable={disable}
            title={option.name}
          />
        )
      })}
     </div>
  );
}


export default ButtonPicker;
