import Button from "../../components/Button/Button";
import Icon from "../../components//UIDemo/Icon/Index";

function ButtonDemo() {
    return (
        <>
            <Button
                id="my-button"
                onClick={() => console.log('log log')}
                className="someCssCLass"
                disable={false}
                type="primary"
                title="SAVE"
            />

            <Button
                id="my-button"
                onClick={() => console.log('log log')}
                className="someCssCLass"
                disable={false}
                type="primary"
                title="SAVE"
                endIcon={<Icon name="ForwardArrow" height="14px" width="14px"/>}
            />

            <Button
                id="my-button"
                onClick={() => console.log('log log')}
                className="someCssCLass"
                disable={true}
                type="primary"
                title="SAVE"
                startIcon={<Icon name="Lock" height="15px" width="18px" />}
                endIcon={<Icon name="ForwardArrow" height="14px" width="14px" />}
            />

            <Button
                id="my-button"
                onClick={() => console.log('log log')}
                className="someCssCLass"
                disable={false}
                type="secondary"
                title="SAVE"
            />

            <Button
                id="my-button"
                onClick={() => console.log('log log')}
                className="someCssCLass"
                disable={false}
                type="secondary"
                title="SAVE"
                endIcon={<Icon name="ForwardArrow" height="14px" width="14px" />}
            />

            <Button
                id="my-button"
                onClick={() => console.log('log log')}
                className="someCssCLass"
                disable={true}
                type="secondary"
                title="SAVE"
                endIcon={<Icon name="ForwardArrow" height="14px" width="14px" />}
            />
        </>
    )
}

export default ButtonDemo;