import ContactForm from "@components/contact-form";

export default function ContactPage() {
  return <ContactForm />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}