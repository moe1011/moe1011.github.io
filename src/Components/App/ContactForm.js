import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  return (
    <div>
      <form
        action="https://formspree.io/f/xpzbyker"
        method="POST"
        className=" rounded-lg p-4 flex flex-col w-full mt-10 md:mt-0"
      >
        <div className="relative mb-4  sm:w-96">
          <label
            htmlFor="emailInput"
            className="leading-7 text-sm text-gray-700"
          >
            Email
          </label>
          <input
            id="emailInput"
            type="email"
            name="_replyto"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="messageInput"
            className="leading-7 text-sm text-gray-700"
          >
            Message
          </label>
          <textarea
            id="messageInput"
            name="message"
            placeholder="Enter your message"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out h-40"
          ></textarea>
        </div>
        <button
          title="Submit Form"
          type="submit"
          className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}
