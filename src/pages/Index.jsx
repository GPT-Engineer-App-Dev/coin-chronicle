import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const articles = [
  {
    title: "Market Update: Stocks Rally Amid Economic Optimism",
    content: "Stocks surged today as investors grew optimistic about the economic recovery...",
  },
  {
    title: "Tech Giants Release Quarterly Earnings",
    content: "Major tech companies released their quarterly earnings reports today, showing mixed results...",
  },
  {
    title: "Global Markets React to Trade Talks",
    content: "Global markets showed mixed reactions today as trade talks between major economies continued...",
  },
];

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start p-4">
      <header className="w-full py-4 border-b">
        <h1 className="text-4xl font-bold text-center">Financial News</h1>
      </header>
      <main className="w-full max-w-4xl mt-4">
        <ScrollArea className="h-[80vh] w-full p-4 border rounded-md">
          {articles.map((article, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{article.content}</p>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </main>
    </div>
  );
};

export default Index;