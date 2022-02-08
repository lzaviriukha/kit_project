import Button from "components/UI_KIT/Button";
import Icon from "components/UI_Demo/Icon";
import s from "./ButtonDemo.module.css";

function ButtonDemo() {
  return (
    <div className={s.button_wrapper}>
      <h1 className={s.h1_title}>Primary button</h1>
      <div className="primary_button_wrapper">
        <div className={s.button_group}>
          <h2>Default</h2>
          <Button
            id="my-button"
            onClick={() => console.log("log log")}
            className="someCssCLass"
            disable={false}
            type="primary"
            title="SAVE"
          />

          <Button
            id="my-button"
            onClick={() => console.log("log log")}
            className="someCssCLass"
            disable={false}
            type="primary"
            title="SAVE"
            endIcon={<Icon name="ForwardArrow" height="14px" width="14px" />}
          />
        </div>

        <div className={s.button_group}>
          <h2>Blocked</h2>
          <Button
            id="my-button"
            onClick={() => console.log("log log")}
            className="someCssCLass"
            disable={true}
            type="primary"
            title="SAVE"
          />

          <Button
            id="my-button"
            onClick={() => console.log("log log")}
            className="someCssCLass"
            disable={true}
            type="primary"
            title="SAVE"
            startIcon={<Icon name="Lock" height="15px" width="18px" />}
          />
        </div>
      </div>

      <h1 className={s.h1_title}>Secondary button</h1>
      <div className={s.button_group}>
        <h2>Default</h2>
        <Button
          id="my-button"
          onClick={() => console.log("log log")}
          className="someCssCLass"
          disable={false}
          type="secondary"
          title="SAVE"
        />

        <Button
          id="my-button"
          onClick={() => console.log("log log")}
          className="someCssCLass"
          disable={false}
          type="secondary"
          title="SAVE"
        />
      </div>

      <div className={s.button_group}>
        <h2>Blocked</h2>
        <Button
          id="my-button"
          onClick={() => console.log("log log")}
          className="someCssCLass"
          disable={true}
          type="secondary"
          title="SAVE"
        />
        
        <Button
          id="my-button"
          onClick={() => console.log("log log")}
          className="someCssCLass"
          disable={true}
          type="secondary"
          title="SAVE"
        />
      </div>
    </div>
  );
}

export default ButtonDemo;
