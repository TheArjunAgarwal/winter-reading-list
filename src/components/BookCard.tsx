import { Book } from "../types/book";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 hover:scale-105"
    >
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl mb-4 bg-slate-700">
        <ImageWithFallback
          src={book.coverImage}
          alt={`${book.title} cover`}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="space-y-1">
        <h3 className="text-white group-hover:text-blue-300 transition-colors line-clamp-2">
          {book.title}
        </h3>
        <p className="text-slate-400">{book.author}</p>
      </div>
    </div>
  );
}
