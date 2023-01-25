import { useFetchLinksQuery, useSendFormDataMutation } from "../store";
import { BsTelephoneOutbound, BsEnvelope } from "react-icons/bs";
import { useState } from "react";
import Button from "../components/Button";

function ContactMePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [desc, setDesc] = useState("");

  //calling RTK Query Actions
  const { data, isLoading } = useFetchLinksQuery();
  const [sendData, sendDataResult] = useSendFormDataMutation();

  //controlled Inputs
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleMobileChange = (event) => {
    setMobile(parseInt(event.target.value) || 0);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  //handling Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const requestInfo = { name, email, mobile, desc };

    sendData(requestInfo);
    setName("");
    setEmail("");
    setMobile(null);
    setDesc("");
  };

  //displaying form
  let contactInfo;

  if (!isLoading) {
    const email = data?.sections
      .filter((section) => {
        return section.label.toLowerCase() === "contact";
      })[0]
      .content.split(" ")[0];
    const mobile = data?.sections
      .filter((section) => {
        return section.label.toLowerCase() === "contact";
      })[0]
      .content.split(" ")[1];
    contactInfo = { email, mobile };
  }

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex flex-col sm:flex-row justify-around pt-9 text-sm lg:text-xl text-primary">
        <div className="flex flex-row  bg-primary p-2 rounded-lg text-on-primary">
          <BsTelephoneOutbound />
          <span className="ml-3 leading-5">
            {contactInfo ? contactInfo?.mobile || "" : ""}
          </span>
        </div>
        <div className="flex flex-row bg-primary p-2 rounded-lg text-on-primary">
          <BsEnvelope />
          <span className="ml-3 leading-5">
            {contactInfo ? contactInfo?.email || "" : ""}
          </span>
        </div>
      </div>

      <div className="flex flex-col w-4/5 mx-auto mt-24 text-primary">
        <form onSubmit={handleFormSubmit} className="text-center">
          <div className="mb-3">
            <label className="inline-block bg-primary-container text-primary rounded mr-2 w-24 text-center">
              Name
            </label>
            <input
              value={name}
              onChange={handleNameChange}
              className="rounded-sm w-1/3 border-2 border-primary-container focus:border-primary focus:outline-none"
            ></input>
          </div>
          <div className="mb-3">
            <label className="inline-block w-24 text-center bg-primary-container text-primary rounded mr-2">
              Mobile
            </label>
            <input
              value={mobile ? mobile : ""}
              onChange={handleMobileChange}
              className="rounded-sm w-1/3 border-2 border-primary-container focus:border-primary focus:outline-none"
            ></input>
          </div>
          <div className="mb-3">
            <label className="inline-block w-24 text-center bg-primary-container text-primary rounded mr-2">
              Email
            </label>
            <input
              value={email}
              onChange={handleEmailChange}
              className="rounded-sm w-1/3 border-2 border-primary-container focus:border-primary focus:outline-none"
              type="email"
            ></input>
          </div>
          <div>
            <label className="inline-block w-24 text-center bg-primary-container text-primary rounded mr-2">
              Description
            </label>
            <textarea
              value={desc}
              onChange={handleDescChange}
              className="rounded-sm w-1/3 border-2 border-primary-container focus:border-primary focus:outline-none"
              rows={5}
            ></textarea>
          </div>
          <div className="mt-9">
            <Button
              loading={sendDataResult.isLoading}
              primary
              rounded
              className="mx-auto"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMePage;
