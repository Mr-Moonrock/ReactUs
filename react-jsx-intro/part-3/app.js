const App = () => 

(
  <div>
    <Person name="Scooter" age="35" hobbies={['fishing', 'netflix and chill', 'hunting', 'family day', 'exercising']}/>
    <Person name="Elizabeth" age="17" hobbies={['IG', 'Facebook', 'Twitter', 'Gaming']}/>
    <Person name="Edwin" age="21" hobbies={['Drinking', 'Beer Pong', 'Flip Cup', 'Quaters', 'Spades']}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));