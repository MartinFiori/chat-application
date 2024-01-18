import React from "react";
import ChatContainer from "../ChatContainer";
import useAuth from "../../../Hooks/useAuth";

export default function ChatScreen() {
  const { user } = useAuth();
  React.useEffect(() => {

  }, []);
  return <ChatContainer user={user} />;
}
