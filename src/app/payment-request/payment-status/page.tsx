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
      <Breadcrumbs slug={["payment-request", "how-to-withdraw"]} />

      {/* TITLE */}
      <H1>Payment Request</H1>

      {/* INTRO */}
      <P>
        The Payment Request section shows all your withdrawal requests.
        Once you send a request from the Earnings History section, it will appear here.
      </P>

      {/* IMAGE */}
      <DocImage
        src="/images/docs/payment-request/payment-request-table.png"
        alt="Payment Request Table"
      />

      {/* HOW IT WORKS */}
      <H2>How Payment Request Works</H2>

      <UL>
        <LI>You select orders in Earnings History</LI>
        <LI>Click on <strong>Send Request</strong></LI>
        <LI>The request appears in this section</LI>
        <LI>Initial status will be <strong>Requested</strong></LI>
      </UL>

      {/* STATUS SECTION */}
      <H2>Understanding Payment Status</H2>

      <P>
        Each payment request goes through different stages. Below is what each status means:
      </P>

      <UL>
        <LI>
          <strong>Requested:</strong> Your request has been submitted and is waiting for admin review.
        </LI>
        <LI>
          <strong>Paid:</strong> Your request has been approved and the amount has been transferred to your bank account.
        </LI>
        <LI>
          <strong>Declined:</strong> Your request was rejected due to an issue.
        </LI>
        <LI>
          <strong>Failed:</strong> Payment was approved but failed due to a technical issue.
        </LI>
      </UL>

      {/* REQUESTED FLOW */}
      <H2>What Happens After You Send Request</H2>

      <UL>
        <LI>Admin reviews your payment request</LI>
        <LI>If approved → status changes to <strong>Paid</strong></LI>
        <LI>Amount is credited within <strong>24–48 hours</strong></LI>
      </UL>

      <Callout>
        Once approved, the payment will be credited to your bank account within 24–48 hours.
      </Callout>

      {/* DECLINED CASE */}
      <H2>When a Payment is Declined</H2>

      <P>
        Sometimes, your payment request may be rejected.
      </P>

      <P>
        One common reason:
      </P>

      <UL>
        <LI>
          The customer placed an order but later requested a refund.
        </LI>
      </UL>

      <Callout>
        If a related order/orders in Payment Request containing a number of orders is refunded, the commission for that order will not be eligible for payout, entire Payment Request will be rejected and status will be marked as <strong>Declined</strong>,but the remaining valid orders will again move back to Earnings History section and you can select those orders again to send a new payment request.
      </Callout>

      {/* FAILED CASE */}
      <H2>If Payment Fails</H2>

      <P>
        In rare cases, payment may fail due to payment gateway issues.
      </P>

      <UL>
        <LI>Status will be marked as <strong>Failed</strong></LI>
        <LI>You do not need to take any action</LI>
        <LI>The admin will automatically reprocess your payment</LI>
      </UL>

      <Callout>
        No action is required from your side if the payment fails. It will be handled automatically by the admin itself.
      </Callout>

      {/* NOTES */}
      <H2>Admin Notes</H2>

      <P>
        You can check additional details about your payment request in the <strong>Notes</strong> column.
      </P>

      <P>
        This may include reasons for rejection or other important updates from the admin.
      </P>

      {/* SIMPLE FLOW */}
      <H2>Simple Flow</H2>

      <UL>
        <LI>Select earnings → Send request</LI>
        <LI>Status becomes Requested</LI>
        <LI>Admin reviews the request</LI>
        <LI>If approved → Paid → Amount credited</LI>
      </UL>

      {/* NAVIGATION */}
      <DocNavigation
        prev={{
          title: "Earnings History",
          href: "/earnings-history/understanding-earnings",
        }}
        // next={{
        //   title: "FAQs",
        //   href: "/faqs",
        // }}
      />

    </DocLayout>
  );
}