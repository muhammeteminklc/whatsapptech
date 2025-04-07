"use client";

import { useState, useEffect } from 'react';
import { useAuth } from './lib/auth';
import Link from 'next/link';

export default function HomePage() {
  const { user, loading } = useAuth();
  const [loadingComplete, setLoadingComplete] = useState(false);
  
  useEffect(() => {
    // Sayfa yüklendiğinde loading animasyonunu bir süre göster
    if (!loading) {
      setTimeout(() => {
        setLoadingComplete(true);
      }, 500);
    }
  }, [loading]);

  if (loading || !loadingComplete) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-1">
        <div className="animate-pulse flex flex-col items-center">
          <div className="text-brand-primary text-3xl font-bold mb-4">WhatsApp Teknoloji</div>
          <div className="h-2 w-40 bg-brand-secondary rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-1 text-white">
      <div className="container mx-auto px-4 py-10">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-brand-primary mb-2">WhatsApp Teknoloji</h1>
          <p className="text-xl text-gray-300">WhatsApp İşletme API Entegrasyonları</p>
        </header>

        <div className="max-w-3xl mx-auto bg-dark-2 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-brand-secondary">Platform Özellikleri</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-brand-secondary">✓</div>
              <div>
                <h3 className="font-medium text-lg">WhatsApp Cloud API Entegrasyonu</h3>
                <p className="text-gray-400">İşletmeniz için WhatsApp Cloud API'ye tam erişim</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-brand-secondary">✓</div>
              <div>
                <h3 className="font-medium text-lg">Yapay Zeka Entegrasyonu</h3>
                <p className="text-gray-400">OpenAI, Claude ve Azure AI desteği ile otomatik mesajlaşma</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-brand-secondary">✓</div>
              <div>
                <h3 className="font-medium text-lg">Çoklu Hesap Yönetimi</h3>
                <p className="text-gray-400">Birden fazla WhatsApp İşletme hesabını tek bir platformdan yönetin</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-brand-secondary">✓</div>
              <div>
                <h3 className="font-medium text-lg">İleri Analitik</h3>
                <p className="text-gray-400">Mesajlaşma performansı, müşteri ilişkileri ve kampanya etkisi analizleri</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {user ? (
              <Link 
                href="/dashboard" 
                className="bg-brand-primary hover:bg-brand-secondary text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
              >
                Panele Git
              </Link>
            ) : (
              <>
                <Link 
                  href="/auth/login" 
                  className="bg-brand-primary hover:bg-brand-secondary text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
                >
                  Giriş Yap
                </Link>
                <Link 
                  href="/auth/register" 
                  className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
                >
                  Kayıt Ol
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}