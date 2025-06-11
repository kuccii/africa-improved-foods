import { News } from '../components/News';

export const NewsPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest News</h1>
        <News />
      </div>
    </div>
  );
}; 