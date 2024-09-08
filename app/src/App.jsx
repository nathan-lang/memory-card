import { useState } from "react";
import "./App.css";

function App() {
  // All image credits is from kpopping.
  const members = [
    {
      pic: "https://kpopping.com/documents/80/3/500/Yeonjun-facePicture(14).webp?v=6dccb",
      name: "Yeonjun",
    },
    {
      pic: "https://kpopping.com/documents/b4/3/500/Soobin-facePicture(25).webp?v=e89ae",
      name: "Soobin",
    },
    {
      pic: "https://kpopping.com/documents/0a/0/500/Beomgyu-facePicture(14).webp?v=e89ae",
      name: "Beomgyu",
    },
    {
      pic: "https://kpopping.com/documents/a2/4/500/Taehyun-facePicture(17).webp?v=e89ae",
      name: "Taehyun",
    },
    {
      pic: "https://kpopping.com/documents/64/4/500/Huening-Kai-facePicture(3).webp?v=6dccb",
      name: "Huening Kai",
    },
    {
      pic: "https://kpopping.com/documents/f8/4/500/Heeseung-facePicture(17).webp?v=a83eb",
      name: "Heeseung",
    },
    {
      pic: "https://kpopping.com/documents/60/4/500/Jay-facePicture(32).webp?v=a83eb",
      name: "Jay",
    },
    {
      pic: "https://kpopping.com/documents/3b/3/500/Jake-facePicture(19).webp?v=a83eb",
      name: "Jake",
    },
    {
      pic: "https://kpopping.com/documents/fa/4/500/Sunghoon-facePicture(21).webp?v=a83eb",
      name: "Sunghoon",
    },
    {
      pic: "https://kpopping.com/documents/1c/1/500/Sunoo-facePicture(17).webp?v=a83eb",
      name: "Sunoo",
    },
    {
      pic: "https://kpopping.com/documents/cd/3/500/Jungwon-facePicture(19).webp?v=e89ae",
      name: "Jungwon",
    },
    {
      pic: "https://kpopping.com/documents/7c/4/500/Ni-ki-facePicture(9).webp?v=a83eb",
      name: "Ni-ki",
    },
  ];
  const [theMembers, setMembers] = useState(members);

  const [score, setScore] = useState(0);
  const [clickedMembers, setClickedMembers] = useState([]);

  const shuffleArray = () => {
    const array = [...members];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setMembers(array);
  };

  const handleClick = (memberName) => {
    let memberWasClicked = false;
    for (let i = 0; i < clickedMembers.length; i++) {
      if (clickedMembers[i] === memberName) {
        // Resets score to 0 when a member who was already clicked, is clicked again.
        setScore(0);
        memberWasClicked = true;
        setClickedMembers([]);
      }
    }
    if (!memberWasClicked) {
      setScore(score + 1);
      setClickedMembers((prevItems) => [...prevItems, memberName]);
      if (score === theMembers.length - 1) {
        alert("You win!");
        setScore(0);
      }
    }
    shuffleArray();
  };

  return (
    <>
      <h1>TXT + ENHYPEN Memory Card</h1>
      <div value={score} className="scoreboard">
        Score: {score}
      </div>
      <div className="cards">
        {theMembers.map((member, index) => (
          <div
            key={member.name}
            className="card"
            onClick={() => handleClick(member.name)}
          >
            <img src={member.pic} className="member-card" />
            <p>{member.name}</p>
          </div>
        ))}
      </div>
      <h3>All photos belong to kpopping.</h3>
    </>
  );
}

export default App;
