export default function ListComponent(props){

    const listitems = props.ingredientsarray.map((item)=>{
        return <li>{item}</li>
    })


    return (
        <>
            <h2 className="ingredients-list-heading">Ingredients on Hand:</h2>
            <ul className="ingredients-list">
                {listitems}
            </ul>
        </>
    )
}