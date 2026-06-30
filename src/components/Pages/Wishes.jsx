import { useState } from "react";
import { Eyebrow, SectionTitle } from "../Ui/Ui";

export default function Wishes() {
const [list, setList] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem("wishes")) || [];
  } catch {
    return [];
  }
});

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const add = (e) => {
    e.preventDefault();

    if (!name.trim() || !text.trim()) return;

    const next = [{ name, text }, ...list];

    setList(next);
    localStorage.setItem("wishes", JSON.stringify(next));

    setName("");
    setText("");
  };
  return (
    <section id="wishes" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="text-center mb-12"><Eyebrow>Your words, our keepsake</Eyebrow><SectionTitle>Guest Wishes</SectionTitle></div>
      <div className="grid lg:grid-cols-2 gap-10">
        <form onSubmit={add} className="space-y-4">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
            className="w-full bg-transparent border-b border-[var(--gold)]/40 focus:border-[var(--gold)] py-3 outline-none" />
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a heartfelt wish…" rows={4}
            className="w-full bg-transparent border-b border-[var(--gold)]/40 focus:border-[var(--gold)] py-3 outline-none resize-none" />
            <div className="flex justify-center items-center">
              <button className="px-8 py-3 text-xs tracking-[0.3em] rounded-md uppercase border border-[var(--gold)] text-[var(--gold-deep)] hover:bg-[var(--gold)] hover:text-white">Send wish</button>
            </div>
        </form>
        <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
          {list.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[var(--gold)]/30 bg-white/50 p-10 text-center">
              <h3 className="font-display text-2xl mb-3 text-[var(--gold-deep)]">
                No wishes yet
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Be the first to leave a heartfelt message for the couple. Your words will
                become part of their forever memories. 💛
              </p>
            </div>
          ) : (
            list.map((w, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--gold)]/20 bg-white p-5"
              >
                <p className="italic font-display">"{w.text}"</p>

                <p className="mt-3 text-xs tracking-[0.3em] uppercase text-[var(--gold-deep)]">
                  — {w.name}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
