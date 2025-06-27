"use client"
import {useState} from 'react'
import {useRouter}from 'next/navigation'
import styles from './page.module.css'
export default function Historico(){
    const [actualHistory, setActualHistory] = useState<number>(0)//variavesi de estado//
    const router=useRouter() 
    return(
        <div  style={{
            backgroundColor: '#EEF0FF',
            width: '100vw',
            height: '100vh',
            overflowX: 'hidden'
        }}>

            <div  onClick={() => router.back()} style={{
                display: 'flex',
                alignItems: 'center',
                height: '12%',
                width: '100%',
                backgroundColor: '#fff',
                boxShadow: '5px 5px rgb( 0, 0 ,0 ,0.1)',          
                  }}>
                <img className='hover-all' src="/assets/seta.png" style={{
                    width: '50px',                    

                }}></img>
                <p className='hover-all' style={{
                    fontSize: '25px',
                    color: '#FF8800',
                
                }}>HISTORICO</p>
            </div>
            {actualHistory!=0 ?
            <div style={{
                width: '470px',
                backgroundColor: '#E9ECFF',
                height: '530px',
                margin: 'auto',
                marginTop: '25px',
                border: '2px solid #7C7C7C',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingTop: '10px',
                position: 'relative',
            }}>
                <img src='/assets/fechar.png' onClick={()=> setActualHistory(0)} style={{
                    width: '65px',
                    position: 'absolute',
                    top: '0px', 
                    right: '0px',
                    cursor: 'pointer',
                }}></img>
                <img src='/assets/melanoma.png' style={{
                    width: '250px',
                    height: '230px',
                }}></img>
                <div className={styles.selected_card_info}>
                    <p>Local da foto:</p>
                    <p>Costa</p>
                </div>
                   <div className={styles.selected_card_info}>
                    <p>DATA:</p>
                    <p>10/05/2025</p>
                </div>
                   <div className={styles.selected_card_info}>
                    <p>OBSERVAÇÕES:</p>
                    <p>...</p>
                </div>

            </div>:
       
            <div style={{
                display:'flex',
                alignItems:'center',
                flexDirection: 'column',
                
            }}>

                <div className={styles.card}>
                    <div className={styles.card_info} onClick={()=> setActualHistory(1)}>
                    <img src='/assets/melanoma.png' style={{
                        width: '190px',
                        borderRadius: '25px'
                    }}
                       className={styles.card_img}
                    ></img>
                    <div>
                        <p>REGIÃO DO CORPO: COSTAS</p>
                        <p>DATA: 03/04/2025</p>
                    </div>
                    </div>
                    <img src='/assets/lixeira.png' 
                        className={styles.card_img_delet}
                    ></img>

                    
                </div>
                
                <div className={styles.card}>
                    <div className={styles.card_info}>
                    <img src='/assets/cancerdepele.jpg'
                    style={{
                        borderRadius: '20px',
                        width: '170px',
                    }}
                       className={styles.card_img}
                    ></img>
                    <div>
                        <p>REGIÃO DO CORPO: MÃOS</p>
                        <p>DATA: 10/05/2025</p>
                    </div>
                    </div>
                    <img src='/assets/lixeira.png' 
                        className={styles.card_img_delet}
                    ></img>

                    
                </div>
                
                <div className={styles.card}>
                    <div className={styles.card_info}>
                    <img src='/assets/CANCEEEEER.jpg' style={{
                        borderRadius: '15px',
                        
                    }}
                       className={styles.card_img}
                    ></img>
                    <div>
                        <p>REGIÃO DO CORPO: BRAÇOS</p>
                        <p>DATA: 08/05/2025</p>
                    </div>
                    </div>
                    <img src='/assets/lixeira.png' 
                        className={styles.card_img_delet}
                    ></img>

                    
                </div>
                
                <div className={styles.card}>
                    <div className={styles.card_info}>
                    <img src='/assets/cance.png' style={{
                        width: '150px',
                        borderRadius: '10px',
                    
                    }}
                       className={styles.card_img}
                    ></img>
                    <div>
                        <p>REGIÃO DO CORPO: BRAÇOS</p>
                        <p>DATA: 08/05/2025</p>
                    </div>
                    </div>
                    <img src='/assets/lixeira.png' 
                        className={styles.card_img_delet}
                    ></img>

                    
                </div>
                
                <div className={styles.card}>
                    <div className={styles.card_info}>
                    <img src='/assets/mol.png'style={{
                        borderRadius: '15px'
                    }}
                       className={styles.card_img}
                    ></img>
                    <div>
                        <p>REGIÃO DO CORPO: COSTAS</p>
                        <p>DATA: 12/05/2025</p>
                    </div>
                    </div>
                    <img src='/assets/lixeira.png' 
                        className={styles.card_img_delet}
                    ></img>

                    
                </div>
            </div>
 }
        </div>

    );
}