"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "../ui/badge";

const WorkItem = ({ href, category, img, title, tool, description }) => {
  const [open, setOpen] = useState(false);// handle inconsistent keys in your data

  const isTouchDevice = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  // First tap on the image on touch devices opens the details instead of navigating.
  const handleImageClick = useCallback((e) => {
    if (isTouchDevice()) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  }, []);

  return (
    <div className="group block">
      {/* Image Section (click/tap toggles panel on touch) */}
      <div className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#f4f4f4]">
        <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
          {category}
        </Badge>

        <Link
          href={href || "/"}
          onClick={handleImageClick}
          className="absolute inset-0 block focus:outline-none"
          aria-expanded={open}
        >
          <Image
            src={img}
            fill
            priority
            quality={100}
            alt={title}
            unoptimized={img.endsWith(".gif")}
            className="object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>

      {/* Title + Arrow (arrow always navigates) */}
      <div className="flex items-center justify-between">
        <h3 className="h3">{title}</h3>
        <Link
          href={href || "/"}
          className="btn-accent bg-accent text-white rounded-full w-[35px] h-[35px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-in-out"
          aria-label={`Open ${title}`}
        >
          <FiArrowRight className="sm:text-2xl" />
        </Link>
      </div>

      {/* Tool + Description (hover for desktop, focus/tap for mobile) */}
      <div
        className={`mt-2 max-h-0 overflow-hidden opacity-0 transition-all duration-1000 ease-in-out
        group-hover:max-h-40 group-hover:opacity-100
        group-focus-within:max-h-40 group-focus-within:opacity-100
        ${open ? "max-h-40 opacity-100" : ""}`}
        aria-hidden={!open}
      >
        <p className="text-sm text-gray-700 pt-2 py-1"><span className="font-semibold">Description:</span> {description}</p>
        <p className="text-sm text-gray-700 py-0"><span className="font-semibold">Tools:</span> {tool}</p>
      </div>
    </div>
  );
};

export default WorkItem;
