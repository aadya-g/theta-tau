"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

interface EmailCollectorProps {
  source: string;
  showCategories?: boolean;
  className?: string;
}

export function EmailCollector({ source, showCategories = false, className = "" }: EmailCollectorProps) {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("General");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source,
          category: showCategories ? category : 'General'
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe');
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1"
            required
          />
          {showCategories && (
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="Recruitment">Recruitment</SelectItem>
                <SelectItem value="Events">Events</SelectItem>
                <SelectItem value="Newsletter">Newsletter</SelectItem>
              </SelectContent>
            </Select>
          )}
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        {status === "success" && (
          <p className="text-green-600 text-sm">Thanks for subscribing!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
