const getChange = (amount) => {

  if (amount < 4)
    return null;

  let remainingAmount = amount;
  let bill_10 = 0;
  let bill_5 = 0;
  let bill_2 = 0;

  // remove 2 by 2 until the remaining amount is a multiple of 5

  while ( (remainingAmount - bill_2 * 2) % 5 !== 0 )
    bill_2++;

  remainingAmount = remainingAmount - bill_2 * 2;

  // once we have a multiple of 5, get the best combination of 10/5

  bill_10 = Math.floor(remainingAmount/10);
  remainingAmount = remainingAmount - bill_10 * 10;

  bill_5 = Math.floor(remainingAmount/5);

  return {
    '10': bill_10,
    '5': bill_5,
    '2': bill_2
  };

}

for (let i = 4; i <= 50; i++)
  console.log( i, getChange(i) );

/**
  4 { '2': 2, '5': 0, '10': 0 }
  5 { '2': 0, '5': 1, '10': 0 }
  6 { '2': 3, '5': 0, '10': 0 }
  7 { '2': 1, '5': 1, '10': 0 }
  8 { '2': 4, '5': 0, '10': 0 }
  9 { '2': 2, '5': 1, '10': 0 }
  10 { '2': 0, '5': 0, '10': 1 }
  11 { '2': 3, '5': 1, '10': 0 }
  12 { '2': 1, '5': 0, '10': 1 }
  13 { '2': 4, '5': 1, '10': 0 }
  14 { '2': 2, '5': 0, '10': 1 }
  15 { '2': 0, '5': 1, '10': 1 }
  16 { '2': 3, '5': 0, '10': 1 }
  17 { '2': 1, '5': 1, '10': 1 }
  18 { '2': 4, '5': 0, '10': 1 }
  19 { '2': 2, '5': 1, '10': 1 }
  20 { '2': 0, '5': 0, '10': 2 }
  21 { '2': 3, '5': 1, '10': 1 }
  22 { '2': 1, '5': 0, '10': 2 }
  23 { '2': 4, '5': 1, '10': 1 }
  24 { '2': 2, '5': 0, '10': 2 }
  25 { '2': 0, '5': 1, '10': 2 }
  26 { '2': 3, '5': 0, '10': 2 }
  27 { '2': 1, '5': 1, '10': 2 }
  28 { '2': 4, '5': 0, '10': 2 }
  29 { '2': 2, '5': 1, '10': 2 }
  30 { '2': 0, '5': 0, '10': 3 }
  31 { '2': 3, '5': 1, '10': 2 }
  32 { '2': 1, '5': 0, '10': 3 }
  33 { '2': 4, '5': 1, '10': 2 }
  34 { '2': 2, '5': 0, '10': 3 }
  35 { '2': 0, '5': 1, '10': 3 }
  36 { '2': 3, '5': 0, '10': 3 }
  37 { '2': 1, '5': 1, '10': 3 }
  38 { '2': 4, '5': 0, '10': 3 }
  39 { '2': 2, '5': 1, '10': 3 }
  40 { '2': 0, '5': 0, '10': 4 }
  41 { '2': 3, '5': 1, '10': 3 }
  42 { '2': 1, '5': 0, '10': 4 }
  43 { '2': 4, '5': 1, '10': 3 }
  44 { '2': 2, '5': 0, '10': 4 }
  45 { '2': 0, '5': 1, '10': 4 }
  46 { '2': 3, '5': 0, '10': 4 }
  47 { '2': 1, '5': 1, '10': 4 }
  48 { '2': 4, '5': 0, '10': 4 }
  49 { '2': 2, '5': 1, '10': 4 }
  50 { '2': 0, '5': 0, '10': 5 }
*/