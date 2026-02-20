import { Section } from '@/components/Section/Section.jsx'; 
import planes from '@/json/planes.json'; 
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';

//! Збільшення/Зменьшення на 1
import { Counter } from '@/components/Counter/Counter.jsx';

export function App() {
  return (
    <>
      <Counter />

      {/* <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section > */}
    </>
  );
};
