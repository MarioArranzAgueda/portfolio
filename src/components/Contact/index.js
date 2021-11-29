import React from "react";
import Portal from "../Portal";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setName("");
    setEmail("");
    setMessage("");
    setShowModal(false);
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => setShowModal(true))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-5 mx-auto flex flex-wrap sm:flex-nowrap">
        <div className="w-screen lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgTwKgJcpQg0RaSKMYcHeNsQ&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <form
          method="post"
          data-netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full py-2 mt-4 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            If you would like to contact me, please leave your details below and
            I will get back to you as soon as possible.
          </p>
          <div className="relative mb-4 flex-wrap sm:flex-nowrap">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full bg-gray-800 sm:px-5 py-5 flex rounded shadow-md mx-auto">
        <div className="w-full flex justify-center sm:justify-start mx-auto sm:container">
            <a href="https://www.linkedin.com/in/mario-arranz-%C3%A1gueda-48512843/" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-gray-600">
              <AiFillLinkedin className="text-4xl" />
            </a>
            <a href="https://github.com/MarioArranzAgueda" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-gray-600">
              <AiFillGithub className="text-4xl" />
            </a>
        </div>
      </div>
      <Portal isOpen={showModal} handleClose={closeModal}>
        lorem
      </Portal>
    </section>
  );
}
