import React, { useReducer } from "react";
import Portal from "../Portal";

const states = {
  NAME: "name",
  EMAIL: "email",
  MESSAGE: "message",
  INIT: "init"
};
const initialState = {
  name: "",
  email: "",
  message: "",
}

function reducer(state, action) {
  switch (action.type) {
    case states.NAME:
      return {
        ...state,
        name: action.name,
      };
    case states.EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case states.MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case states.INIT:
      return initialState
    default:
      throw new Error('You dont have spicified any state')
  }
}

export default function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [showModal, setShowModal] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const closeErrorModal = () => {
    setShowErrorModal(false);
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
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(response => {
        if(response.status === 200) {
          setShowModal(true);
          dispatch({type: states.INIT})
        } else {
          setShowErrorModal(true);
        }
      })
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
            Contact me
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
              value={state.name}
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) =>
                dispatch({ type: states.NAME, name: e.target.value })
              }
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={state.email}
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) =>
                dispatch({ type: states.EMAIL, email: e.target.value })
              }
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
              value={state.message}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) =>
                dispatch({ type: states.MESSAGE, message: e.target.value })
              }
            />
          </div>
          <button
            disabled={!state.name || !state.message || !state.email}
            type="submit"
            className="text-white rounded text-lg bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 disabled:opacity-30 bg-indigo-500 cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </div>
      <Portal isOpen={showModal} handleClose={closeModal}>
        The data has been sent correctly, thank you very much!
      </Portal>
      <Portal title="Error" isOpen={showErrorModal} handleClose={closeErrorModal}>
        There has been a problem!
      </Portal>
    </section>
  );
}
