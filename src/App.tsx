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
import NavigationMobile from './components/navigationMobile/NavigationMobile';

function App() {
  const [isThemeDark, setIsThemeDark] = useState(true)
  const [isNavOpen, setIsNavOpen] = useState(true)
  const isMobile = window.innerWidth > 768 ? false : true
  const [isMobVersion, setIsMobVersion] = useState(isMobile)

  function updateSize() {
    if (window.innerWidth > 768 && isMobVersion) {
      setIsMobVersion(false)
    }

    if (window.innerWidth <= 768 && !isMobVersion) {
      setIsMobVersion(true)
    }
  }

  window.addEventListener('resize', updateSize);

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
        {
          isMobVersion && <NavigationMobile changeTheme={changeTheme} isThemeDark={isThemeDark} />
        }
        <Container type='flex'>
          {
            !isMobVersion
            && <Navigation
              changeTheme={changeTheme}
              isThemeDark={isThemeDark}
              isNavOpen={isNavOpen}
              toggleNavVisibility={toggleNavVisibility}
            />
          }
          <Container type="flex" flexWrap='wrap' width="100%" margin="0" padding="20px" justifyContent='center'>
            <Routes>
              <Route path="/" element={<MainPageContainer />}></Route>
              <Route path="/rates" element={<RatesContainer />}></Route>
            </Routes>
          </Container>
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
