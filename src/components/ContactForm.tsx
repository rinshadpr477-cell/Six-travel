"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/validation";
import site from "@/content/site.json";

export default function ContactForm() {
    const { contact } = site;
    const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

    const { register, handleSubmit, reset, formState: { errors } } = useForm<LeadInput>({
        resolver: zodResolver(leadSchema),
    });

    async function onSubmit(data: LeadInput) {
        setStatus("submitting");
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
            reset();
        } catch {
            setStatus("error");
        }
    }

    if (status === "sent") {
        return (
            <div className="border border-line bg-stone-2 px-8 py-14 text-center">
                <p className="eyebrow mb-3">{contact.successHeading}</p>
                <p className="font-display text-2xl text-ink">{contact.successBody}</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border border-line bg-stone-2 p-8 md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" error={errors.name?.message}>
                    <input {...register("name")} className="field" placeholder={contact.placeholders.name} />
                </Field>
                <Field label="Company" error={errors.company?.message}>
                    <input {...register("company")} className="field" placeholder={contact.placeholders.company} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                    <input {...register("email")} type="email" className="field" placeholder={contact.placeholders.email} />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                    <input {...register("phone")} className="field" placeholder={contact.placeholders.phone} />
                </Field>
            </div>

            <div className="mt-6">
                <Field label="What do you need?" error={errors.need?.message}>
                    <select {...register("need")} className="field" defaultValue="">
                        <option value="" disabled>Select a service</option>
                        {contact.serviceOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </Field>
            </div>

            <div className="mt-6">
                <Field label="Anything else? (optional)">
                    <textarea
                        {...register("message")} className="field min-h-24 resize-none" placeholder={contact.placeholders.message} />
                </Field>
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-8 w-full bg-ink px-6 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-stone transition-opacity hover:opacity-85 disabled:opacity-60 sm:w-auto"
            >
                {status === "submitting" ? "Submitting..." : "Submit enquiry"}
            </button>

            {status === "error" && (
                <p className="mt-3 text-sm text-red-700">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <label className="block">
            <span className="eyebrow mb-2 block">{label}</span>
            {children}
            {error && <span className="mt-1 block text-xs text-red-700">{error}</span>}
        </label>
    );
}