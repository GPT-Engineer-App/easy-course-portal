import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Homework = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-2xl">作業區</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">這裡是作業區。</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Homework;