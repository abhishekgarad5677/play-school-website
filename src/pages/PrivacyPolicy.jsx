import { useEffect } from "react";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tableData = [
    {
      col1: [
        {
          sction1:
            "Creation and setting up of account, help you log in and to provide access to and deliver our Services",
        },
      ],
      col2: [
        {
          sction1:
            "Phone number, User ID (which is automatically assigned on registration), gender, profile picture and any other information that the User chooses to share in the ‘Profile’ section of the Services (“Account Data”)",
        },
      ],
      col3: [
        {
          section1:
            "Processing is necessary for performance of a contract with the user (i.e., creation of an account) and take steps prior to entering a contract with Users. Without this information, we will not be able to provide Services which the Users have requested.",
          section2:
            "It is in our legitimate interest to verify your identity or conduct appropriate checks for fraud prevention and detection before authenticating you and granting you access to the Services.",
          section3:
            "Where required by applicable laws we will obtain your consent. Processing is necessary for compliance with our legal obligations.",
          section4: "Encrypted",
        },
      ],
      col4: "Encrypted",
    },
    {
      col1: [
        {
          sction1:
            "Creation and setting up of account, help you log in and to provide access to and deliver our Services",
        },
      ],
      col2: [
        {
          sction1:
            "Phone number, User ID (which is automatically assigned on registration), gender, profile picture and any other information that the User chooses to share in the ‘Profile’ section of the Services (“Account Data”)",
        },
      ],
      col3: [
        {
          section1:
            "Processing is necessary for performance of a contract with the user (i.e., creation of an account) and take steps prior to entering a contract with Users. Without this information, we will not be able to provide Services which the Users have requested.",
          section2:
            "It is in our legitimate interest to verify your identity or conduct appropriate checks for fraud prevention and detection before authenticating you and granting you access to the Services.",
          section3:
            "Where required by applicable laws we will obtain your consent. Processing is necessary for compliance with our legal obligations.",
          section4: "Encrypted",
        },
      ],
      col4: "Encrypted",
    },
    {
      col1: [
        {
          sction1:
            "Creation and setting up of account, help you log in and to provide access to and deliver our Services",
        },
      ],
      col2: [
        {
          sction1:
            "Phone number, User ID (which is automatically assigned on registration), gender, profile picture and any other information that the User chooses to share in the ‘Profile’ section of the Services (“Account Data”)",
        },
      ],
      col3: [
        {
          section1:
            "Processing is necessary for performance of a contract with the user (i.e., creation of an account) and take steps prior to entering a contract with Users. Without this information, we will not be able to provide Services which the Users have requested.",
          section2:
            "It is in our legitimate interest to verify your identity or conduct appropriate checks for fraud prevention and detection before authenticating you and granting you access to the Services.",
          section3:
            "Where required by applicable laws we will obtain your consent. Processing is necessary for compliance with our legal obligations.",
          section4: "Encrypted",
        },
      ],
      col4: "Encrypted",
    },
  ];

  // 3.1. Information submitted by You
  const infoSubmitted = [
    {
      col1: [
        {
          sction1: "Name of Guardian",
        },
      ],
      col2: [
        {
          sction1: "Basic identification and account management.",
        },
      ],
      col3: [
        {
          section1:
            "Registration Grievance Redressal (ifrequired) Global Ranking",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "Identification Proof of the Guardian (Optional)",
        },
      ],
      col2: [
        {
          sction1:
            "The same may be provided to verify the consent provided for registration.",
        },
      ],
      col3: [
        {
          section1: "Registration",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "Username",
        },
      ],
      col2: [
        {
          sction1: `The same shall be used for ______. It is
            understood if the username shall be visible to
            others, and if it corresponds to the legal name
            of the Guardian/Child, You provide specific
            consent for the Personal Data to be
            attributable to You in the public domain of
            the Application while displaying the Global
            Rankings.`,
        },
      ],
      col3: [
        {
          section1: "Registration",
          section2: "Global Ranking",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "Name of Children",
        },
      ],
      col2: [
        {
          sction1: `Used for reporting purposes.`,
        },
      ],
      col3: [
        {
          section1: "Registration",
          section2: "Reporting",
          section3: "Technical Support",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "Phone Number",
        },
      ],
      col2: [
        {
          sction1: `Used for verification and registration purposes.`,
        },
      ],
      col3: [
        {
          section1: "Registration",
          section2: "Technical Support",
          section3: "Grievance Redressal (if required)",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "One Time Password",
        },
      ],
      col2: [
        {
          sction1: `To successfully log into the Services, Users will be required to provide the one-time
        password (“OTP”) sent to their registered
        mobile phone numbers, for which we may
        ask Users to give us the permission to read
        the OTP sent to their registered mobile phone
        numbers. The provision of this information is
        optional, and it is at Users’ discretion to
        either provide us with the requisite
        permission to access the OTP for auto-filling
        on the Services or the Users may choose to
        key in the OTP on their own.`,
        },
      ],
      col3: [
        {
          section1: "Verification",
          section2: "Technical Support",
          section3: "Grievance Redressal",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "Email ID",
        },
      ],
      col2: [
        {
          sction1: `Used for communication.`,
        },
      ],
      col3: [
        {
          section1: "Registration",
          section2: "Technical Support",
          section3: "Grievance Redressal (if required)",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "Date of Birth (DOB) of Child(ren)",
        },
      ],
      col2: [
        {
          sction1: `Used for providing a more personalized experience.`,
        },
      ],
      col3: [
        {
          section1: "Registration",
          section2: "Analytics",
          section3: "Report Generation",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "Banking Details",
        },
      ],
      col2: [
        {
          sction1: `Used to process the subscription fee and monitor the balance amount.`,
        },
      ],
      col3: [
        {
          section1: "Registration/ Re-Registration",
          section2: "Banking Status confirmation",
          section3: "Auto Pay",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "Gender of Child",
        },
      ],
      col2: [
        {
          sction1: `Used for providing a more personalized experience.`,
        },
      ],
      col3: [
        {
          section1: "Registration",
          section2: "Analytics",
          section3: "Report Generation",
        },
      ],
    },
  ];

  //   3.2. Information collected by Us:
  const infoCollected = [
    {
      col1: [
        {
          sction1: `Exact Location including
            Continent, Country,
            Country Code, Region,
            State, City, Zip (via IP
            Address)`,
        },
      ],
      col2: [
        {
          sction1: "Analysis and Processing of Data.",
          sction2: "Fraud detection.",
          sction3: "Targeted Advertising.",
          sction4: `For Premium Users: Global Ranking.
                    To enforce Our rights to monitor, investigate,
                    prevent and/or mitigate violations of the
                    Terms of Use and this Policy.`,
        },
      ],
      col3: [
        {
          section1: `Every time the application is opened.Compliance Purposes.`,
        },
      ],
    },
    {
      col1: [
        {
          sction1: `User ID allotted to the Guardian`,
        },
      ],
      col2: [
        {
          sction1: `The same shall be generated by NMPL but
            shall be used by the Data Principal to access
            the Services provided or make a complaint of
            the lack thereof. 7.1. ferent games and to
            monitor compliance.`,
        },
      ],
      col3: [
        {
          section1: `Registration`,
          section2: `Login`,
          section3: `Monitoring of Compliance`,
          section4: `Technical Support`,
          section5: `Grievance Redressal (if required)`,
        },
      ],
    },
    {
      col1: [
        {
          sction1: `Time Spent on the Game`,
        },
      ],
      col2: [
        {
          sction1: `Used for reporting purposes.`,
        },
      ],
      col3: [
        {
          section1: `Every time a game is played.`,
          section2: `Analytics`,
          section3: `Report Generation`,
        },
      ],
    },
    {
      col1: [
        {
          sction1: `Number of Games Played`,
        },
      ],
      col2: [
        {
          sction1: `Used for reporting purposes.`,
        },
      ],
      col3: [
        {
          section1: `Every time a game is played.`,
          section2: `Analytics`,
          section3: `Report Generation`,
        },
      ],
    },
    {
      col1: [
        {
          sction1: `Score and Rank`,
        },
      ],
      col2: [
        {
          sction1: `Used for the purpose of report generation and global ranking.`,
        },
      ],
      col3: [
        {
          section1: `Every time a game is played.`,
          section2: `Analytics`,
          section3: `Report Generation`,
          section4: `Global Ranking`,
          section5: `Report Generation`,
          section6: `Marketing and Promotion`,
          section7: `Monetization`,
        },
      ],
    },
    {
      col1: [
        {
          sction1: `Device IDs`,
        },
      ],
      col2: [
        {
          sction1: `To provide a personalized experience.`,
        },
      ],
      col3: [
        {
          section1: `Every time the application is opened.`,
        },
      ],
    },
    {
      col1: [
        {
          sction1: `Usage Data, including the
                time You launch the
                Services, the pages and
                content viewed, IP
                address, unique device
                identifiers, any adverts
                that You viewed and
                clicked on, the objects
                and links You clicked on
                and interacted with, and
                scrolling/gesture/tap
                information.`,
        },
      ],
      col2: [
        {
          sction1: `To provide features and functionality of the
            Services such as in-app messages, push
            notifications and gameplay performance
            records.`,
          sction2: `To update features to better Our Services and
            develop new products, games and other
            offerings and services.`,
          sction3: `To create reports and develop insights about
            Our business. We may use aggregated or
            anonymised data for such purposes.`,
          sction4: `To help train Our machine learning and AI
            models to provide You with personalized
            content and user experience as well as for the purposes outlined in this Policy.
            To enforce Our rights to monitor, investigate,
            prevent and/or mitigate violations of the
            Terms of Use and this Policy.`,
        },
      ],
      col3: [
        {
          section1: `Every time the application is opened.`,
        },
      ],
    },
    {
      col1: [
        {
          sction1: `Diagnostics Data
            including Crash logs and
            usage and performance
            statistics.`,
        },
      ],
      col2: [
        {
          sction1: `To troubleshoot software bugs, patch errors,
            and maintain functionality of the Services;
            To help train Our machine learning and AI
            models to provide You with personalized
            content and user experience as well as for the
            purposes outlined in this Policy.
            To enforce Our rights to monitor, investigate,
            prevent and/or mitigate violations of the
            Terms of Use and this Policy.`,
        },
      ],
      col3: [
        {
          section1: `Every time the application is opened.`,
        },
      ],
    },
    {
      col1: [
        {
          sction1: `Tracking Technologies`,
        },
      ],
      col2: [
        {
          sction1: `We may use technologies, such as software
            development kits (SDK) and API as part of
            Services We deliver to you. We use these
            technologies to secure and improve Our
            Services, to understand Your preferences,
            collect information about Your activity, and
            device and tailor Our Services to Your
            interests. We may also use these technologies
            to collect information when You interact with
            Services.`,
        },
      ],
      col3: [
        {
          section1: `Every time the application is opened.`,
        },
      ],
    },
  ];

  // THIRD PARTY SERVICE PROVIDERS

  const serviceProv = [
    {
      col1: [
        {
          sction1: "Firebase",
        },
      ],
      col2: [
        {
          sction1: "Analytics and data processing",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "IronSource",
        },
      ],
      col2: [
        {
          sction1: "Analytics and Mediation for advertisements",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "RazorPay",
        },
      ],
      col2: [
        {
          sction1: "Payment gateway for processing transactions",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "Unity",
        },
      ],
      col2: [
        {
          sction1: "Game development engine",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "AWS",
        },
      ],
      col2: [
        {
          sction1: "Storage purposes",
        },
      ],
    },
    {
      col1: [
        {
          sction1: "2-FactorAuthentication",
        },
      ],
      col2: [
        {
          sction1: "2-FactorAuthentication",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="h-auto bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pt-5 relative overflow-hidden">
        <Navbar />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
          className=" text-[54px] text-[#fff] leading-[176.3%] py-16 text-center font-[500]"
        >
          Privacy Policy
        </motion.div>
      </div>
      <div className="mx-14 py-10">
        <motion.div
          // className="mx-14 py-10"
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            Last Updated: 6th May, 2024.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            This Privacy Policy explains Our policy regarding the collection,
            processing, use, disclosure, and transfer of Your information
            (“Privacy Policy”) for the application “TMKOC Play School”
            application available on : ______________ (&quot;Application&quot;).
            or products or services which are operative now or developed or
            created in the future (the “Services”) which is owned and operated
            by Neela Mediatech Private Limited, having its office at 401, 4th
            Floor, Stanford, CTS no 554/1 to 4 Junction of SV Road and Juhu
            lane, Andheri (W) Mumbai, MH 400058 (“NMPL”, “Us”, “We”, “Our”).
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            This Privacy Policy describes what information We gather from You,
            how We use that information, and what We do to protect it. By
            accessing, availing or using the Application, You expressly consent
            to the information handling practices described in this Privacy
            Policy. If You do not want information about You to be used in the
            manner set forth in this Privacy Policy, please do not use the
            Application.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            It is herein agreed between the Parties that by clicking ‘I agree’,
            User gives their consent to process the Personal Data as per the
            terms of this Privacy Policy, which shall act as the Notice as
            provided under the applicable laws.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            Users are requested to read this Policy in conjunction with the
            Terms of Use as can be found on ______________ We request You to
            review the most recent version of the Policy periodically. By using
            the Services, You agree to the handling of Your information in
            accordance with this Policy. If You provide Us with Your information
            We will treat Your information according to this Policy. If We need
            to use Your Personal Data for any other purpose, other than as
            disclosed herein, We will update this Policy or ask for Your prior
            consent, if necessary.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            If You do not agree with this Policy in general or any part of it,
            please do not use Our Services. By continuing to use the Services,
            You acknowledge and expressly agree to Our collection, processing,
            storing, transfer, and use of Your information as described in this
            Policy. You agree, and confirm freely, specifically, unconditionally
            and unambiguously consent, after taking an informed decision, to
            provide Your information which will be stored in electronic form and
            the same shall be maintained in Our records for the period of time,
            as is prescribed under law for legal purposes and/or otherwise.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            1. IMPORTANT TERMS
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2 ">
            1.1. Personal data as means any data about an individual who is
            identifiable by or in relation to such data. The same shall, where
            the context requires, refers to the data of the Data Principal and
            the Child.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            1.2. Child shall mean an individual who has not completed the age of
            18 (eighteen) years. The singular reference shall be deemed to
            include “children” wherever the context so requires, and vice-versa.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            1.3. Data Fiduciary means the person who determines the purpose and
            means of processing of Your Personal Data. For the purpose of this
            Policy, We are the Data Fiduciary of Your Personal Data.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            1.4. Data Principal is any means the individual to whom the Personal
            Data relates and where such individual is a Child, includes lawful
            guardian (which shall include the parent) of such Child. For the
            purpose of this Policy, the guardian is the Data Principal on behalf
            of the Child i.e., “You”.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            2. CHILDREN’S PRIVACY
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2 ">
            2.1. NMPL respects the privacy of Children. While Our Services on
            the App are made for Children, the guardian of such Child shall
            provide consent for the registration and their use of the
            Application. You shall also be responsible for the regulation of use
            of the Application by the Child.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            2.2. We urge individuals under the age of 18 years to refrain from
            registering for Our Services. When Our Services are provided to
            Children under the supervision and guidance of their guardian i.e.
            You, the individual above 18 years of age, then in such an even You
            agree to be bound by the terms of use for accessing Services and the
            present policy.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            2.3. The use of the data of children is elaborated under Clause 3.
            We do not undertake any processing activities which shall be
            detrimental to the Child. Further, We shall not undertake tracking
            or behavioural monitoring of Children or targeted advertising
            directed at Children, save and except for the purpose of report
            generation and detection of fraud wherein the Personal Data is
            anonymized prior to engagement of the third party service providers,
            thus disallowing any Personal Data to be shared. We are committed to
            complying with the applicable laws and regulations pertaining to
            protection of Children.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            2.4. The verification of the consent by the guardian on behalf of
            the Child shall be undertaken as prescribed under the applicable law
            and the Data Principal agrees to comply with the procedure as
            prescribed. This may include voluntary submission of a government
            issued identification proof, else permitting NMPL to undertake the
            requisite due diligence as prescribed under the applicable law, to
            verify the consent provided by You.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            2.5. The Data Principal bears the right to delete any information as
            prescribed under Clause 7, including but not limited to the data
            relating to the Children. The procedure for the same is elaborated
            under the said Clause.
          </p>
        </motion.div>
        <div
          //   initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          //   whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          //   viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          //   transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            3. INFORMATION WE COLLECT
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            3.1. Information submitted by You:
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2 ">
            a) The following information is submitted by You to Us or our
            service providers, as tabulated below with the stage of collection
            as detailed:
          </p>

          <div className="overflow-x-auto">
            <table className=" divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                    Data Collected
                  </th>
                  <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                    Purpose
                  </th>
                  <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                    Stage
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {infoSubmitted?.map((ele, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="px-4 py-4 text-[16px] text-[#212529]">
                      {ele?.col1?.map((item, colIndex) => (
                        <div key={colIndex} className="mb-2">
                          {Object.keys(item).map((key, keyIndex) => (
                            <p
                              key={keyIndex}
                              className="text-[16px] mb-2 text-[#212529]"
                            >
                              {item[key]}
                            </p>
                          ))}
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-4">
                      {ele?.col2?.map((item, colIndex) => (
                        <div key={colIndex} className="mb-2">
                          {Object.keys(item).map((key, keyIndex) => (
                            <p
                              key={keyIndex}
                              className="text-[16px] mb-2 text-[#212529]"
                            >
                              {item[key]}
                            </p>
                          ))}
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-4">
                      {ele?.col3?.map((section, secIndex) => (
                        <div key={secIndex} className="mb-2">
                          {Object.keys(section).map((key, keyIndex) => (
                            <p
                              key={keyIndex}
                              className="text-[16px] mb-2 text-[#212529]"
                            >
                              {section[key]}
                            </p>
                          ))}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2 ">
            b) We and Our third-party service providers, also collect the
            information You provide to Us when You correspond with Us including
            when You require customer support, submit questions or comments,
            rate the Services and other content You post using the Services. The
            information collected through this shall include Your email address,
            name, phone number, messages You send to Us and other information
            You choose to share with us. If You submit any information relating
            to other people in connection with the Services, You represent that
            You have the authority to do so and permit Us to use the information
            in accordance with this Policy.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2 ">
            c) Please note that We do not, in any manner, collect any special
            category data such as racial or ethnic origin, political opinions,
            religious beliefs, genetic data, biometric data, or data concerning
            user’s sex life or sexual orientation. If it has been brought to Our
            notice that We have inadvertently collected any such special
            category data, then please contact Us via the means provided under
            Clause 9 below and We will delete such special category data.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2 ">
            d) The data as tabulated may also be used to perform Our agreement
            with You and provide Our Services to You and also in order to take
            steps at Your request prior to entering into an agreement.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2 ">
            e) By attesting to this policy, You understand that Your data may be
            used for certain “legitimate purposes” as prescribed under the
            applicable law without Your consent, and You hereby waive any claim
            against NMPL with respect to such purposes.
          </p>

          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            3.2 Information collected by Us:
          </p>

          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            a) We and Our third-party service providers also use a variety of
            technologies, such as application programming interface (“API”), to
            automatically collect certain technical information from Your mobile
            device over time and across different websites/applications.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            b) The following information is automatically collected by Us and/or
            service providers, as tabulated below with the stage of collection
            as detailed for which You provide specific consent for every stage:
          </p>
          <div className="overflow-x-auto">
            <table className=" divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                    Data Collected
                  </th>
                  <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                    Purpose
                  </th>
                  <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                    Stage
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {infoCollected?.map((ele, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="px-4 py-4 text-[16px] text-[#212529]">
                      {ele?.col1?.map((item, colIndex) => (
                        <div key={colIndex} className="mb-2">
                          {Object.keys(item).map((key, keyIndex) => (
                            <p
                              key={keyIndex}
                              className="text-[16px] mb-2 text-[#212529]"
                            >
                              {item[key]}
                            </p>
                          ))}
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-4">
                      {ele?.col2?.map((item, colIndex) => (
                        <div key={colIndex} className="mb-2">
                          {Object.keys(item).map((key, keyIndex) => (
                            <p
                              key={keyIndex}
                              className="text-[16px] mb-2 text-[#212529]"
                            >
                              {item[key]}
                            </p>
                          ))}
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-4">
                      {ele?.col3?.map((section, secIndex) => (
                        <div key={secIndex} className="mb-2">
                          {Object.keys(section).map((key, keyIndex) => (
                            <p
                              key={keyIndex}
                              className="text-[16px] mb-2 text-[#212529]"
                            >
                              {section[key]}
                            </p>
                          ))}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            The data as tabulated may also be used to perform Our agreement with
            You and provide Our Services to You and also in order to take steps
            at Your request prior to entering into an agreement.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            By attesting to this policy, You understand that Your data may be
            used for certain “legitimate purposes” as prescribed under the
            applicable law without Your consent, and You hereby waive any claim
            against NMPL with respect to such purposes.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            4. SHARING OF INFORMATION
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            4.1. We do not sell Your information to third parties.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            4.2. We share Your information with third parties who help Us in
            delivering and analysing Our Services. These third parties are not
            authorised to retain, share, store or use the information shared by
            Us for any purpose other than to provide the services they have been
            engaged to provide.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            4.3. We may also use artificial intelligence technologies (“AI”)
            from registration to termination, in order to make your experience
            of the Services seamless. You hereby provide specific consent for
            the use of the same and permit NMPL to share Your data with AI, if
            any.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            4.4. The service providers that We share Your information with
            include:
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            a) Service Providers: We engage service providers to help facilitate
            delivery of the Services, which include those who We engage to give
            Us hosting and storing services, operate Our technical
            infrastructure, which is required to keep the Services operational,
            assist in helping Us provide You with seamless Services, protecting
            and securing Our systems and Services, provide personalised content,
            to grow Our business, for attribution of game installs, for
            reporting purposes, as well as helping Us market the Services. These
            service providers also include Our third-party professional advisors
            such as auditors, law firms, etc. The service providers that We
            engage are required by contract to have similar level of privacy
            protection as We do and are required to follow the same standards as
            this Policy and as far as practicable or as required by applicable
            law.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            b) Advertising Platforms and Networks (commonly known as ‘ad
            networks’): We have partnered up with various ad networks to display
            advertisements on Our Services.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            c) Analytics providers: We work with service providers that help Us
            analyse and understand Personal Data and identify and develop
            trends, patterns, and insights to optimise and improve the Services
            and create new products or features. These service providers also
            help Us track App usage and Users’ engagement with the Services
            including games available on the Services and gameplay to help Us
            provide better games, Services, and generate reports for You.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            d) Payment gateways: We have partnered with payment gateways who
            offer payment support. These payment gateways help Us in processing
            payments made by You by facilitating transfer of monies from Your
            bank account or mobile payment services or online payment services.
            Certain Personal Data is transmitted to these payment gateways for
            the purpose of processing any payments. The transmission of Your
            payment information is automatic, and at no point do we, or any of
            Our agents or employees, have the ability to review, access or
            retain such payment information. We are required to retain Your
            email address by some of Our online payment service providers. For
            more information on how Your payment information is processed,
            please see the terms of use and privacy policies of those payment
            gateways.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            e) We may also disclose aggregated or anonymised information about
            You along with information that does not identify any individual or
            device (save and except any banking or transaction related data
            which shall be stored as per the guidelines issued by the
            government), except where limited by applicable laws.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            f) The service providers and other partners We share Your data with,
            and the processing of such data by such service providers and
            partners will be in accordance with their terms of use and privacy
            policies. An indicative list of Our service providers is more
            particularly detailed in Annexure-A. If You have any questions
            regarding the service providers that We share Your Personal Data
            with or who undertake processing on Your Personal Data, please
            contact Us as described via the means provided under Clause 9.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            4.5. We may also share Your Personal Data in order to comply with
            the applicable law which shall include disclosure for “legitimate
            purposes” as prescribed, without your consent.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            4.6. For more information regarding the sharing of data with third
            parties please review the applicable sections below and notices
            within Annexure A or please contact Us as described in the “Contact
            Us” section below.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            5. DATA TRANSFER, STORAGE AND RETENTION
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            5.1 We store information collected from You on Our or Our
            third-party service providers’ servers located in India. The
            information collected through the Services will be stored and
            processed in India. You hereby provide specific consent to the
            compliance with the Indian laws in case You are accessing the
            Application in any other country and undertake that NMPL shall not
            be liable for compliance with the same.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            5.2 In case the information collected is processed or stored in
            territories that do not have the same data protection laws as Your
            jurisdiction or that may not be as protective including for service
            efficiency purposes and/or due to affiliates and third parties being
            located in such territories, We may transfer Your Personal Data to a
            third country not being approved by Your country as a safe country
            for such transfer, to which You explicitly consent to.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            5.3 We retain Personal Data for as long as required under applicable
            laws, as long as necessary to provide the Services to You and fulfil
            the transactions You have requested, to meet the purpose for which
            the Personal Data was collected, to comply with Our legal
            obligations, resolving disputes, and enforcing Our agreements. You
            shall be intimated prior to Your deletion of Your Personal Data and
            if the steps so prescribed under the applicable law are not
            enforced, Your account shall be deleted. NMPL bears no
            responsibility for loss of data or for non-accessibility towards Our
            Services in this instance. In the event We decide to maintain Your
            information after You being inactive on Our Services or after
            deletion of Your account, We may anonymise such data and ensure that
            it is in a de-identifiable state, as far as the applicable law
            permits.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            5.4 Where We determine that the Personal Data which is collected is
            not required to be stored or retained in a manner in which a natural
            person can be identified using such Personal Data, We anonymise such
            Personal Data before further processing.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            5.5 Anonymized information may nonetheless persist internally in Our
            backup, archive files or similar databases, unless the applicable
            law prescribes otherwise, and may still be used anonymized, for Our
            internal support, administrative, and record-keeping purposes
            including, but not limited to, allowing Us to improve the Services
            and other services We provide through research, evaluation, and
            analytics as permissible by applicable laws and for other purposes
            specifically outlined in this policy.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            5.6 We may also keep certain information in backup or archive
            records if required by law or if it is relevant to prevent fraud or
            future violations of Our policies or for legitimate business
            purposes when permitted by applicable law. All retained data will
            continue to be subject to Our Policy in effect at that time.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            5.7 Please note that any Personal Data about You stored or retained
            by a third party is subject to the third party’s terms of use and
            privacy policy and You must contact them directly to get Your data
            deleted. The third parties that We have engaged for the purposes of
            delivering and analysing Our Services, are listed out in Annexure –
            A.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            6. DATA SECURITY
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            6.1. We care about the security of Your information, and use
            appropriate security, technical and organiztional measures to
            preserve the integrity and security of Your Personal Data collected
            by Us through the Services. Where Personal Data is not anonymised,
            We use industry standard SSL (secure socket layer technology)
            encryption for Personal Data in transit. Other security safeguards
            include, but are not limited to, anonymisation, pseudonymisation,
            data encryption, firewall, and physical access controls to buildings
            and files. We also get periodic audits conducted of Our security to
            apply best practices and reasonable industry standards.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            6.2. Some of the precautions We take to protect Personal Data
            includes: (a) limiting employee/consultant access to Personal Data
            to only those employees/consultants who are involved in bettering
            Your experience; (b) requiring employees/consultants to sign
            confidentiality agreements upon hiring; (c) conducting regular
            employee/consultant privacy and data security training and
            education; and (d) protecting Personal Data with commercially
            reasonable technical, contractual, administrative, and physical
            security safeguards.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            6.3. Although We endeavour to deploy state of the art security
            measures, tools and practices, We cannot ensure or warrant that any
            of Your information will not be subject to any unlawful disclosure
            as no data transmission over the internet can be guaranteed to be
            completely secure. Moreover, We are not responsible for the security
            of information You transmit to the Services over networks that We do
            not control, including the internet and wireless networks. If You
            have reason to believe that Your interaction with Us is not secure,
            please contact Us via the means provided under Clause 9.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            6.4. In the event that any information under Our control is
            compromised as a result of a breach of security, We will take
            reasonable steps to investigate the situation and notify You and the
            relevant data authorities that information has been compromised if
            and as required under the applicable laws or deemed necessary and
            appropriate under the circumstances. You may contact the concerned
            person under the “Contact Us” section below who shall be able to
            respond to Your queries. We will also take reasonable steps, in
            accordance with the applicable laws and regulations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            7. YOUR RIGHTS AND DUTIES
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            7.1. We aim to take reasonable steps to allow You to correct, amend,
            delete, or limit the use of Your Personal Data. You (which term
            shall include Your consent manager for the purpose of this Clause)
            can edit certain information with respect to Your profile on Our
            Service at any time in accordance with the mechanism provided under
            the Terms.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            7.2. In certain circumstances, You have the following data
            protection rights which can be exercised by You by contacting Us at
            the contact information provided in the “Contact Us” section below -
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            a) Objecting: You have the right to object to processing of Your
            Personal Data. You may ask Us to erase or limit the use or other
            processing of Your Personal Data where We relied on Your consent to
            process Your Personal Data by contacting Us via the means provided
            under Clause 9, and we shall comply unless another legal basis for
            processing and retaining this data exists or applicable law requires
            Us to retain the data.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            b) The Right to Withdraw Consent: Where You provided Us with Your
            consent and where We relied on Your consent to collect and process
            Your Personal Data, You may withdraw Your consent to the collection
            and processing of Personal Data at any time by sending a written
            request via the means provided under Clause 9. Withdrawing consent
            may impact Your use of whole or part of the Services, such as
            accurate analytics under the report generated. We may still be able
            to process the Personal Data for which You have withdrawn Your
            consent if any other legal basis applies for collection and
            processing of such data or if required under the applicable laws.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            c) Access: You have the right to request a summary of the Personal
            Data that We process about You and the processing activities
            undertaken. However, there are exceptions to this right, so that
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            d) Accuracy: We aim to keep Your Personal Data accurate and
            complete. We encourage You to keep Us informed about changes that
            You would like reflected in Our records. You are also able to
            complete or update the Personal Data in accordance with the
            mechanism provided in the Terms. However, You shall be liable in the
            instance the information provided/ completed/ updated by You is
            inaccurate/misleading and nothing herein shall be construed
            otherwise. Exercise
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            e) Rectification: You have the right to request the rectification of
            inaccurate Personal Data and, taking into account the purposes of
            the processing, to complete Your Personal Data. You are also able to
            correct or rectify certain inaccurate Personal Data in accordance
            with the mechanism provided in the Terms. However, You shall be
            liable in the instance the information provided/ corrected/
            rectified by You is inaccurate/misleading and nothing herein shall
            be construed otherwise. Exercise of this right shall impact certain
            Services provided, as can be found in the terms of use.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            f) Deletion: You have the right to delete or request that We delete
            Your Personal Data as far as legal requirements for deletion are
            fulfilled, such as when Your Personal Data is no longer necessary
            for the purposes for which it was collected or where We have relied
            only on Your consent to process Your Personal Data. The same may be
            done so by writing to Us via the means provided under Clause 9. It
            is herein clarified that deletion of Your Personal Data shall not
            deactivate Your Services, however, the generation of reports occurs
            shall occur only basis any data fed after deletion. However, the
            consequence of such deletion shall lay on You. Exercise of this
            right shall impact certain Services provided, as can be found in the
            terms of use.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            g) Nomination: You may nominate one or more person who shall, in the
            event of death or incapacity of the You or the Child, exercise the
            rights provided.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            h) Automated Decision-Making: As far as further legal requirements
            are fulfilled, You have the right not to be subject to a decision
            based solely on automated processing, including profiling, which
            produces legal effects concerning You or similarly significantly
            affects you.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            i) Opt-out of Marketing Communications sent by NMPL: You can opt-out
            of receiving push notifications through Your device settings. Please
            note that opting out of receiving push notifications may impact Your
            use of the Services.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            j) Grievance Redressal: You shall have the right to have Your
            queries and concerns to be addressed by Us with respect to Our
            actions or lack thereof regarding the performance of Our obligations
            in relation to the Personal Data of You or the exercise of Your
            rights. You also have the right to complain to the relevant data
            protection authority, including but not limited to the Data
            Protection Board as provided for under the Digital Personal Data
            Protection Act, 2023 via ________________, or the Grievance
            Appellate Committee or Inter-Departmental Committee set up under the
            Information Technology (Intermediary Guidelines and Digital Media
            Ethics Code) Rules, 2021, or other relevant authority. However, the
            internal grievance redressal procedure shall be exhausted prior to
            approaching the relevant authority thereof. The procedure for
            grievance redressal can be found under Clause 10 herein.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            k) Miscellaneous: Any other right that is provided for specifically
            under the applicable laws.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            7.3 We will handle Your request for exercising Your data protection
            rights in accordance with the applicable laws. If We cannot allow
            You to exercise Your right, We will inform You of the reasons why,
            subject to any legal or regulatory restrictions. Please note that We
            may ask You to verify Your identity before responding to such
            requests. Some of these rights only apply in certain circumstances
            and in many cases, are limited by law.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            7.4 You have the following data protection duties, which You
            undertake to abide by as elaborated:
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            a) You shall always act in compliance with the applicable laws.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            b) You shall provide true and accurate details of Yourself and the
            Child which are verifiable, and do not suppress essential
            information or impersonate another person/ infringe their rights.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            c) You shall not upload any content that is obscene, pornographic,
            paedophilic, invasive of another’s privacy, insulting or harassing
            on the basis of gender, racially or ethnically objectionable,
            relating or encouraging money laundering or gambling, information
            that causes harm to the Child or others, or that promoting enmity
            between different groups on the grounds of religion or caste with
            the intent to incite violence. Further, no information which
            threatens the unity, integrity, defence, security or sovereignty of
            India, friendly relations with foreign states, or public order, or
            causes incitement to the commission of any offence, or prevents
            investigation of any offence, or is insulting other nations shall be
            uploaded.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            d) You shall not provide information that is deceptive or
            misleading.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            e) You shall not cause tamper to with/ cause any harm to the
            Application or any other computer resource.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            f) You shall not raise false or frivolous complaints.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            8. CHANGES IN THE POLICY
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            8.1. We may periodically update this Policy to reflect the existing
            practice and to ensure compliance with the applicable laws. We may
            change or otherwise modify this Policy to reflect changes to Our
            Services or changes to the applicable laws. If We modify this
            Policy, We will update the “Last Updated” date which can be found at
            the top of this Policy.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            8.2. If We make any material changes to the way We collect, use,
            store and/or share Your Personal Data, We will notify You by
            prominently posting a notice of the changes on the Services or
            through push notifications on the Services. We highly recommend that
            You check this page from time to time to inform yourself of any
            changes.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            8.3. By continuing to use the Service after receiving such updates,
            You agree to comply with, and to be bound by such updated policy.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            9. CONTACT US
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            9.1. If You have any questions that do not relate to this Policy or
            data privacy, then please write to Our customer support team at{" "}
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:support@tmkocplayschool.com";
              }}
              className="text-blue-500 underline"
            >
              support@tmkocplayschool.com
            </Link>{" "}
            so that Our customer support team can address Your concerns.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            9.2. To exercise applicable data protection rights or have any
            questions/ comment/ grievance regarding this policy and Our privacy
            practices to the extent You may enjoy any data subject rights as per
            the privacy laws applicable to you, please reach out to Our data
            protection officer at{" "}
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:support@tmkocplayschool.com";
              }}
              className="text-blue-500 underline"
            >
              support@tmkocplayschool.com
            </Link>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">
            10. GRIEVANCE REDRESSAL
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            10.1. If You wish to make a complaint regarding any matter with
            respect to Our Services or Application, You may write to the email
            id as provided under Clause 9. We shall acknowledge the same within
            24 (twenty-four hours). We shall conduct an internal enquiry and
            take steps outlined in the Terms of Use and resolve the same within
            15 (fifteen) days from the date of its receipt.
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            10.2. If the above recourse fails, You shall be entitled to approach
            the Data Protection Board/ Grievance Appellate
            Committee/Inter-Departmental Committee.
          </p>
        </motion.div>
        <div className="mb-8">
          <p className="text-[28px] font-[600] text-center text-[#000] mb-2">
            ANNEXURE A
          </p>
          <p className="text-[20px] font-[600] text-center text-[#000] mb-2">
            THIRD PARTY SERVICE PROVIDERS
          </p>
          <p className="text-[16px] font-[400] text-[#464646] leading-[34px] mb-2">
            The following Service Providers (subject to change) shall
            tentatively impact the User:
          </p>
          <div className="overflow-x-auto">
            <table className=" divide-y divide-gray-200  mx-auto border border-gray-200 rounded-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {serviceProv?.map((ele, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="px-4 py-4 text-[16px] text-[#212529]">
                      {ele?.col1?.map((item, colIndex) => (
                        <div key={colIndex} className="mb-2">
                          {Object.keys(item).map((key, keyIndex) => (
                            <p
                              key={keyIndex}
                              className="text-[16px] mb-2 text-[#212529]"
                            >
                              {item[key]}
                            </p>
                          ))}
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-4">
                      {ele?.col2?.map((item, colIndex) => (
                        <div key={colIndex} className="mb-2">
                          {Object.keys(item).map((key, keyIndex) => (
                            <p
                              key={keyIndex}
                              className="text-[16px] mb-2 text-[#212529]"
                            >
                              {item[key]}
                            </p>
                          ))}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-[radial-gradient(circle,#82F479_15%,#0EB401_190%),url('../../public/background-cover2.png')] pt-6 bg-cover bg-center bg-no-repeat bg-blend-multiply">
        <FooterSection />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
