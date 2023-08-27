import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import CodeEditor from "@uiw/react-textarea-code-editor";

const markdownSource = `# Christopher Ivan Gunardi - Frontend Engineer
*UI/UX Design & Fullstack Enthusiast*

## Introduction
Hello! I'm Christopher Ivan Gunardi, a recent graduate based in Bekasi, Indonesia. My focus lies in frontend development, and I've also explored various other aspects of software engineering.

## Work Experience
### Shopee Internship
At Shopee, I contributed to Shopee's CRM projects, including Order Management System, Shopee Referral, and Shopee Wishlist. I utilized React, Redux, and Typescript to manage and develop features.

### TaniHub Internship
During my time at TaniHub, I worked on core features for TaniFund.com, a B2B and peer-to-peer lending platform. I embraced Vue and followed the Agile workflow.

## Freelance Work
I've diversified my skills through freelance work:
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

const Editor = () => {
  const [code, setCode] = useState<string>(markdownSource);

  const { theme } = useTheme();

  return (
    <div className="my-4 border border-solid border-grey dark:border-dark-grey">
      <CodeEditor
        value={code}
        language="markdown"
        placeholder="Type whatever passes your mind."
        onChange={(evn) => setCode(evn.target.value)}
        onKeyDown={(e) => e.stopPropagation()}
        padding={15}
        style={{
          fontSize: 16,
          backgroundColor: theme.colorBgBase,
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </div>
  );
};

export default Editor;
