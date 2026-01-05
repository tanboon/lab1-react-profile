import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <h1>My Team Portfolio</h1>

        <ProfileCard
          name="ทานบุญ​ เที่ยงทัต 6633091321"
          role="Student @ CEDT"
          bio="อย่าซีเล็ง เดี๋ยวซู้หลิ่ง"
        />

        <ProfileCard
          name="John Doe"
          role="Guest Developer"
          bio="i love coding and learning new things."
        />
      </div>
    </>
  );
}

export default App;
