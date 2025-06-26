function Prevencoes() {
   return (
      <div style={{
         width: '100vw',
         height: '100vh',
         backgroundImage: 'url(./assets/telaprevencoes.png)',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: '225% 20%',
         backgroundColor: 'rgb(255, 255, 255)',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',

      }}>
         <div style={{

            width: '270px',
            height: '300px',
            backgroundColor: 'rgb(234,125, 0)',
            borderRadius: '15px',
         }}>
            <img src="/assets/chapeu.png" style={{
               width: '200px',
               height: '180px',
               marginLeft: '35px',
               marginTop: '-18px',
            }}>
            </img>
            <div style={{
                backgroundColor: 'rgb(236, 236, 236)',
                width: '235px',
                height: '145px',
                marginLeft: '18px',
                marginTop: '-20px',
                borderRadius: '15px',
            }}>
               <p style={{
                  color: 'rgb(58, 58, 58)',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textAlign: 'justify',
                  padding: '7px',
               }}>Use roupas de proteção como chapéus, bonés, óculos com proteção UV e camisas de manga compridas.</p>
            </div>
         </div>
         <div style={{
            width: '330px',
            height: '350px',
            backgroundColor: 'rgb(255, 149, 0)',
            borderRadius: '20px',
            marginRight: '15px',
            marginLeft: '15px',
         }}>
            <img src="/assets/solprev.png" style={{
               width: '280px',
               height: '250px',
               marginLeft: '20px',
               marginTop: '-30px',
            }}>
            </img>
            <div style={{
               backgroundColor: 'rgb(236, 236, 236)',
               width: '295px',
               height: '155px',
               marginLeft: '18px',
               marginTop: '-40px',
               borderRadius: '15px',
            }}>
               <p style={{
                  color: 'rgb(58, 58, 58)',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  textAlign: 'justify',
                  padding: '8px',
               }}>  Evite passar tempos muito prolongados em exposição a luz do sol, principalmente entre as 9h e 12h.</p>
            </div>
         </div>
         <div style={{
            width: '270px',
            height: '300px',
            backgroundColor: 'rgb(234,125, 0)',
            borderRadius: '15px',
            marginRight: '250px',
         }}>
            <img src="/assets/protetor.png" style={{
               width: '195px',
               height: '150px',
               marginLeft: '45px',
               marginTop: '-5px',
            }}>
            </img>
            <div style={{
                backgroundColor: 'rgb(236, 236, 236)',
                width: '235px',
                height: '145px',
                marginLeft: '18px',
                marginTop: '-3px',
                borderRadius: '15px',
                }}><p style={{
                  color: 'rgb(58, 58, 58)',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textAlign: 'justify',
                  padding: '7px',
                }}>Use filtro solar com fator de proteção solar (FPS) 30 ou superior,
                 aplicando diariamente mesmo em dias nublados.</p>
            </div>
         </div>
      </div>

   );
}

export default Prevencoes;