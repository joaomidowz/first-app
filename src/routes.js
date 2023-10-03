import React from "react";
import { Router, Route } from 'react-router-dom'
import PlanetsScreen from "./screens/planets";


const Routes = () => (
    <Router>
      <Route exact path='/' element={<PlanetsScreen/>}/>
    </Router>
)

export default Routes;