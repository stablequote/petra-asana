import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
import { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(name, ":" ,value)
  }

  const handleLogin = (e) => {

    e.preventDefault();
    console.log(inputs)

    const url = 'http://localhost:5000/auth/login'
    let data = {
      email: inputs.email,
      password: inputs.password
    };

    axios.post(url, data).then((res) => {
      console.log(res)
      if(res.status === 200) {
        // redirect("/dashboard")
        localStorage.setItem('token', res.data.token)
        // window.location.href = "/dashboard"
        navigate("/dashboard");
      }
    })
  }

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component={Link} to="/register">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
        label="Email" 
        name='email' 
        value={inputs.email}
        onChange={handleInput}
        placeholder="email address" 
        required 
        />
        <PasswordInput
        label="Password" 
        name='password' 
        value={inputs.password}
        onChange={handleInput}
        placeholder="your password" 
        required 
        mt="md" 
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component={Link} to="/forgot-password" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button onClick={handleLogin} fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;