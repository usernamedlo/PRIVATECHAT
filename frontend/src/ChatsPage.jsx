import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background" style={{fontFamily: "'Poppins', sans-serif"}}>
      <PrettyChatWindow
        projectId="b069adf2-53a3-42aa-91b6-842be284c4df"
        username={props.user.username}
        secret={props.user.secret}
        style={{fontFamily: "'Poppins', sans-serif"}}
      />
    </div>
  );
};

export default ChatsPage;