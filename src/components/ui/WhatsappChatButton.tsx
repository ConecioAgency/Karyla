"use client";

export function WhatsappChatButton() {
  return (
    <a
      href="https://wa.me/212661713235"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[9999] bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 transition-all group"
      aria-label="Discuter sur WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 24 24"
        className="group-hover:scale-110 transition-transform"
      >
        <path
          fill="currentColor"
          d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18c-1.61 0-3.13-.39-4.45-1.13l-.32-.18-3.06.81.82-2.98-.21-.33A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8Zm4.29-5.38c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32 1 2.48.14.16 1.7 2.7 4.12 3.68.58.24 1.03.38 1.38.48.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        />
      </svg>
    </a>
  );
} 