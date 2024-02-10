import React from "react";
import risk from '../assets/risk.png';
import contract from '../assets/contract.png'
import ticker from '../assets/ticker.png'
import volume from '../assets/volume.png'

function main() {
  return (
    <>
      <div className="main">
        <div className="side">
          <form>
            <h2>Filters</h2>
            <div>
              <label>Industry</label>
              <select>
                <option>Helath care</option>
                <option>Helath care</option>
                <option>Helath care</option>
                <option>Helath care</option>
              </select>
              <span>Choose something.</span>
            </div>
            <div>
              <label>Market Cap</label>
              <select>
                <option>Large cup</option>
                <option>Large cup</option>
                <option>Large cup</option>
                <option>Large cup</option>
              </select>
              <span>Press Apply to see changes.</span>
            </div>
            <div>
              <label>Risk</label>
              <select>
                <option>Low risk</option>
                <option>Mid-risk</option>
                <option>High risk</option>
                <option selected>Option text here</option>
              </select>
            </div>
            <button>Apply Filters</button>
          </form>
        </div>

        <div className="main-info">
          <section className="main-section">
          <div className="sigmant-container">
            <div className="sigmant"><img src={ticker}></img>$TSLA</div>
            <div className="sigmant"><img src={contract}></img>200 Contracts</div>
            <div className="sigmant"><img src={volume}></img>12.2%</div>
            <div className="sigmant"><img src={risk}></img>High risk</div>
          </div>
          <p>Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.</p>
          </section>
          <section className="info-section"><p> X company released a short report on $XYZ, High IV option sales opps</p></section>
          <section className="info-section"><p> $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p></section>
          <section className="info-section"><p> $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p></section>
          <section className="info-section"><p> $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p></section>
          <section className="info-section"><p> $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p></section>
          <section className="info-section"><p> $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p></section>
          <section className="info-section"><p> $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p></section>
        </div>
      </div>
    </>
  );
}

export default main;
