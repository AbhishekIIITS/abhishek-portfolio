export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Sonkar",
    url: "https://abhishek-portfolio-git.vercel.app",
    jobTitle: "Computer Science Engineering Student",
    sameAs: [
      "https://www.linkedin.com/in/abhishek-sonkar-2b7415328",
      "https://github.com/AbhishekIIITS",
      "https://leetcode.com/u/AbhishekIIITS/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}