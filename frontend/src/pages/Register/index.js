import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');

  async  function handleRegister(e) {
        
        e.preventDefault();
      
        const data = ({
            name,
            email,
            whatsapp,
            city,
            uf,    
        })
        console.log(data);
        try {
            const response = await api.post('ongs',data);
            alert(`Seu ID de acesso: ${ response.data.id } `);
            console.log('passou no try');
        } catch(e) {
            alert(`Erro no cadastro: ${e} `);
            console.log('passou no catch');
        }
    }
   

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                 
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG. </p>
   
                    <Link className="back-link"  to="/" >
                            <FiArrowLeft size={16} color="#E02041" />
                            Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister} >
                    <input placeholder="Nome da ONG" 
                           value={name} 
                           onChange={ e => setName( e.target.value )} />

                    <input placeholder="E-mail" 
                           value={email} 
                           onChange={ e => setEmail(e.target.value)}
                           type="email" />  

                    <input placeholder="whatsApp" 
                           value={whatsapp} 
                           onChange={ e => setWhatsapp(e.target.value)} /> 
                  
                    <div className="input-group">
                        <input placeholder="Cidade" 
                               value={city}
                               onChange={ e => setCity(e.target.value)}
                               type="text" />  

                        <input placeholder= "UF" 
                               valeu={uf}
                               onChange={ e => setUf(e.target.value)}
                               style={{ width: 80 }} />
                    </div> 
                    <button className="button" type="submit">Cadastro</button>

                </form>
            </div>
        </div>
    )
}