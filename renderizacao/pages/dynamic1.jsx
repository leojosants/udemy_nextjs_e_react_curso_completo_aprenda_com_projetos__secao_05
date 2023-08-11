export function getServerSideProps() {
    console.log('[server] - gerando props para o componente...');

    return {
        props: {
            number: Math.random(),
        },
     };
};

export default function Dynamic1(props) {
    return (
        <div>
            <h1>Dinâmico #01</h1>
            <h2>{ props.number }</h2>
        </div>
    );
};