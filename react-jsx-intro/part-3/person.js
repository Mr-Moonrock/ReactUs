const Person = ({name, age, hobbies}) => {
let voterOrNot;

if (age > 18) {
  voterOrNot = "please go vote"
} else {
  voterOrNot = "You must be 18"
} 

if (name.length > 8) {
  name = name.slice(0, 6)
}
  return (
    <div id="person">
      <p> Learn some information about this person </p>
      <h3> Name: {name} </h3>
      <h3> Age: {age} </h3>
      <h3> Voting: {voterOrNot} </h3>
      <ul> <b> Hobbies: </b> {hobbies.map(hob => 
        <li> {hob} </li>)}
      </ul>
    </div>
  )
}