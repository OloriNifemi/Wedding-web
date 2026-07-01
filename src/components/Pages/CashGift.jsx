import { Eyebrow, SectionTitle } from "../Ui/Ui";

export default function CashGift() {
  const accountNumber = "0123456789";

  const copyAccount = async () => {
    await navigator.clipboard.writeText(accountNumber);
    alert("Account number copied!");
  };

  return (
    <section
      id="cashgift"
      className="py-20 md:py-24 px-6 md:px-10 bg-[var(--ivory)]"
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <Eyebrow>With Love</Eyebrow>

          <SectionTitle>Cash Gift</SectionTitle>

          <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-gray-600 leading-6 md:leading-7">
            Your presence is the greatest gift we could ever ask for.
            Should you wish to bless us further, a monetary gift towards
            our new journey together would be sincerely appreciated.
          </p>
        </div>

        {/* Card */}
        <div
          className="
            rounded-[30px]
            border
            border-[var(--gold)]/20
            bg-white/70
            shadow-sm
            p-6
            md:p-10
          "
        >
          <div className="space-y-5 text-center">

            {/* Account Name */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)]">
                Account Name
              </p>

              <h3 className="mt-1 font-display text-xl md:text-2xl font-light text-[var(--ink)]">
                Anita & Oluwaseun
              </h3>
            </div>

            {/* Bank */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)]">
                Bank
              </p>

              <h3 className="mt-1 font-display text-xl md:text-2xl font-light text-[var(--ink)]">
                Access Bank
              </h3>
            </div>

            {/* Account Number */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)]">
                Account Number
              </p>

              <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-[0.12em] md:tracking-[0.15em] text-[var(--ink)] break-all">
                {accountNumber}
              </h2>
            </div>

            {/* Copy Button */}
            <button
              onClick={copyAccount}
              className="
                mt-2
                w-full
                rounded-xl
                border
                border-[var(--gold)]/20
                bg-white
                py-3
                text-[10px]
                md:text-[11px]
                uppercase
                tracking-[0.25em]
                md:tracking-[0.35em]
                text-[var(--gold-deep)]
                transition
                hover:bg-[var(--gold)]
                hover:text-white
              "
            >
              Copy Account Number
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}