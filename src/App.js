import React, { useState } from "react";

function App() {
  // Counter state
  const [count, setCount] = useState(0);
  // Message state
  const [message, setMessage] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Interactive Counter & Message App</h1>

      {/* Counter Display */}
      <h2>Count: {count}</h2>

      {/* Counter Buttons */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {/* Conditional Rendering */}
      {count >= 5 && <p style={{ color: "green" }}>Goal Reached!</p>}

      <hr />

      {/* Message Input */}
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Live Message Display */}
      <h3>{message}</h3>
    </div>
  );
}

export default App;
