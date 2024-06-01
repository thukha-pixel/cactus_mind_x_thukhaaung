'use client';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './faq.module.css';
import { useState } from "react";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is SHRE?",
      answer: "SHRE is a cutting-edge digital business card platform revolutionizing modern networking possibilities. Seamlessly bridge traditional and digital networking methods for more impactful connections, real- time updates on your critical details, and effortless sharing of information with your contacts."
    },
    {
      question: "What products do you offer?",
      answer: "We offer a range of innovative networking solutions, including metal and PVC business cards, phone tags, and table talkers, all designed to streamline your networking experience."
    },
    {
      question: "How do SHRE products work?",
      answer: `1. Order: Choose your preferred SHRE NFC-enabled product. &nbsp;
            2. Setup: Customize your profile via our dashboard and app. &nbsp;
            3. Sharing via NFC: Tap your device against the tag for instant sharing. &nbsp;
            4. Sharing via QR Code: Scan the QR code for quick access. &nbsp;
            5. Effortless Networking: One tap, effortless sharing, instant access.`
    },
    {
      question: "What are the advantages of SHRE products?",
      answer: `With our products, you'll experience effortless connections for an enhanced networking experience. SHRE products also offer real-time updates, to
            keep your contacts updated with your latest
            information, and lead conversion capabilities, to accelerate the process of turning contats into customers. Whether for business or personal use, SHRE
            products are designed to modernize and
            maximize the way you network.`
    },
    {
      question: "Can the other person save and exchange contacts without the SHRE app?",
      answer: "Yes, recipients can save and exchange contacts without being SHRE users or having the SHRE app.",
    },
    {
      question: "How much does it cost?",
      answer: `Our Freemium plan is (and will always be) completely free, meaning you can start your SHRE journey without risk. We are also working on SHRE Pro and
            SHRE Teams, both coming soon, for more
            bespoke and tailored networking solutions.`
    },
    {
      question: "I'd like to hear more about your sustainability commitment.",
      answer: `Our sustainable digital business cards reduce paper waste, contributing to a greener planet while leaving a positive impact on your audience and the
            Earth.`
    },
    {
      question: "What is the lead collection process?",
      answer: `Automatically store and centralize your lead data on our mobile app. You can easily save and filter leads by various criteria (including recency, industry,
                job title or country), without the need for
                the other party to be a SHRE user or to have the SHRE app.`
    }
  ];

  const toggleFAQ = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) =>
      (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.question}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <FontAwesomeIcon
              icon={activeIndex === index ? faChevronUp : faChevronDown}
              className={styles.icon}
            />
          </div>
          <div
            className={`${styles.answer} ${activeIndex === index ? styles.show : ''
              }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;