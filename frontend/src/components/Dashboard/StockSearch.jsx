import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { Calendar, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

const popularStocks = [
  'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'META', 'NFLX'
];

const StockSearch = ({ onSearch }) => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [alertThreshold, setAlertThreshold] = useState({
    lower: 10,
    upper: 10
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({
      symbol: stockSymbol,
      startDate,
      endDate,
      alertThreshold
    });
  };

  const handleStockChipClick = (stock) => {
    setStockSymbol(stock);
    onSearch({
      symbol: stock,
      startDate,
      endDate,
      alertThreshold
    });
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input
                placeholder="Enter stock symbol (e.g., AAPL)"
                value={stockSymbol}
                onChange={(e) => setStockSymbol(e.target.value)}
                className="h-12 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {popularStocks.map((stock) => (
                <button
                  key={stock}
                  onClick={() => handleStockChipClick(stock)}
                  className="px-3 py-1.5 rounded-lg bg-secondary/50 text-primary text-sm font-medium hover:bg-secondary/70 transition-colors"
                >
                  {stock}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Start Date</label>
                <div className="relative">
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="pl-3 pr-10"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">End Date</label>
                <div className="relative">
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="pl-3 pr-10"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-muted-foreground">Alert Thresholds</label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Set price movement alerts:</p>
                      <p>Lower: Alert when stock drops below this %</p>
                      <p>Upper: Alert when stock rises above this %</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    type="number"
                    placeholder="Lower threshold %"
                    value={alertThreshold.lower}
                    onChange={(e) => setAlertThreshold({ ...alertThreshold, lower: e.target.value })}
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder="Upper threshold %"
                    value={alertThreshold.upper}
                    onChange={(e) => setAlertThreshold({ ...alertThreshold, upper: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Search
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StockSearch;