'use client'
import IconInput from '../components/IconInput';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PrimaryButtom from '../components/PrimaryButtom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../services/firebaseServices'
export default function Cadastro() {
    const router = useRouter()
    const [nome, setNome]=useState('')
    const [email, setEmail]=useState('')
    const [senha, setSenha]=useState('')
    const [senha2, setSenha2]=useState('')
    const [showPassword, setShowPassword] = useState(false)
    async function createUser() {
    if(senha!=senha2){
        alert('As senhas devem ser iguais')
        return;

    }
   
        try{
            const response= await createUserWithEmailAndPassword(auth, email, senha)
         if(response.user!=null){
            router.push('/login')
         }else{
            alert('e-mail ou senha incorretos. Tente novamente')
    
         }
        }catch(erro){ alert('e-mail ou senha incorretos. Tente novamente')}
    }
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
                    marginTop: '-115px',
                    marginBottom: '-98px',
                }}>
                </img>
                <div style={{
                    backgroundColor: 'rgba(221, 221, 221, 0.50)',
                    width: '55%',
                    height: '490px',
                    borderRadius: '18px',
                    boxShadow: '7px 7px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '40px',
                    paddingLeft: '1rem', // 1 rem = 16px//
                }}>
                    <IconInput 
                       changeValue={(value)=>setNome(value)}
                        backgroundcolor='rgba(217, 217, 217, 1)' 
                        placeholder='Seu usuário'
                        width='95%' 
                        src="/assets/usuario.png"></IconInput>
                    <IconInput 
                       changeValue={(value)=>setEmail(value)}
                        backgroundcolor='rgba(217, 217, 217, 1)' 
                        width='95%'
                        placeholder='Seu e-mail' 
                        src="/assets/mail.png"></IconInput>
                    <IconInput
                      changeValue={(value)=>setSenha(value)}
                        changeVisibleText={() => {
                            if (showPassword) {
                                setShowPassword(false)
                            } else {
                                setShowPassword(true)
                            }
                        }}
                        img='./assets/olhofechado.png'
                        width='95%'
                        type={showPassword ? 'text' : 'password'}
                        backgroundcolor='rgba(217, 217, 217, 1)' placeholder='Sua senha' src="/assets/senha.png"></IconInput>
                    <IconInput
                          changeValue={(value)=>setSenha2(value)}
                        changeVisibleText={() => {
                            if (showPassword) {
                                setShowPassword(false)
                            } else {
                                setShowPassword(true)
                            }
                        }}
                        img='./assets/olhofechado.png'
                        width='95%'
                        type={showPassword ? 'text' : 'password'}
                        backgroundcolor='rgba(217, 217, 217, 1)' placeholder='Confirme sua senha' src="/assets/unlock.png"></IconInput>
                    <PrimaryButtom style={{
                        width: '58%',
                        height: '45px',
                        marginTop: '45px',
                        fontSize: '20px',
                    }}
                        TextColor='#fff'
                        BackgroundColor='rgba(219, 126, 0, 1)'
                        Text='CADASTRAR-SE'
                        onClick={() => createUser()}></PrimaryButtom>
                </div>
                <img style={{
                    position: 'absolute', // sobrepõe as coisas//
                    width: '255px',
                    height: '195px',
                    bottom: '0', right: '0'


                }} src='/assets/circulo-frufru.png'>
                </img>
            </section>
        </div>
    );
}