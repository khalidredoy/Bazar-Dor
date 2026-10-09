"use client";

import { useEffect, useState } from "react";

export default function TodayDate() {
  const [today, setToday] = useState("");

  useEffect(() => {
    const date = new Date();

    setToday(
      new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
      }).format(date)
    );
  }, []);

  if (!today) return null;

  return (
    <div className="text-xs text-base-content/60">
      {today}
    </div>
  );
}