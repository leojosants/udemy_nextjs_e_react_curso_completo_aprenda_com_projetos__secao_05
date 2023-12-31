export async function getStaticPaths() { 
    const resp = await fetch('http://localhost:3000/api/students/tutors');
    const ids = await resp.json();

    const paths = ids.map(id => {
        return {
            params: {
                id: `${ id }`,
            },
        };
    });

    return {
        fallback: true,
        paths,
    };
};

export async function getStaticProps({ params }) { 
    console.log(params);

    const resp = await fetch(`http://localhost:3000/api/students/${ params.id }`);
    const student = await resp.json();
    
    return {
        props: {
            student,
        },
    };
};

export default function StudentById(props) {
    const { student } = props;

    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            {
                student ?
                    <ul>
                        <li>{ student.id }</li>
                        <li>{ student.name }</li>
                        <li>{ student.email }</li>
                    </ul>
                : false
            }
        </div>
    );
};