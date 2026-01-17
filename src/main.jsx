import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import "./style.css"

// Atribui o Link da API a uma constante
const API_link = "https://696b7b27624d7ddccaa15948.mockapi.io/api/products"

const root = ReactDOM.createRoot(document.getElementById("root"))

// Função que busca e exibe os produtos
async function displayProducts(){
  root.render(
    <p style={{padding:16}}>Carregando produtos...</p>
  );

  //Busca os produtos na API
  try{
    const response = await fetch (API_link);
    const dados = await response.json();

    const products = Array.isArray(dados) ? dados : [];

    //Renderiza os produtos na tela
    root.render(
        <App productList={products}/>
    );

    //Tratamento de erro
  }catch (error){
    root.render(
      <p style={{padding:16, color:"red"}}>Erro ao carregar produtos: {error.message}</p>
    );
  }
  
  
}

// Chama a função para exibir os produtos
displayProducts();
