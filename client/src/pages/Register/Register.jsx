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
    Notification,
    Center,
    Box
  } from '@mantine/core';
  import { IconArrowLeft } from '@tabler/icons-react';
import { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {

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

  const handleRegister = (e) => {

    e.preventDefault();
    console.log(inputs)

    const url = 'http://localhost:5000/auth/register'
    let data = {
      email: inputs.email,
      password: inputs.password
    };

    axios.post(url, data).then((res) => {
      console.log(res)
      if(res.status !== 200) {
        <Notification />
        // redirect("/dashboard")
        localStorage.setItem('token', res.data.token)
        // window.location.href = "/dashboard"
        navigate("/login");
      }
      navigate("/register")
    })
  }

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Register Account!
      </Title>

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
          <Anchor component={Link} to="/login" color="dimmed" size="sm" >
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Box ml={5}>Back to the login page</Box>
              </Center>
        </Anchor>
        </Group>
        <Button onClick={handleRegister} fullWidth mt="xl">
          Register
        </Button>
      </Paper>
    </Container>
  );
}

export default Register;