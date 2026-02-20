// import React from "react";
import React, { Component } from "react";
import css from "./Counter.module.css";

//! Звичайний компонент
// export const Counter = () => {
//     return (
//         <div className={css.counter}>
//             <span className={css.counterValue}>0</span>
//             <div className={css.counterControls}>
//                 <button className={css.buttonIncrement}>+ 1</button>
//                 <button className={css.buttonDecrement}>- 1</button>
//             </div>
//         </div>
//     )
// };

//! Компонент-клас
// export class Counter extends React.Component {
export class Counter extends Component {
    //todo: var.1 - створення об'єкта state
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 0,
    //         // value: 5,
    //     }
    // };
    //todo: var.2 - створення об'єкта state
    state = {
        value: 0,
        // value: 5,
    };

    handleIncrement = () => { 
        // this.state.value = 6; //! ❗️❗️❗️ так не можна робити!!!!
        this.setState({value: 9 }); //* ✅ так треба робити для створення НОВОГО ЗНАЧЕННЯ
    };


    handleDecrement = () => { };

    // handleIncrement() {
    //     console.log("+1");
    //     console.log("this:", this); //! undefined
    // };
    //! Публичное свойство класса со стрелочной функцией:
    handleIncrement_0 = (event) => {
        console.log("+1");
        // console.log("this:", this); //* Counter{...}
        // console.log("event:", event);
        // console.log("event.target:", event.target);
        // console.log("event.type:", event.type); 

        //! Доступность event в синхронном коде
        //todo: var.1
        setTimeout(() => {
            console.log("event.target:", event.target);
        }, 1000);
        //todo: var.2
        const target = event.target;
        setTimeout(() => {
            console.log("target:", target);
        }, 2000);
    };

    handleDecrement_0 = (event) => {
        console.log("-1");
    };


    render() {
        return (
            <div className={css.counter}>
                {/* <span className={css.counterValue}>0</span> */}
                <span className={css.counterValue}>{this.state.value}</span>
                <div className={css.counterControls}>
                    <button
                        className={css.buttonIncrement}
                        type="button"
                        // onClick={() => { console.log("+1") }}
                        onClick={this.handleIncrement}
                    >+ 1
                    </button>
                    <button
                        className={css.buttonDecrement}
                        type="button"
                        // onClick={() => { console.log("-1") }}
                        onClick={this.handleDecrement}
                    >- 1
                    </button>
                </div>
            </div>
        )
    }
};
