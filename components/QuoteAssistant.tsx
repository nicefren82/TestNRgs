import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { getQuoteConsultation } from '../services/geminiService';

const QuoteAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo! Saya NR Assistant. Ada yang bisa saya bantu terkait kebutuhan konveksi Anda? (Misal: "Berapa harga 50 kaos katun?")' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getQuoteConsultation(input);
      const botMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'model', text: 'Maaf, terjadi kesalahan koneksi. Silakan coba lagi nanti atau hubungi WhatsApp kami langsung.', isError: true };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="quote-assistant" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
          
          {/* Header */}
          <div className="bg-primary p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Sparkles className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">NR Smart Consultant</h3>
                <p className="text-blue-200 text-xs">Powered by Gemini AI</p>
              </div>
            </div>
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
              Online
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-100 ml-2' : 'bg-slate-200 mr-2'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-blue-600" /> : <Bot size={16} className="text-slate-600" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-accent text-white rounded-tr-none' 
                      : msg.isError 
                        ? 'bg-red-50 text-red-600 border border-red-200 rounded-tl-none'
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}>
                    {msg.text.split('\n').map((line, i) => (
                      <span key={i} className="block min-h-[1.2em]">{line}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm ml-10">
                  <Loader2 className="w-4 h-4 animate-spin text-accent" />
                  <span className="text-xs text-slate-400">Sedang mengetik...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-end space-x-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tanya harga, bahan, atau konsultasi desain..."
                className="flex-1 resize-none bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent max-h-32 text-sm"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`p-3 rounded-xl flex items-center justify-center transition-colors ${
                  isLoading || !input.trim() 
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                    : 'bg-accent text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30'
                }`}
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
              AI dapat membuat kesalahan. Mohon konfirmasi harga final melalui WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteAssistant;