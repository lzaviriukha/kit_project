import s from "./DropDown.module.css";

/*
<Dropdown
  id="my-dropdown"
  value='option-id-1'                 // string
  options={listOfOptions}             // see below
  onChange={(nextId, nextOption) => { ... }}
  classes={myClsses}                 // optional, see below
  disabled={isDisabled}              // optional, boolean
  getOptionLabel=((option) => { ... }}     // optional, function that returns string
  isOptionSelected=((option, currentValue) => { ... }}  // optional, function that returns boolean
  isOptionDisabled=((option, currentValue) => { ... }}  // optional, function that returns boolean
  expanderIcon={reactElement}        // optional
/>
where listOfOptions is:

const listOfOptions = [
  { id: 'foo', name: 'Foo' },
  { id: 'bar', name: 'Bar' },
  { id: 'baz', name: 'Baz' }
]
and classes is:

const classses = {
  wrapper: 'someCssClass',
  item: 'someCssClass',
  activeItem: 'someCssClass',
  disabledItem: 'someCssClass',
}
*/

function DropDown(props) {
  const { expanderIcon: icon } = props;
  return (
    <div className={s.dropdown}>
      <div className={s.dropdown_btn}>
        Choose one <div className="dropdown_icon">{icon}</div>
      </div>
      <div className={s.dropdown_content}>
        <div className={s.dropdown_item}>React</div>
        <div className={s.dropdown_item}>React</div>
      </div>
    </div>
  );
}

export default DropDown;
