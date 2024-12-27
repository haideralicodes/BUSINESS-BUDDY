import React from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import CustomSignup from './pages/Auth/CustomSignup';
import CustomLogin from './pages/Auth/CustomLogin'
import CustomForgetPassword from './pages/Auth/CustomForgetPassword';
import CustomResetPassword from './pages/Auth/CustomResetPassword';

import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import ForgetPassword from './pages/Auth/ForgetPassword'
import ResetPassword from './pages/Auth/ResetPassword'

import ProvideBusinessDetails from './pages/ProvideBusinessDetails';
import ProvideBrandStory from './components/BusinessDetails/ProvideBrandStory';
import ProvideBusinessLocation from './components/BusinessDetails/ProvideBusinessLocation';
import TemplateHomePage from './Templates/FashionStoreOne/HomePage';
import TemplateProducts from './Templates/FashionStoreOne/ProductsPage';
import ErrorPage from './pages/Error404/ErrorPage';

import WebsiteGenerationScreen from './components/BusinessDetails/WebsiteGenerationScreen';
import WebsiteGenFashionStore from './components/BusinessDetails/WebGenFashion';
import WebsiteGenGadgetStore from './components/BusinessDetails/WebGenGadget';
import WebsiteGenFurnitureStore from './components/BusinessDetails/WebGenFurniture'
import WebsiteGenShoesStore from './components/BusinessDetails/WebGenShoes'
//for adding Servises Template
import WebsiteGenServices from './components/BusinessDetails/WebsiteGenServices';

import CustomizeTemplateHeader from './pages/ViewTemplate';
import CustomizeTemplateHeaderFashion from './pages/CustomizeTemplateHeaderFashion'
import CustomizeTemplateHeaderGadget from './pages/CustomizeTemplateHeaderGadget'
//for adding Servises Template
import CustomizeTemplateHeaderServices from './pages/CustomizeTemplateHeaderServices'

import CustomizeWebsiteScreenFashion from './pages/CustomizeWebsite/CustomizeWebsiteScreen';
import Checkout from './Templates/FashionStoreOne/Checkout';
import CustomizeWebsiteScreenShoes from './pages/CustomizeWebsite/CustomizeWebsiteScreenShoes';
import CustomizeWebsiteScreenBuety from './pages/CustomizeWebsite/CustomizeWebsiteScreenBuety';
import CustomizeWebsiteScreenFurniture from './pages/CustomizeWebsite/CustomizeWebsiteScreenFurniture';
import CustomizeWebsiteScreenGadgets from './pages/CustomizeWebsite/CustomizeWebsiteScreenGadgets';
//for adding Servises Template
import CustomizeWebsiteScreenServices from './pages/CustomizeWebsite/CustomizeWebsiteScreenServices';

import AppRouter from './dashboard/Router';
import ProtectedRoute from './pages/ProtectedRoute'; 

import UpdateProfile from './pages/UpdateUserProfile/UpdateProfile';
import Posters from './dashboard/scenes/posts/Posters';
import Products from './Templates/FashionStoreOne/Products';
import Cart from './Templates/FashionStoreOne/Cart';

import ShoesStoreProducts from './Templates/ShoesStore/Products';
import ShoesStoreCart from './Templates/ShoesStore/Cart';

import GadgetStoreProducts from './Templates/GadgetsStore/Products';
import GadgetStoreCart from './Templates/GadgetsStore/Cart';

import BuetyStoreProducts from './Templates/BuetyStore/Products';
import BuetyStoreCart from './Templates/BuetyStore/Cart';

import VerifyEmail from './pages/Auth/VerifyEmail';

import Payment from './pages/CustomizeWebsite/Payment';

