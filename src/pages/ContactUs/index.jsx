import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactUs() {
  return (
    <div className="w-full py-10 ">
      <div className="pb-10 px-4">
        <h1 className="text-center text-3xl font-bold capitalize py-1">
          Contact to 6ENSE
        </h1>
        <h3 className=" text-center font-medium text-base textBlack py-1 max-w-[800px] mx-auto">
          Take charge and buy 6OS tokens in presale using ETH, USDT, or bank
          card before it lists on DEX.
        </h3>
      </div>
      <div className=" flex  justify-center flex-wrap md:flex-nowrap ">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default ContactUs;
