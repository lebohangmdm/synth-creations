import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground font-semibold">
          &copy; {new Date().getFullYear()} SynthCreations. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
