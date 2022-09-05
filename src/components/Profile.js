export default function Profile({ profileInfo }) {
  console.log(profileInfo);
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} alt={profileInfo.name} />
      <span>{profileInfo.name}</span>
    </>
  );
}
