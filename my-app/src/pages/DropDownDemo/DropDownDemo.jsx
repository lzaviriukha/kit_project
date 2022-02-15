import DropDown from 'components/UI_KIT/DropDown';
import Icon from 'components/UI_Demo/Icon'
import s from './DropDownDemo.module.css';

function DropDownDemo() {
  return (
    <DropDown expanderIcon={<Icon name="DropArrow"/>}/>
  )
}

export default DropDownDemo;