import React, { Component } from "react";
import css from "./Filter.module.css";


//! Компонент-клас
export class Filter extends Component {
  render() {
    return (
        <div className={css.filterBox}>
          <button
            className={css.buttonAllFiltration}
            type="button"
            onClick={this.props.all}
          >
            ВСІ
          </button>

          <button
            className={css.buttonPlaneFiltration}
            type="button"
            onClick={this.props.planes}
          >
            Літаки
          </button>

          <button
            className={css.buttonHelicopterFiltration}
            type="button"
          onClick={this.props.helicopters}
          >
            Вертольоти
          </button>
        </div>
    )
  }
};
