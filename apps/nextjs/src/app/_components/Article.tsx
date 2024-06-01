import Image from "next/image";

import type { ArticleType } from "~/constants";

export const ArticleComp = ({ article }: { article: ArticleType }) => (
  <div className="m-4">
    <h3 className="my-4 font-bold">{article.title}</h3>
    {article.sections.map((section, i) => (
      <div key={i} className="my-4 flex justify-center align-middle">
        {section.image && i % 2 !== 0 && (
          <Image
            src={section.image}
            alt={section.heading}
            height={200}
            width={200}
            style={{
              borderRadius: "20px",
              width: "30%",
              height: "200px",
              marginRight: "20px",
              objectFit: "cover",
            }}
          />
        )}
        <div>
          <h4 className="my-4 font-bold">{section.heading}</h4>
          <p>{section.body}</p>
        </div>
        {section.image && i % 2 === 0 && (
          <Image
            src={section.image}
            alt={section.heading || "Default alt text"}
            height={200}
            width={200}
            style={{
              borderRadius: "20px",
              width: "30%",
              height: "200px",
              marginLeft: "20px",
              objectFit: "cover",
            }}
          />
        )}
      </div>
    ))}
  </div>
);
