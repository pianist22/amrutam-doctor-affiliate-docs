import DocLayout from "@/components/docs/DocLayout";
import { H1, H2 } from "@/components/docs/DocHeading";
import { P } from "@/components/docs/DocText";
import { DocImage } from "@/components/docs/DocImage";
import Link from "next/link";
import DocNavigation from "@/components/docs/DocNavigation";

export default function HomePage() {
  return (
    <DocLayout>

      {/* TITLE */}
      <H1>Welcome to Amrutam Affiliate Documentation</H1>

      {/* INTRO */}
      <P>
        The Amrutam Affiliate Platform is newly launched Platform that enables you to earn commission by referring the Amrutam Products to the Patients using Product Link and Coupon Code.
      </P>

      <P>
        With this system, you can easily generate a product links and Coupon Code, track your performance, and receive commissions when patients engage through your links and Coupons.
      </P>

      {/* FEATURE SECTION */}
      <H2>What’s New?</H2>

      <P>
        This feature introduces a simple and efficient way to grow your earnings:
      </P>

      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
        <li>Generate and share your personal product links and coupon codes</li>
        <li>Track Coupon clicks, conversions, and earnings</li>
        <li>Make Payment Requests directly from the Affiliate Dashboard</li>
      </ul>

      {/* IMAGE */}
      <DocImage
        src="/images/docs/home/main-preview.png"
        alt="Affiliate Dashboard Preview"
      />

      {/* CTA BUTTON */}
      <DocNavigation
        next={{
          title: "Introduction",
          href: "/getting-started/introduction",
        }}
      />

    </DocLayout>
  );
}