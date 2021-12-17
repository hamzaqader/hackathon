import React, { Component } from "react";
import Title from "./Title";
import { FaCcMastercard, FaHiking, FaBusAlt, FaCapsules } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHiking />,
        title: "A Guide to City",
      },
      {
        icon: <FaBusAlt />,
        title: "Free Pick & Drop",
      },
      {
        icon: <FaCcMastercard />,
        title: "Discounts on Debit ",
      },
      {
        icon: <FaCapsules />,
        title: "Doctor On Call",
      },
    ],
  };
  render() {
    return (
      <div className="">
        <Title title="Services" />
        <div className="row">
          {this.state.services.map((item, index) => {
            return (
              <div
                className="col-md-4 col-lg-3 col-12 mx-auto my-3"
                key={index}
              >
                <div className="card shadow-lg border-0 p-4">
                  <article className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
