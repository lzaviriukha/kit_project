import s from './Button.module.css';




function Button(props) {

    const buttonTypeClass = props.type === "primary" && props.disable ? s.btn_primary_disable :
                            props.type === "primary" && !props.disable ? s.btn_primary : 
                            props.type === "secondary" && props.disable ? s.btn_secondary_disable :
                            props.type === "secondary" && !props.disable ? s.btn_secondary: '';

    // let buttonTypeClass;
    
    // switch (props.type) {
    //     case ("primary" && props.disable):
    //         buttonTypeClass = s.btn_primary_disable;
    //         break;
    //     case ("primary" && !props.disable):
    //         buttonTypeClass = s.btn_primary;
    //         break;
    //     case ("secondary" && props.disable):
    //         buttonTypeClass = s.btn_secondary_disable;
    //         break;
    //     case ("secondary" && !props.disable):
    //         buttonTypeClass = s.btn_secondary;
    //         break;
    //     default:
    //         buttonTypeClass = "";
    // }
    
    
    const onClicAction = e => {
        if (props.disable) {
            e.preventDefault();
        } else {
            return props.onClick(e);
        }
    }           
   

    return (
            <div className={`${props.className} ${s.btn} ${buttonTypeClass}`}
                 id={props.id}
                 onClick={onClicAction}>
                {props.startIcon}{props.title}{props.endIcon}
            </div>
    );
}

export default Button;