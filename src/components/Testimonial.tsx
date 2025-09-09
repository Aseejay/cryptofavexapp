import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";
import { Allstars, SmallStar } from "../icon";

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 370, behavior: "smooth" });
    }
  };

  // Scroll tracking
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll only on desktop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || window.innerWidth <= 768) return;

    const interval = setInterval(() => {
      const reachedEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
      if (reachedEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 370, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const testimonialData = [
    {
      name: "Olumade Johnson",
      message:
        "Favex is hands down the best app I’ve ever used for exchange. The interface is clean, intuitive, and easy to navigate, even for someone who isn’t tech-savvy. From login to transaction, it takes less than 2 minutes. The real-time exchange rates are always better than banks or other platforms. Everything just works.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Akinbode Seyifunmi",
      message:
        "What truly impressed me was the speed. I’ve made transfers in under two minutes, and the notifications at every step give complete peace of mind. It’s incredibly fast and reliable - perfect for frequent traders. Transactions are smooth, consistent, and the platform delivers exactly what it promises.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Ebuka Samuel",
      message:
        "Favex customer support is absolutely top-tier. I had a small issue during verification and reached out, they responded within minutes, resolved the issue, and followed up the next day to ensure everything worked perfectly. That kind of care and accountability is rare in today’s platforms.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Chinedu Okeke",
      message:
        "I love how transparent Favex is. There are no hidden fees, the transaction history is easy to track, and everything works just the way it should. Whether it’s a personal transfer or a business exchange, I trust Favex completely. It’s reliable, honest, and refreshingly straightforward.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Tolu Adebayo",
      message:
        "Favex isn’t just an app, it’s a game changer. It’s secure, fast, and incredibly user-friendly. The team behind it truly cares, and it shows. I’ve recommended Favex to family, friends, and colleagues. We all agree, it’s the best exchange app we’ve ever used. Everything just works seamlessly.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Aminu Musa",
      message:
        "I’ve recommended Favex to everyone I know, family, friends, and coworkers. It’s secure, fast, and simply works the way a financial app should, but better. From the user experience to the real-time transactions and support, it’s clearly built with care. If you want reliability, this is it.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Fatima Olayemi",
      message:
        "Seamless experience from start to finish. I’ve used many platforms for currency exchange, but Favex is by far the most efficient. I can complete a transaction in under two minutes with full confidence in the rate I’m getting. It’s fast, secure, and reliable - exactly what I need every time.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Ibrahim Nwachukwu",
      message:
        "It’s the little things that make Favex stand out. The design is slick, but beyond that, everything just works. No glitches, no guesswork, just a smooth, secure transaction every time. I trust Favex with every transfer and recommend it to anyone looking for a no-stress experience.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Adaeze Onuoha",
      message:
        "Favex has completely changed how I handle international payments. The speed is unmatched, and I get notified at every stage. It gives me total peace of mind. I used to dread currency transfers, now it’s the easiest part of my day. Smooth, secure, and built for real-world use.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Chika Okonkwo",
      message:
        "Incredible app, even better support team. I had a technical issue during setup, and within 10 minutes, the team not only fixed it but explained what happened. That kind of accountability is rare these days. Favex isn’t just a product, it’s a well-supported experience.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Uche Madueke",
      message:
        "I’ve used Favex for both personal and business transactions, and it’s never let me down. The transparency is refreshing, no hidden fees or surprise rate changes. It’s become my go-to app for anything exchange-related. It’s consistent, fast, and always gets the job done right.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Zainab Lawal",
      message:
        "Favex delivers exactly what it promises, speed, security, and simplicity. As someone who values efficiency, this app is a dream. Transfers are lightning-fast, the rates are always competitive, and the whole process just works. Favex is now my default for all things exchange.",
      role: "User, Favex",
      image: avatar,
    },
    {
      name: "Seyi Ayodeji",
      message:
        "From onboarding to transaction, everything is frictionless. I was up and running in minutes, and the app guides you clearly every step of the way. Whether you’re new to exchange apps or experienced, Favex makes the process easy, fast, and completely stress-free. It’s perfect.",
      role: "User, Favex",
      image: avatar,
    },
  ];

  return (
    <section className="testimonial-section">
      {/* Header with slide-up effect */}
      <motion.div
        className="testimonial-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2>Trusted by 50,000+ customers</h2>
        <div className="stars">
          <Allstars />
        </div>
        <p>
          Score based on thousands of reviews on the Google Playstore <br />
          and Apple App Store
        </p>
      </motion.div>

      {/* Cards container with animation */}
      <div className="testimonial-content-container">
        <motion.div
          className="testimonial-slider"
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
            hidden: {},
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonialData.map((item, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={item.image} alt="user" className="avatar" />
              <h4 className="name">{item.name}</h4>
              <div className="stars">
                <SmallStar />
              </div>
              <p className="message">{item.message}</p>
            </motion.div>
          ))}
        </motion.div>

        {!atEnd && (
          <motion.button
            className="next-arrow"
            onClick={scrollRight}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ›
          </motion.button>
        )}
      </div>
    </section>
  );
};
