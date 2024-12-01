import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StockSummary = ({ summary }) => {
  const mockSummary = {
    currentPrice: 150.25,
    change: 2.5,
    percentageChange: 1.67,
    volume: '1.2M',
    marketCap: '2.5T',
    dayHigh: 152.00,
    dayLow: 148.50
  };

  const data = summary || mockSummary;
  const isPositive = data.change > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="text-3xl font-bold">${data.currentPrice}</div>
            <div className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span className="font-medium">
                {isPositive ? '+' : ''}{data.change} ({data.percentageChange}%)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500">Volume</div>
              <div className="font-medium">{data.volume}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Market Cap</div>
              <div className="font-medium">{data.marketCap}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Day High</div>
              <div className="font-medium">${data.dayHigh}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Day Low</div>
              <div className="font-medium">${data.dayLow}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockSummary;