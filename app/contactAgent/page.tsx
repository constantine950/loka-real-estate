"use client";

import { Suspense } from "react";
import ContactAgentForm from "./ContactAgentForm";

const ContactAgentPage = () => {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <ContactAgentForm />
    </Suspense>
  );
};

export default ContactAgentPage;
