import connection from '../database/connection';

async function create(request,response){
    const { id } = request.body;
        
    const ong = await connection('ongs')
          .where('id', id)
          .select('name')
          .first();
          
    if(!ong){
        return response.status(400).json({erro: 'No ONG found with this ID'})
    }

    return response.json(ong);
}

export default {create}
