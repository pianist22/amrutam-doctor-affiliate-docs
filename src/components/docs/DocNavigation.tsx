"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  prev?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
};

export default function DocNavigation({ prev, next }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">

      {/* PREVIOUS */}
      {prev ? (
        <Link href={prev.href} className="mx-auto w-full max-w-md">
          <div className="flex items-center justify-between border rounded-2xl p-4 hover:shadow-md transition hover:shadow-green-100">
            
            <div className="flex items-center gap-2">
              <ArrowLeft className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Previous</p>
                <p className="font-medium">{prev.title}</p>
              </div>
            </div>

          </div>
        </Link>
      ) : <div />}

      {/* NEXT */}
      {next ? (
        <Link href={next.href} className="mx-auto w-full max-w-md">
          <div className="flex items-center justify-between border rounded-2xl p-4 hover:shadow-md transition hover:shadow-green-100">
            
            <div>
              <p className="text-sm text-gray-500">Next</p>
              <p className="font-medium">{next.title}</p>
            </div>

            <ArrowRight className="text-green-600" />
          </div>
        </Link>
      ) : <div />}

    </div>
  );
}