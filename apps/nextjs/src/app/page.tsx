import CardComponent from "./_components/Card";

export const runtime = "edge";

export default function HomePage() {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1>Tailwind is Cooooool</h1>
        <div className="flex w-full justify-center gap-10 overflow-x-scroll align-middle">
          <CardComponent
            imageUrl="/butterfly-cat.jpg"
            headerText="Hey mama"
            descriptionText="This is a description of my image. Isn't it bootiful"
            buttonText="Click me daddy"
          />
          <CardComponent
            imageUrl="/orange-cat.jpg"
            headerText="Hey mama"
            descriptionText="This is a description of my image. Isn't it bootiful"
            buttonText="Click me daddy"
          />
          <CardComponent
            imageUrl="/peekaboo-cat.jpg"
            headerText="Hey mama"
            descriptionText="This is a description of my image. Isn't it bootiful"
            buttonText="Click me daddy"
          />
          <CardComponent
            imageUrl="/sunglasses-cat.jpg"
            headerText="Hey mama"
            descriptionText="This is a description of my image. Isn't it bootiful"
            buttonText="Click me daddy"
          />
          <CardComponent
            imageUrl="/under-blanket-cat.jpg"
            headerText="Hey mama"
            descriptionText="This is a description of my image. Isn't it bootiful"
            buttonText="Click me daddy"
          />
        </div>
      </div>
    </main>
  );
}
