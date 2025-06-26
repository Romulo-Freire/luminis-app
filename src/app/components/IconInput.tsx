import './IconInput.css'
interface IconInputProps{
    src: string,
    placeholder: string,
    backgroundcolor?: string,
    type?: string,
    img?: string,
    width?: string    
    changeVisibleText?: ()=>void,
    changeValue:(value: string)=>void, 
}
function IconInput(props: IconInputProps){
    return(
        <div style={{
            display: 'flex',
            marginLeft: '-15px',
            marginTop: '25px',
            position: 'relative', 
            width: props.width
        }}>
            <img src={props.src} style={{
                width: '45px',
                marginRight: '2px'
            }}>
            </img>
            <input onChange={(event)=>props.changeValue(event.target.value)} style={{
                backgroundColor: props.backgroundcolor,
                width: '90%',
                borderRadius: '8px',
                height: '100%',
                minHeight: '45px'

            }}className="main-input" placeholder={props.placeholder} 
            type={props.type}
            />
           {props.img!=null && 
            <img onClick={props.changeVisibleText}  src='./assets/olhofechado.png' style={{
                width: '24px',
                height: '22px',
                position: 'absolute', 
                right: '2%',             
                marginTop: '10px',
                marginRight: '12px',
                

            }}>
            </img>
           }
        </div>

    );
}

export default IconInput;