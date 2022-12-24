import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Form() {
  //create refs to assign them to the form elemnts
  const notify = () => {
    toast.success("Thanks for your feedback!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const notifyError = () => {
    toast.error("please fill it out!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredMessage = messageRef.current.value;

    const reqBody = {
      name: enteredName,
      message: enteredMessage,
      email: enteredEmail,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json", // to tell that we are sending json data to the api route
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div className="flex flex-wrap justify-around mt-12 py-4 md:space-y-4">
      {/* left side */}
      <div>
        <h2 className="font-semiblod text-2xl"> Contact Stablo </h2>
        <p className="max-w-sm mt-5">
          Have something to say? We are here to help. Fill up the form or send
          email or call phone.
        </p>
        {/* icons */}
        <div className="flex flex-col items-start mt-4">
          {/* first */}
          <div className="flex justify-center items-center space-x-2">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>1734 Sanfransico, CA 93063</span>
          </div>
          {/* seconed */}
          <div className="flex justify-center items-center space-x-2">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>emanabsi30@gmail.com</span>
          </div>
          {/* third */}
          <div className="flex justify-center items-center space-x-2">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>05387922255</span>
          </div>
        </div>
      </div>
      {/*  form */}
      <div>
        <form onSubmit={submitHandler} className="flex flex-col">
          <div className="mb-4 w-[26rem]">
            <label htmlFor="name"></label>
            <input
              value={name}
              type="text"
              id="name"
              ref={nameRef}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md border-2 border-gray-300 placeholder:text-gray-800 outline-none foucs:ring-4 ring-gray-100"
            />
          </div>
          <div className="mb-4 w-[26rem]">
            <label htmlFor="email"></label>
            <input
              value={email}
              type="email"
              id="email"
              ref={emailRef}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border-2 border-gray-300 placeholder:text-gray-800 outline-none foucs:ring-4 ring-gray-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="feedback"></label>
            <textarea
              value={message}
              id="feedback"
              ref={messageRef}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-3 resize-y w-[26rem] h-56 rounded-md border-2 border-gray-300 placeholder:text-gray-800"
            />
          </div>
          <button
            onClick={email && message && name != "" ? notify : notifyError}
            className=" px-3 py-4 w-[26rem] rounded-md text-white font-semibold bg-black text-center text-lg hover:bg-gray-900"
          >
            Send message
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
