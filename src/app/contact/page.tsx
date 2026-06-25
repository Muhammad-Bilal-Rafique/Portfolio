"use client";

import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="w-full mt-20 max-w-5xl px-4 pt-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}