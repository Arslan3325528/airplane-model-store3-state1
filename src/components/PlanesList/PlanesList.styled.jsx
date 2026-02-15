import styled from '@emotion/styled';

//! Функція для зміни кольору фону
import { getBgColorEmotion } from '@/utils/getBackgroundColor.js'; //todo: var.3


export const PlanesGallery = styled.ul`
    width: 99vw;
    min-width: 572px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(540px, auto));
    gap: 32px;
    outline: 1px solid red;
`;


//todo: backgroundColor: '#ffdb92', ---> "year" до 1946
//todo: backgroundColor: '#d2fdbd', ---> "year" від 1946 і до 1999
//todo: backgroundColor: '#d6f1ff', ---> "year" від 2000  */
//! Функція для зміни кольору фону
//todo: var.2
// function getBgColorEmotion({ year }) {
//     // console.log("@emotion/styled_year:", year); //!
//     let bgColor = '#ffdb92';
//     if (year > 1945) bgColor = '#d2fdbd';
//     if (year > 1999) bgColor = '#d6f1ff';
//     return bgColor;
// };

export const PlanesItem = styled.li`
    display: grid;
    gap: 12px;
    padding: 10px;
    /* background-color: #ffdb92; */
    //todo: var.1
    /* background-color: ${({ year }) => {
        // console.log("@emotion/styled_year:", year); //!
        let bgColor = '#ffdb92';
        if (year > 1945) bgColor = '#d2fdbd';
        if (year > 1999) bgColor = '#d6f1ff';
        return bgColor;
    }}; */
    //todo: var.2
    background-color: ${getBgColorEmotion};
    outline: 1px solid grey;
`;
