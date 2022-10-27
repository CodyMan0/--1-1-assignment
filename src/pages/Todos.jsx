import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Layout from '../components/Layout';
import TodoForm from '../components/todo/TodoForm';
import TodoItem from '../components/todo/TodoItem';
import { useAuth } from '../context/LoginContext';
import formatDateAndDay from '../utils/formatDayAndDate';
import useFetch from '../utils/hooks/useFetch';
import {
  deleteLocalStorage,
  getLocalStorage,
  TOKEN_NAME,
} from '../utils/localStorage';

const Todos = () => {
  const { data, isLoading } = useFetch({ url: '/todos' });
  const [todoList, setTodoList] = useState([]);
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    deleteLocalStorage({ name: TOKEN_NAME });
    setIsLoggedIn(false);
    navigate('/', { replace: true });
  };

  useEffect(() => {
    setTodoList(data);
  }, [data]);

  return (
    <Layout>
      <Container>
        <Navbar>
          <NavbarCol>
            <Title>TODO LIST</Title>
            <DateContainer>
              <DaySpan>{formatDateAndDay('day')}</DaySpan>
              <DateSpan>{formatDateAndDay('date')}</DateSpan>
            </DateContainer>
          </NavbarCol>
          <NavbarCol>
            <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
          </NavbarCol>
        </Navbar>

        {isLoading ? (
          'Loading...'
        ) : (
          <ToDoListContainer>
            {todoList?.map(todo => (
              <TodoItem key={todo.id} {...todo} setTodoList={setTodoList} />
            ))}
          </ToDoListContainer>
        )}
        <TodoForm setTodoList={setTodoList} />
      </Container>
    </Layout>
  );
};
export default Todos;

const Container = styled.div`
  height: 43rem;
  padding-bottom: ${props => props.theme.mp.sm};
  background-color: rgb(241 245 249);
  border-radius: ${props => props.theme.borderRadius.xl};
  position: relative;
  box-shadow: ${props => props.theme.shadow.md};
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.mp.md};
  background-color: ${props => props.theme.color.activeColor.md};
  border-top-left-radius: ${props => props.theme.borderRadius.xl};
  border-top-right-radius: ${props => props.theme.borderRadius.xl};
`;

const NavbarCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: ${props => props.theme.textSize.xxl};
  margin-right: ${props => props.theme.mp.md};
  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    font-size: ${props => props.theme.textSize.xl};
  }
`;

const DateContainer = styled.div`
  margin: auto;
`;

const DaySpan = styled.span`
  display: inline-block;
  margin-right: ${props => props.theme.mp.sm};
  font-size: ${props => props.theme.textSize.lg};
  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    font-size: ${props => props.theme.textSize.md};
  }
`;

const DateSpan = styled.span`
  color: ${props => props.theme.color.textColor.xxs};
  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    font-size: ${props => props.theme.textSize.sm};
  }
`;

const LogoutButton = styled.button`
  padding: ${props => props.theme.mp.xs};
  color: ${props => props.theme.color.textColor.xs};
  transition: ${props => props.theme.transition.md};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const ToDoListContainer = styled.ul`
  margin: ${props => props.theme.mp.lg} 0;
  overflow-y: scroll;
  height: 80%;
`;
