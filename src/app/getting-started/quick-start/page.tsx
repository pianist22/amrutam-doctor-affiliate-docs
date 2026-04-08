import DocLayout from "@/components/docs/DocLayout";
import { H1, H2 } from "@/components/docs/DocHeading";
import { P } from "@/components/docs/DocText";
import { UL, LI } from "@/components/docs/DocList";
import { DocImage } from "@/components/docs/DocImage";
import { Callout } from "@/components/docs/DocCallout";
import Breadcrumbs from "@/components/docs/Breadcrumbs";
import DocNavigation from "@/components/docs/DocNavigation";
import Image from "next/image";

export default function Page() {
  return (
    <DocLayout>

      {/* Breadcrumb */}
      <Breadcrumbs slug={["getting-started", "quick-start"]} />

      {/* TITLE */}
      <H1>Quick Start Guide</H1>

      {/* INTRO */}
      <P>
        This guide will help you quickly get started with the Amrutam Affiliate Program.
        Follow the steps below to access your account and begin earning.
      </P>

      {/* STEP 1 */}
      <H2>Step 1: Get Affiliate Access</H2>

      <P>
        Admin will approve your Account to get the access to the <strong>Affiliate Platform</strong>. You will receive an email confirming your access.
      </P>

      <DocImage
        src="/images/docs/getting-started/approval-email.png"
        alt="Approval Email"
      />

      <P>
        This email confirms that you now have access to the Affiliate Doctor Portal.
      </P>

      {/* STEP 2 */}
      <H2>Step 2: Access the Platform</H2>

      <P>
        In the email, click on the <strong>Get Started</strong> button. This will
        redirect you to the Affiliate platform.
      </P>

      <P>
        After logging in, you will be able to access your affiliate dashboard and tools, the Affiliate Tab will present as the Last Option in the Sidebar of the Website.
      </P>

      <Callout>
        Make sure you use the same email that was approved to log in to the platform.
      </Callout>

      {/* STEP 3 */}
      <H2>Step 3: Explore the Affiliate Section</H2>

      <P>
        Once you log in, navigate to the <strong>Affiliate </strong> section available in the sidebar.
      </P>

          <Image
            src="/images/docs/getting-started/sidebar-affiliate.png"
            alt="Affiliate Sidebar"
            width={400}
            height={200}
            className="rounded-xl my-4"
            loading="eager"
          />

      

      <P>
        This section contains all the tools and features you need to manage your affiliate activities.
      </P>

      {/* SECTION OVERVIEW */}
      <H2>Affiliate Section Overview</H2>

      <P>
        Below is a quick overview of each section available under the Affiliate tab:
      </P>

      <UL>
        <LI>
          <strong>Dashboard:</strong> View your overall performance, Coupon Clicks, Revenue and Orders summary.
        </LI>
        <LI>
          <strong>Referral Tool:</strong> Generate the Product Link and Coupon Code and share them with your patients.
        </LI>
        <LI>
          <strong>Earning History:</strong> Tracks your Orders and Commission Earned and allows you to make the Payment Request.
        </LI>
        <LI>
          <strong>Payment Request:</strong> See the Current Status of the Payment Request and see the Note provided by Admin if any.
        </LI>
      </UL>

      {/* FINAL NOTE */}
      <Callout>
        Each section is designed to be simple and easy to use. You can explore them one by one to understand all features.
      </Callout>

      {/* NEXT STEP */}
      <H2>What to Do Next</H2>

      <P>
        Now that you have access to the platform, start by understanding the key concepts
        and then explore each section in detail.
      </P>

      {/* NAVIGATION */}
      <DocNavigation
        prev={{
          title: "Introduction",
          href: "/getting-started/introduction",
        }}
        next={{
          title: "Dashboard Overview",
          href: "/dashboard/overview",
        }}
      />

    </DocLayout>
  );
}