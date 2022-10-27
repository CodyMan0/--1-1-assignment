import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Layout from '../Layout';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import useMutation from '../../utils/hooks/useMutation';
import { setLocalStorage, TOKEN_NAME } from '../../utils/localStorage';

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [userError, setUserError] = useState({
    emailError: '',
    passwordError: '',
  });
  const [networkError, setNetworkError] = useState('');

  const [
    signUp,
    { data: signUpData, isLoading: signUpLoading, error: signUpError },
  ] = useMutation({
    url: '/auth/signup',
    method: 'POST',
  });

  const [
    signIn,
    { data: signInData, isLoading: signInLoading, error: signInError },
  ] = useMutation({
    url: '/auth/signin',
    method: 'POST',
  });

  const handleEmail = event => {
    setUserError(prev => ({ ...prev, emailError: '' }));
    setNetworkError(prev => ({ ...prev, networkError: '' }));
    const {
      currentTarget: { value },
    } = event;
    setUserInfo(prev => ({ ...prev, email: value }));
  };

  const handlePassword = event => {
    setUserError(prev => ({ ...prev, emailError: '' }));
    setNetworkError(prev => ({ ...prev, networkError: '' }));
    const {
      currentTarget: { value },
    } = event;
    setUserInfo(prev => ({ ...prev, password: value }));
  };

  const handleSubmit = async (event, isSignIn) => {
    event.preventDefault();
    if (userInfo.email === '' || userInfo.password === '') {
      setUserError(prev => ({
        ...prev,
        emailError: '이메일과 패스워드가 필요합니다.',
      }));
      return;
    }
    if (!userInfo.email.includes('@') || userInfo.email === '') {
      setUserError(prev => ({
        ...prev,
        emailError: '이메일 형식으로 입력해주세요.',
      }));
      return;
    }
    if (userInfo.password.length < 8 || userInfo.password === '') {
      setUserError(prev => ({
        ...prev,
        passwordError: '비밀번호 8자 이상 입력해주세요.',
      }));
      return;
    }
    const userObj = {
      email: userInfo.email,
      password: userInfo.password,
    };

    if (isSignIn) {
      await signIn(userObj);
    } else {
      await signUp(userObj);
    }
  };

  useEffect(() => {
    if (signUpData) {
      setIsSignIn(true);
      setUserInfo(prev => ({ ...prev, email: '', password: '' }));
      setUserError(prev => ({ ...prev, emailError: '', passwordError: '' }));
      setNetworkError('');
    }
  }, [signUpData]);

  useEffect(() => {
    if (signInError) {
      setNetworkError(signInError);
    }
    if (signUpError) {
      setNetworkError(signInError);
    }
  }, [signInError]);

  useEffect(() => {
    if (signInData && signInData.access_token) {
      setLocalStorage({ name: TOKEN_NAME, value: signInData.access_token });
    }
  }, [signInData]);

  const errorMessage =
    userError.emailError || userError.passwordError || !networkError;

  const disabled =
    errorMessage ||
    userInfo.email === '' ||
    !userInfo.email.includes('@') ||
    userInfo.password === '' ||
    userInfo.password.length < 8;

  return (
    <Layout>
      <EnterPageContainer>
        <Title title={isSignIn ? '로그인' : '회원가입'} />
        <Form onSubmit={event => handleSubmit(event, isSignIn)}>
          <Input
            label="이메일"
            type="text"
            id="email"
            placeholder="이메일을 입력해주세요."
            onChange={handleEmail}
            value={userInfo.email}
          />
          <Input
            label="패스워드"
            id="password"
            placeholder="비밀번호 8자리 이상 입력해주세요."
            type="password"
            onChange={handlePassword}
            value={userInfo.password}
          />
          <Button
            text={!isSignIn ? '회원가입' : '로그인'}
            disabled={disabled}
          />
        </Form>
        <button type="button" onClick={() => setIsSignIn(prev => !prev)}>
          {isSignIn ? '회원가입' : '로그인'}
        </button>
      </EnterPageContainer>
    </Layout>
  );
};
export default AuthForm;

const Form = styled.form`
  width: 100%;
`;

export const EnterPageContainer = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.mp.xxl} ${props => props.theme.mp.sm};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.shadow.md};
`;
