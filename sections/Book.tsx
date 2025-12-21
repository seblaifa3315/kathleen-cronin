"use client";

import { ExternalLink, Star } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { author, book } from "@/data/content";

export default function Book() {
  return (
    <section id="book" className="py-24 lg:py-32 bg-bg1">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Book Cover */}
          <div className="flex flex-col">
            {/* Image + Shadow container */}
            <div className="relative group w-full">
              {/* Shadow / back layer */}
              <div className="absolute inset-0 bg-linear-to-br from-(--accent1)/20 to-(--accent2)/20 rounded-lg rotate-3 transition-transform duration-500 group-hover:rotate-6 z-0" />

              {/* Book image */}
              <img
                src={book.coverPicture}
                alt="Book Cover"
                className="relative w-full h-auto object-cover rounded-lg z-10 shadow-2xl overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Book metadata */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
              {/* Language */}
              <div className="space-y-1">
                <p className="text-xs tracking-wider text-secondary/80 font-light italic">
                  Language
                </p>
                <p className="text-xs font-medium text-secondary/40">
                  {book.language}
                </p>
              </div>

              {/* Publisher */}
              <div className="space-y-1">
                <p className="text-xs tracking-wider text-secondary/80 font-light italic">
                  Publisher
                </p>
                <p className="text-xs font-medium text-secondary/40">
                  {book.Publisher}
                </p>
              </div>

              {/* Release date */}
              <div className="space-y-1">
                <p className="text-xs tracking-wider text-secondary/80 font-light italic">
                  Release date
                </p>
                <p className="text-xs font-medium text-secondary/40">
                  {book.ReleaseDate}
                </p>
              </div>

              {/* ISBN */}
              <div className="space-y-1">
                <p className="text-xs tracking-wider text-secondary/80 font-light italic">
                  ISBN
                </p>
                <p className="text-xs font-medium text-secondary/40">
                  {book.ISBN}
                </p>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-bg4 text-accent1 text-xs tracking-wider uppercase font-light">
                New Release
              </div>
              <h3 className="text-5xl lg:text-6xl font-serif font-light text-primary">
                {book.title}
              </h3>
              <h3 className="text-5xl lg:text-6xl font-serif font-light text-primary">
                {book.subtitle}
              </h3>
              <div className="flex items-center">
                <StarRating rating={book.rate} />
                <span className="ml-2 text-secondary text-sm">
                  {book.rate} out of 5 stars
                </span>
              </div>
            </div>

            <div className="space-y-6 text-secondary leading-relaxed text-md font-light">
              <p>
                <em>How we did it retired at 55 And How We Continue To Do It</em>. Land-lording for Dummies shows you how to find, negotiate, and buy real estate with the goal of renovating and renting it out. Learn to calculate repair costs, rent, and returns, and discover strategies to market your properties and keep ideal tenants long-term.
              </p>
              <p>
                With the right mindset and passive rental income, you can pay off mortgages early, expand your portfolio without refinancing, and repeat this investment strategy successfully. Become a private landlord and retire debt-free in just 23 years, living entirely off your rental income
              </p>
            </div>

            <div className="pt-4">
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 hover:bg-accent3 bg-accent2 text-white text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Get Your Copy Here
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
