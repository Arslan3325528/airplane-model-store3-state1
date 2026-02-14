import styled from '@emotion/styled';

export const PlanesGallery = styled.ul`
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(540px, auto));
    gap: 32px;
    outline: 1px solid red;
`;

export const PlanesItem = styled.li`
    display: grid;
    gap: 12px;
    padding: 10px;
    /* background-color: #ffdb92; */
    //todo: backgroundColor: '#ffdb92', ---> "year" до 1946
    //todo: backgroundColor: '#d2fdbd', ---> "year" від 1946 і до 1999
    //todo: backgroundColor: '#d6f1ff', ---> "year" від 2000  */
    background-color: ${({ year }) => {
        // console.log("@emotion/styled_year:", year); //!
        let bgColor = '#ffdb92';
        if (year > 1945) bgColor = '#d2fdbd';
        if (year > 1999) bgColor = '#d6f1ff';
        return bgColor;
    }};
    outline: 1px solid grey;
`;
