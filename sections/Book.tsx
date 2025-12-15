"use client";

import {ExternalLink, Star} from "lucide-react";

export default function Book() {
    return (
        <section id="book" className="py-24 lg:py-32 bg-background1">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Book Cover */}
                    <div className="relative group">
                        {/* Shadow / back layer */}
                        <div className="absolute inset-0 bg-bookShadow opacity-20 rounded-lg rotate-3 transition-transform duration-500 group-hover:rotate-6 z-0" />

                        {/* Book image */}
                        <img
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/prismatic-romantic-novel-book-cover-template-design-3ccf99c330ac08940e85222819525b47_screen.jpg?ts=1734006040"
                            alt="Book Cover"
                            className="relative w-full h-full object-cover rounded-lg z-10 shadow-2xl overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-all duration-500"
                        />
                    </div>

                    {/* Book Details */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-2 bg-badgeBg text-badgeText text-xs tracking-wider uppercase font-light">New Release</div>
                            <h2 className="text-5xl lg:text-6xl font-serif font-light text-title">Lost Stars</h2>
                            <div className="flex items-center gap-1 text-star">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                                <span className="ml-2 text-text text-sm">4.8 out of 5 stars</span>
                            </div>
                        </div>
                        <div className="space-y-6 text-text leading-relaxed text-lg font-light">
                            <p>A sweeping tale of love, loss, and redemption that spans decades and continents. When Sarah discovers a collection of letters in her grandmother's attic, she uncovers a hidden past that changes everything she thought she knew about her family.</p>
                            <p>
                                Set against the backdrop of post-war Europe and modern-day New York, <em>Whispers of the Heart</em> weaves together two timelines in a story that explores the enduring power of love and the secrets that bind us across generations.
                            </p>
                            <p>A beautifully crafted debut that will stay with you long after you turn the final page.</p>
                        </div>

                        <div className="pt-4">
                            <a href="https://www.amazon.com/Stars-Starboard-Beach-Tracy-McJames/dp/B0G112BRR7/ref=sr_1_6?crid=24FNJ7DV3LFBT&dib=eyJ2IjoiMSJ9.L1lrrtKlFDS0PHS6FaNtbQA9cDu1E1Zv8MEwhcYBt18pm8QFYm6zvScuTk7pe9OjTneGHBm1bDT2eU1_Uzt53is7wbzHeKdHPu2Te4X8Lg9Xk-UsHk7mjFV_xckqstHPc4u25eF7QCFDUTZLZ-ke_GE3BpnMDKxyDiEaALfsoYvbt2L9oMMT3OR7VYdA5QGcaNQydiYysW1mDbLMOyK8PdCXtVBtz4ERg011rWj-Mi4.r62aiTjUFCclPr91XlPwkDUzuym9P7ScOBbOZiJNdO0&dib_tag=se&keywords=lost+stars&qid=1765821688&s=books&sprefix=lost+stars%2Cstripbooks%2C223&sr=1-6" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-3 px-10 py-4 bg-button hover:bg-buttonHover text-white text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group`}>
                                Get Your Copy on Amazon
                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <p className="mt-4 text-sm text-gray-500 font-light">Available in Hardcover, Paperback, and Kindle</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
