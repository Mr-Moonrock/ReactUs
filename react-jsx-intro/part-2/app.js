const App = () => 

(
  <div>
    <Tweet username="Joker" name="Jack O. White" date="1/19/23" message="We are learning the React language!"/>
    <Tweet username="Batl\/lan" name="Bruce T. Wayne" date="1/20/23" message="Wish I could be as cool as you!"/>
    <Tweet username="Superman" name="Clark J. Kent" date="1/21/23" message="React is my Kryptonite!"/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));