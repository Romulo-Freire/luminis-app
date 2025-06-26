'use client'
import IconInput from '../components/IconInput';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PrimaryButtom from '../components/PrimaryButtom';
export default function Cadastro(){
    const router = useRouter()
    const [showPassword, setShowPassword]=useState(false)
    return(
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundImage:'url(./assets/background-frufru.png)',
            backgroundSize:'contain', backgroundRepeat: "no-repeat", //contain - tamanho da imagem original//
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
                width:'310px',
                height: '280px',
                marginTop: '-115px',
                marginBottom: '-98px',
             }}>
             </img>
             <div style={{
                backgroundColor: 'rgba(221, 221, 221, 0.50)',
                width: '60%',
                height: '350px',
                borderRadius: '18px',
                boxShadow: '7px 7px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                paddingTop: '100px',
                paddingLeft: '2rem', // 1 rem = 16px//
             }}>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '23px',
                    marginTop: '-25px',
                    color: 'rgb(71, 71, 71)',
                    fontWeight: 'bold',
                }}>REDEFINA SUA SENHA </h1>
                <IconInput
                    width='70%'
                    changeVisibleText={()=>{
                        if(showPassword){
                            setShowPassword(false)
                        }else{
                            setShowPassword(true)
                        }
                    }}
                    changeValue={() => {}}
                    img='./assets/olhofechado.png' 
                    type={showPassword?'text':'password'} 
                    backgroundcolor='rgba(217, 217, 217, 1)' 
                    placeholder='Nova senha' 
                    src="/assets/senha.png"></IconInput>
                <IconInput 
                    width='70%'
                    changeVisibleText={()=>{
                        if(showPassword){
                            setShowPassword(false)
                        }else{
                            setShowPassword(true)
                        }
                    }}
                    changeValue={() => {}}
                    img='./assets/olhofechado.png' 
                    type={showPassword?'text':'password'} 
                    backgroundcolor='rgba(217, 217, 217, 1)'
                    placeholder='Confirme a senha' 
                    src="/assets/unlock.png"></IconInput>
                <PrimaryButtom style={{
                     width: '170px',
                     height: '49px',
                     marginTop: '25px',
                     fontSize: '20px',
                }}
                 TextColor='#fff'
                 BackgroundColor='rgba(219, 126, 0, 1)'
                 Text='CONFIRMAR'
                 onClick={()=> router.push('/login')}></PrimaryButtom>
             </div>
             <img style={{
                position: 'absolute', // sobrepõe as coisas//
                width: '255px',
                height: '195px',
                bottom: '0', right: '0'


             }}  src='/assets/circulo-frufru.png'>
             </img>
            </section>
        </div>
    );
}