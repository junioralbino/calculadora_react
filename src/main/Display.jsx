import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import './Display.css';



export default props =>
     <div className="display">{props.value}</div>