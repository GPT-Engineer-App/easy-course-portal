import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-2xl">歡迎來到課程網站</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">這是一個簡易的課程網站，包含基本的頁面佈局。</p>
          <div className="flex flex-col space-y-2">
            <Link to="/homework">
              <Button variant="outline" className="w-full">作業區</Button>
            </Link>
            <Link to="/materials">
              <Button variant="outline" className="w-full">教材區</Button>
            </Link>
            <Link to="/calendar">
              <Button variant="outline" className="w-full">行事曆</Button>
            </Link>
            <Link to="/exams">
              <Button variant="outline" className="w-full">考試區</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full">聯絡資訊</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;