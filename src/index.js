import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Redux/State';
import {rerenderTree} from "./render"

rerenderTree(state)

reportWebVitals();

