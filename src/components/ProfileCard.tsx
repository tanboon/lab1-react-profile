import { useState } from "react";

type TProfileCardProps = {
  name?: string;
  role?: string;
  bio?: string;
};

function ProfileCard({ name, role, bio }: TProfileCardProps) {
  const [likes, setLikes] = useState<number>(0);
  const [skills, setSkills] = useState<Array<string>>(["ซามูไร", "โทคูน"]);
  const [newSkills, setNewSkills] = useState<string>();

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

      <input
        value={newSkills}
        onChange={(e) => {
          setNewSkills(e.target.value);
        }}
      />

      <button onClick={handleUpdateSkills}>Add</button>

      {skills.map((skill) => (
        <div>{skill}</div>
      ))}
    </div>
  );
}

export default ProfileCard;
