import { useRef, useState } from "react";

const Chatbox = () => {
  const [messageList, setMessageList] = useState([]);
  const userNameRef = useRef();
  const messageTextRef = useRef();
  const sendMessageHandler = (e) => {
    e.preventDefault();
    setMessageList([
      ...messageList,
      {
        username: userNameRef.current.value,
        message: messageTextRef.current.value
      }
    ]);
  };
  return (
    <section className="msger">
      <main className="msger-chat">
        {messageList.map((msgObj) => (
          <div className="msg right-msg">
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">{msgObj.username}</div>
              </div>
              <div className="msg-text">{msgObj.message}</div>
            </div>
          </div>
        ))}
      </main>

      <form className="msger-inputarea" onSubmit={sendMessageHandler}>
        <input
          type="text"
          className="msger-input"
          placeholder="UserName"
          ref={userNameRef}
        />
        <input
          type="text"
          className="msger-input"
          placeholder="Enter your message..."
          ref={messageTextRef}
        />
        <button type="submit" className="msger-send-btn">
          Send
        </button>
      </form>
    </section>
  );
};

export default Chatbox;
