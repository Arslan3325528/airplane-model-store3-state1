import { Section } from '@/components/Section/Section.jsx'; 
import planes from '@/json/planes.json'; 
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';

//! Збільшення/Зменьшення на 1
import { Counter } from '@/components/Counter/Counter.jsx';

export function App() {
  return (
    <>
      {/* <Counter /> */}
      {/*//! Початковий стан лічильника з props */}
      <Counter initialValue={10} />

      {/* <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section > */}
    </>
  );
};
