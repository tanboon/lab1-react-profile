import { useState } from "react";

type TProfileCardProps = {
  name?: string;
  role?: string;
  bio?: string;
};

function ProfileCard({ name, role, bio }: TProfileCardProps) {
  const [likes, setLikes] = useState<number>(0);
  const [skills, setSkills] = useState<Array<string>>(["ซามูไร", "โทคูน"]);
  const [filteredSkills, setFilteredSkills] = useState<Array<string> | null>();
  const [newSkills, setNewSkills] = useState<string>();
  const [query, setQuery] = useState<string>();

  const handleSearch = () => {
    const filteredSkills = skills.filter((skill) =>
      skill
        .toLocaleLowerCase()
        .includes(query?.trim().toLocaleLowerCase() ?? "")
    );

    setFilteredSkills(filteredSkills);
    setQuery("");
  };

  const handleUpdateSkills = () => {
    if (newSkills?.trim()) {
      setSkills((prev) => [...prev, newSkills ?? ""]);
      setNewSkills("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        maxWidth: 360,
        padding: 16,
        backgroundColor: "#ffffff",
        color: "#000000",
        borderRadius: 4,
      }}
    >
      <h2>{name}</h2>
      <p>
        <strong>{role}</strong>
      </p>
      <p>{bio}</p>

      <button onClick={() => setLikes((prev) => prev + 1)}>
        Likes : {likes}
      </button>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span>Skills</span>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <input
            placeholder="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button onClick={() => setFilteredSkills(null)}>Clear</button>
        </div>
        {filteredSkills ? (
          <ul>
            {filteredSkills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {skills.map((skill) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: skill === "React" ? "blue" : "black",
                    fontWeight: skill === "React" ? 700 : 400,
                  }}
                >
                  {skill}
                </span>
                <button
                  onClick={() => {
                    setSkills((prev) => prev.filter((v) => v !== skill));
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <input
            placeholder="add"
            value={newSkills}
            onChange={(e) => {
              setNewSkills(e.target.value);
            }}
          />

          <button onClick={handleUpdateSkills}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
