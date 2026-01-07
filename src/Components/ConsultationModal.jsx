import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationModal({ open, onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    address: "",
    purpose: "",
  });

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  const update = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();

    // minimal validation
    if (!form.name.trim() || !form.company.trim() || !form.purpose.trim()) return;

    // Here later you can send to backend/email
    onSuccess?.(form);
    onClose?.();

    // reset for next time
    setForm({ name: "", company: "", address: "", purpose: "" });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[90] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <motion.div
              className="w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-blue-100 overflow-hidden"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Book a consultation"
            >
              {/* Header */}
              <div className="px-6 py-5 bg-gradient-to-r from-blue-800 to-green-700 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Book a Consultation</h3>
                  <p className="text-white/85 text-sm mt-1">
                    Share details — we’ll reach out shortly.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white text-xl leading-none"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <form onSubmit={submit} className="px-6 py-6 space-y-4">
                <Field
                  label="Name *"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                />

                <Field
                  label="Company name *"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Brand / Organization"
                />

                <Field
                  label="Address"
                  value={form.address}
                  onChange={update("address")}
                  placeholder="City, Country"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What for? *
                  </label>
                  <textarea
                    value={form.purpose}
                    onChange={update("purpose")}
                    rows={4}
                    placeholder="Example: Activewear production, sampling, capacity inquiry..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    * Required fields: Name, Company, What for
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 rounded-xl px-4 py-3 text-white font-semibold
                    bg-gradient-to-r from-green-500 to-blue-600 hover:opacity-95"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>
  );
}
