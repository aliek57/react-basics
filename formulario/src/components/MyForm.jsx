import './MyForm.css'
import { useState } from 'react';

const MyForm = () => {
    // gerenciamento de dados 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [descricao, setDescricao] = useState('');
    const [opcao, setOpcao] = useState('opcao1');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // previne o comportamento padrão do formulário de recarregar a página

        console.log(`O nome é ${name}, o e-mail é ${email}, a descrição é ${descricao} e a opção selecionada é ${opcao}`);
        // validação
        // envio 
        // limpar form 
        setName('');
        setEmail('');
        setDescricao('');
        setOpcao('opcao1');
    }

  return (
    <div>
        <h2>Formulário React</h2>
        <form onSubmit={handleSubmit}>
            {/* primeira forma */}
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            </div>
            {/* segunda forma (recomendado no react) */}
            <label>
                <span>E-mail: </span>
                <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <label>
                <span>Descrição: </span>
                <textarea 
                    name="descricao" 
                    placeholder="Descrição do usuário" 
                    onChange={(e) => setDescricao(e.target.value)} 
                    value={descricao}>
                </textarea>
            </label>
            <label>
                <span>Selecione uma opção</span>
                <select name="opcao" onChange={(e) => setOpcao(e.target.value)} value={opcao}>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                    <option value="opcao3">Opção 3</option>
                    <option value="opcao4">Opção 4</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm