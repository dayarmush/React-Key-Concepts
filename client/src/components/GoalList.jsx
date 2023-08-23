import Header from "./Header"
import GoalItem from "./GoalItem"

function GoalList() {

    const goals = [
        {'title': 'Master React Fundamentals', 
        'description': "Attain a strong grasp of React's core concepts, including components, props, and state. Build a foundation for creating dynamic web applications."},
        {'title': 'Create Efficient Components',
        'description': 'Develop the ability to build reusable and efficient components in React. Improve application structure for better scalability and teamwork.'},
        {'title': 'Proficiency in State Management', 
        'description': "Achieve proficiency in state management using React's hooks like useState and useEffect. Enhance interactivity and user interfaces through effective state handling."}
      ]

    return (
        <>
            <Header/>
            <div>
                <ul>
                   {goals.map(goal => {
                        return <GoalItem {...goal} key={goal.title}/>
                    })} 
                </ul>
            </div>
        </>
    )
}

export default GoalList