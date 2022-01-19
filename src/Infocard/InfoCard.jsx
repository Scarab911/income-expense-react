import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '0 10%',
        wordBreak: 'keep-all',
        marginBottom: '10px',
      }}
    >
      Try saying: <br />
      add {isIncome ? 'income ' : 'expense '} for {isIncome ? '50 ' : '100 '}$
      in category {isIncome ? 'business ' : 'pets '} for{' '}
      {isIncome ? 'Monday ' : 'Friday '}
    </div>
  );
};

export default InfoCard;
