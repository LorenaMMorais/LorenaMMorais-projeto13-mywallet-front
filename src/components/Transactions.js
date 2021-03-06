import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { BallTriangle } from 'react-loader-spinner';
import UserContext from './../context/UserContext';
import styled from 'styled-components';
import axios from 'axios';

export default function Transactions() {
    const [transactions, setTransactions] = useState();

    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    useEffect(() => {
        (async() => {
            try{
                const transactions = await axios.get('https://projeto13-mywalletapp.herokuapp.com/transactions', {
                    headers: {Authorization: `Bearer ${user.token}`}
                });
                setTransactions(transactions.data);
            } catch(e) {
                alert('Erro ao obter transações');
                console.log(e);
            }
        })();
    }, []);
    console.log(transactions);

    return transactions ?(
        <Container>
            <Nav>
                <H1>Olá, {user.name}</H1>
                <Exit onClick={() => navigate('/')}><FaSignOutAlt/></Exit> 
            </Nav>

            <Registers>
                {transactions.length > 0 ? (
                    <Values>
                        {transactions.map(transaction => {
                            const {datas, description, value, type} = transaction;
                            const number = parseFloat(value).toFixed(2).replace('.', ',');
                            console.log(type);
                            return(
                                <List>
                                    <Group>
                                        <Info>{datas}</Info>
                                        <Info1>{description}</Info1>
                                    </Group>
                                    <Value color={type === 'input' ? '#03AC00' : '#C70000'}>{number}</Value>
                                </List>
                            )
                        })}
                        <Balance>
                            SALDO
                            <Value color={'#03AC00'}>{parseFloat(15).toFixed(2).replace('.', ',')}</Value> 
                        </Balance>
                    </Values>
                ) : (
                    <ContainerRegister><H2>Não há registros de entrada ou saída</H2></ContainerRegister>
                )}
            </Registers>

            <Footer>
                <Transaction onClick={() => navigate('/transactions/input')}>
                    <Icon>+</Icon>
                    <P>Nova entrada</P>
                </Transaction>
                <Transaction onClick={() => navigate('/transactions/output')}>
                    <Icon>-</Icon>
                    <P>Nova saída</P>
                </Transaction>
            </Footer>
        </Container>
    ): <Loading><BallTriangle color='#FFFFFF'/></Loading>;
}

const Container = styled.div`
    margin: 25px;
    height: calc(100vh - 50px);
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`;

const H1 = styled.h1`
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    font-family: 'Raleway';
`;

const Exit = styled.div`
    font-size: 25px;
    color: #FFFFFF;
    :hover {
        cursor: pointer;
    }
`;

const Registers = styled.div`
    position: absolute;
    left: 25px;
    right: 25px;
    height: calc(100vh - 230px);
    margin: 15px 0;
    border-radius: 5px;
    background: #FFFFFF;
`;

const ContainerRegister = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const H2 = styled.h2`
    width: 180px;
    height: 46px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    font-family: 'Raleway';
`;

const Footer = styled.div`
    left: 25px;
    right: 25px;
    bottom: 25px;
    display: flex;
    position: absolute;
    justify-content: space-between;
`;

const Transaction = styled.div`
    min-width: 155px;
    min-height: 114px;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #A328D6;
    :hover {
        cursor: pointer;
    }
`;

const Icon = styled.div`
    width: 22px;
    height: 22px;
    font-size: 22px;
    font-weight: 700;
    border-radius: 50px;
    border: 2px #FFFFFF solid;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`;

const P = styled.div`
    width: 64px;
    height: 40px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    font-family: 'Raleway';
`; 

const Values = styled.div`
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway';
`;

const List = styled.div`
    font-size: 18px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Group = styled.div`
    margin: 10px;
    display: flex;
`;

const Info = styled.p`
    margin-right: 10px;
    color: #C6C6C6;
`;

const Info1 = styled.p`
    color: #000000;
`;

const Value = styled.p`
    font-weight: initial;
    color: ${props => props.color};
`;

const Balance = styled.h1`
    width: calc(100% - 35px);
    bottom: 20px;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    margin-left: 10px;
    display: flex;
    position: absolute;
    justify-content: space-between;
`; 

const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;