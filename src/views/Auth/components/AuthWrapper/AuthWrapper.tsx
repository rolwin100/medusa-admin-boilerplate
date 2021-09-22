/* eslint-disable max-len */
import React from "react";

interface PropTypes {
    title: string;
    description?: string;
    children: React.ReactNode;
}
const AuthWrapper: React.FC<PropTypes> = ({ title, description, children }) => (
  <>
    <div className="h-screen flex items-center p-2">
      <div className="p-8 w-full max-w-3xl mx-auto bg-white rounded-xl content-center shadow items-center pb-24">
        <div className="mb-14">
          <p className="text-4xl text-gray-600 font-bold text-black mb-0 mt-10">{title}</p>
          {description && <p className="text-gray-400 my-6">{description}</p>}
        </div>
        <div>
          {children}
        </div>
        <div className="flex items-center justify-center mb-16">
          <span className="h-px w-40 bg-gray-400" />
          <span className="text-gray-400 font-normal mx-5">Or continue with</span>
          <span className="h-px w-40 bg-gray-400" />
        </div>
        <button className="w-full cursor-pointer block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded px-4 py-3 border border-solid border-gray-300" type="button">
          <div className="flex items-center justify-center">
            <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <defs><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" id="a" /></defs>
              <clipPath id="b"><use overflow="visible" xlinkHref="#a" /></clipPath>
              <path clipPath="url(#b)" d="M0 37V11l17 13z" fill="#FBBC05" />
              <path clipPath="url(#b)" d="M0 11l17 13 7-6.1L48 14V0H0z" fill="#EA4335" />
              <path clipPath="url(#b)" d="M0 37l30-23 7.9 1L48 0v48H0z" fill="#34A853" />
              <path clipPath="url(#b)" d="M48 48L17 24l-4-3 35-10z" fill="#4285F4" />
            </svg>
            <span className="ml-4">Log in with Google</span>
          </div>
        </button>
        <button className="w-full mt-7 cursor-pointer block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded px-4 py-3 border border-solid border-gray-300" type="button">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            <span className="ml-4">Log in with Github</span>
          </div>
        </button>
      </div>
    </div>
  </>
);

AuthWrapper.defaultProps = {
  description: "",
};

export default AuthWrapper;
