import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

// Simple Chat Widget Component
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: "Hallo! Wie kann ich Ihnen helfen?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");

    try {
      console.log('Sending message to webhook:', currentInput);
      
      // Try different request formats to see which one works
      const requestBody = { 
        message: currentInput
      };
      
      console.log('Request body being sent:', requestBody);
      
      const response = await fetch('https://ai.alpino-ai.com/webhook/a747a88f-4d5b-4281-8676-3260481693a9/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Webhook response status:', response.status);
      console.log('Webhook response headers:', response.headers);

      if (response.ok) {
        const data = await response.json();
        console.log('Webhook response data:', data);
        
        // Handle different response formats
        const botResponse = data.response || data.message || data.text || data.reply || "Danke für Ihre Nachricht!";
        setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
      } else {
        console.error('Webhook error status:', response.status);
        const errorText = await response.text();
        console.error('Webhook error response:', errorText);
        
        // Try to parse error as JSON for more details
        try {
          const errorData = JSON.parse(errorText);
          console.error('Parsed error data:', errorData);
          setMessages(prev => [...prev, { text: `Server Error: ${errorData.message || errorData.error || 'Unbekannter Fehler'}`, isUser: false }]);
        } catch {
          setMessages(prev => [...prev, { text: `Server Error (${response.status}): ${errorText.substring(0, 100)}...`, isUser: false }]);
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { text: "Entschuldigung, es gab einen Fehler bei der Verbindung: " + (error instanceof Error ? error.message : 'Unbekannter Fehler'), isUser: false }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-alpino-green text-white p-3 rounded-full shadow-lg hover:bg-alpino-green/90 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl border border-alpino-light-gray flex flex-col">
          {/* Header */}
          <div className="bg-alpino-green text-white p-3 rounded-t-lg">
            <h3 className="font-medium">Alpino AI Chat</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-2 rounded-lg ${
                    message.isUser
                      ? 'bg-alpino-green text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-alpino-light-gray">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ihre Nachricht..."
                className="flex-1 px-3 py-2 border border-alpino-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-alpino-green"
              />
              <button
                onClick={sendMessage}
                className="px-3 py-2 bg-alpino-green text-white rounded-lg hover:bg-alpino-green/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ChatWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(<App />);
