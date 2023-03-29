import React from 'react';
import styled from "styled-components";
import Title from "./Components/Title";
import Flex from "./Components/Flex";
import Console from "./Components/Console";
import Button from "./Components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
  color: white;
`

const App = () => {
    return (
        <AppWrapper>
            <Flex justifyContent='center'>
                <Title>Использование библиотеки StyledComponent</Title>
            </Flex>
            <Flex direction='column'>
                <Console/>
                <Button align='flex-end'>Отправить</Button>
            </Flex>
        </AppWrapper>
    );
};

export default App;