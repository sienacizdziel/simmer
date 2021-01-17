import React from "react";
import "./KitchenCalling.css";
import { Link } from "react-router-dom";

export default function KitchenCalling() {
  return (
  <>
    <div>
        <h1>share some sushi!  <button><Link to="/call/1">join call</Link></button></h1>
        <h1>cook curry with friends  <button><Link to="/call/1">join call</Link></button></h1>
        <h1>chat and bake cookies  <button><Link to="/call/1">join call</Link></button></h1>
    </div>
  </>
  );
}