import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useUI, useCart } from 'hooks';
import { Home, Shop, ProductDetails } from 'pages';
import { Header } from 'components';
import { ThemeProvider } from 'styled-components';
import { homePageTheme, theme } from 'styles/theme';

const App = () => {
    const location = useLocation();
    const currentTheme = location.pathname === '/' ? homePageTheme : theme;

    const {
        isMobileNavActive,
        isMobileNavOpen,
        openMobileNav,
        closeMobileNav,
    } = useUI(currentTheme);

    const { cartStatus, getCartQuantity, addToCart } = useCart();

    return (
        <ThemeProvider theme={currentTheme}>
            <>
                <Header
                    isMobileNavActive={isMobileNavActive}
                    isMobileNavOpen={isMobileNavOpen}
                    openMobileNav={openMobileNav}
                    closeMobileNav={closeMobileNav}
                    getCartQuantity={getCartQuantity}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/shop/:productId"
                        element={
                            <ProductDetails
                                cartStatus={cartStatus}
                                addToCart={addToCart}
                            />
                        }
                    />
                </Routes>
            </>
        </ThemeProvider>
    );
};

export default App;