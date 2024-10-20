import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const WheelOfFortune = () => {
  const data = [
    { option: 'Приз 1', style: { backgroundColor: '#e6194B', textColor: '#ffffff' } },
    { option: 'Приз 2', style: { backgroundColor: '#3cb44b', textColor: '#ffffff' } },
    { option: 'Приз 3', style: { backgroundColor: '#ffe119', textColor: '#ffffff' } },
    { option: 'Приз 4', style: { backgroundColor: '#4363d8', textColor: '#ffffff' } },
    { option: 'Приз 5', style: { backgroundColor: '#f58231', textColor: '#ffffff' } },
    { option: 'Приз 6', style: { backgroundColor: '#911eb4', textColor: '#ffffff' } },
    { option: 'Приз 7', style: { backgroundColor: '#46f0f0', textColor: '#ffffff' } },
    { option: 'Приз 8', style: { backgroundColor: '#f032e6', textColor: '#ffffff' } },
    { option: 'Приз 9', style: { backgroundColor: '#bcf60c', textColor: '#ffffff' } },
    { option: 'Приз 10', style: { backgroundColor: '#fabebe', textColor: '#ffffff' } },
    { option: 'Приз 11', style: { backgroundColor: '#008080', textColor: '#ffffff' } },
    { option: 'Приз 12', style: { backgroundColor: '#e6beff', textColor: '#ffffff' } },
    { option: 'Приз 13', style: { backgroundColor: '#9A6324', textColor: '#ffffff' } },
    { option: 'Приз 14', style: { backgroundColor: '#fffac8', textColor: '#ffffff' } },
    { option: 'Приз 15', style: { backgroundColor: '#800000', textColor: '#ffffff' } },
    { option: 'Приз 16', style: { backgroundColor: '#aaffc3', textColor: '#ffffff' } },
    { option: 'Приз 17', style: { backgroundColor: '#808000', textColor: '#ffffff' } },
    { option: 'Приз 18', style: { backgroundColor: '#ffd8b1', textColor: '#ffffff' } },
    { option: 'Приз 19', style: { backgroundColor: '#000075', textColor: '#ffffff' } },
    { option: 'Приз 20', style: { backgroundColor: '#808080', textColor: '#ffffff' } },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  // Кастомная стрелка, направленная вниз и расположенная сверху
  const customPointer = (
    <div
      style={{
        position: 'absolute',
        top: '-20px', // Позиционируем над колесом
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0',
        height: '0',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderBottom: '15px solid #333', // Стрелка, направленная вниз
        zIndex: 1,
      }}
    />
  );

  return (
    <div style={{ textAlign: 'center', position: 'relative', marginTop: '50px' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {customPointer}
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor={'#333'}
          outerBorderWidth={5}
          innerRadius={30}
          innerBorderColor={'#fff'}
          innerBorderWidth={5}
          radiusLineColor={'#fff'}
          radiusLineWidth={2}
          textDistance={80}
          fontSize={14}
          pointerProps={{
            style: {
              display: 'none', // Скрываем стандартную стрелку
            },
          }}
          onStopSpinning={() => {
            setMustSpin(false);
            alert(`Вы выиграли: ${data[prizeNumber].option}!`);
          }}
        />
      </div>
      <button onClick={handleSpinClick} disabled={mustSpin} style={{ marginTop: 20 }}>
        Крутить колесо
      </button>
    </div>
  );
};

export default WheelOfFortune;