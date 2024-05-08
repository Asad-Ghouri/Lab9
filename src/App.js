import logo from './logo.svg';
import './App.css';

import {Router, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage/NoPage';

import Mailbox from './components/Mailbox/Mailbox';

import Football from './components/Football/Football';

import Greeting from './components/Greeting/Greeting';

import Clock from './components/Clock/Clock';

import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';


import Form from './components/Form/Form';


import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';

import Layout from './Layout';

function App() {

  const messages = ['React', 'Re: React', 'Re:Re: React'];

  return (
    // <Router>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        {/* 3 */}
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        {/* 2 */}
        <Route path="/Football" element={<Football />} />
         {/* 1 */}
        <Route path="/mailbox" element={<Mailbox unreadMessages={messages} />} /> {/* Define Mailbox route */}
        <Route path="*" element={<NoPage />} />
        
        {/* 4 */}
        <Route path="/greeting" element={ <Greeting name="John" />} /> {/* Define Mailbox route */}
       
       {/* 5 */}
        <Route path="/clock" element={ <Clock  />} /> {/* Define Mailbox route */}
       
       {/* 6 */}
       <Route path="/ScrollToTopButton" element={ <ScrollToTopButton  />} /> {/* Define Mailbox route */}
           {/* 7 */}
       <Route path="/Form" element={ <Form  />} /> {/* Define Mailbox route */}

      {/* </Route> */}
    </Routes>
  // </Router>
  );
}

export default App;
