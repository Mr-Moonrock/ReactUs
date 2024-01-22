const Tweet = ({username, name, date, message}) => {

  return (
    <div id="tweet">
      <p id="username"> {username} ✅ </p>
      <p id="name">  {name} </p>
      <p id="date"> - {date} </p>
      <div id="bgrd-message">
        <p id="message"> {message} </p>
      </div>
      
    </div>
  )
}