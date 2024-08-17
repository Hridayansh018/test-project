import { CONTACT } from "../constants";

const ContactSection = () => {
  return (
    <section id="contact" className="container mx-auto py-15">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
      <div className="text-neutral-400">
        {CONTACT.map((contact, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <p className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center tracking-tighter lg:text-3xl">
              {contact.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
