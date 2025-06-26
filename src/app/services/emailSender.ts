import emailjs from "@emailjs/browser";

interface EmailParams {
    email: string,
    passcode: string
}

emailjs.init({
    publicKey: 'luYk9YRIF_RXd9H4N',  
    blockHeadless: true,
    limitRate: {    
        id: 'app',
        throttle: 10000,
    },
});

export async function SendEmail(props: EmailParams){
   try{
    const response = await emailjs.send("service_019npm7","template_shrw0xi",{...props});    
    return response.status == 200;
   }catch(error){
    console.log(error);
    return false;
   }
}