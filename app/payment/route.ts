import { MercadoPagoConfig, Payment } from 'mercadopago';
import type {NextRequest} from 'next/server';


const client = new MercadoPagoConfig({accessToken: process.env.MP_ACCESS_TOKEN!});


export async function POST(request: NextRequest){
    //para tener el contenido
    const body = await request.json().then((data) => data as {data: {id: string}});
    

    const payment = new Payment(client).get({id: body.data.id})
    console.log("payment:", payment);

    return Response.json({success: true});
    
}