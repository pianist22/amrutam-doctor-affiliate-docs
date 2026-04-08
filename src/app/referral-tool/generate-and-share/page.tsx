import DocLayout from "@/components/docs/DocLayout";
import { H1, H2 } from "@/components/docs/DocHeading";
import { P } from "@/components/docs/DocText";
import { UL, LI } from "@/components/docs/DocList";
import { DocImage } from "@/components/docs/DocImage";
import { Callout } from "@/components/docs/DocCallout";
import Breadcrumbs from "@/components/docs/Breadcrumbs";
import DocNavigation from "@/components/docs/DocNavigation";

export default function Page() {
  return (
    <DocLayout>

      {/* Breadcrumb */}
      <Breadcrumbs slug={["referral-tool", "generate-and-share"]} />

      {/* TITLE */}
      <H1>Referral Tool</H1>

      {/* INTRO */}
      <P>
        The Referral Tool allows you to generate a product link and coupon code
        that you can share with your patients to earn commission.
      </P>

      <DocImage
        src="/images/docs/referral-tool/referral-tool-main.png"
        alt="Referral Tool"
      />

      {/* HOW IT WORKS */}
      <H2>How It Works</H2>

      <UL>
        <LI>Search and select a product</LI>
        <LI>Click on the <strong>Get</strong> button</LI>
        <LI>A Product Link and Coupon Code will be generated</LI>
        <LI>Share them with your patient</LI>
      </UL>

      {/* SINGLE PRODUCT */}
      <H2>For Single Product Purchase</H2>

      <P>
        If the patient is purchasing a single product, you need to share both:
      </P>

      <UL>
        <LI>Product Link</LI>
        <LI>Coupon Code</LI>
      </UL>

      <P>
        The product link will take the patient directly to the product page on
        amrutam.co.in, and applying the coupon code during checkout will:
      </P>

      <UL>
        <LI>Provide discount to the customer</LI>
        <LI>Assign commission to your account</LI>
      </UL>

      <Callout>
        For single product purchases, both the Product Link and Coupon Code must be used to ensure the order is counted under your referral.
      </Callout>

      {/* MULTIPLE PRODUCT */}
      <H2>For Multiple Product Purchase</H2>

      <P>
        If the patient wants to purchase more than one product:
      </P>

      <UL>
        <LI>Select any product and generate the referral</LI>
        <LI>Share only the Coupon Code with the patient</LI>
        <LI>Ask the patient to visit amrutam.co.in</LI>
        <LI>Add all desired products to cart</LI>
        <LI>Apply the Coupon Code during checkout</LI>
      </UL>

      <P>
        This will ensure that your referral is applied to the entire order.
      </P>

      {/* IMPORTANT NOTES */}
      <H2>Important Notes</H2>

      <Callout>
        Every Coupon Code has a usage limit. Make sure to share it only with the number of patients allowed which is mentioned next to the coupon code.
      </Callout>

      <Callout>
        A single Coupon Code can be used by a patient only once. The same patient cannot reuse it even if the usage limit is not exhausted.
      </Callout>

      {/* COUPON LIMIT */}
      <H2>Coupon Limit Reached</H2>

      <P>
        If the coupon usage limit is exhausted, you will see an error message like this:
      </P>

      <DocImage
        src="/images/docs/referral-tool/coupon-error.png"
        alt="Coupon Exhausted Error"
      />

      <P>
        In this case, click on <strong>Regenerate Coupon</strong> to generate a new coupon code.
      </P>

      <DocImage
        src="/images/docs/referral-tool/regenerate-coupon.png"
        alt="Regenerate Coupon"
      />

      <P>
        Once regenerated, you can again get the Product Link and Coupon Code and continue sharing.
      </P>

      {/* NEXT STEP */}
      <H2>What to Do Next</H2>

      <P>
        Now that you know how to generate and share referral links, you can start tracking your performance in the Earnings History section.
      </P>

      {/* NAVIGATION */}
      <DocNavigation
        prev={{
          title: "Dashboard Overview",
          href: "/dashboard/overview",
        }}
        next={{
          title: "Earnings History",
          href: "/earning-history/earnings",
        }}
      />

    </DocLayout>
  );
}