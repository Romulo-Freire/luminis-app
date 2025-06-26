'use client';
import PrimaryButtom from "../components/PrimaryButtom";
import { useRouter } from 'next/navigation';

import './page.css';
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";

interface StorageProps{
    email: string,
    passcode: string
}

export default function RecuperarSenha() {
    const router = useRouter();

    const [storage, setStorage] = useLocalStorage<StorageProps | null>("resetPassData", null);
    const [codePartOne, setCodePartOne] = useState<string>('');
    const [codePartTwo, setCodePartTwo] = useState<string>('');
    const [codePartThree, setCodePartThree] = useState<string>('');
    const [codePartFour, setCodePartFour] = useState<string>('');
    
    let finalPassCode = "";

    useEffect(() => {
        finalPassCode = codePartOne + codePartTwo + codePartThree + codePartFour;
        console.log(finalPassCode);
    }, [codePartOne,codePartTwo,codePartThree,codePartFour]);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url(./assets/background-frufru.png)',
            backgroundSize: 'contain', backgroundRepeat: "no-repeat", //contain - tamanho da imagem original//
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: '#fff',
            position: 'relative',
        }}>
            <section style={{
                width: '68%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img src="/assets/LOGO.png" style={{
                    width: '310px',
                    height: '280px',
                    marginTop: '-165px',
                    marginBottom: '-98px',
                }}>
                </img>
                <div style={{
                    backgroundColor: 'rgba(255, 149, 0, 0.60)',
                    width: '60%',
                    height: '360px',
                    borderRadius: '15px',
                    boxShadow: '7px 7px rgba(0, 0, 0, 0.15)',
                    marginTop: '17px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: '23px',
                        marginTop: '30px',
                        color: 'rgba(153, 89, 0, 1)',

                    }}>Digite o codigo de verificação enviado <br /> para o seu e-mail!</h1>
                    <div
                        style={{ 
                            width: '100%', 
                            padding: '0px 20%',
                            marginTop: '20px',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"                    
                        }}
                    >
                        <input
                            className="input-number"  
                            type="number"
                            value={codePartOne}
                            onChange={(event) => setCodePartOne(event.target.value)}
                        >
                        </input>
                        <input 
                            className="input-number"  
                            type="number"
                            value={codePartTwo}
                            onChange={(event) => setCodePartTwo(event.target.value)}
                        >
                        </input>
                        <input 
                            className="input-number"  
                            type="number"
                            value={codePartThree}
                            onChange={(event) => setCodePartThree(event.target.value)}
                        >
                        </input>
                        <input
                            className="input-number"  
                            type="number"
                            value={codePartFour}
                            onChange={(event) => setCodePartFour(event.target.value)}
                        >
                        </input>
                    </div>
                    <PrimaryButtom style={{
                        width: '170px',
                        height: '49px',
                        fontSize: '20px',                        
                        marginTop: '35px',
                        
                    }}
                        TextColor='#fff'
                        BackgroundColor='rgba(219, 126, 0, 1)'
                        Text='CONFIRMAR'
                        onClick={()=> router.push('/renovarsenha')}></PrimaryButtom>

                </div>
                <img style={{
                    position: 'absolute', // sobrepõe as coisas//
                    width: '225px',
                    height: '198px',
                    bottom: '0', right: '0'

                }} src="/assets/frufru2.png">
                </img>
                <img style={{
                    position: 'absolute', // sobrepõe as coisas//
                    width: '225px',
                    height: '198px',
                    top: '0', right: '0'

                }} src="/assets/circuloreverse.png">

                </img>
            </section>
        </div>
    );
}

