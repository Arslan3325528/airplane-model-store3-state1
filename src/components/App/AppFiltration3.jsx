import React, { Component } from "react";

import { Section } from '@/components/Section/Section.jsx';
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';
import { Filter } from '@/components/Filter/Filter.jsx';

import aircrafts from '@/json/aircrafts.json';


//! Компонент-клас
export class AppFiltration3 extends Component {
  state = {
    aircraftsArr: aircrafts,
    aircraftsTitle: "Магазин моделей літальних апаратів"
  };

  allFiltration = () => {
    console.log("Клік в кнопку All");
    console.log("allAircrafts:", aircrafts);
    this.setState({
      aircraftsArr: aircrafts,
      aircraftsTitle: "Магазин моделей літальних апаратів"
    });
  };
  planeFiltration = () => {
    console.log("Клік в кнопку Planes");
    const onlyPlanes = aircrafts.filter(aircraft => aircraft.aircraftType === "plane");
    console.log("onlyPlanes:", onlyPlanes);
    this.setState({
      // aircraftsArr: onlyPlanes,
      aircraftsArr: aircrafts.filter(aircraft => aircraft.aircraftType === "plane"),
      aircraftsTitle: "Магазин моделей літаків"
    });
  };
  helicopterFiltration = () => {
    console.log("Клік в кнопку Helicopters");
    const onlyHelicopters = aircrafts.filter(aircraft => aircraft.aircraftType === "helicopter");
    console.log("onlyHelicopters:", onlyHelicopters);
    this.setState({
      aircraftsArr: onlyHelicopters,
      aircraftsTitle: "Магазин моделей вертольотів"
    });
  };

  render() {
    return (
      <>
        {/*//!  Filter */}
        <Filter
          onAll={this.allFiltration}
          onPlanes={this.planeFiltration}
          onHelicopters={this.helicopterFiltration}
        />

        {/*//! ВСІ */}
        <Section
          // isOn={true} 
          title={this.state.aircraftsTitle}
        >
          <PlanesList items={this.state.aircraftsArr} />
        </Section >
      </>
    )
  }
};

//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props
//! 2.Коли змінюється state ✅