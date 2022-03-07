const occassions = [
  {
    id: 1,
    name: "Thank You",
  },
  {
    id: 1,
    name: "Birthday",
  },
  {
    id: 1,
    name: "Kids",
  },
  {
    id: 1,
    name: "Congratulations",
  },
];
const OccassionMenu = () => {
  return (
    <div>
      <ul>
        {occassions.map((occassion) => {
          <li
          //   key={occassion.id}
          >
            {occassion.name}
          </li>;
        })}
      </ul>

      <ul>
        <li>
          <a>Thank you</a>
        </li>
        <li>
          <a>Birthday</a>
        </li>
        <li>
          <a>Kids</a>
        </li>
        <li>
          <a>Congratulations</a>
        </li>
      </ul>
    </div>
  );
};

export default OccassionMenu;
