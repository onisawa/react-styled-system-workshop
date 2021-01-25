import logo from './logo.svg';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme'
import GlobalStyle from './GlobalStyles'
import { merge, get } from 'lodash'

import styled from 'styled-components'
import { color, flexbox } from 'styled-system'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s linear;
  ${color}
  ${flexbox}
`

const ThemeButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 20%;
  transform: ${({active}) => active ? 'translateY(5px)' : 'none'};
  box-shadow: ${({active}) => active ? 'none' : ' 0 5px red'};
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(5px);
    box-shadow: none;
  }
  ${color}
`

const Text = styled.p`
  ${color}
`

const getTheme = mode => 
  merge({}, theme, {
    colors: get(theme.colors.modes, mode, theme.colors)
  })

const App = () => {
  const [mode, setMode] = useState('dark')
  const theme = getTheme(mode)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container flexDirection={{_: 'column', md: 'row'}} bg="background">
        <img src={logo} className="App-logo" alt="logo" />
        <Text color="text">
          Edit <code>src/App.js</code> and save to reload.
        </Text>
        <ThemeButton active={mode === 'light'} onClick={() => setMode('light')} bg="orange" />
        <ThemeButton active={mode === 'dark'} onClick={() => setMode('dark')} bg="purple" />
    </Container>
    </ThemeProvider>
  );
}

export default App;
