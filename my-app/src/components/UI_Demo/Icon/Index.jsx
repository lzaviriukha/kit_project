import Lock from "./Lock";
import ForwardArrow from "./ForwarArrow";

const Icon = (props) => {
    switch (props.name.toLowerCase()) {
        case "lock": 
            return <Lock {...props}/>;
        case "forwardarrow":
            return <ForwardArrow {...props}/>;
        default: 
            return <div/>
     }
}

export default Icon;
