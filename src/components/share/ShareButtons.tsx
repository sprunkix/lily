'use client';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  LinkedinIcon
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
}

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const iconSize = 32;
  const shareText = `${title} - ${description}`;

  return (
    <div className="flex items-center gap-4 py-4">
      <span className="text-text-secondary font-medium">Share:</span>
      <FacebookShareButton url={url} title={shareText}>
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={shareText}>
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={shareText}>
        <WhatsappIcon size={iconSize} round />
      </WhatsappShareButton>

      <TelegramShareButton url={url} title={shareText}>
        <TelegramIcon size={iconSize} round />
      </TelegramShareButton>

      <LinkedinShareButton url={url} title={title} summary={description}>
        <LinkedinIcon size={iconSize} round />
      </LinkedinShareButton>
    </div>
  );
}