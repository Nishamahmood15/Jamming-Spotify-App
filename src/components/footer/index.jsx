import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="flex  flex-row justify-center gap-x-4 text-lg font-semibold text-white  py-7 bg-custom">
        {`© ${new Date().getFullYear()}, Made with `}
        <div>❤️</div>
        {` by `}
        Group 9
      </div>
    </div>
  );
}
