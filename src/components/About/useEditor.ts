import { useState, useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";
const markdownSource = `# Christopher Ivan Gunardi - Frontend Engineer
*UI/UX Design & Fullstack Enthusiast*

## Introduction
Hello! I'm Ivan, a fresh graduate based in Bekasi, Indonesia. My focus lies in frontend development, but I'm also experienced both as a UI designer and a fullstack developer.

## Work Experience
### Shopee [Internship]
At Shopee, I contributed to Shopee's CRM projects, including Order Management System, Shopee Referral, and Shopee Wishlist. I utilized React, Redux, and Typescript to manage and develop features.

### TaniHub [Internship]
During my time at TaniHub, I worked on core features for TaniFund.com, a B2B and peer-to-peer lending platform. I embraced Vue and followed the Agile workflow.

### Sinarmas [Full-time]
At Sinarmas, I developed a websocket-based chat web application and an email templating service with a rich text editor.

## Freelance Work
- **UI Designer:** Designed interfaces using Figma and Photoshop.
- **Fullstack Developer:** Developed websites for events and small-to-medium companies.
- Notable projects:
  - E-commerce platform
  - End-to-end cashier system and stock management website

## Technical Proficiencies
I'm proficient in various technologies:
- **Frontend:** React, Vue, Redux, Next.js, Typescript, SCSS
- **Design Tools:** Figma, Photoshop
- **Backend:** Node.js, Python, Express
- **DevOps:** Docker

## Motivation
I'm excited about the opportunity to join <InsertCompanyName> as a software developer. I believe it's the perfect environment to enhance my skills and knowledge, and I'm eager to contribute to solving engineering problems.

Looking forward to connecting with you!

Contact: [LinkedIn](https://www.linkedin.com/in/christopher-ivan)
Location: Bekasi, Indonesia`;

const useMarkdownEditor = () => {
  const [code, setCode] = useState<string>(markdownSource);
  const { toastSuccess, toastError } = useContext(NotificationContext);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toastSuccess("copied to clipboard");
    } catch {
      toastError("failed to copy to clipboard");
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "about-ivan.md";
    document.body.appendChild(element);
    element.click();
  };

  return {
    code,
    setCode,
    handleCopy,
    handleDownload,
  };
};

export default useMarkdownEditor;
