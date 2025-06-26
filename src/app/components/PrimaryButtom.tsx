import './PrimaryButtom.css';
interface PrimaryButtomProps extends React.HTMLProps<HTMLButtonElement>{
    Text: string,
    BackgroundColor: string,
    TextColor: string,
}
function PrimaryButtom(props: PrimaryButtomProps){
    return(
        <button className="buttomhover" onClick={props.onClick} style={{
            width: props.style?.width,
            height: props.style?.height,
            backgroundColor:`${props.BackgroundColor}`,
            marginTop: props.style?.marginTop,
            marginRight: props.style?.marginRight,
            marginLeft: props.style?.marginLeft,
            color: `${props.TextColor}`,
            borderRadius: '10px',
            fontSize: props.style?.fontSize,
        }}>
          <strong>{props.Text}</strong>

        </button>
    


    );
}
export default PrimaryButtom;