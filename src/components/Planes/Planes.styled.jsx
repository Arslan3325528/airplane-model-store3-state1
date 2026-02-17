import styled from '@emotion/styled';


export const PlaneTitle = styled.h3`
    height: 72px; /*todo: додатково: */
    /* margin-bottom: 12px; */
    /*//! Налаштування відступів - spacing */
    margin-bottom: ${props => props.theme.spacing(3)};
    padding: 12px 16px;
    font-size: 32px;
    text-align: center;
    /* border: 1px solid #9b9b00; */
    border: ${props => `1px solid ${props.theme.borderColor.planeTitle}`};
    border-radius: 8px;
    /* color: #0000ff; */
    color: ${props => props.theme.fontColor.planeTitleImageTitles};
    /* background-color: #ffff00; */
    background-color: ${props => props.theme.bсgColor.planeTitle};
    
`;

export const TextField = styled.p`
    font-size: 18px;
    font-weight: 700;
    /*//todo: Налаштування для іконок */
    svg {
        margin-bottom: -8px;
        /* color: #9b25fc; */
        color: ${props => props.theme.iconColor.textField};
    }
`;

export const TextFieldValue = styled.span`
    font-weight: 400;
    font-style: italic;
    /*//todo: Налаштування для іконок */
    svg {
        margin-bottom: -8px;
    }
`;

export const TextFieldValueBoldStyle = styled.span`
    font-weight: 400;
    font-style: italic;
    font-family: 'Trebuchet MS', Arial, sans-serif;
    font-size: 1.1em;
    /* color: #0b5500; */
    color: ${props => props.theme.fontColor.nameFullTitle};
    font-weight: 700;
`;

export const ImageTitles = styled.h4`
    text-align: center;
    vertical-align: bottom;
    /* color: #0000ff; */
    color: ${props => props.theme.fontColor.planeTitleImageTitles};
    /*//todo: Налаштування для іконок */
    svg {
        margin-bottom: -10px;
    }
`;

export const ActualImageBox = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 8px;
    border-radius: 8px;
    /* background-color: #808080; */
    background-color: ${props => props.theme.bсgColor.actualImageBox};
`;

export const ActualImage = styled.img`
    max-width: calc((100% - 10px) / 2);
    border-radius: 4px;
`;

export const PlaneButton = styled.button`
    width: 70%;
    margin: 20px auto;
    padding: 16px 32px;
    display: inline-block;
    align-items: center;
    font-family: Franklin Gothic Medium, Arial Narrow;
    font-weight: 700;
    font-size: 1.5rem;
    border-radius: 12px;
    /* color: #99ffff; */
    color: ${props => props.theme.buttonColor.planeButton};
    cursor: pointer;
    /* background-color: #008080; */
    background-color: ${props => props.theme.bсgColor.planeButton};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9);

    :hover {
        /* color: #d9d902; */
        color: ${props => props.theme.buttonColor.planeButtonHover};
        /* background-color: #902a00; */
        background-color: ${props => props.theme.bсgColor.planeButtonHover};
    }
`;
