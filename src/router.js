import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index from './Pages/Index'
import Create from './Pages/Create'
import App from './App'
import { useState } from "react";

const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<App/>}>
        <Route path = '' element={<Index/>}/>
        <Route path = '/create' element={<Create/>}/>
    </Route>

))

export default router