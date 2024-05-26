import contact_data from "@/data/contact_data";
import ContactButton from "./contactButton";

const Contact = () => {
  return (
    <>
      {contact_data.map((i) => (
        <ContactButton contact={i.name} username={i.username} key={i.id} />
      ))}
    </>
  );
};

export default Contact;
