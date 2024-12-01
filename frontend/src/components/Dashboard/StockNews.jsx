import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../ui/card';
import { ExternalLink } from 'lucide-react';

const StockNews = ({ news }) => {
  const mockNews = [
    {
      id: 1,
      title: 'Company Announces Strong Q4 Results',
      source: 'Financial Times',
      url: '#',
      date: '2024-03-10'
    },
    {
      id: 2,
      title: 'New Product Launch Expected Next Month',
      source: 'Reuters',
      url: '#',
      date: '2024-03-09'
    },
    {
      id: 3,
      title: 'Industry Analysis: Market Trends',
      source: 'Bloomberg',
      url: '#',
      date: '2024-03-08'
    },
    {
      id: 4,
      title: 'CEO Interview: Future Growth Plans',
      source: 'CNBC',
      url: '#',
      date: '2024-03-07'
    },
    {
      id: 5,
      title: 'Market Analysis: Stock Performance',
      source: 'Wall Street Journal',
      url: '#',
      date: '2024-03-06'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {(news || mockNews).map((item) => (
            <div key={item.id} className="py-4 first:pt-0 last:pb-0">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.source} • {item.date}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StockNews;