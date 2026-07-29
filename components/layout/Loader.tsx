"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/useTranslation";

export function Loader() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const shown = sessionStorage.getItem("loader-shown");
    if (shown === "true") {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("loader-shown", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        >
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Image
                src="/logo.svg"
                alt="Spacescale"
                width={40}
                height={40}
                priority
                className="h-10 w-10"
              />
              <span className="font-sans text-3xl font-bold text-brand-navy">
                Spacescale
              </span>
            </div>
            <div className="font-mono text-meta-sm uppercase tracking-[0.4em] text-text-muted">
              {t("loader")}
            </div>
            <div className="mx-auto mt-4 h-[2px] w-[200px] overflow-hidden rounded-sm bg-brand-navy/10">
              <div className="h-full w-0 animate-load-bar bg-brand-navy" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}