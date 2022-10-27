import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { setLocalStorage } from '../../utils/localStorage';
import Button from './Button';
import Input from './Input';

const TOKEN_NAME = 'token';

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errors, setErrors] = useState('');
  const [login, { data, isLoading, error }] = useMutation({
    url: 'auth/signin',
    method: 'POST',
  });

  const handleEmail = event => {
    setEmailError('');
    setErrors('');
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };

  const handlePassword = event => {
    setPasswordError('');
    setErrors('');
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (email === '' || password === '') {
      setErrors('이메일과 패스워드가 필요합니다.');
      return;
    }
    if (!email.includes('@') || email === '') {
      setEmailError('이메일 형식으로 입력해주세요.');
      return;
    }
    if (password.length < 8 || password === '') {
      setPasswordError('비밀번호 8자 이상 입력해주세요.');
      return;
    }
    await login({ email, password });
  };

  useEffect(() => {
    if (data && error) {
      setErrors(error);
    }
  }, [data, error]);

  useEffect(() => {
    if (data && data.access_token) {
      setLocalStorage({ name: TOKEN_NAME, value: data.access_token });
      navigate('/todo');
    }
  }, [data, navigate]);

  const errorMessage = emailError || errors || passwordError;

  const disabled =
    errorMessage ||
    email === '' ||
    !email.includes('@') ||
    password === '' ||
    password.length < 8;

  return (
    <form>
      <Input type="email" />
      <Input type="password" />
      <Button isSignIn={isSignIn} disabled={disabled} />
    </form>
  );
};
export default AuthForm;
