export async function getServerSideProps() {
	console.log('\n[server] - gerando props para o componente.\n');

	const resp = await fetch('http://localhost:3000/api/products');
	const products = await resp.json();

	return {
		props: {
			products,
		},
	};
};

export default function Dynamic2(props) {
	console.log('\n[cliente] - renderizando o componente...\n');

	function renderProducts() {
		return props.products.map(product => {
			return (
				<li key={ product.id }>
					{ product.id }: { product.name } - R${ product.price }
				</li>
			)
		});
	}
		
	return (
		<div>
			<h1>Dinâmico #02</h1>
			<ul>
				{renderProducts()}
			</ul>
		</div>
	);
};