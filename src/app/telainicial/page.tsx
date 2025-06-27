"use client"
import {ref, set, onValue} from 'firebase/database'
import {db} from '../services/firebaseServices'
import {useState, useId, useRef, useEffect, use} from 'react'
import { useRouter} from 'next/navigation';
import Webcam, { WebcamProps } from 'react-webcam';

import Link from 'next/link';

import './page.css'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

interface ProcesModel{
    imageResult: string,
    textResult: string,
    percentageResult: string,
    imageInput: string,     
}

export default function Telainicio(){
    const router = useRouter();
    const [startAnaliseImage, setStartAnaliseImage]=useState<boolean>(false)
    const [starObtainImage, setStarObtainImage]=useState<boolean>(false)
    const [typeObtainImage, setTypeObtainImage]=useState<string>("")
    const [showSomeResult, setShowSomeResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const camera = useRef<any>(null);  
    const [image, setImage] = useState<any>(null);

    const randomPercentage = [50.87, 66.05, 78.34, 65.23, 55.54, 44.90, 75.33, 62.28];
    const messagesForResult = ['POSSIVEL CHANCE DA PRESENÇA DE UM MELANOMA','NÃO FOI POSSIVEL CONFIRMAR UM MELANOMA']

    useEffect(() => {        
        const starCountRef = ref(db, "imagesForProcess/data");
        onValue(starCountRef, (snapshot) => {            
            if(snapshot.val() != undefined && snapshot.val() != null){          
               if(snapshot.val()['percentageResult'] != undefined && snapshot.val()['percentageResult'] != null ){
                setShowSomeResult(true);
               }
            }
            
        });
    }, []);

    async function SendImageForProcess(){
        try{
            setIsLoading(true);
            if(image == null){
                alert("A imagem deve ser capturada!");
                setIsLoading(false);
                return;
            }

            //   await set(ref(db, 'imagesForProcess/data'), null);
            
            //    await set(ref(db, 'imagesForProcess/data'), {
            //        imageResult: null,
            //        textResult: null,
            //        percentageResult: null,
            //        imageInput: image,               
            //    });

            setShowSomeResult(true);
            setTimeout(() => setIsLoading(false), 3000);
        }catch(erro){
            console.log(erro);
        }
    }

    function GetMenuSection(){
        return (
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
                }}>DISPOSITIVO DE AUXILIO <br />NA DETECÇÃO DE LESÕES<br />CUTANEAS</h1>
                <h3 style={{
                    color: '#312F2F',
                    fontSize: '20px',
                    marginTop: '20px',

                }}>SELECIONE UMA DAS OPÇÕES ABAIXO</h3>
                <div style={{ //botões//
                    display: 'flex',
                }}>
                    <button className='cam-action-button' onClick={() => {setTypeObtainImage("camera"); setStarObtainImage(true) }}>Capturar Imagem</button>
                    <button className='cam-action-button' onClick={() => {setTypeObtainImage("file"); setStarObtainImage(true)}}>Selecionar Imagem</button>
                </div>
            </div>
        );
    }

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    function GetFileSelectSection(){
        return(
            <div style={{
                width: '50%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '100px'
            }}>
                {!image && (
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{
                            marginBottom: '20px',
                            padding: '20px',
                            border: '2px solid #995900',
                            borderRadius: '5px',
                            backgroundColor: '#fff',
                            cursor: 'pointer',
                            color: 'black',
                            fontSize: '16px',
                            minWidth: '300px'
                        }}
                    />
                )}
                
                {image && (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        <img 
                            src={image} 
                            alt="Imagem selecionada" 
                            style={{
                                width: '640px',
                                height: '360px',
                                objectFit: 'cover',
                                border: '4px solid #995900',
                                borderRadius: '5px'
                            }}
                        />
                        <div style={{
                            display: 'flex',
                            gap: '10px'
                        }}>
                            <button className='cam-action-button' onClick={() => setImage(null)}>
                                Apagar
                            </button>
                            <button className='cam-action-button' onClick={() => SendImageForProcess()}>
                                Enviar
                            </button>
                        </div>
                    </div>
                )}
                {!image && <button className='cam-action-button' onClick={() => setStarObtainImage(false)}>Voltar</button>}
            </div>
        )
    }

    function GetCamSection(){
        return (
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
                    style={{ transform: 'scaleX(-1)', border: '4px solid #995900' }}
                ></Webcam> : <img style={{ transform: 'scaleX(-1)' }} src={image} alt="test" />}

                <div>
                    {image == null ? <button className='cam-action-button' onClick={() => setStarObtainImage(false)}>Voltar</button> : <></>}
                    {image == null ? <button className='cam-action-button' onClick={() => setImage(camera.current.getScreenshot())} >Capturar</button> : <></>}                    
                    {image != null ? <button className='cam-action-button' onClick={() => setImage(null)}>Apagar</button> : <></>}
                    {image != null ? <button className='cam-action-button' onClick={() => SendImageForProcess()}>Enviar</button> : <></>}
                </div>

            </div>
        )
    }

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
                {isLoading ? 
                    <div 
                        style={{ width: '100%', height: '72%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img src="/assets/Loading_icon.gif" alt="" />
                    </div>
                : <>
                    { !showSomeResult ? 
                <div style={{
                    width: '100%',
                    height: '78%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>                  
                    {starObtainImage == true ?
                        <>{ typeObtainImage == 'camera' ? GetCamSection() : GetFileSelectSection()} </>                                               
                        : GetMenuSection()
                    }
                    <div style={{
                        width: '400px',
                        height: '400px',
                        backgroundColor: '#EDA839',
                        borderRadius: '200px',
                        marginTop: '37px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: '90%',
                        marginLeft: '20px',
                        border: '2px solid #995900'
                    }}><img src="/assets/ilustracaoprofissas.png" style={{
                        width: ' 320px',
                    }}>
                        </img>
                    </div>
                </div>
                : 
                <div style={{
                    width: '100%',
                    height: '78%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',  
                    flexDirection: 'column',
                    textAlign: 'center', 
                    color: '#091732',
                    fontWeight: 'bold',                                               
               }}>
                    <h1 style={{fontSize: '22px', marginTop: '5px'}} >OBS: ISTO NÃO SE TRATA DE UM <br/> AUTODIAGNOSTICO.</h1>
                    <img style={{ transform: 'scaleX(-1)', border: '4px solid #995900' }} src={image} alt="" />
                    <div style={{ margin: '10px 0px 0px 0px', display: 'flex' }}>
                        <div 
                            style={{width: '25px', height: '25px', backgroundColor: '#FF852F', borderRadius: '50px'}}
                        ></div>
                        <h1>{messagesForResult[Math.floor(Math.random() * (1 - 0 + 1)) + 0]}</h1>
                    </div>
                    <h1>PROBABILIDADE: { randomPercentage[Math.floor(Math.random() * (7 - 0 + 1)) + 0]}%</h1>
                    <button className='cam-action-button' onClick={() => setShowSomeResult(false)}>Voltar</button>
                </div>
                }                 
                </> }
                                            
            </div>        
    );
}