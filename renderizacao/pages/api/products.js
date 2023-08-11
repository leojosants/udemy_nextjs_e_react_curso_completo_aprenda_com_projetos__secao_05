// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'Caneta',
      price: 5.60,
    },
    {
      id: 2,
      name: 'Caderno',
      price: 15.60,
    },
    {
      id: 3,
      name: 'Borracha',
      price: 7.30,
    },
    {
      id: 4,
      name: 'Tesoura',
      price: 21.55,
    },
  ]);
};
