/*import { useState, useRef, useEffect } from "react";

const SUGGESTIONS = [
  "What services do you offer?",
  "What's your tech stack?",
  "How do I start a project?",
  "Do you do mobile apps?",
];

async function askGroq(messages) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages })
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data.reply;
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
  :root {
    --bg-panel: #0d1f3c; --bg-card: #112240; --bg-input: #0f1e38;
    --teal: #0dcfcf; --teal-dim: #0a9e9e; --teal-glow: rgba(13,207,207,0.18);
    --text-main: #e2f0f9; --text-muted: #6b8cae;
    --border: rgba(13,207,207,0.15); --shadow: 0 24px 64px rgba(0,0,0,0.55);
  }
  .fab {
    position:fixed; bottom:28px; right:28px; width:60px; height:60px;
    border-radius:50%; background:linear-gradient(135deg,var(--teal),#0891b2);
    border:none; cursor:pointer; display:flex; align-items:center; justify-content:center;
    box-shadow:var(--shadow); z-index:1000;
    transition:transform 0.25s cubic-bezier(.34,1.56,.64,1),box-shadow 0.3s;
    animation:fabPulse 3s ease-in-out infinite;
  }
  .fab:hover{transform:scale(1.12);box-shadow:0 0 0 12px var(--teal-glow),var(--shadow);}
  .fab svg{width:26px;height:26px;fill:#fff;transition:transform 0.3s;}
  .fab.open svg{transform:rotate(45deg);}
  @keyframes fabPulse{0%,100%{box-shadow:0 0 0 0 rgba(13,207,207,0.35),var(--shadow);}50%{box-shadow:0 0 0 10px rgba(13,207,207,0),var(--shadow);}}
  .chat-window {
    position:fixed; bottom:100px; right:28px; width:390px; height:570px;
    background:var(--bg-panel); border:1px solid var(--border); border-radius:20px;
    display:flex; flex-direction:column; overflow:hidden;
    box-shadow:var(--shadow),0 0 40px rgba(13,207,207,0.08);
    z-index:999; transform-origin:bottom right;
    transition:opacity 0.3s,transform 0.35s cubic-bezier(.34,1.56,.64,1);
  }
  .chat-window.hidden{opacity:0;transform:scale(0.85) translateY(20px);pointer-events:none;}
  .chat-window.visible{opacity:1;transform:scale(1) translateY(0);}
  .chat-header {
    padding:18px 20px; background:linear-gradient(135deg,#0a2447,#0d2d52);
    border-bottom:1px solid var(--border); display:flex; align-items:center; gap:14px; flex-shrink:0;
  }
  .avatar {
    width:44px; height:44px; border-radius:12px;
    background:linear-gradient(135deg,var(--teal),#0891b2);
    display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0;
    box-shadow:0 0 16px rgba(13,207,207,0.4);
  }
  .header-info h3{font-family:'Syne',sans-serif;font-weight:700;font-size:15px;color:#fff;letter-spacing:0.02em;}
  .header-info p{font-size:12px;color:var(--teal);margin-top:2px;}
  .status-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;margin-right:4px;display:inline-block;animation:blink 2s ease-in-out infinite;}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:0.4}}
  .close-btn{margin-left:auto;background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:20px;padding:4px 6px;border-radius:6px;transition:color 0.2s,background 0.2s;}
  .close-btn:hover{color:#fff;background:rgba(255,255,255,0.08);}
  .messages{flex:1;overflow-y:auto;padding:20px 16px;display:flex;flex-direction:column;gap:12px;scroll-behavior:smooth;}
  .messages::-webkit-scrollbar{width:4px;}
  .messages::-webkit-scrollbar-thumb{background:var(--border);border-radius:4px;}
  .msg{display:flex;gap:8px;animation:fadeUp 0.3s ease;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
  .msg.user{flex-direction:row-reverse;}
  .msg-avatar{width:30px;height:30px;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px;}
  .msg.bot .msg-avatar{background:linear-gradient(135deg,var(--teal),#0891b2);}
  .msg.user .msg-avatar{background:linear-gradient(135deg,#1e40af,#3b82f6);}
  .bubble{max-width:78%;padding:11px 15px;border-radius:14px;font-size:13.5px;line-height:1.6;word-break:break-word;font-family:'DM Sans',sans-serif;}
  .msg.bot .bubble{background:var(--bg-card);border:1px solid var(--border);color:var(--text-main);border-top-left-radius:4px;}
  .msg.user .bubble{background:linear-gradient(135deg,var(--teal-dim),#0891b2);color:#fff;border-top-right-radius:4px;}
  .typing-bubble{display:flex;gap:5px;align-items:center;padding:14px 16px;}
  .typing-dot{width:7px;height:7px;border-radius:50%;background:var(--teal);animation:bounce 1.2s ease-in-out infinite;}
  .typing-dot:nth-child(2){animation-delay:0.2s;} .typing-dot:nth-child(3){animation-delay:0.4s;}
  @keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
  .suggestions{padding:0 16px 10px;display:flex;flex-wrap:wrap;gap:6px;}
  .suggestion-btn{background:var(--bg-card);border:1px solid var(--border);color:var(--teal);font-family:'DM Sans',sans-serif;font-size:11.5px;padding:5px 11px;border-radius:20px;cursor:pointer;transition:all 0.2s;white-space:nowrap;}
  .suggestion-btn:hover{background:var(--teal-glow);border-color:var(--teal);color:#fff;}
  .input-bar{padding:12px 14px;border-top:1px solid var(--border);display:flex;gap:10px;align-items:flex-end;background:var(--bg-input);flex-shrink:0;}
  .input-bar textarea{flex:1;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;color:var(--text-main);font-family:'DM Sans',sans-serif;font-size:13.5px;padding:10px 13px;resize:none;outline:none;line-height:1.5;max-height:100px;transition:border-color 0.2s;scrollbar-width:none;}
  .input-bar textarea::placeholder{color:var(--text-muted);}
  .input-bar textarea:focus{border-color:var(--teal);}
  .send-btn{width:40px;height:40px;border-radius:10px;flex-shrink:0;background:linear-gradient(135deg,var(--teal),#0891b2);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform 0.2s,opacity 0.2s;}
  .send-btn:hover{transform:scale(1.08);}
  .send-btn:disabled{opacity:0.45;cursor:not-allowed;transform:none;}
  .send-btn svg{width:18px;height:18px;fill:#fff;}
  .fab-tooltip{position:fixed;bottom:38px;right:96px;background:var(--bg-card);border:1px solid var(--border);color:var(--text-main);font-family:'DM Sans',sans-serif;font-size:13px;padding:8px 14px;border-radius:10px;white-space:nowrap;pointer-events:none;box-shadow:var(--shadow);animation:fadeIn 0.4s ease;z-index:998;}
  @keyframes fadeIn{from{opacity:0;transform:translateX(6px)}to{opacity:1;transform:translateX(0)}}
  @media(max-width:440px){.chat-window{width:calc(100vw - 20px);right:10px;bottom:80px;}.fab{bottom:16px;right:16px;}}
`;

export default function DevSpectraChatbot() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Hi! I'm Spectra, DevSpectra's AI assistant.\n\nAsk me anything about our services, tech stack, or how to start your project!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => { if (open) { setTimeout(() => textareaRef.current?.focus(), 300); setShowTooltip(false); } }, [open]);
  useEffect(() => { const t = setTimeout(() => setShowTooltip(false), 4000); return () => clearTimeout(t); }, []);

  const send = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput("");
    setShowSuggestions(false);
    const newMessages = [...messages, { role: "user", text: userText }];
    setMessages(newMessages);
    setLoading(true);
    const history = newMessages.slice(1).map((m) => ({ role: m.role === "user" ? "user" : "assistant", content: m.text }));
    try {
      const reply = await askGroq(history);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "⚠️ Something went wrong. Please try again!" }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };
  const autoResize = (e) => { e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px"; };

  return (
    <>
      <style>{styles}</style>
      {showTooltip && !open && <div className="fab-tooltip">Chat with us 👋</div>}
      <button className={`fab ${open ? "open" : ""}`} onClick={() => setOpen((v) => !v)} aria-label="Toggle chat">
        {open
          ? <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          : <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
        }
      </button>
      <div className={`chat-window ${open ? "visible" : "hidden"}`}>
        <div className="chat-header">
          <div className="avatar">⚡</div>
          <div className="header-info">
            <h3>Spectra AI</h3>
            <p><span className="status-dot" />Online · DevSpectra Assistant</p>
          </div>
          <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="messages">
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.role}`}>
              <div className="msg-avatar">{m.role === "bot" ? "⚡" : "👤"}</div>
              <div className="bubble" style={{ whiteSpace: "pre-wrap" }}>{m.text}</div>
            </div>
          ))}
          {loading && (
            <div className="msg bot">
              <div className="msg-avatar">⚡</div>
              <div className="bubble">
                <div className="typing-bubble">
                  <div className="typing-dot"/><div className="typing-dot"/><div className="typing-dot"/>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        {showSuggestions && (
          <div className="suggestions">
            {SUGGESTIONS.map((s) => <button key={s} className="suggestion-btn" onClick={() => send(s)}>{s}</button>)}
          </div>
        )}
        <div className="input-bar">
          <textarea ref={textareaRef} rows={1} placeholder="Ask about DevSpectra…"
            value={input} onChange={(e) => { setInput(e.target.value); autoResize(e); }}
            onKeyDown={handleKey} disabled={loading}
          />
          <button className="send-btn" onClick={() => send()} disabled={!input.trim() || loading}>
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}*/


