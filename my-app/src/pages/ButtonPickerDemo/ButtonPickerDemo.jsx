import {useState} from 'react';
import ButtonPicker from "components/UI_KIT/ButtonPicker";
import s from './ButtonPickerDemo.module.css';


function ButtonPickerDemo() {

  const [activeItemId, setActiveItemId] = useState(null);

  const myFn = (id, option) => {
    setActiveItemId(id)
  }

  const listOfOptions = [
    { id: 'foo', name: 'Foo' },
    { id: 'bar', name: 'Bar' },
    { id: 'baz', name: 'Baz' }
  ];

  const classes = {
    wrapper: s.wrapper,
    button: s.btn,
    activeButton: s.btn_active
  }

  return (
    <>
      <ButtonPicker
        id="my-choice-button"
        value={activeItemId}
        onChange={myFn}
        options={listOfOptions}
        classes={classes}
        disable={false}
      />
    </>
  );
}

export default ButtonPickerDemo;

