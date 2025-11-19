import { Book } from "../types/book";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, BookOpen, TrendingUp, Sparkles } from "lucide-react";

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
}

export function BookModal({ book, onClose }: BookModalProps) {
  if (!book) return null;

  const difficultyColors = {
    Easy: "text-green-400 bg-green-400/10",
    Moderate: "text-yellow-400 bg-yellow-400/10",
    Challenging: "text-orange-400 bg-orange-400/10",
    Advanced: "text-red-400 bg-red-400/10"
  };

  return (
    <Dialog open={!!book} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-800 border-slate-700">
        <DialogHeader>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-48 flex-shrink-0">
              <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-white mb-2">{book.title}</h2>
                <p className="text-slate-300">{book.author}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="size-4 text-yellow-400" />
                    <span className="text-slate-400">Rating</span>
                  </div>
                  <p className="text-white">{book.rating}/5.0</p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="size-4 text-blue-400" />
                    <span className="text-slate-400">Pages</span>
                  </div>
                  <p className="text-white">{book.pageCount}</p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="size-4 text-purple-400" />
                    <span className="text-slate-400">Difficulty</span>
                  </div>
                  <span className={`inline-block px-2 py-1 rounded text-sm ${difficultyColors[book.difficulty]}`}>
                    {book.difficulty}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="size-4 text-blue-400" />
                    <h3 className="text-white">The Pitch</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{book.pitch}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="size-4 text-emerald-400" />
                    <h3 className="text-white">Why It's on the List</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{book.whyOnList}</p>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
