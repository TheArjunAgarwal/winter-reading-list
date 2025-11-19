import { useState } from "react";
import { BookCard } from "./BookCard";
import { BookModal } from "./BookModal";
import { mainBooks } from "../data/books";
import { Book } from "../types/book";

export function BookGrid() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {mainBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </div>

      <BookModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </>
  );
}
