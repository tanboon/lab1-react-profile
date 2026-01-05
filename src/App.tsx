import { useEffect, useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [githubData, setGithubData] = useState<any>(null);
  const username = "tanboon";

  useEffect(() => {
    fetch(`https:api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <h1>My Team Portfolio</h1>

        {githubData ? (
          <ProfileCard
            name={githubData?.name ?? ""}
            role="Github User"
            bio={githubData?.bio ?? ""}
          />
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
