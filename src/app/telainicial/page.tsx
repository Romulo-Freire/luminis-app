"use client"
import {ref, push} from 'firebase/database'
import {db} from '../services/firebaseServices'
import {useState, useId, useRef} from 'react'
import { useRouter} from 'next/navigation';
import Webcam, { WebcamProps } from 'react-webcam';

import Link from 'next/link';

import './page.css'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

export default function Telainicio(){
    const router = useRouter();
    const[startAnaliseImage, setStartAnaliseImage]=useState<boolean>(false)
    
    const camera = useRef<any>(null);  
    const [image, setImage] = useState<any>(null);

    return(

        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundImage:'url(./assets/decoracaoinicial.png)',
            backgroundSize:'contain', backgroundRepeat: "no-repeat",
            backgroundPosition: '100% 60%',
            backgroundColor: '#fff',
            position: 'relative',
        }}>
            <div style={{
                width: '100%',
                height: '12%',
                backgroundColor: '#fff',
                boxShadow: "5px 5px rgb( 0, 0 ,0 ,0.1)",
                strokeWidth: '1px',
                color: '#FF8800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0px 20px 0px 30px'
                
            }}>
                <img src="/assets/LOGO-2.png" style={{
                    width: '180px',

                }}></img>
                <div style={{
                    display:'flex',
                }}>
                    <p style={{
                        marginRight: '25px',
                        fontSize: '25px',
                        fontWeight: 'bold'
                    }}>HOME</p>
                    <p style={{
                        marginRight: '25px',
                        fontSize: '25px',
                        fontWeight: 'bold'
                    }}>SOBRE</p>
                    <Link href='/historico'>
                    <p style={{
                        marginRight: '95px',
                        fontSize: '25px',
                        fontWeight: 'bold'
                    }}>HISTORICO

                    </p>
                    </Link>
                </div>


                </div>
               <div style={{
                width: '100%',
                height: '78%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
               }}>
                {startAnaliseImage==true?
                    <div style={{
                        width: '50%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',  
                        marginTop: '100px'                     
                    }}>
                        {image == null ? <Webcam 
                            audio={false}
                            height={720}
                            ref={camera}
                            screenshotFormat="image/jpeg"
                            width={1280}
                            videoConstraints={videoConstraints}
                            style={{ transform: 'scaleX(-1)' }}
                        ></Webcam>  : <img style={{ transform: 'scaleX(-1)' }} src={image} alt="test" />}
                         
                        <div>
                            { image == null? <button className='cam-action-button' onClick={() => setImage(camera.current.getScreenshot())} >Capturar</button> : <></> }
                            { image != null? <button className='cam-action-button' onClick={() => setImage(null)}>Apagar</button> : <></>}
                            { image != null? <button className='cam-action-button' onClick={() => {}}>Enviar</button> : <></>}                                                        
                        </div>                                  
                        
                </div>:
                
                 <div style={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <h1 style={{
                        color: '#091732',
                        fontWeight: 'bold',
                        fontSize: '25px',
                        textAlign: 'center',
                        
                        

                    }}>DISPOSITIVO DE AUXILIO <br/>NA DETECÇÃO DE LESÕES<br/>CUTANEAS</h1>
                    <h3 style={{
                        color: '#312F2F',                        
                        fontSize: '20px',
                        marginTop: '20px',
                        
                    }}>SELECIONE UMA DAS OPÇÕES ABAIXO</h3>
                    <div style={{ //botões//
                       display: 'flex',                       
                    }}>
                        <button className='cam-action-button' onClick={()=>{setStartAnaliseImage(true)}}>Iniciar Triagem</button>
                    </div>
                </div>
                }
             <div style={{
                    width: '400px',
                    height: '400px',
                    backgroundColor: '#EDA839',
                    borderRadius: '200px',
                    marginTop: '37px',
                    display: 'flex',
                    justifyContent:'center',
                    alignItems: 'center',
                    opacity: '90%',
                    marginLeft: '20px',
                    border: '2px solid #995900'
            }}><img src="/assets/ilustracaoprofissas.png" style={{
                width:' 320px',
            }}>
            </img>
            </div>
               </div>
            </div>
    );
}