import './PrimaryButtom.css'
interface SecondButtomProps extends React.HTMLProps<HTMLButtonElement>{
    Text: string,
    Icon: string,
    TextColor: string,
}
function SecondButtom(props: SecondButtomProps){
    return(
        <button className="buttomhover" onClick={props.onClick} style={{
            width: props.style?.width,
            height: props.style?.height,
            marginTop: props.style?.marginTop,
            marginRight: props.style?.marginRight,
            marginLeft: props.style?.marginLeft,
            color: `${props.TextColor}`,
            fontSize: props.style?.fontSize,
            display: 'flex',
            alignItems: 'center',
            border: '4px solid rgb(255, 136, 0)',
            borderRadius: '15px',
        }}>
            <img src={props.Icon} style={{
                width: '50px',
                marginLeft:'9px',
            }}>
            
            </img>
          <strong style={{
             marginLeft: '25px',
             fontSize: '25px',
          }}>{props.Text}</strong>

        </button>
    


    );
}
export default SecondButtom;