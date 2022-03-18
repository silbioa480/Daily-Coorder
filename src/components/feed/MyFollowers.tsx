import FollowerBox from "./FollowerBox";

function MyFollowers() {
  const followers = [
    {
      name: "김민규",
      followCount: 352,
    },
  ];

  // mainfol5
  const repeat = () => {
    const result = [];
    for (let f of followers) {
      result.push(<FollowerBox follower={f} />);
    }

    return result;
  };

  return (
    <div>
      <div style={{ margin: "20px", textAlign: "center" }}>팔로잉 {1}</div>
      <hr />
      {repeat()}
    </div>
  );
}

export default MyFollowers;
