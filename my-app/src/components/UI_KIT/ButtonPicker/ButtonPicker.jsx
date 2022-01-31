import Button from "components/UI_KIT/Button";
import s from './ButtonPicker.module.css';

function ButtonPicker (props) {
  const {
    onChange,
    options,
    classes,
    value
  } = props

  return (
    <div className={`${s.wrapper} ${classes.wrapper}`}>
      {options.map((option) => {
        const isActive = value === option.id;

        const handleOnClick = (evt) => {
          onChange(option.id, option)
        }

        return (
          <Button
            id={options.id}
            value={options.id}
            className={`${classes.button} ${isActive ? classes.activeButton : ''}`}
            onClick={handleOnClick}
            title={option.name}
          />
        )
      })}
     </div>
  );
}


export default ButtonPicker;
