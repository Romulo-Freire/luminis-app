'use client';
import { useRouter } from "next/navigation";
import PrimaryButtom from "../components/PrimaryButtom";

export default function EmailRecuperacao(){

     const router = useRouter()
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
                <h1 style={{color: "#615959", fontWeight: 'bold', fontSize: '30px', textAlign: 'center'}}>
                    <strong>Digite o seu e-mail para receber o <br/> codigo de verificação</strong>
                </h1>

                <input 
                    type="text"
                    style={{
                        width: '400px',
                        height: '45px',
                        marginTop: '20px',
                        borderRadius: '8px',
                        backgroundColor: '#CAC9C9',
                        paddingLeft: '10px',
                        color: '#565656'
                    }} />
                <PrimaryButtom style={{
                    width: '20%',
                    height: '45px',
                    marginTop: '48px',   
                    fontSize: '25px',            
                }}
                    TextColor='rgb(255, 255, 255)'
                    BackgroundColor='#F37900'
                    Text='Enviar'
                    onClick={() => router.push('/recuperar-senha')}></PrimaryButtom>
            </section>
        </div>
    );
}