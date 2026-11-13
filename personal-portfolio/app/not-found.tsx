"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, House } from "lucide-react";
import Container from "@/app/components/ui/Container";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Container className="not-found-container" id="home">
        <div className="not-found-art">
          <Image
            src="/images/404.png"
            alt="Illustration of a page not found error"
            fill
            priority
            sizes="(max-width: 80rem) 100vw, 80rem"
            className="object-contain"
          />

          <div className="not-found-actions">
            <Link
              href="/"
              aria-label="Go to home"
              className="btn-primary inline-flex items-center justify-center"
            >
              <House size={16} aria-hidden="true" />
              <span>Home</span>
            </Link>

            <button
              type="button"
              aria-label="Go back"
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center justify-center"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}
