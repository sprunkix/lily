'use client';

import { useState, useEffect } from 'react';

interface ConsentSettings {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  functionality_storage: 'granted' | 'denied';
  personalization_storage: 'granted' | 'denied';
  security_storage: 'granted' | 'denied';
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [consentSettings, setConsentSettings] = useState<ConsentSettings>({
    analytics_storage: 'denied',
    ad_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted'
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsentSettings(parsedConsent);
        updateConsent(parsedConsent);
      } catch (e) {
        setShowConsent(true);
      }
    } else {
      setShowConsent(true);
    }
  }, []);

  const updateConsent = (settings: ConsentSettings) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_update',
      consent: settings
    });
  };

  const handleAccept = () => {
    const newSettings: ConsentSettings = {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted'
    };
    setConsentSettings(newSettings);
    updateConsent(newSettings);
    localStorage.setItem('cookieConsent', JSON.stringify(newSettings));
    setShowConsent(false);
  };

  const handleCustomize = () => {
    // 实现自定义设置的逻辑
    setShowCustomizeModal(true);
  };

  const handleDecline = () => {
    const newSettings: ConsentSettings = {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted'
    };
    setConsentSettings(newSettings);
    updateConsent(newSettings);
    localStorage.setItem('cookieConsent', JSON.stringify(newSettings));
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:p-6 z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-sm text-gray-700 mb-4">
          <h3 className="font-bold mb-2">Cookie 设置</h3>
          <p>
            我们使用 cookie 来提升您的浏览体验、展示个性化内容和广告、分析网站流量并了解访客来源。
            您可以选择接受所有 cookie，或点击"自定义设置"进行详细设置。
            查看我们的 <a href="/privacy-policy" className="text-blue-600 hover:underline">隐私政策</a> 了解更多信息。
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            仅使用必要 Cookie
          </button>
          <button
            onClick={handleCustomize}
            className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
          >
            自定义设置
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            接受所有 Cookie
          </button>
        </div>
      </div>
    </div>
  );
} 