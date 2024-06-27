import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Exams = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-2xl">考試區</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">這裡是考試區。</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Exams;