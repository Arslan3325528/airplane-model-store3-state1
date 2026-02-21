import React, { Component } from "react";
import css from "./App.module.css";
import { Section } from '@/components/Section/Section.jsx';
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';


import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';
// import { planes, helicopters } from '@/json'; //! ❌ так не працює

//! Збільшення/Зменьшення на 1
import { Counter } from '@/components/Counter/Counter.jsx';

//! Звичайний компонент
// export function App() {
//   return (
//     <>
//       {/* <Counter /> */}
//       {/*//! Початковий стан лічильника з props */}
//       {/* <Counter initialValue={10} /> */}

//       {/*//! Вертольоти */}
//       <Section presence={true} title="Магазин моделей вертольотів">
//         <PlanesList items={helicopters} />
//       </Section >

//       {/*//! Літаки */}
//       <Section presence={true} title="Магазин моделей літаків">
//         <PlanesList items={planes} />
//       </Section >
//     </>
//   );
// };


//! Компонент-клас
export class App extends Component {
  //! Дефолтні значення props
  // static defaultProps = {
  //   initial: 0,
  // }

  //! State
  state = {
    //! Початковий стан лічильника з props
    // value: this.props.initial,
    isPlanes: true,
    isHelicopters: true,
  };

  allFiltration = () => {
    console.log("Клік в кнопку All");
    this.setState({
      isPlanes: true,
      isHelicopters: true,
    });
  };
  planeFiltration = () => {
    console.log("Клік в кнопку Planes");
    this.setState({
      isPlanes: true,
      isHelicopters: false,
    });
  };
  helicopterFiltration = () => {
    console.log("Клік в кнопку Helicopters");
    this.setState({
      isPlanes: false,
      isHelicopters: true,
    });
  };

  render() {
    return (
      <>
        {/* <Counter /> */}
        {/*//! Початковий стан лічильника з props */}
        {/* <Counter initialValue={10} />  */}

        <div className={css.filterBox}>
          <button
            className={css.buttonAllFiltration}
            type="button"
            onClick={this.allFiltration}
          >
            All
          </button>

          <button
            className={css.buttonPlaneFiltration}
            type="button"
            onClick={this.planeFiltration}
          >
            Planes
          </button>

          <button
            className={css.buttonHelicopterFiltration}
            type="button"
            onClick={this.helicopterFiltration}
          >
            Helicopters
          </button>
        </div>

        {/*//! Вертольоти */}
        <Section presence={this.state.isHelicopters} title="Магазин моделей вертольотів">
          <PlanesList items={helicopters} />
        </Section >

        {/*//! Літаки */}
        <Section presence={this.state.isPlanes} title="Магазин моделей літаків">
          <PlanesList items={planes} />
        </Section >
      </>
    )
  }
};
