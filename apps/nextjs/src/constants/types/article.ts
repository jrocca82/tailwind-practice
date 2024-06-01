// Define what a single section looks like
export interface SectionType {
    heading: string;
    body: string;
    image?: string; // make image optional
}

// Define the structure for the ArticleType
export interface ArticleType {
    title: string;
    sections: SectionType[];
}