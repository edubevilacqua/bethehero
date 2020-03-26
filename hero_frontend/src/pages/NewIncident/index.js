import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId =  localStorage.getItem('ongId');

  async function handleNewIncident(e){
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try{
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/bethehero/profile');
    } catch(err) {
      alert('Não foi possível adicionar o caso.');
    }
  }

  return(
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolvê-lo.</p>
          <Link className="back-link" to="/bethehero/profile">
            <FiArrowLeft size={18} color="#E02041"/>
            Voltar ao perfil
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}  
          />
          <textarea 
            placeholder="Descriçao detalhada do caso"
            value={description}
            onChange={e => setDescription(e.target.value)}  
          />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}  
          />
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}