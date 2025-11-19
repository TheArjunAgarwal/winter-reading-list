export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  pageCount: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Advanced';
  pitch: string;
  whyOnList: string;
}
