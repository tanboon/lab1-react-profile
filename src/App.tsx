import { useEffect, useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [githubData, setGithubData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    return savedTheme || "light";
  });
  const username = "tanboon";

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);

        if (!res.ok) {
          setError("User not found!!");
          setLoading(false);
          return;
        }

        const data = await res.json();
        setGithubData(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("User not found!!");
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <h1>My Team Portfolio</h1>

        {githubData && (
          <ProfileCard
            name={githubData?.name ?? ""}
            role="Github User"
            bio={githubData?.bio ?? ""}
          />
        )}

        <button
          onClick={toggleTheme}
          style={{ width: 70, height: 35, alignSelf: "center" }}
        >
          Theme
        </button>
      </div>
    </>
  );
}

export default App;
