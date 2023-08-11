export async function getStaticProps() {
	console.log('\n[server] - gerando props para o componente.\n');

	const resp = await fetch('http://localhost:3000/api/products');
	const products = await resp.json();

	return {
		props: {
			products,
		},
	};
};

export default function Static4(props) {
	console.log('[cliente] - renderizando o componente...');
	function renderProducts() {
		return props.products.map(product => {
			return <li key={product.id}>{product.name} - R${product.price}</li>
		});
	}
		
	return (
		<div>
			<h1>Estático #04</h1>
			<ul>
				{renderProducts()}
			</ul>
		</div>
	);
};