import { useState, useRef, useEffect } from "react";

const SUGGESTIONS = [
  "What services do you offer?",
  "What's your tech stack?",
  "How do I start a project?",
  "Do you do mobile apps?",
];

// Calls YOUR backend at port 5000 — same server as contact & careers
async function askGroq(messages) {
  const response = await fetch("https://devspectra-qnwe.onrender.com/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data.reply;
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
  :root {
    --bg-panel:#0d1f3c; --bg-card:#112240; --bg-input:#0f1e38;
    --teal:#0dcfcf; --teal-dim:#0a9e9e; --teal-glow:rgba(13,207,207,0.18);
    --text-main:#e2f0f9; --text-muted:#6b8cae;
    --border:rgba(13,207,207,0.15); --shadow:0 24px 64px rgba(0,0,0,0.55);
  }
  .ds-fab {
    position:fixed; bottom:28px; right:28px; width:60px; height:60px;
    border-radius:50%; background:linear-gradient(135deg,var(--teal),#0891b2);
    border:none; cursor:pointer; display:flex; align-items:center; justify-content:center;
    box-shadow:var(--shadow); z-index:9999;
    transition:transform 0.25s cubic-bezier(.34,1.56,.64,1),box-shadow 0.3s;
    animation:dsFabPulse 3s ease-in-out infinite;
  }
  .ds-fab:hover{transform:scale(1.12);box-shadow:0 0 0 12px var(--teal-glow),var(--shadow);}
  .ds-fab svg{width:26px;height:26px;fill:#fff;transition:transform 0.3s;}
  .ds-fab.open svg{transform:rotate(45deg);}
  @keyframes dsFabPulse{0%,100%{box-shadow:0 0 0 0 rgba(13,207,207,0.35),var(--shadow);}50%{box-shadow:0 0 0 10px rgba(13,207,207,0),var(--shadow);}}

  .ds-chat-window {
    position:fixed; bottom:100px; right:28px; width:390px; height:570px;
    background:var(--bg-panel); border:1px solid var(--border); border-radius:20px;
    display:flex; flex-direction:column; overflow:hidden;
    box-shadow:var(--shadow),0 0 40px rgba(13,207,207,0.08);
    z-index:9998; transform-origin:bottom right;
    transition:opacity 0.3s,transform 0.35s cubic-bezier(.34,1.56,.64,1);
  }
  .ds-chat-window.hidden{opacity:0;transform:scale(0.85) translateY(20px);pointer-events:none;}
  .ds-chat-window.visible{opacity:1;transform:scale(1) translateY(0);}

  .ds-header{padding:18px 20px;background:linear-gradient(135deg,#0a2447,#0d2d52);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:14px;flex-shrink:0;}
  .ds-avatar{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--teal),#0891b2);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;box-shadow:0 0 16px rgba(13,207,207,0.4);}
  .ds-header-info h3{font-family:'Syne',sans-serif;font-weight:700;font-size:15px;color:#fff;}
  .ds-header-info p{font-size:12px;color:var(--teal);margin-top:2px;}
  .ds-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;margin-right:4px;display:inline-block;animation:dsBlink 2s ease-in-out infinite;}
  @keyframes dsBlink{0%,100%{opacity:1}50%{opacity:0.4}}
  .ds-close{margin-left:auto;background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:20px;padding:4px 6px;border-radius:6px;transition:color 0.2s,background 0.2s;}
  .ds-close:hover{color:#fff;background:rgba(255,255,255,0.08);}

  .ds-messages{flex:1;overflow-y:auto;padding:20px 16px;display:flex;flex-direction:column;gap:12px;scroll-behavior:smooth;}
  .ds-messages::-webkit-scrollbar{width:4px;}
  .ds-messages::-webkit-scrollbar-thumb{background:var(--border);border-radius:4px;}

  .ds-msg{display:flex;gap:8px;animation:dsFadeUp 0.3s ease;}
  @keyframes dsFadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
  .ds-msg.user{flex-direction:row-reverse;}
  .ds-msg-avatar{width:30px;height:30px;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px;}
  .ds-msg.bot .ds-msg-avatar{background:linear-gradient(135deg,var(--teal),#0891b2);}
  .ds-msg.user .ds-msg-avatar{background:linear-gradient(135deg,#1e40af,#3b82f6);}
  .ds-bubble{max-width:78%;padding:11px 15px;border-radius:14px;font-size:13.5px;line-height:1.6;word-break:break-word;font-family:'DM Sans',sans-serif;}
  .ds-msg.bot .ds-bubble{background:var(--bg-card);border:1px solid var(--border);color:var(--text-main);border-top-left-radius:4px;}
  .ds-msg.user .ds-bubble{background:linear-gradient(135deg,var(--teal-dim),#0891b2);color:#fff;border-top-right-radius:4px;}

  .ds-typing{display:flex;gap:5px;align-items:center;padding:14px 16px;}
  .ds-tdot{width:7px;height:7px;border-radius:50%;background:var(--teal);animation:dsBounce 1.2s ease-in-out infinite;}
  .ds-tdot:nth-child(2){animation-delay:0.2s;}.ds-tdot:nth-child(3){animation-delay:0.4s;}
  @keyframes dsBounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}

  .ds-suggestions{padding:0 16px 10px;display:flex;flex-wrap:wrap;gap:6px;}
  .ds-chip{background:var(--bg-card);border:1px solid var(--border);color:var(--teal);font-family:'DM Sans',sans-serif;font-size:11.5px;padding:5px 11px;border-radius:20px;cursor:pointer;transition:all 0.2s;white-space:nowrap;}
  .ds-chip:hover{background:var(--teal-glow);border-color:var(--teal);color:#fff;}

  .ds-input-bar{padding:12px 14px;border-top:1px solid var(--border);display:flex;gap:10px;align-items:flex-end;background:var(--bg-input);flex-shrink:0;}
  .ds-input-bar textarea{flex:1;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;color:var(--text-main);font-family:'DM Sans',sans-serif;font-size:13.5px;padding:10px 13px;resize:none;outline:none;line-height:1.5;max-height:100px;transition:border-color 0.2s;scrollbar-width:none;}
  .ds-input-bar textarea::placeholder{color:var(--text-muted);}
  .ds-input-bar textarea:focus{border-color:var(--teal);}
  .ds-send{width:40px;height:40px;border-radius:10px;flex-shrink:0;background:linear-gradient(135deg,var(--teal),#0891b2);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform 0.2s,opacity 0.2s;}
  .ds-send:hover{transform:scale(1.08);}
  .ds-send:disabled{opacity:0.45;cursor:not-allowed;transform:none;}
  .ds-send svg{width:18px;height:18px;fill:#fff;}

  .ds-tooltip{position:fixed;bottom:38px;right:96px;background:var(--bg-card);border:1px solid var(--border);color:var(--text-main);font-family:'DM Sans',sans-serif;font-size:13px;padding:8px 14px;border-radius:10px;white-space:nowrap;pointer-events:none;box-shadow:var(--shadow);animation:dsTooltip 0.4s ease;z-index:9997;}
  @keyframes dsTooltip{from{opacity:0;transform:translateX(6px)}to{opacity:1;transform:translateX(0)}}

  @media(max-width:440px){
    .ds-chat-window{width:calc(100vw - 20px);right:10px;bottom:80px;}
    .ds-fab{bottom:16px;right:16px;}
  }
`;

export default function DevSpectraChatbot() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Hi! I'm Spectra, DevSpectra's AI assistant.\n\nAsk me anything about our services, tech stack, or how to start your project!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const endRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => { if (open) { setTimeout(() => textareaRef.current?.focus(), 300); setShowTooltip(false); } }, [open]);
  useEffect(() => { const t = setTimeout(() => setShowTooltip(false), 4000); return () => clearTimeout(t); }, []);

  const send = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput("");
    setShowSuggestions(false);
    const updated = [...messages, { role: "user", text: userText }];
    setMessages(updated);
    setLoading(true);
    const history = updated.slice(1).map((m) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: m.text,
    }));
    try {
      const reply = await askGroq(history);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "⚠️ Something went wrong. Please try again!" }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };
  const autoResize = (e) => { e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px"; };

  return (
    <>
      <style>{styles}</style>
      {showTooltip && !open && <div className="ds-tooltip">Chat with us 👋</div>}

      <button className={`ds-fab ${open ? "open" : ""}`} onClick={() => setOpen((v) => !v)} aria-label="Toggle chat">
        {open
          ? <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          : <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
        }
      </button>

      <div className={`ds-chat-window ${open ? "visible" : "hidden"}`}>
        <div className="ds-header">
          <div className="ds-avatar">⚡</div>
          <div className="ds-header-info">
            <h3>Spectra AI</h3>
            <p><span className="ds-dot" />Online · DevSpectra Assistant</p>
          </div>
          <button className="ds-close" onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="ds-messages">
          {messages.map((m, i) => (
            <div key={i} className={`ds-msg ${m.role}`}>
              <div className="ds-msg-avatar">{m.role === "bot" ? "⚡" : "👤"}</div>
              <div className="ds-bubble" style={{ whiteSpace: "pre-wrap" }}>{m.text}</div>
            </div>
          ))}
          {loading && (
            <div className="ds-msg bot">
              <div className="ds-msg-avatar">⚡</div>
              <div className="ds-bubble">
                <div className="ds-typing">
                  <div className="ds-tdot"/><div className="ds-tdot"/><div className="ds-tdot"/>
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {showSuggestions && (
          <div className="ds-suggestions">
            {SUGGESTIONS.map((s) => <button key={s} className="ds-chip" onClick={() => send(s)}>{s}</button>)}
          </div>
        )}

        <div className="ds-input-bar">
          <textarea ref={textareaRef} rows={1} placeholder="Ask about DevSpectra…"
            value={input} onChange={(e) => { setInput(e.target.value); autoResize(e); }}
            onKeyDown={handleKey} disabled={loading}
          />
          <button className="ds-send" onClick={() => send()} disabled={!input.trim() || loading}>
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}