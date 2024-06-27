import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-2xl">聯絡資訊</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">這裡是聯絡資訊。</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;