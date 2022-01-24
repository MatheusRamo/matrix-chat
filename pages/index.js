function GlobalStyle() {
    return (
        <>
            <style jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: sans-serif;
                }


            `}
            </style>
        </>
    )
}
function Titulo(props) {
    const Tag = props.tag
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                color: blue;
                }
            `}</style>
        </>
    )
}


function HomePage() {
    return (
        <div>
            <GlobalStyle/>
            <Titulo tag="h1">Bem Vindo</Titulo>
            <h2>Discord Alura Matrix</h2>
        </div>
    )
}

export default HomePage