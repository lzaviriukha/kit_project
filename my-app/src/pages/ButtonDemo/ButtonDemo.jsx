import Button from "../../components/Button/Button";
import s from '../../components/Button/Button.module.css'
import Icon from "../../components/Icon/Index";

function ButtonDemo () {
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
                endIcon={<Icon name="ForwardArrow" height="14px" width="14px" className={s.btn__icon__end}/>}
                /> 

            <Button
                id="my-button" 
                onClick={() => console.log('log log')}
                className="someCssCLass" 
                disable={true}
                type="primary"
                title="SAVE"
                startIcon={<Icon name="Lock" height="14px" width="14px" className={s.btn__icon__start}/>}
                endIcon={<Icon name="ForwardArrow" height="14px" width="14px" className={s.btn__icon__end}/>}
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
                endIcon={<Icon name="ForwardArrow" height="14px" width="14px" className={s.btn__icon__end}/>}
                /> 
            
            <Button
                id="my-button" 
                onClick={() => console.log('log log')}
                className="someCssCLass" 
                disable={true}
                type="secondary"
                title="SAVE"
                endIcon={<Icon name="ForwardArrow" height="14px" width="14px" className={s.btn__icon__end}/>}
                /> 
        </>
    )
}

export default ButtonDemo;