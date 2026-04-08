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
      <Breadcrumbs slug={["dashboard", "overview"]} />

      {/* TITLE */}
      <H1>Dashboard Overview</H1>

      {/* INTRO */}
      <P>
        The Dashboard gives you a complete view of your affiliate performance.
        You can track Coupon Clicks, Orders Count, Revenue, and Total Coupons created to manage your activity in one place.
      </P>

      {/* DASHBOARD IMAGE */}
      <DocImage
        src="/images/docs/dashboard/dashboard-analytics.png"
        alt="Dashboard Analytics"
      />

      {/* ANALYTICS SECTION */}
      <H2>Understanding Dashboard Analytics</H2>

      <P>
        The top section of the dashboard shows your performance summary based on selected time filters.
      </P>

      <UL>
        <LI>
          <strong>Today / Week / Month:</strong> View your performance for a specific time period.
        </LI>
        <LI>
          <strong>Custom Date:</strong> Select a custom date range to analyze your performance.
        </LI>
      </UL>

      <P>
        Below are the key metrics shown on the dashboard:
      </P>

      <UL>
        <LI>
          <strong>Total Coupon Clicks:</strong> Number of times patient clicked on your Coupon Code or Link.
        </LI>
        <LI>
          <strong>Total Orders:</strong> Number of successful orders placed using your Coupon Code.
        </LI>
        <LI>
          <strong>Total Revenue:</strong> Total value of orders generated through your Coupon Code.
        </LI>
        <LI>
          <strong>Total Link/Coupon:</strong> Total number of links or coupons provided to you.
        </LI>
      </UL>

      <Callout>
        These metrics help you understand how well your Coupon Codes are performing and how much revenue you are generating.
      </Callout>

      {/* REFERRAL OVERVIEW */}
      <H2>Referral Overview</H2>

      <P>
        The Referral Overview section shows detailed performance for each product that you have promoted.
      </P>

      <DocImage
        src="/images/docs/dashboard/referral-overview.png"
        alt="Referral Overview Table"
      />

      <P>
        This table helps you understand which products are generating the most revenue and orders.
      </P>

      {/* TABLE EXPLANATION */}
      <H2>Understanding the Table</H2>

      <UL>
        <LI>
          <strong>Product Name:</strong> The product sale that was generated using your Coupon Code.
        </LI>
        <LI>
          <strong>Commission:</strong> Percentage of commission you earn for that product sale.
        </LI>
        <LI>
          <strong>Orders:</strong> Number of successful orders placed for that product.
        </LI>
        <LI>
          <strong>Revenue:</strong> Total revenue (MRP of Product) generated from that product.
        </LI>
      </UL>

      <Callout>
        <strong>Note:</strong> The revenue shown in this table is based on the product’s MRP, not your actual revenue generated.
        Your actual revenue is calculated separately and shown above in the main dashboard statistics in Total Revenue.
        <br></br>
        This is because at the Sale, patient is getting a discount on the MRP and your commission is calculated based on the discounted price, not the MRP.
      </Callout>

      {/* SEARCH FEATURE */}
      <H2>Search and Filter</H2>

      <P>
        You can use the search bar in the Referral Overview section to quickly find specific products and analyze their performance.
      </P>

      {/* NEXT STEP */}
      <H2>What to Do Next</H2>

      <P>
        Now that you understand your dashboard, you can start generating referral links and sharing them.
      </P>

      {/* NAVIGATION */}
      <DocNavigation
        prev={{
          title: "Quick Start Guide",
          href: "/getting-started/quick-start",
        }}
        next={{
          title: "Referral Tool",
          href: "/referral-tool/generate-and-share",
        }}
      />

    </DocLayout>
  );
}