import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { track } from '@vercel/analytics/react'
import { LogoMark } from '@/components/Logo'
import { site } from '@/content/site'

const OPEN_EVENT = 'raindrop:open-chat'
const STORAGE_KEY = 'raindrop-chat'
const GREETING = {
  role: 'assistant',
  content: "Hi! I'm Raindrop's AI assistant. Ask me anything about getting more booked jobs, our pricing, or how the lead system works.",
}
const STARTERS = ['What does it cost?', 'How does missed call text back work?', 'Can I get a free AI visibility audit?']

// Opens the chat from anywhere on the site; returns false when the chat is turned off.
export function openChat() {
  if (!site.chatEnabled) return false
  window.dispatchEvent(new Event(OPEN_EVENT))
  return true
}

function load() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY))
    if (Array.isArray(saved) && saved.length) return saved
  } catch {
    // Storage can be blocked (private mode); start fresh.
  }
  return [GREETING]
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => setMessages(load()), [])

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, show)
    return () => window.removeEventListener(OPEN_EVENT, show)
  }, [])

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch {
      // Not critical; the chat just won't survive a page change.
    }
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  if (!site.chatEnabled) return null

  async function send(text) {
    const content = text.trim()
    if (!content || sending) return
    const next = [...messages, { role: 'user', content }]
    setMessages(next)
    setDraft('')
    setSending(true)
    track('chat_message')
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.reply) throw new Error(data.error || `Chat failed (${res.status})`)
      if (data.leadSaved) track('chat_lead')
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: `Sorry, I'm having trouble right now. You can call or text us at ${site.phone}.`, error: true },
      ])
    } finally {
      setSending(false)
    }
  }

  const showStarters = messages.length === 1 && !sending

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Raindrop"
          className="fixed z-[60] inset-x-3 bottom-3 h-[min(80svh,600px)] sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[380px] sm:h-[min(600px,calc(100svh-8rem))] flex flex-col rounded-3xl border border-white/10 bg-[#0a0a0c] shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_60px_rgba(45,212,191,0.15)] overflow-hidden"
        >
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-gradient-to-b from-primary/15 to-transparent">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <LogoMark className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-white leading-tight">Raindrop Assistant</div>
              <div className="text-xs text-white/50 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Replies instantly
              </div>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)} className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-3" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap rounded-2xl ${
                    m.role === 'user'
                      ? 'bg-primary text-black rounded-br-sm'
                      : `bg-white/[0.06] border border-white/10 rounded-bl-sm ${m.error ? 'text-red-300' : 'text-white/90'}`
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white/[0.06] border border-white/10 flex gap-1" aria-label="Assistant is typing">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            {showStarters && (
              <div className="flex flex-wrap gap-2 pt-2">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-sm rounded-full border border-primary/30 bg-primary/10 text-primary px-3.5 py-2 hover:bg-primary/20 transition-colors text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(draft)
            }}
            className="p-3 border-t border-white/10 flex gap-2"
          >
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={1000}
              placeholder="Type your message…"
              aria-label="Message"
              className="flex-1 h-11 rounded-full bg-white/[0.04] border border-white/10 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/60"
            />
            <button
              type="submit"
              disabled={!draft.trim() || sending}
              aria-label="Send message"
              className="w-11 h-11 rounded-full bg-primary text-black flex items-center justify-center disabled:opacity-40 hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="px-4 pb-3 -mt-1 text-[11px] text-white/35 text-center">AI assistant. Share your details and we'll follow up.</p>
        </div>
      )}

      <button
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => {
          if (!open) track('chat_open', { location: 'bubble' })
          setOpen(!open)
        }}
        className={`fixed z-[60] right-4 bottom-4 sm:right-6 sm:bottom-6 w-14 h-14 rounded-full bg-primary text-black shadow-[0_10px_40px_rgba(45,212,191,0.45)] flex items-center justify-center hover:scale-105 transition-transform ${open ? 'max-sm:hidden' : ''}`}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  )
}
