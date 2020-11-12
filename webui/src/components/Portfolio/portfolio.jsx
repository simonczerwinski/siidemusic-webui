import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PortfolioData } from "./portfolioData";
import "./portfolio.scss";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    console.log("portfolio test" + this.props);
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          {PortfolioData.map((item, index) => {
            return (
              <div key={index} className="col-md-3 portfolio-item">
                <Link to={item.path}>
                  <div className="portfolio-bg">
                    <img src={item.bgImage} alt={item.title} />
                    <div className="portfolio-caption">
                      <span>{item.title}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
