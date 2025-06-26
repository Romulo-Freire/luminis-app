'use client';
import Link from 'next/link';
import PrimaryButtom from '../components/PrimaryButtom';
import { useRouter } from 'next/navigation';
import IconInput from "../components/IconInput";
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import{signInWithEmailAndPassword} from 'firebase/auth';
import{auth} from '../services/firebaseServices';
import { SendEmail } from '../services/emailSender';

import './page.css';

interface StorageProps{
    email: string,
    passcode: string
}

function Login() {

    const [storage, setStorage] = useLocalStorage<StorageProps | null>("resetPassData", null)

    const [email, setEmail]=useState('')
    const [senha, setSenha]=useState('')
        
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
        
    async function login(){
        try{
            const response= await signInWithEmailAndPassword(auth, email, senha)
            if(response.user!=null){
                router.push('./telainicial')
            }else{
                alert('e-mail ou senha incorretos. Tente novamente')
            }
        }catch(erro){
            alert('e-mail ou senha incorretos. Tente novamente')
        }
    }    

    function Generate(n: number, chunks = 0, separator = ' ') : string{
        var add = 1, max = 12 - add;          
        var out;
        if ( n > max ) {
            out = Generate(max) + Generate(n - max);
        }
        else {
            max = Math.pow(10, n+add);
            var min    = max/10; 
            var number = Math.floor( Math.random() * (max - min + 1) ) + min;            
            out = ("" + number).substring(add);
        }
        
        if (chunks > 0 && n > chunks) {            
            const instead = []; for (let i = 0; i < out.length; i++) {
                if (i > 0 && i % chunks === 0) instead.push(separator);
                instead.push(out[i]);
            }
            return instead.join('');
        }        
        return out;
    }

    async function GenerateCodeForPass(){
        if(email.trim().length == 0){
            alert('O e-mail deve ser preenchido corretamente!')
            return;
        }
        const result = await SendEmail({ email: email, passcode: '1234' });
        if(result){
            const passcode = Generate(4);
            setStorage({ email, passcode })
            router.push("/recuperar-senha")
        }else{
            alert("Não foi possível enviar o email para redefinição de senha! Por favor tente mais tarde.")
        }
    }

    useEffect(() => {
        setStorage(null);
    }, []);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',      
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            

        }} >
            <section style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                width: "35%",
                height: "80%",
                boxShadow: "5px 5px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
                strokeWidth: "1px",
                display: "flex",
                border: "1px solid #444444",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingBottom: "30px",
                       
            }}>
                <img src="/assets/LOGO.png" style={{
                    width: '240px',
                    height: '210px',
                    alignSelf: "center",
                    marginTop: '-50px',       
                    marginBottom: '-30px',             
                    marginLeft: '30px'
                }}>

                </img>
                <h1 style={{
                    color: "#575757",
                    fontSize: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginRight: '-2px',
                    marginTop: '-40px',
                }}>CONECTE-SE A SUA CONTA  <br /> OU CRIE UMA</h1>
                <IconInput
                    changeValue={(value)=>setEmail(value)}
                    width='80%'
                    placeholder="  Digite seu e-mail" 
                    src="/assets/usuario.png"></IconInput>
                <IconInput
                    changeValue={(value)=>setSenha(value)}
                    width='80%'
                    changeVisibleText={() => {
                        if (showPassword) {
                            setShowPassword(false)
                        } else {
                            setShowPassword(true)
                        }
                    }}
                    img='./assets/olhofechado.png'
                    type={showPassword ? 'text' : 'password'}
                    placeholder="  Digite sua senha"
                    src="/assets/senha.png"></IconInput>
                <div
                    style={{ width: '100%', marginLeft: '35%' }}
                >
               
                    <h1 
                        className='hover-all'
                        style={{  marginTop: '15px', marginBottom: '15px', color: '#444444'}}
                        onClick={() => GenerateCodeForPass()}
                    >
                        <strong>Esqueceu sua senha?</strong>
                    </h1>
           
                </div>
                <PrimaryButtom style={{
                    width: '71%',
                    height: '45px',  
                    marginLeft: '30px'                  
                }}
                    TextColor='rgb(255, 255, 255)'
                    BackgroundColor='#FFA424'
                    Text='ENTRAR'
                    onClick={() => login()}></PrimaryButtom>


                <PrimaryButtom style={{
                    width: '71%',
                    height: '45px',
                    marginTop: '10px',
                        marginLeft: '30px'    
                }}
                    TextColor='rgb(255, 255, 255)'
                    BackgroundColor='#F37900'
                    Text='CADASTRE-SE'
                    onClick={() => router.push('/cadastro')}></PrimaryButtom>

            </section>


        </div>
    );

}

export default Login;
