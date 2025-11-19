import { honorableMentions } from "../data/books";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { BookModal } from "./BookModal";
import { Book } from "../types/book";

export function HonorableMentions() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center mb-8">Honourable Mentions</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 justify-center">
          {honorableMentions.map((book) => (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-[2/3] w-32 rounded-lg overflow-hidden shadow-lg mb-3 bg-slate-700">
                <ImageWithFallback
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>
              <div className="space-y-1 text-center w-32">
                <p className="text-white text-sm line-clamp-2">{book.title}</p>
                <p className="text-slate-400 text-xs">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </>
  );
}