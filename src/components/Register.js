import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

export default function Register(){
    const navigate = useNavigate();
    const [datas, setDatas] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    async function register(){
        try{
            await axios.post('https://projeto13-mywalletapp.herokuapp.com/sign-up', datas);
            alert('Cadastro realizado com sucesso!');
            navigate('/sign-in');
        } catch(e){
            alert ('Erro ao cadastrar');
            alert (e.response.data);
        }
    }

    return(
        <Container>
            <Logo>MyWallet</Logo>
            <Input placeholder='Nome' value={datas.name} onChange={e => setDatas({...datas, name: e.target.value})} />
            <Input placeholder='E-mail' value={datas.email} onChange={e => setDatas({...datas, email: e.target.value})} />
            <Input placeholder='Senha' type='password' value={datas.password} onChange={e => setDatas({...datas, password: e.target.value})} />
            <Input placeholder='Confirme a senha' type='password' value={datas.passwordConfirm}  onChange={e => setDatas({...datas, passwordConfirm: e.target.value})} />
            <Button onClick={register}>Cadastrar</Button>
            <Login onClick={() => navigate('/')}>Já tem uma conta? Entre agora</Login>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.h1`
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 25px;
    color: #FFFFFF;
    font-family: 'Saira Stencil One';
`;

const Input = styled.input`
    width: 326px;
    height: 58px;
    padding: 15px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    background: #FFFFFF;
    box-sizing: border-box;
    ::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        font-family: 'Raleway';
    }
`;

const Button = styled.button`
    width: 326px;
    height: 46px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    border-radius: 5px;
    text-align: center;
    border: none;
    color: #FFFFFF;
    background: #A328D6;
    font-family: 'Raleway';
    box-sizing: border-box;
    
    :hover {
        cursor: pointer;
    }
`;

const Login = styled.p`
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-top: 36px;
    color: #FFFFFF;
    font-family: 'Raleway';
    
    :hover {
        cursor: pointer;
    }
`; 