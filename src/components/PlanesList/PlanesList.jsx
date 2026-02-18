import PropTypes from 'prop-types';

// import css from "./PlanesList.module.css"; //! CSS-модулі
import { PlanesGallery, PlanesItem } from './PlanesList.styled'; //! Emotion

// import { Planes } from '../Planes/Planes.jsx'; //! CSS-модулі + Emotion
import { Planes } from '@/components/Planes/Planes.jsx'; //! CSS-модулі + Emotion --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

// import { getBgColorBuiltInStyles, getBgColorVanillaCSS, getBgColorCSSModule } from '../../utils/getBackgroundColor.js'; //! вбудовані стилі + ванільний CSS
// import { getBgColorBuiltInStyles, getBgColorVanillaCSS, getBgColorCSSModule } from '@/utils/getBackgroundColor.js'; //! вбудовані стилі + ванільний CSS + CSS-модулі --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json


export function PlanesList({ items }) {
    return (
        //! Emotion
        <PlanesGallery>
        {/* //! CSS-модулі */}
        {/* <ul className={css.planesList}> */}
            {items.map(item => 
                //! Emotion
                <PlanesItem key={item.id} year={item.info.year}>
                {/*//! CSS-модулі */}
                {/* <li
                    //todo: var.1 та var.2
                    // className={getBgColorVanillaCSS(item.info.year).join(" ")}
                    //todo: var.1.1 та var.2.1 - використання бібліотеки clsx
                    // className={getBgColorVanillaCSS(item.info.year)}
                    //todo: CSS-модулі
                    // className={css.planesItem}
                    className={css[getBgColorCSSModule(item.info.year)]}
                    key={item.id}
                > */}
                    <Planes
                        wikipediaPage={item.url.wikipedia}
                        urlMain={item.url.main}
                        urlPromotional={item.url.promotional}
                        urlActual={item.url.actual}
                        nameBrief={item.name.brief}
                        nameFull={item.name.full}
                        nickname={item.name.nickname}
                        year={item.info.year}
                        country={item.info.country}
                        type={item.info.type}
                        price={item.info.price}
                        description={item.info.description}
                        manufacturingStart={item.manufacturing.start}
                        manufacturingEnd={item.manufacturing.end}
                    />
                {/*//! CSS-модулі */}
                {/* </li> */}
                {/*//! Emotion */}
                </PlanesItem >
            )}
        {/*//! CSS-модулі */}
        {/* </ul> */}
        {/*//! Emotion */}
        </PlanesGallery >
    );
};

PlanesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