import PaymentPlans from './pages/CustomizeWebsite/WebSections/PaymentPlans';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Define your primary color here
    },
    secondary: {
      main: '#dc004e', // Define secondary color if needed
    },
  },
});

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>

        {/* Without log in routes */}
        <Route path="/" element={!token ? <HomePage /> : <Navigate to="/dashboard" />} />
        <Route path="/login" element={!token ? <CustomLogin /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!token ? <CustomSignup /> : <Navigate to="/dashboard" />} />
        <Route path="/forget-password" element={!token ? <CustomForgetPassword /> : <Navigate to="/dashboard" />} />
        <Route path="/reset-password" element={!token ? <CustomResetPassword /> : <Navigate to="/dashboard" />} />
        <Route path="/verify-email" element={!token ? <VerifyEmail /> : <Navigate to="/dashboard" />} />


        {/* Protected routes */}
        <Route path="/provide-business-details" element={<ProtectedRoute element={<ProvideBusinessDetails />} />} />
        <Route path="/provide-brand-story" element={<ProtectedRoute element={<ProvideBrandStory />} />} />
        <Route path="/provide-business-location" element={<ProtectedRoute element={<ProvideBusinessLocation />} />} />
        <Route path="/template-home" element={<ProtectedRoute element={<TemplateHomePage />} />} />
        <Route path="/template-products" element={<ProtectedRoute element={<TemplateProducts />} />} />

        <Route path="/template-gen-screen/buety" element={<ProtectedRoute element={<WebsiteGenerationScreen />} />} />
        <Route path="/template-gen-screen/fashion" element={<ProtectedRoute element={<WebsiteGenFashionStore />} />} />
        <Route path="/template-gen-screen/gadget" element={<ProtectedRoute element={<WebsiteGenGadgetStore />} />} />
        <Route path="/template-gen-screen/furniture" element={<ProtectedRoute element={<WebsiteGenFurnitureStore />} />} />
        <Route path="/template-gen-screen/shoes" element={<ProtectedRoute element={<WebsiteGenShoesStore />} />} />
        {/* for adding Servises Template */}
        <Route path="/template-gen-screen/company-services" element={<ProtectedRoute element={<WebsiteGenServices />} />} />

        <Route path="/template-view/buety" element={<ProtectedRoute element={<CustomizeTemplateHeader />} />} />
        <Route path="/template-view/fashion" element={<ProtectedRoute element={<CustomizeTemplateHeaderFashion />} />} />
        <Route path="/template-view/gadget" element={<ProtectedRoute element={<CustomizeTemplateHeaderGadget />} />} />
        {/* for adding Servises Template */}
        <Route path="/template-view/services" element={<ProtectedRoute element={<CustomizeTemplateHeaderServices />} />} />

        <Route path="/customize-website-screen" element={<ProtectedRoute element={<CustomizeWebsiteScreenFashion />} />} />
        <Route path="/customize-website-screen-shoes" element={<ProtectedRoute element={<CustomizeWebsiteScreenShoes />} />} />
        <Route path="/customize-website-screen-furniture" element={<ProtectedRoute element={<CustomizeWebsiteScreenFurniture />} />} />
        <Route path="/customize-website-screen-buety" element={<ProtectedRoute element={<CustomizeWebsiteScreenBuety />} />} />
        <Route path="/customize-website-screen-gadgets" element={<ProtectedRoute element={<CustomizeWebsiteScreenGadgets />} />} />
        {/* for adding Servises Template */}
        <Route path="/customize-website-screen-services" element={<ProtectedRoute element={<CustomizeWebsiteScreenServices />} />} />

        <Route path="/customize-website-screen/products" element={<ProtectedRoute element={<Products />} />} />
        <Route path="/customize-website-screen/cart" element={<ProtectedRoute element={<Cart />} />} />
        <Route path="/customize-website-screen/checkout" element={<ProtectedRoute element={<Checkout />} />} />

        <Route path="/customize-website-screen/shoesStoreProducts" element={<ProtectedRoute element={<ShoesStoreProducts />} />} />
        <Route path="/customize-website-screen/shoesStoreCart" element={<ProtectedRoute element={<ShoesStoreCart />} />} />

        <Route path="/customize-website-screen/GadgetStoreProducts" element={<ProtectedRoute element={<GadgetStoreProducts />} />} />
        <Route path="/customize-website-screen/GadgetStoreCart" element={<ProtectedRoute element={<GadgetStoreCart />} />} />

        <Route path="/customize-website-screen/BuetyStoreProducts" element={<ProtectedRoute element={<BuetyStoreProducts />} />} />
        <Route path="/customize-website-screen/BuetyStoreCart" element={<ProtectedRoute element={<BuetyStoreCart />} />} />

        <Route path="/dashboard/*" element={<ProtectedRoute element={<AppRouter />} />} />
        <Route path="/update-profile" element={<ProtectedRoute element={<UpdateProfile />} />} />
        <Route path="/Posters" element={<ProtectedRoute element={<Posters />} />} />
        <Route path="/Payment" element={<ProtectedRoute element={<Payment />} />} />

        <Route path="/paymentPlans"element={<ProtectedRoute element={<ThemeProvider theme={theme}> <PaymentPlans /></ThemeProvider>} />}/>

        {/* Catch-all for undefined routes */}
        <Route path="/*" element={<ErrorPage />} />

      </Routes>
    </Router>
  );
}

export default App;
