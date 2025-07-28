import React, { useRef } from "react";

type Testimonial = {
  image: string;
  name: string;
  stars: number;
  quote: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Timotheus.figma",
    stars: 5,
    quote:
      "I've used several platforms before, but Favex stands out. Fast payouts, great rates and I love how easy it is to trade crypto and gift cards. Plus, their support team is always responsive.",
    role: "Product Designer, Lagos",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Timotheus.figma",
    stars: 5,
    quote:
      "I've used several platforms before, but Favex stands out. Fast payouts, great rates and I love how easy it is to trade crypto and gift cards. Plus, their support team is always responsive.",
    role: "Product Designer, Lagos",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Timotheus.figma",
    stars: 5,
    quote:
      "I've used several platforms before, but Favex stands out. Fast payouts, great rates and I love how easy it is to trade crypto and gift cards. Plus, their support team is always responsive.",
    role: "Product Designer, Lagos",
  },
];

const Testimonial: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="testimonial-wrapper">
      <h2>Trusted by over 10,000+ customers</h2>
      <p>
        ⭐️⭐️⭐️⭐️⭐️ 4.5+ — Score based on thousands of reviews on the Google
        Playstore and Apple App Store
      </p>

      <div className="testimonial-container">
        <button className="arrow left" onClick={() => scroll("left")}>
          &larr;
        </button>
        <div className="testimonial-list" ref={containerRef}>
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <img src={item.image} alt={item.name} className="avatar" />
              <h3>{item.name}</h3>
              <div className="stars">{"⭐".repeat(item.stars)}</div>
              <p className="quote">"{item.quote}"</p>
              <p className="role">— {item.role}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={() => scroll("right")}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
