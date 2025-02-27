import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next';
import { defaultLocale, getDictionary, localeNames } from "@/lib/i18n";

export const metadata: Metadata = {
  title: 'About Sprunki Lily - Your Ultimate Gaming Destination | Sprunki Games',
  description: 'Discover the story behind Sprunki Lily, your comprehensive platform for Sprunki games and community. Join us for endless gaming adventures and connections.',
  keywords: 'Sprunki Lily, about Sprunki Lily, Sprunki games, Sprunki community, gaming platform, online games',
  openGraph: {
    title: 'About Sprunki Lily - Your Ultimate Gaming Destination',
    description: 'Join the Sprunki Lily community for endless gaming adventures. Discover our story and connect with fellow gamers.',
    type: 'website',
  }
};
export default async function AboutUsPage() {
  const langName = defaultLocale;
  const dict = await getDictionary(langName);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Privacy Policy for Sprunki Lily</h1>
          <p className="text-text-secondary mb-8">Last updated:01/28/2025</p>

          <div className="space-y-8">
            <section>
              <p className="text-text-secondary">
                At Sprunki Lily, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and engage with our services.
              </p>
              <p className="text-text-secondary">
                By using Sprunki Lily, you agree to the practices described in this Privacy Policy. If you do not agree with our policy, please refrain from using the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
              <p className="text-text-secondary">We may collect the following types of information when you use Sprunki Lily:</p>
              <ul className="list-disc pl-6 text-text-secondary">
                <li className="mb-2">
                  <strong>Personal Information:</strong> When you register an account, sign up for newsletters, or contact us, we may collect personal information such as your name, email address, and other contact details.
                </li>
                <li className="mb-2">
                  <strong>Usage Data:</strong> We may collect non-personal data about your use of our website, such as IP address, browser type, device information, pages visited, and timestamps.
                </li>
                <li>
                  <strong>Cookies:</strong> Our website uses cookies to enhance your user experience. Cookies help us understand how you interact with our site, remember your preferences, and improve the overall experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-text-secondary">The information we collect may be used for the following purposes:</p>
              <ul className="list-disc pl-6 text-text-secondary">
                <li>To provide, personalize, and improve your experience on Sprunki Lily.</li>
                <li>To communicate with you about your account, updates, and site-related notifications.</li>
                <li>To analyze trends, track site usage, and enhance our services.</li>
                <li>To respond to your inquiries, feedback, and support requests.</li>
                <li>To send marketing materials (if you have opted in to receive them).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3. Sharing Your Information</h2>
              <p className="text-text-secondary">We do not sell or rent your personal information to third parties. However, we may share your information in the following situations:</p>
              <ul className="list-disc pl-6 text-text-secondary">
                <li className="mb-2">
                  <strong>Service Providers:</strong> We may share your information with trusted third-party service providers who help us operate our website and deliver services, such as hosting, data analysis, and marketing. These third parties are obligated to protect your data and may only use it for specific purposes related to our services.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required by law or if we believe it is necessary to comply with legal obligations, protect our rights, or prevent fraud or other illegal activities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4. Security of Your Information</h2>
              <p className="text-text-secondary">
                We take reasonable precautions to protect your personal information from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5. Your Choices and Rights</h2>
              <ul className="list-disc pl-6 text-text-secondary">
                <li>Opt-Out: You can opt-out of receiving promotional emails by following the unsubscribe instructions provided in each email.</li>
                <li>Access and Update: You have the right to access, update, or delete your personal information by logging into your account or contacting us.</li>
                <li>Cookies: You can manage your cookie preferences through your browser settings. However, disabling cookies may affect some features of the site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">6. Children's Privacy</h2>
              <p className="text-text-secondary">
                Sprunki Lily does not knowingly collect or solicit personal information from children under the age of 13. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete that information as soon as possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-text-secondary">
                We reserve the right to update or change this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">8. Contact Us</h2>
              <p className="text-text-secondary">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <ul className="list-none pl-6 text-text-secondary">
                <li>Email: privacy@sprunkilily.com</li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </div>
      <Footer locale={dict.footer} currentLang={langName} showLang={false} />
    </div>
  )
}