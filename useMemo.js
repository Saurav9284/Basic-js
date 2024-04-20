import React, { useMemo } from 'react';

function FactorialCalculator({ number }) {
  const calculateFactorial = (num) => {
    console.log(`Calculating factorial of ${num}`);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <p>Factorial of {number} is: {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;
