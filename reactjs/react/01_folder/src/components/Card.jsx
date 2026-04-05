const Card = (props) => {
  console.log(props);
  console.log(props.user, props.age);
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1768479397383-49806c934167?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
        alt="Profile image"
      />
      <h2>
        {props.user}, {props.age}
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <button>view profile</button>
    </div>
  );
};

export default Card;
