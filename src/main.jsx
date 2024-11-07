import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout ,DesignSummerSchool, FaqPage} from './components/index.js'
import Home from './Pages/Home.jsx'
import {CampusEvents,SummerExchangeProgram,JointDegreeProgram,Login,ContactUs,ApplicationForm,PartnerInstitutes, VisaAndImmigration, TestimonialsPage,InternationalSupportPage,InternationalBlogPage} from './components/index.js'
import CampusFacilities from './Pages/CampusFacility.jsx'
import FacultyDevelopment from './Pages/FacultyDevelopment.jsx'
import ContactPage from './Pages/ContactUs.jsx'
import ChatbotPage from './Pages/ChatbotPage.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/summer-program' element={<DesignSummerSchool/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/email' element={<ContactUs/>}/>
          <Route path="/application-process" element={<ApplicationForm/>}/>
          <Route path="/PartnerInstitutes" element={<PartnerInstitutes/>}/>
          <Route path="/visaandimmigration" element={< VisaAndImmigration/>}/>
          <Route path="/FAQs" element={<FaqPage/>}/>
          <Route path="/testimony" element={<TestimonialsPage/>}/>
          <Route path="/student-support" element={<InternationalSupportPage/>}/>
          <Route path="/blog" element={<InternationalBlogPage/>}/>
          <Route path="/Campusfacilities" element={<CampusFacilities/>}/>
          <Route path="/faculty-development" element={<FacultyDevelopment/>}/>
          <Route path="/joint-program" element={<JointDegreeProgram/>}/>
          <Route path="/summer-exchange" element={<SummerExchangeProgram/>}/>
          <Route path="/campus-program" element={<CampusEvents/>}/>
          <Route path="/Contact-Us" element={<ContactPage />}/>
          <Route path="/chatbot" element={<ChatbotPage/>}/>
      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
