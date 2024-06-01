import { startHere } from "~/constants";
import { ArticleComp } from "./_components/Article";

import "./globals.css";

import Image from "next/image";

export const runtime = "edge";

export default function HomePage() {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col justify-center align-middle">
        <div className="flex justify-center gap-4 align-middle">
          <Image
            src="/logo.png"
            alt="logo"
            height={1000}
            width={1000}
            style={{ borderRadius: "20px", height: "150px", width: "300px" }}
          />
        </div>
        <div className="flex w-1/3 justify-between self-center">
          <button
            className="bg-secondary font-bold"
            style={{ borderRadius: "10px" }}
          >
            <p> Start Here</p>
          </button>
          <button
            className="bg-secondary font-bold"
            style={{ borderRadius: "10px" }}
          >
            <p>View Recipes</p>
          </button>
        </div>
        <div className="flex justify-center align-middle">
          <ArticleComp article={startHere} />
        </div>
      </div>
    </main>
  );
}
