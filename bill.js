const getChange = (amount) => {

  if (amount < 4)
    return null;

  let remainingAmount = amount;
  let bill_2 = 0;

  // remove 2 by 2 until the remaining amount is a multiple of 5

  while ( (remainingAmount - bill_2 * 2) % 5 !== 0 )
    bill_2++;

  remainingAmount = remainingAmount - bill_2 * 2;

  // once we have a multiple of 5, get the best combinaison of 10/5

  bill_10 = Math.floor(remainingAmount/10)
  remainingAmount = remainingAmount - bill_10 * 10;

  bill_5 = Math.floor(remainingAmount/5)
  remainingAmount = remainingAmount - bill_5 * 5;

  return {
    '10': bill_10,
    '5': bill_5,
    '2': bill_2
  };

}

for (let i = 4; i <= 50; i++)
  console.log( i, getChange(i) );
