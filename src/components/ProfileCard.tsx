import { useState } from "react";

type TProfileCardProps = {
  name?: string;
  role?: string;
  bio?: string;
};

function ProfileCard({ name, role, bio }: TProfileCardProps) {
  const [likes, setLikes] = useState<number>(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
    </div>
  );
}

export default ProfileCard;
