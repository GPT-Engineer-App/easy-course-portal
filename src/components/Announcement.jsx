import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const Announcement = () => (
  <Alert className="w-full max-w-2xl">
    <AlertTitle>公告</AlertTitle>
    <AlertDescription>這是公告區，請注意最新消息。</AlertDescription>
  </Alert>
);