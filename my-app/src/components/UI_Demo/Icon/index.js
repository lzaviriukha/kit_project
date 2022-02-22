import Lock from "./Lock";
import ForwardArrow from "./ForwarArrow";
import DropArrow from './DropArrow'

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "lock":
      return <Lock {...props} />;
    case "forwardarrow":
      return <ForwardArrow {...props} />;
    case "droparrow":
      return <DropArrow {...props}/>;
    default:
      return <div />;
  }
};

export default Icon;
