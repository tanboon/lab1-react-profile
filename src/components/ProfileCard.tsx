type TProfileCardProps = {
  name?: string;
  role?: string;
  bio?: string;
};

function ProfileCard({ name, role, bio }: TProfileCardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
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
    </div>
  );
}

export default ProfileCard;
