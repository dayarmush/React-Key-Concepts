function GoalItem(props) {

    return (
        <li>
            <article>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </article>
        </li>
    )
}

export default GoalItem