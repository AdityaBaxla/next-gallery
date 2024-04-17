import { ConsoleLogWriter } from "drizzle-orm";
import Link from "next/link";

const imageURLs = [
  "https://utfs.io/f/990ad081-fc89-4a3e-8899-bf0ae68e6f65-b10hw9.jpg",
  "https://utfs.io/f/505be45c-7ccf-4343-b1fd-19f44f2c437b-gxqujg.jpg",
  "https://utfs.io/f/31f06788-5668-4cb8-9d54-ff15fe85a6f7-9xgkzg.jpg",
  "https://utfs.io/f/3e915393-edd9-4cce-89af-bcd314982a41-rswn0n.jpg",
];

const mockImages = imageURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
