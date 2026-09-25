
export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Sonkar",
    url: "https://abhisheksonkar.in/",
    image: "https://abhisheksonkar.in/profile.jpg",
    jobTitle: "Computer Science Engineering Student",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Information Technology Surat",
    },
    sameAs: [
      "https://github.com/AbhishekIIITS",
      "https://www.linkedin.com/in/abhishek-sonkar-2b7415328",
      "https://leetcode.com/u/AbhishekIIITS/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
