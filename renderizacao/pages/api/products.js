// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function generateRandomNumbers(min = 1, max = 100000) {
  return parseInt(Math.random() * (max - min)) + min;
};

export default function handler(req, res) {
  res.status(200).json([
    {
      id: generateRandomNumbers(),
      name: 'Caneta',
      price: 5.60,
    },
    {
      id: generateRandomNumbers(),
      name: 'Caderno',
      price: 15.60,
    },
    {
      id: generateRandomNumbers(),
      name: 'Borracha',
      price: 7.30,
    },
    {
      id: generateRandomNumbers(),
      name: 'Tesoura',
      price: 21.55,
    },
  ]);
};
