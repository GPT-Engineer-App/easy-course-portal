import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-2xl">歡迎來到課程網站</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">這是一個簡易的課程網站，包含基本的頁面佈局。</p>
          <div className="flex justify-center">
            <Button variant="outline">開始學習</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;