import FollowerBox from "./FollowerBox";

function MyFollowers() {
  const followers = [
    {
      name: "홍길동",
      followCount: 0,
    },
    {
      name: "강길동",
      followCount: 24,
    },
    {
      name: "윤길동",
      followCount: 546,
    },
    {
      name: "검길동",
      followCount: 12,
    },
  ];

  const repeat = () => {
    const result = [];
    for (let f of followers) {
      result.push(<FollowerBox follower={f} />);
    }

    return result;
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>팔로워 {0}</div>
      {repeat()}
    </div>
  );
}

export default MyFollowers;
