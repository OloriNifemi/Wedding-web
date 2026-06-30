import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { readJSON, writeJSON } from "../Pages/Storage";
import { WHATSAPP_NUMBER } from "../Pages/Gifts";

const MAX_IMAGE_BYTES = 1.5 * 1024 * 1024; // ~1.5MB, keeps localStorage safe

export default function GiftModal({ gift, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [preview, setPreview] = useState("");
  const [imageError, setImageError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const dialogRef = useRef(null);

  // Close on Escape, keep focus inside the dialog.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_IMAGE_BYTES) {
      setImageError("Image is too large — please use one under 1.5MB.");
      setPreview("");
      return;
    }

    setImageError("");
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.onerror = () => setImageError("Couldn't read that file, try again.");
    reader.readAsDataURL(file);
  };

  const nameValid = anonymous || name.trim().length > 0;
  const phoneValid = anonymous || phone.trim().length > 0;
  const canSend = nameValid && phoneValid && !!preview && !sending;

  const handleSend = () => {
    if (!canSend) return;
    setSending(true);

    const purchased = readJSON("purchased", {});
    purchased[gift.id] = true;
    writeJSON("purchased", purchased);

    // Store history without the heavy base64 image so we don't hit quota.
    const history = readJSON("giftHistory", []);
    history.push({
      giftId: gift.id,
      giftName: gift.name,
      anonymous,
      name: anonymous ? "" : name.trim(),
      phone: anonymous ? "" : phone.trim(),
      message: message.trim(),
      date: new Date().toISOString(),
    });
    writeJSON("giftHistory", history);

    const text = encodeURIComponent(
      `🎁 Wedding Gift Confirmation

Gift:
${gift.name}

${anonymous ? "Anonymous Gift ❤️" : `Name: ${name.trim()}\nPhone: ${phone.trim()}`}

${message.trim() ? `Message: ${message.trim()}` : ""}

Payment screenshot attached below.`
    );

        window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
        "_blank",
        "noopener,noreferrer"
        );

        setPreview("");
        setSending(false);
        setSent(true);
    };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gift-modal-title"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative outline-none max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 text-2xl text-gray-400 hover:text-black"
          >
            ×
          </button>

          {!sent ? (
            <>
              <h2 id="gift-modal-title" className="font-display text-3xl font-light mb-2">
                Confirm Your Gift
              </h2>
              <p className="text-gray-500 mb-8">{gift.name}</p>

              <div className="space-y-5">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={() => setAnonymous(!anonymous)}
                  />
                  <span className="text-sm">Gift anonymously</span>
                </label>

                {!anonymous && (
                  <>
                    <input
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-[var(--gold)]/30 px-4 py-3"
                    />
                    <input
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-[var(--gold)]/30 px-4 py-3"
                    />
                  </>
                )}

                <textarea
                  rows={3}
                  placeholder="Leave a message for the couple..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-[var(--gold)]/30 px-4 py-3 resize-none"
                />

                <div>
                  <label className="block mb-2 text-sm text-gray-500">
                    Upload Payment Screenshot
                  </label>
                  <input type="file" accept="image/*" onChange={handleImage} />
                  {imageError && (
                    <p className="mt-2 text-sm text-red-500">{imageError}</p>
                  )}
                  {preview && (
                    <img
                      src={preview}
                      alt="Payment screenshot preview"
                      className="mt-4 rounded-xl border max-h-52 object-contain"
                    />
                  )}
                </div>

                <button
                  onClick={handleSend}
                  disabled={!canSend}
                  className="w-full py-4 bg-[var(--gold)] text-white tracking-[0.35em] uppercase text-[11px] rounded-xl hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {sending ? "Preparing..." : "Open WhatsApp"}
                </button>
                {!preview && (
                  <p className="text-xs text-gray-400 text-center -mt-2">
                    Add a payment screenshot to continue
                  </p>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">💛</div>
              <h2 className="font-display text-3xl mb-4">One Last Step</h2>
              <p className="text-gray-600 leading-relaxed">
                WhatsApp has opened with your details already filled in.
                Simply attach your payment screenshot and tap Send.
              </p>
              <button
                onClick={onClose}
                className="mt-8 px-6 py-3 border border-[var(--gold)] text-[11px] tracking-[0.35em] uppercase hover:bg-[var(--gold)] hover:text-white transition"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}