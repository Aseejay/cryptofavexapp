import HeroSectionTerms from "./TermHerosection";

export const Terms = () => {
  const termsData = [
    {
      title: "INTRODUCTION",
      content: `This site is owned and operated by Favex (“the Company”) with its website located at 'Favexapp.com' (“the Website”). 
    The Company provides various services, including but not limited to the buying of gift cards. 
    Your privacy on the Internet is of the utmost importance to us. We will never share your personal information with any third party, 
    but because we may gather certain types of information about our users, we feel you should fully understand our policy and the terms 
    and conditions surrounding the capture and use of that information. This privacy statement discloses what information we gather and how we use it. 
    The private information you provide on the Website will be used only for its intended purpose. 
    By using the Website, you consent to the data practices described hereinafter.`,
    },
    {
      title: "COLLECTION OF PERSONAL INFORMATION",
      content: `By using the Website and its functions, you may provide basic information such as your name, phone number, 
    address, and email address which allows us to send information, provide updates and/or process the type of Services you so desire. 
    If you sign up with the Company and/or purchase services through the Company, we may also collect billing and credit card information. 
    The Company encourages you to review the privacy statements of the Websites you choose to link to and from the Company so that you can 
    understand how those Websites collect, use and share your information (“Third Party Website”). 
    The Company is not responsible for the privacy statements or other contents on the Third Party Website outside of the Company's Website.`,
    },
    {
      title: "THE NATURE OF PERSONAL INFORMATION WE COLLECT",
      content: `Personal information we collect which you may provide to us includes: 'Identifying information' (name, date and place of birth, gender, age); 
    'Contact information' (home / office address, phone numbers); and 'Financial information' (bank account details, credit card details). 
    As a general rule, you have the right not to provide this information. However, not providing certain information may result in the inability 
    to provide you with the Services.`,
    },
    {
      title: "AUTOMATICALLY COLLECTED INFORMATION",
      content: `We collect and temporarily store certain information about your visit for use in site management and security purposes only. 
    This helps us to better design the Website to suit your needs. The information includes: your internet domain name, IP address, 
    browser type, operating system, date and time of access, visited URLs, username, and referring website address.`,
    },
    {
      title: "INFORMATION COLLECTED FOR TRACKING AND CUSTOMIZATION (COOKIES)",
      content: `A 'cookie' is a small file that a website transfers to your computer to allow it to remember specific information about your session. 
    Session cookies last only while your browser is open and are deleted once closed. Persistent cookies remain saved to determine 
    returning users.`,
    },
    {
      title: "USE OF YOUR PERSONAL INFORMATION",
      content: `The Company collects and uses your personal information to operate the Website and deliver the Services. 
    We do not sell, rent or lease customer lists to third parties. Data may be shared with third parties to help perform 
    statistical analysis, send you emails, provide support, or arrange deliveries — but they are required to maintain confidentiality.`,
    },
    {
      title: "DISCLOSURE OF YOUR PERSONAL INFORMATION",
      content: `Your personal information may be used and disclosed to employees, agents, suppliers, subcontractors, and third parties 
    as reasonably necessary for providing the Services. It may also be disclosed to comply with legal requirements, enforce law, 
    or protect intellectual property and rights of the Company.`,
    },
    {
      title: "SECURITY OF YOUR PERSONAL INFORMATION",
      content: `The Company secures your personal information from unauthorized access, use or disclosure.`,
    },
    {
      title: "CHILDREN UNDER THIRTEEN",
      content: `The Company does not knowingly collect personal information from children under the age of thirteen. 
    If you are under thirteen, you must ask your parent or guardian for permission to use this Website.`,
    },
    {
      title: "OPT-OUT & UNSUBSCRIBE",
      content: `The Company respects your privacy and gives you an opportunity to opt-out of receiving information in respect of the Services 
    by contacting us at support@favexapp.com.`,
    },
    {
      title: "CHANGES",
      content: `The terms contained in this Privacy Policy may change subject to modification and amendments. 
    All modifications will take immediate effect and no prior notice will be given. 
    You are therefore advised to review our Privacy Policy from time to time.`,
    },
  ];
  return (
    <>
      <HeroSectionTerms />
      <div className="company-container">
        <div className="company-header">
          <h4>Terms</h4>
          <p>Last updated July 10, 2024</p>
        </div>
        {termsData.map((data) => (
          <div className="company-info">
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};
