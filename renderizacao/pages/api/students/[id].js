export default function handler(req, res) {
    const id = +req.query.id;

    res.status(200).json(
        {
            id,
            name: `Leonardo Santos${id}`,
            email: `santosleonardo${id}@gmail.com`,
        },
    );
};