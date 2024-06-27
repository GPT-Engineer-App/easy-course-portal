import React from "react";
import { Announcement } from "@/components/Announcement";
import { HomeworkIcon, MaterialsIcon, CalendarIcon, ExamsIcon, ContactIcon } from "@/components/Icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start bg-gray-100 p-4">
      <Announcement />
      <Card className="w-full max-w-2xl mt-4">
        <CardHeader>
          <CardTitle className="text-center text-3xl">歡迎來到課程網站</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4 text-lg">這是一個簡易的課程網站，包含基本的頁面佈局。</p>
          <div className="flex flex-col space-y-4">
            <Link to="/homework" className="flex items-center space-x-2">
              <HomeworkIcon />
              <Button variant="outline" className="w-full">作業區</Button>
            </Link>
            <Link to="/materials" className="flex items-center space-x-2">
              <MaterialsIcon />
              <Button variant="outline" className="w-full">教材區</Button>
            </Link>
            <Link to="/calendar" className="flex items-center space-x-2">
              <CalendarIcon />
              <Button variant="outline" className="w-full">行事曆</Button>
            </Link>
            <Link to="/exams" className="flex items-center space-x-2">
              <ExamsIcon />
              <Button variant="outline" className="w-full">考試區</Button>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2">
              <ContactIcon />
              <Button variant="outline" className="w-full">聯絡資訊</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;