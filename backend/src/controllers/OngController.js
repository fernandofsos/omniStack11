import connection from '../database/connection';
import crypto from 'crypto';

    async function index(request, response){
        const ongs = await connection('ongs')
             .select('*');
             
        return response.json(ongs);
    }

    async function create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
           id,
           name, 
           email, 
           whatsapp, 
           city, 
           uf,
        })
     
       return response.json({ id });
     }

     export default { index, create }
    

