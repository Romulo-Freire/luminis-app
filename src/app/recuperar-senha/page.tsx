'use client';
import { useRouter } from "next/navigation";
import PrimaryButtom from '../components/PrimaryButtom';
import IconInput from "../components/IconInput";
import { useState } from "react";

import{ sendPasswordResetEmail } from 'firebase/auth';
import{auth} from '../services/firebaseServices';

export default function EmailRecuperacao(){
    const router = useRouter();

    const [email,setEmail] = useState<string | null>(null);
    const [sendFinished, setSendFinished] = useState(false);

    async function SendLinkResetPass(){
        if(email == null || email.trim().length == 0 ){
            alert("O email deve ser preenchido corretamente!");
            return;
        }
        try{
            const result = await sendPasswordResetEmail(auth, email);
            console.log(result);
            setSendFinished(true);
        }catch(erro){
            alert("Ocorreu um problema no envio do link. Por favor tente mais tarde.");
        }
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url(./assets/frufru-inverso.png)',
            backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: "right", //contain - tamanho da imagem original//
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
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
                }}></img>
               
               {!sendFinished ?  
                <h1 style={{color: "#615959", fontWeight: 'bold', fontSize: '30px', textAlign: 'center'}}>
                    Digite o seu e-mail para receber o <br/> link de redefinição 
                </h1> 
                    :
                <h1 style={{color: "#615959", fontWeight: 'bold', fontSize: '30px', textAlign: 'center'}}>
                    O link foi enviado para o seu email 
                </h1> 
                }

                <div 
                    style={{ width: '480px' }}
                >
                    { sendFinished ? 
                        <PrimaryButtom style={{
                                width: '91%',
                                height: '45px',
                                marginLeft: '30px',
                                marginTop: '10px'
                            }}
                                TextColor='rgb(255, 255, 255)'
                                BackgroundColor='#FFA424'
                                Text='Voltar'
                                onClick={() => router.back()}>
                            </PrimaryButtom>
                        :
                        <>
                            <IconInput
                                changeValue={(value) => setEmail(value)}
                                width='100%'
                                placeholder="  Digite seu e-mail"
                                src="/assets/usuario.png"></IconInput>
                            <PrimaryButtom style={{
                                width: '91%',
                                height: '45px',
                                marginLeft: '30px',
                                marginTop: '10px'
                            }}
                                TextColor='rgb(255, 255, 255)'
                                BackgroundColor='#FFA424'
                                Text='Enviar'
                                onClick={() => SendLinkResetPass()}>
                            </PrimaryButtom>
                        </>
                    }
                </div>
            </section>
            <img
                style={{ 
                    position:'absolute',
                    bottom: '0px',
                    left: '0px',
                    width: '240px'

                }} 
                src="/assets/image-bottom-left.png" 
                alt="" />
        </div>
    );
}