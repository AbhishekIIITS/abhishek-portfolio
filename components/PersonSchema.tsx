
export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://abhisheksonkar.in/#person",
    name: "Abhishek Sonkar",
    url: "https://abhisheksonkar.in",
    jobTitle: "Computer Science Engineering Student",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Information Technology Surat",
    },
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
