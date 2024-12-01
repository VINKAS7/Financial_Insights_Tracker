import React, { useState } from 'react';
import StockSearch from './StockSearch';
import StockChart from './StockChart';
import StockSummary from './StockSummary';
import StockNews from './StockNews';

const Dashboard = () => {
  const [stockData, setStockData] = useState(null);

  const handleSearch = (searchParams) => {
    console.log('Search params:', searchParams);
    setStockData({
      symbol: searchParams.symbol,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Stock Tracker</h1>
        <div className="space-y-6">
          <StockSearch onSearch={handleSearch} />
          {stockData && (
            <div className="grid gap-6 md:grid-cols-2">
              <StockSummary />
              <StockChart />
              <div className="md:col-span-2">
                <StockNews />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;