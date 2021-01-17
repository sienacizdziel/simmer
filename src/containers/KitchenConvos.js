import React from "react";
import "./KitchenConvos.css";
import { Link } from "react-router-dom";
import phone from "../images/phone.svg";

export default function KitchenConvos() {
  return (
  <>
  <div className="kitchen-left">
    <h1 className="kitchen-title">Kitchen</h1>
    <h1 className="kitchen-title kitchen-title-2">Convos</h1>
    <h2>Cook with a friend!</h2>
    <img src={phone} className="phone" alt="" />
  </div>
    <div className="kitchen-right">
        <h2>What are you making today?</h2>
        <div className="carousel">
            <div className="kitchen-card">
                <h3>california rolls</h3>
                <button disabled className="image">recipe image</button>
                <button><Link className="call-link" to="/call/california-rolls">join call</Link></button>
            </div>
            <div className="kitchen-card">
                <h3>coconut curry</h3>
                <button disabled className="image">recipe image</button>
                <button><Link className="call-link" to="/call/coconut-curry">join call</Link></button>
            </div>
            <div className="kitchen-card">
                <h3>apple pie</h3>
                <button disabled className="image">recipe image</button>
                <button><Link className="call-link" to="/call/apple-pie">join call</Link></button>
            </div>
            <div className="kitchen-card">
                <h3>BBQ ribs</h3>
                <button disabled className="image">recipe image</button>
                <button><Link className="call-link" to="/call/vanilla-ice-cream">join call</Link></button>
            </div>
        </div>
    </div>
  </>
  );
}