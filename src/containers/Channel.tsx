import React, { useState } from "react";
import MessageFeed from "../components/MessageFeed";
import MessageForm from "../components/MessageForm";

interface ChannelProps {
}

function Channel() { 
    const [msg, setMsg] = useState('');
    
    function handleChange(event: React.FormEvent<HTMLTextAreaElement>) {
        setMsg(event.currentTarget.value);
    }

    return (
        <>
            <MessageFeed />
            <MessageForm msg={msg} handleChange={handleChange} />
        </>
    );
};
 
export default Channel;