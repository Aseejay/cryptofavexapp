import HeroSectionPrivacy from "./HerosectionPolicy";

export const Privacy = () => {
  const privacyData = [
    {
      title: "INTRODUCTION",
      content: `Thank you for engaging our services and/or placing an order with 'favexapp.com' (“Website”), 
    a site operated by FAVEX (“the Company”). By placing an order, clicking to accept this Agreement or using and/or 
    accessing any of the Company or related services, you agree to all the terms and conditions of the Agreement. 
    If you are using or ordering the Company's service(s) on behalf of a Company or other entity, then “Customer” or “You” 
    means that entity, and you are binding that entity to the Agreement. You represent and warrant that you have the legal 
    power and authority to enter into the Agreement and that, if the Customer is an entity, the Agreement is entered into 
    by an employee or agent with all necessary authority to bind that entity.`,
    },
    {
      title: "GENERAL",
      content: `The terms and conditions of the Agreement (together with any other terms agreed in writing between the Company 
    and the Client) constitute the entire agreement between the parties and supersede any previous agreements. 
    No failure or delay by the Company in exercising rights shall be deemed a waiver, and no waiver of a breach 
    shall be considered a waiver of any subsequent breach.`,
    },
    {
      title: "DEFINITION AND INTERPRETATION",
      content: `Definitions include: 'Authorised Users' (employees, agents, contractors of the Client), 
    'Client' (you as the receiver of Services), 'Parties' (Company and Client), 
    'Services' (sale of gift cards for Naira), 'Service Provider' (the Company), 'We/Us/Our' (the Company), 
    'You/Your' (the Client).`,
    },
    {
      title: "THE SERVICES",
      content: `The Company shall provide Services as specified on the Website subject to the Agreement. 
    If the Company cannot provide Services, it will inform the Client. Payment is required before Services. 
    The Client shall not request immoral or unlawful Services. Deposits may be retained if Services are terminated 
    after commencement. The Client must provide detailed information for the Company to deliver Services effectively.`,
    },
    {
      title: "TERMINATION AND REFUNDS",
      content: `Refunds may only be requested before performance begins, at the sole discretion of the Company. 
    Refunds will exclude handling costs. The Company may terminate the Agreement if the Client commits a serious breach. 
    On termination, all outstanding sums become payable immediately. Deposits may be retained and deductions applied 
    for losses and costs.`,
    },
    {
      title: "LIABILITY, EXCLUSION AND LIMITATIONS",
      content: `The Company warrants reasonable endeavours to provide Services with care and skill. 
    Liability is not excluded for negligence causing injury or death. The Company is not liable for losses resulting from 
    incomplete or inaccurate Client instructions, or for delays beyond its control. Maximum liability is limited to 
    the value of the Charge paid in full.`,
    },
    {
      title: "DISCLOSURE OF INFORMATION",
      content: `All private information is governed by the Privacy Policy. 
    The Company does not sell, rent or lease its customer list to third parties. 
    Unless notice is received, the Company may provide the Client with information about Services.`,
    },
    {
      title: "AMENDMENTS",
      content: `The Company may update or modify this Agreement from time to time. 
    Modified versions take effect upon the next Service. Continued use of Services constitutes acceptance.`,
    },
    {
      title: "SEVERABILITY",
      content: `If any provision of this Agreement is found unenforceable or invalid, 
    that provision will be limited so that the Agreement may otherwise remain in effect.`,
    },
    {
      title: "FORCE MAJEURE",
      content: `Neither Party will be liable for failure to perform obligations due to causes beyond reasonable control, 
    including strikes, war, terrorism, riots, natural disasters, power or telecom failures, or government actions.`,
    },
    {
      title: "SUBPOENAS",
      content: `Nothing prevents the Company from disclosing Client information as required by law, subpoenas, or court orders. 
    The Company will use commercially reasonable efforts to notify the Client where permitted.`,
    },
    {
      title: "ASSIGNMENT",
      content: `The Agreement binds and benefits permitted successors and assigns. 
    Neither Party may assign the Agreement without consent, except the Company may assign without consent in cases 
    of merger, acquisition, or transfer of substantially all assets.`,
    },
    {
      title: "ENTIRE AGREEMENT",
      content: `This Agreement represents the complete and exclusive understanding of the parties, 
    superseding all prior oral communications, proposals, and representations.`,
    },
    {
      title: "INCORPORATION",
      content: `This Agreement incorporates the Privacy Policy and other written documents deemed appropriate by the Company, 
    including Website contents.`,
    },
    {
      title: "GOVERNING LAWS, JURISDICTION AND VENUE",
      content: `This Agreement is governed by the laws of Nigeria, without regard to choice or conflict of law rules.`,
    },
    {
      title: "CONTACT",
      content: `The Company welcomes your questions or comments regarding the Terms. 
    Email: support@favexapp.com | Phone: 08148736835`,
    },
  ];

  return (
    <>
      <HeroSectionPrivacy />
      <div className="company-container">
        <div className="company-header">
          <h4>Privacy Note</h4>
          <p>Last updated July 10, 2024</p>
        </div>
        {privacyData.map((data) => (
          <div className="company-info">
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};
