import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { Route, Routes } from 'react-router-dom';
import MainPageContainer from './pages/mainPage/MainPageContainer';
import RatesContainer from './pages/rates/RatesContainer';
import Container from './components/container/Container';

function App() {
  const [isThemeDark, setIsThemeDark] = useState(true)
  const [isNavOpen, setIsNavOpen] = useState(true)

  const changeTheme = () => {
    setIsThemeDark(prev => !prev)
  }

  const toggleNavVisibility = () => {
    setIsNavOpen(prev => !prev)
  }

  return (
    <>
      <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
        <Header />
        <Container type='flex'>
          <Navigation
            changeTheme={changeTheme}
            isThemeDark={isThemeDark}
            isNavOpen={isNavOpen}
            toggleNavVisibility={toggleNavVisibility}
          />
          <Routes>
            <Route path="/" element={<MainPageContainer />}></Route>
            <Route path="/rates" element={<RatesContainer />}></Route>
          </Routes>
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
