import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Your App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
