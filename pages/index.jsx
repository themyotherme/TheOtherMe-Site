
import React from "react";
import { Button } from "@/components/ui/button";

export default function TheOtherMeHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-indigo-800 mb-4 drop-shadow-sm">
          🌐 TheOtherMe: Your AI-Powered Digital Life
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Welcome to your personal suite of AI experiences — from smart trading to storytelling and mindful connection.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <AppCard
            title="📈 TheOtherMeTrading"
            description="AI-guided trading dashboard using technical indicators and sentiment analysis."
            link="http://localhost:8501"
          />
          <AppCard
            title="🎨 FantasizeMe"
            description="Bring your dreams to life with AI-generated visuals and narratives."
            link="https://fantasizeme.vercel.app"
          />
          <AppCard
            title="💬 ConnectMe"
            description="Talk to an AI who remembers you. Journal, reflect, and build connection."
            link="https://connectme.vercel.app"
          />
        </div>

        <footer className="mt-20 text-sm text-gray-400">
          &copy; 2025 TheOtherMe. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

function AppCard({ title, description, link }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition border border-gray-200 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
      <Button asChild className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
        <a href={link} target="_blank">Launch</a>
      </Button>
    </div>
  );
}
