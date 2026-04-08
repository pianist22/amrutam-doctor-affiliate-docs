import DocLayout from "@/components/docs/DocLayout";
import { H1, H2 } from "@/components/docs/DocHeading";
import { P } from "@/components/docs/DocText";
import { UL, LI } from "@/components/docs/DocList";
import { DocImage } from "@/components/docs/DocImage";
import { DocYouTube } from "@/components/docs/DocVideo";
import { Callout } from "@/components/docs/DocCallout";
import Breadcrumbs from "@/components/docs/Breadcrumbs";
import DocNavigation from "@/components/docs/DocNavigation";

export default function Page() {
  return (
    <DocLayout>

      {/* Breadcrumb */}
      <Breadcrumbs slug={["getting-started", "introduction"]} />

      {/* TITLE */}
      <H1>Introduction</H1>

      <P>
        This guide will help you understand how the system works and how you can start earning step by step.
      </P>

      {/* VIDEO */}
      <H2>Platform Overview</H2>

      <P>
        Watch this video to understand how the entire affiliate system works.
      </P>

      <DocYouTube embedId="Q_Ll4wqrtfA?si=kZzGpLAsuyyHWMCs" />

      {/* WHAT IS THIS */}
      <H2>What is the Affiliate Program?</H2>

      <P>
        The affiliate system enables you to refer our products to patients using the product link. When a user places order using your link and applies your Coupon Code at Checkout, you earn a commission.
      </P>

      {/* HOW IT WORKS */}
      <H2>How It Works</H2>

      <UL>
        <LI>Generate the Product Link and Coupon Code from Referral Tool under the Affiliate Tab.</LI>
        <LI>Share the link & Coupon Code with users</LI>
        <LI>Users make a purchase by applying the Coupon Code at Checkout</LI>
        <LI>You earn commission based on activity</LI>
      </UL>

      {/* IMPORTANT NOTE */}
      <Callout>
        Make sure you always use both the Product link and Coupon Code. Any activity without your Coupon Code will not be tracked and you will not receive any commission.
      </Callout>

      {/* NEXT STEP */}
      <H2>What to Do Next</H2>

      <P>
        Now that you understand the basics, move to the Quick Start Guide to begin your journey.
      </P>

      {/* NAVIGATION */}
      <DocNavigation
        next={{
          title: "Quick Start Guide",
          href: "/getting-started/quick-start",
        }}
      />

    </DocLayout>
  );
}