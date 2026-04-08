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
      <Breadcrumbs slug={["earnings-history", "understanding-earnings"]} />

      {/* TITLE */}
      <H1>Earnings History</H1>

      {/* INTRO */}
      <P>
        The Earnings History section shows all the orders that were placed using your Coupon Code.
        You can track your earnings and request payouts from here.
      </P>

      {/* IMAGE */}
      <DocImage
        src="/images/docs/earning-history/earning-history-main.png"
        alt="Earnings History Table"
      />

      {/* HOW IT WORKS */}
      <H2>How Earnings Are Added</H2>

      <P>
        Whenever a patient places an order using your product link and coupon code:
      </P>

      <UL>
        <LI>The order must be successfully paid</LI>
        <LI>After some time, the entry will appear in this table</LI>
        <LI>The status will initially be shown as <strong>Pending</strong></LI>
      </UL>

      <Callout>
        Orders will only appear after successful payment. If the order payment is not completed, it will not be shown here.
      </Callout>

      {/* TABLE EXPLANATION */}
      <H2>Understanding the Table</H2>

      <UL>
        <LI><strong>Order:</strong> Unique order ID</LI>
        <LI><strong>Name:</strong> Customer name</LI>
        <LI><strong>Date & Time:</strong> When the order was placed</LI>
        <LI><strong>Commission:</strong> Percentage you earn</LI>
        <LI><strong>Earning:</strong> Your earning from that order</LI>
        <LI><strong>Status:</strong> Current state of the earning</LI>
        <LI><strong>Products:</strong> Number of products in the order</LI>
        <LI><strong>Notes:</strong> Shows a note added by admin to understand the Current Status of the order Transaction.</LI>
      </UL>

      {/* SELECT ORDERS */}
      <H2>Select Orders for Withdrawal</H2>

      <P>
        To request a payout, you need to select the orders using the checkbox.
      </P>

      <DocImage
        src="/images/docs/earning-history/select-orders.png"
        alt="Select Orders"
      />

      <P>
        You can select multiple orders to combine their earnings into a single payout request.
      </P>

      {/* MINIMUM AMOUNT */}
      <H2>Minimum Payout Requirement</H2>

      <P>
        To send a payment request, the total selected amount must be at least ₹1000, you can see the Total Amount in the Selected Amount field to the left of the Send Request button.
      </P>

      <Callout>
        You cannot send a payment request if the total selected earning is less than ₹1000.
      </Callout>

      {/* ERROR SCREEN */}
      <H2>If Amount is Less Than ₹1000</H2>

      <P>
        If you try to send a request below ₹1000, you will see an error message like this:
      </P>

      <DocImage
        src="/images/docs/earning-history/payment-failed.png"
        alt="Payment Failed"
      />

      {/* SUCCESS SCREEN */}
      <H2>Successful Payment Request</H2>

      <P>
        If your selected amount is ₹1000 or more, clicking on <strong>Send Request</strong> will successfully submit your request.
      </P>

      <DocImage
        src="/images/docs/earning-history/payment-success.png"
        alt="Payment Success"
      />

      <P>
        Your request will then be processed by the team.
      </P>

      {/* WHERE TO CHECK */}
      <H2>Where to Check Payment Status</H2>

      <P>
        You can track all your payment requests in the <strong>Payment Request</strong> section.
      </P>

      {/* FLOW SUMMARY */}
      <H2>Simple Flow</H2>

      <UL>
        <LI>Patient places order</LI>
        <LI>Order appears in Earnings History</LI>
        <LI>Select multiple orders</LI>
        <LI>Ensure total ≥ ₹1000</LI>
        <LI>Click Send Request</LI>
        <LI>Track status in Payment Request section</LI>
      </UL>

      {/* NAVIGATION */}
      <DocNavigation
        prev={{
          title: "Referral Tool",
          href: "/referral-tool/generate-and-share",
        }}
        next={{
          title: "Payment Request",
          href: "/payment-request/payment-status",
        }}
      />

    </DocLayout>
  );
}