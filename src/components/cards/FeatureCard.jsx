import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ title, description, color, link }) => {
  return (
    <div
      className="flex flex-col justify-between p-6 rounded-xl shadow-lg text-center relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ backgroundColor: color }}
    >
      {/* Optional soft overlay for subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2)_0%,transparent_40%)] z-0 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-[#2d3e4e] mb-3">{title}</h3>
        <p className="text-[#2d3e4e] text-sm leading-relaxed">{description}</p>
      </div>

      <Link
        to={link}
        className="mt-6 inline-block px-5 py-2 bg-[#2d3e4e] text-white font-semibold rounded-full hover:bg-[#1f2e3a] transition-colors relative z-10"
      >
        Explore
      </Link>
    </div>
  );
};

export default FeatureCard;
