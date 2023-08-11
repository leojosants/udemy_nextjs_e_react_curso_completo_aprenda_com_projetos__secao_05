export function getStaticProps() {
	return {
		revalidate: 7, // segundos
		props: {
			number: Math.random(),
		},
	};
};

export default function Static3(props) {
	return (
		<div>
			<h1>Estático #03</h1>
			<h2>{props.number}</h2>
		</div>
	);
};