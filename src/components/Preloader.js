"use client";
import { useEffect, useState } from "react";

const Preloader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish(); // Tell the app preloading is done
    }, 3000); // Change duration as you like (in ms)

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    loading && (
      <div className="fixed top-0 left-0 w-full h-screen bg-pink-200 flex items-center justify-center z-50">
        <h1 className="text-4xl font-bold text-pink-700 animate-bounce">
          Sinha Afroz ♡
        </h1>
      </div>
    )
  );
};

export default Preloader;
