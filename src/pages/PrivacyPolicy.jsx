
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {

    const tableData = [
        {
            col1: [
                {
                    sction1: 'Creation and setting up of account, help you log in and to provide access to and deliver our Services',
                }
            ]
            ,
            col2: [
                {
                    sction1: 'Phone number, User ID (which is automatically assigned on registration), gender, profile picture and any other information that the User chooses to share in the ‘Profile’ section of the Services (“Account Data”)'
                }
            ],
            col3: [
                {
                    section1: 'Processing is necessary for performance of a contract with the user (i.e., creation of an account) and take steps prior to entering a contract with Users. Without this information, we will not be able to provide Services which the Users have requested.',
                    section2: 'It is in our legitimate interest to verify your identity or conduct appropriate checks for fraud prevention and detection before authenticating you and granting you access to the Services.',
                    section3: 'Where required by applicable laws we will obtain your consent. Processing is necessary for compliance with our legal obligations.',
                    section4: 'Encrypted'
                }
            ],
            col4: 'Encrypted'
        },
        {
            col1: [
                {
                    sction1: 'Creation and setting up of account, help you log in and to provide access to and deliver our Services',
                }
            ]
            ,
            col2: [
                {
                    sction1: 'Phone number, User ID (which is automatically assigned on registration), gender, profile picture and any other information that the User chooses to share in the ‘Profile’ section of the Services (“Account Data”)'
                }
            ],
            col3: [
                {
                    section1: 'Processing is necessary for performance of a contract with the user (i.e., creation of an account) and take steps prior to entering a contract with Users. Without this information, we will not be able to provide Services which the Users have requested.',
                    section2: 'It is in our legitimate interest to verify your identity or conduct appropriate checks for fraud prevention and detection before authenticating you and granting you access to the Services.',
                    section3: 'Where required by applicable laws we will obtain your consent. Processing is necessary for compliance with our legal obligations.',
                    section4: 'Encrypted'
                }
            ],
            col4: 'Encrypted'
        },
        {
            col1: [
                {
                    sction1: 'Creation and setting up of account, help you log in and to provide access to and deliver our Services',
                }
            ]
            ,
            col2: [
                {
                    sction1: 'Phone number, User ID (which is automatically assigned on registration), gender, profile picture and any other information that the User chooses to share in the ‘Profile’ section of the Services (“Account Data”)'
                }
            ],
            col3: [
                {
                    section1: 'Processing is necessary for performance of a contract with the user (i.e., creation of an account) and take steps prior to entering a contract with Users. Without this information, we will not be able to provide Services which the Users have requested.',
                    section2: 'It is in our legitimate interest to verify your identity or conduct appropriate checks for fraud prevention and detection before authenticating you and granting you access to the Services.',
                    section3: 'Where required by applicable laws we will obtain your consent. Processing is necessary for compliance with our legal obligations.',
                    section4: 'Encrypted'
                }
            ],
            col4: 'Encrypted'
        },
    ]

    return (
        <div>
            <div className="h-auto bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pt-5 relative overflow-hidden">
                <Navbar />
                {/* <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
                    className=" text-[54px] text-[#fff] leading-[176.3%] py-16 text-center fredoka-one-font"
                >
                    Terms & Conditions
                </motion.div> */}
                <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
                    className=" text-[54px] text-[#fff] leading-[176.3%] py-16 text-center font-[500]"
                >
                    Privacy Policy
                </motion.div>
            </div>
            <div className="mx-14 py-10">
                <motion.div
                    // className="mx-14 py-10"
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed

                    className="mb-8">
                    <p className="text-[28px] font-[600] text-[#000] mb-2">Last Updated: 6th May, 2024.</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        The <strong>“TMKOC Play School”</strong> app (“App”) is owned and operated by <strong>Neela Mediatech Private Limited.</strong>, having its office at Mumbai, India (“NMPL”, “us”, “we”, “our”). We take your privacy and the security of your information very seriously and therefore request you to kindly read the terms of this Privacy Policy (“Policy”) very carefully. The Policy describes to users (“User” or “Users”, or “you” or “your”) how we collect, use, disclose, transfer, or otherwise process your personal data collected in connection with the App, or products or services which we operate now or develop or create in the future (the “Services”).
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        Users are requested to read this Policy in conjunction with the Terms of Use. We request you to review the most recent version of the Policy periodically. By using the Services, you agree to the handling of your information in accordance with this Policy. If you provide us with your information (directly or indirectly through our service providers) we will treat your information according to this Policy. If we need to use your personal data for any other purpose, other than as disclosed herein, we will update this Policy or ask for your prior consent, if necessary.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        If you do not agree with this Policy in general or any part of it, please do not use our Services. By continuing to use the Services, you acknowledge and expressly agree to our collection, processing, storing, transfer, and use of your information as described in this Policy.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">1. IMPORTANT TERMS</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2 ">
                        1.1. Personal data as means any information relating to an identified or identifiable natural person. An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, location data or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        1.2. Usage data is data collected automatically either by the use of the Service or from the Service infrastructure itself (for example, the number of sessions, duration of sessions, etc.), as more particularly detailed in this Policy. Usage Data may include pseudonymous data or anonymized data, where applicable.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        1.3. Data controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data is, or is to be, processed. For the purpose of this Policy, we are a data controller of your personal data.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        1.4. Data processors mean any natural or legal person who processes the data on behalf of the data controller. Such data processors usually refer to the service providers engaged by us. We use the services of various data processors in order to process your data more effectively, as more particularly detailed in this Policy.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        1.5. Data subject is any natural person/individual whose personal data we process.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">2. CHILDREN’S PRIVACY</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2 ">
                        2.1. We respects the privacy of children. Our Services including the App is not intended or directed towards children under the age of 18. Please do not use our Services if you are under the age of 18. As per the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021 and other relevant regulations, we urge individuals under the age of 18 to refrain from accessing or using our services. In the event access to our services are provided to children under the supervision and guidance of Adult i.e. individual above 18 years age, then in such an even the said adult/ guardian agrees to be bound by the terms of use for accessing services and the present policy.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        2.2. We do not knowingly collect or solicit personal data from children under the age of 18. We are committed to complying with the applicable laws and regulations pertaining to protection of children.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        2.3. In the event, it has been brought to our knowledge that we have inadvertently collected personal data from a child, we will delete that information. If you believe that we might have any information from or about a child, please contact us as described in the “Contact Us” section below.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">3. INFORMATION WE COLLECT</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2 ">
                        3.1. There are two broad categories of information that we collect – information Users provide to us and information we collect, as more particularly detailed below.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        3.2. Please note that we do not, in any manner, collect any special category data such as racial or ethnic origin, political opinions, religious beliefs, genetic data, biometric data, data concerning health or data concerning user’s sex life or sexual orientation. If it has been brought to our notice that we have inadvertently collected any such special category data, then please contact us as described in the “Contact Us” section below and we will delete such special category data.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        3.3. Information Users Provide to us:
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        a) We and our third-party service providers collect information that Users provide when using the Services, including when Users create an account and sign up for Services. <br />
                        b) To register an account on the Services, Users are asked to provide us with their mobile phone number. <br />
                        c) To successfully log into the Services, Users will be required to provide the one-time password (“OTP”) sent to their registered mobile phone numbers, for which we may ask Users to give us the permission to read the OTP sent to their registered mobile phone numbers. The provision of this information is optional, and it is at Users’ discretion to either provide us with the requisite permission to access the OTP for auto-filling on the Services or the Users may choose to key in the OTP on their own. <br />
                        d) Users shall have to complete their profile with additional information such as: the User’s child’s name and date of birth and the User’s name, email address, contact number, address and any other information that the Service provides the User to fill out in the “Profile” section of the Services. <br />
                        e) Please note that certain information from your profile is public and therefore can be accessed by any other User such as your display name/username, profile picture and points. By including information in your profile, you understand that the information that is public can be used by any person or entity for their own purposes. <br />
                        f) There is also other information provided that depends on the type of account and the Services availed. For example, payment information such as their bank account details, address, online payment service details and mobile payment service details is collected from Users when the Users pay the subscription fee. <br />
                        g) We and our third-party service providers also collect the information you provide to us when you correspond with us including when you require customer support, submit questions or comments, rate the Services and other content you post using the Services. The information collected through this may include your email address, name, phone number, messages you sent to us and other information you choose to share with us. If you submit any information relating to other people in connection with the Services, you represent that you have the authority to do so and permit us to use the information in accordance with this Policy. <br />
                        h) We also collect your approximate location when you access our Service.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        3.4. Information we collect from Users:
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        a) We and our third-party service providers collect personal data directly from Users of the Services including in the form of the actions they take and activities they complete when using the Services. For example, from all Users, we may collect information about patterns of usage such as number of games played, session duration and number of sessions. <br />
                        b) We and our third-party service providers also use a variety of technologies, such as application programming interface (“API”), to automatically collect certain technical information from your mobile device over time and across different websites/applications. <br />
                        c) The information we and/or our third-party service providers collect includes the following – <br />
                        • Approximate Location Data, including your general geographic location based on your IP address. <br />
                        • Gameplay content, including recordings of your gameplay and performance records. <br />
                        • User ID, that you are automatically assigned when you register on our Services. <br />
                        • Device IDs, such as IDFA and Android ID. <br />
                        • Usage Data, including the time you launch the Services, the pages and content viewed, IP address, unique device identifiers, any adverts that you viewed and clicked on, the objects and links you clicked on and interacted with, and scrolling/gesture/tap information. <br />
                        • Diagnostics Data, including any crash logs and usage and performance statistics. <br />
                        • Tracking Technologies, like most mobile applications, we may use technologies, such as software development kits (SDK) and API as part of Services we deliver to you. We use these technologies to secure and improve our Services, to understand your preferences, collect information about your activity, and device and tailor our Services to your interests. We may also use these technologies to collect information when you interact with Services, we offer through one of our service providers, including advertisers and marketing vendors. You also may be able to reset device identifiers or opt-out from having identifiers collected or processed by using the appropriate setting on your mobile device. Depending on your jurisdiction, we get your permission before we set tracking technologies. <br />
                        3.5. We collect different types of information for various purposes to provide and improve our Services, a detailed description of same is provided in Annexure A - Table for Legal Processing Activities, to this Policy. <br />
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">4. HOW WE USE YOUR INFORMATION</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        4.1. Use of your information
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        We and/or our third-party service providers may use the personal data collected from you to – <br />
                        a) allow you to register and create an account on the Services; <br />
                        b) provide, deliver, monitor, and improve our Services, which requires us to track third-party app installations (conversions) to award points, to Users based on their activity on the Services, enable in-app redemption of points for gift cards (may or may not be applicable) or online payment service account or mobile payment services account;<br />
                        c) personalise our Services for you by providing you with personalised recommendations of games, features, etc. available on the Services;<br />
                        d) market our Services on third-party platforms, including mobile applications and websites;<br />
                        e) offer participation in activities such as contests, tournaments, other digital events, determine winners and rank holders of various games;<br />
                        f) process your payments and update your account on the Services to reflect any balance and history;<br />
                        g) provide features and functionality of the Services such as in-app messages, push notifications and gameplay performance records;<br />
                        h) to send you service-related communication such as redeem confirmations on the Services, availability of new games, and general notifications;<br />
                        i) to inform and support our marketing and advertising activities, including helping us determine games, products, services and advertisements that may be of interest to you;<br />
                        j) meet operational and business transaction requirements like billing or invoicing, attribution of game installs, calculating the points won through such attribution, accounting, delivering prizes, promotions, and also calculating game points won through your active usage and participation on the Services;<br />
                        k) detect behaviour anomaly, prevent fraud and secure our Services including the App. Additionally, we also use your personal data to monitor and detect fraud and other prohibited conducts or violations of the Terms;<br />
                        l) update features to better our Services and develop new products, games and other offerings and services;<br />
                        m) create reports and develop insights about our business. We may use aggregated or anonymised data for such purposes;<br />
                        n) communicate with you about your preferences or address your grievances by providing you with technical and customer support as well as respond to your requests, complaints, or feedback;<br />
                        o) troubleshoot software bugs, patch errors, and maintain functionality of the Services;<br />
                        p) help train our machine learning and AI models to provide you with personalized content and user experience as well as for the purposes outlined in this Policy;<br />
                        q) comply with our legal obligations where we reasonably believe such action is necessary to comply with the applicable laws, reasonable requests of law enforcements, legal and regulatory proceedings, including the defence of legal claims and compliance with corporate reporting obligations;<br />
                        r) enforce our rights to monitor, investigate, prevent and/or mitigate violations of the Terms, this Policy as well as enforce our agreements with third party service providers and business partners;<br />
                        s) for any other lawful purpose or other purpose that you expressly consent to.<br />
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        4.2. Legal basis
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        The legal basis for processing your personal data as described in this Policy will typically include one or more of the following –
                        <br />
                        a) To perform our agreement with you and provide our Services to you and also in order to take steps at your request prior to entering into an agreement;<br />
                        b) To meet our legal obligations and compliance requirements under the applicable laws; <br />
                        c) For our legitimate interest in, for example, monitoring, promoting and improving Services we provide, providing you with technical and customer support, securing and protecting the Services, ensuring that your use of our Services is in accordance with the Terms and this Policy, analysing personal data and developing new products and services;<br />
                        d) To protect the vital interest of the Users of the Services, for example, in case of fraudulent activities being undertaken by the Users on the Services;<br />
                        e) Your consent, when required by applicable laws.<br />
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        4.3. Our legal basis for processing your personal data for specific processing activities is more particularly described in Annexure – A to this Policy.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">5. SHARING OF INFORMATION</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        5.1. We do not sell your information to third parties without your express prior consent.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        5.2. We share your information with third parties who help us in delivering and analysing our Services. These third parties are not authorised to retain, share, store or use the information shared by us for any purpose other than to provide the services they have been engaged to provide.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        5.3. The service providers that we share your information with include:
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        a) Service Providers: We engage various service providers to help facilitate delivery of the Services, which include those who we engage to give us hosting and storing services, operate our technical infrastructure, which is required to keep the Services operational, assist in helping us provide you with points, protecting and securing our systems and Services, provide personalised content, to grow our business, for attribution of game installs, for reporting purposes, as well as helping us market the Services. These service providers also include our third-party professional advisors such as auditors, law firms, etc. The service providers that we engage are required by contract to have similar level of privacy protection as we do and are required to follow the same standards as this Policy and as far as practicable or as required by applicable law.<br />
                        b) Advertising Platforms and Networks (commonly known as ‘ad networks’): We have partnered up with various ad networks to display advertisements on our Services. <br />
                        c) Analytics providers: We work with several providers that help us analyse and understand personal data and identify and develop trends, patterns, and insights to optimise and improve the Services and create new products or features. These service providers also help us track App usage and Users’ engagement with the Services including games available on the Services and gameplay to help us provide better games and services to you. These analytics providers also support billing and attribution by providing and analysing Gameplay Data.<br />
                        d) Payment gateways: We have partnered with various payment gateways who offer payment support. These payment gateways help us in processing payments made by you by facilitating transfer of monies from your bank account or mobile payment services or online payment services. Certain personal data is transmitted to these payment gateways for the purpose of processing any payments. The transmission of your payment information is automatic, and at no point do we, or any of our agents or employees, have the ability to review, access or retain such payment information. We are required to retain your email address by some of our online payment service providers. For more information on how your payment information is processed, please see the terms of use and privacy policies of those payment gateways.<br />
                        e) Gift Voucher Providers: From time to time, we may partner with various entities or individuals for provision of gift vouchers to the Users against redemption of the points won by the Users on the Service. Such partners will process the personal data provided by the Users at the time of such redemption to facilitate the delivery of the gift vouchers to the Users.<br />
                        f) The service providers and other partners we share your data with, and the processing of such data by such service providers and partners will be in accordance with their terms of use and privacy policies. An indicative list of our service providers is more particularly detailed in Annexure -B. If you have any questions regarding the service providers that we share your personal data with or who undertake processing on your personal data, please contact us as described in the “Contact Us” section below.<br />
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        5.4. We may also share your personal data in the following circumstances:
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        a) Legal obligations, Law Enforcement, Regulators and Other Third Parties for Legal and Security Reasons: We may share your personal data with government bodies and law enforcement or where we believe that disclosure is in accordance with, or required by, any applicable law or legal process, including any contractual obligations of NMPL or lawful requests by public authorities to meet national security or law enforcement requirements. If required or permitted to do so under the law, and if deemed necessary or warranted, we may provide notice to Users prior to the disclosure. We may also share your personal data when necessary to protect legal rights, property or safety of NMPL, our Users or third parties in order to avoid fraud, hacking, identity theft, manage our risks or comply with applicable laws or legal orders. In these cases, we disclose personal data to comply with legal obligations or to protect the legitimate interests of NMPL or affected third parties. <br />
                        b) Corporate Transactions and Affiliates: We may share your personal data in the event of corporate divestitures, mergers, acquisitions, bankruptcies, dissolutions, re-organisations, liquidations, similar transactions, or proceedings involving all or a portion of NMPL. In these cases, the personal data may be shared with our subsidiaries or affiliates under common control and with counterparties as part of corporate transactions.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        5.5. We may also disclose aggregated or anonymised information about Users along with information that does not identify any individual or device, except where limited by applicable laws. For example, we may use anonymized session duration data, number of game plays, number of sessions and aggregated information for statistical and machine learning purposes, to provide insights into developing or enhancing Services, for marketing and advertising and for other legally permissible purposes such as testing our IT systems and features.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        5.6. For more information regarding the sharing of data with third parties please review the applicable sections below and notices within Annexure A or please contact us as described in the “Contact Us” section below.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">6. DATA TRANSFER, STORAGE AND RETENTION</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        6.1. We store information collected from you on our or our third-party service providers’ servers located in India. The information collected through the Services will be stored and processed in India and any other country in which NMPL or its affiliates or service providers operate or maintain facilities or for service efficiency purposes.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        6.2. In case the information collected is processed or stored in territories that do not have the same data protection laws as your jurisdiction or that may not be as protective as in for example in the European Union (EU) including for service efficiency purposes and/or due to affiliates and third parties being located in such territories, we may transfer your personal data to a third country not being approved by the European Commission as a safe country for such transfer, to which you explicitly consent.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        6.3. We retain personal data for as long as required under applicable laws, as long as necessary to provide the Services to you and fulfil the transactions you have requested, to meet the purpose for which the personal data was collected or for other business purposes, to comply with our legal obligations, resolving disputes, and enforcing our agreements. We decide how long we need personal data on a case-by-case basis. We may consider, amongst others, the following factors when making retention decisions: <br />
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        a) Whether we need to keep some of your personal data to maintain your account on the Services; <br />
                        b) Whether we are required by law to keep some types of personal data for certain periods of time to comply with our legal obligations. For instance, we retain data pertaining to subscription and payment history for some period of time to allow for matters such as accounting and tax reporting; <br />
                        c) Whether we need some of your personal data for other business purposes, such as to prevent harm and ensure safety and security of our Services; investigate possible violations of our Terms; or protect ourselves; and <br />
                        d) Whether we need some of your personal data for our legitimate interest. For instance, it is in our legitimate business interest to help Users access the points and other features available on the Service, to prevent wrongful exploitation of our reward program and to identify returning Users whether those who were inactive or had stopped using our Services for a certain period of time and to restore their points, transaction history, and profile data. <br />
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        6.4. Where we determine that the personal data which is collected is not required to be stored or retained in a manner in which a natural person can be identified using such personal data, we anonymise such personal data before further processing.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        6.5. Anonymized information may nonetheless persist internally in our backup, archive files or similar databases, and may still be used anonymized, for our internal support, administrative, and record-keeping purposes including, but not limited to, allowing us to improve the Services and other services we provide through research, evaluation, and analytics as permissible by applicable laws and for other purposes specifically outlined in this Policy.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        6.6. We may also keep certain information in backup or archive records if required by law or if it is relevant to prevent fraud or future violations of our policies or for legitimate business purposes when permitted by applicable law. All retained data will continue to be subject to our Policy in effect at that time.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        6.7. Specifically, we may destroy your personal data or store it separately if you do not interact with our Services for 2 (two) years. Please note that if you have not interacted with our Services or do not use our Services for the time period as mentioned above or if you request for deletion of your account, it will also result in expiration/deletion of the points which you have won on our Services. In the event we decide to maintain your information after you being inactive on our Services or after deletion of your account, we may anonymise such data and ensure that it is in a de-identifiable state, to the best of our ability and available tools.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        6.8. Please note that any personal data about you stored or retained by a third party is subject to the third party’s terms of use and privacy policy and you must contact them directly to get your data deleted. The third parties that we have engaged for the purposes of delivering and analysing our Services, are listed out in Annexure – B.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">7. DATA SECURITY</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        7.1. We care about the security of your information, and use appropriate physical, technical, and administrative security measures to preserve the integrity and security of your personal data collected by us through the Services. Where personal data is not anonymised, we use industry standard SSL (secure socket layer technology) encryption for personal data in transit. Other security safeguards include, but are not limited to, anonymisation, pseudonymisation, data encryption, firewall, and physical access controls to buildings and files. We also get periodic audits conducted of our security to apply best practices and reasonable industry standards.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        7.2. Some of the precautions we take to protect personal data includes: (a) limiting employee/consultant access to personal data to only those employees/consultants with a need to such access to fulfil their job responsibilities; (b) requiring employees/consultants to sign confidentiality agreements upon hiring; (c) conducting regular employee/consultant privacy and data security training and education; and (d) protecting personal data with commercially reasonable technical, contractual, administrative, and physical security safeguards.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        7.3. At registration, we assign a User ID to each account on our Services and use those User IDs to authenticate logins, allow access to the different games and to monitor compliance. The User ID is also used to authenticate Users when requesting customer and technical support. Access to information is limited to those employees/consultants who require it to perform their job functions.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        7.4. Although we endeavour to deploy state of the art security measures, tools and practices, we cannot ensure or warrant that any of your information will not be subject to any unlawful disclosure as no data transmission over the internet can be guaranteed to be completely secure. Moreover, we are not responsible for the security of information you transmit to the Services over networks that we do not control, including the internet and wireless networks. If you have reason to believe that your interaction with us is not secure, please contact us as described in the “Contact Us” section below.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        7.5. In the event that any information under our control is compromised as a result of a breach of security, we will take reasonable steps to investigate the situation and notify you and the relevant data authorities that information has been compromised if and as required under the applicable laws or deemed necessary and appropriate under the circumstances. We will also take reasonable steps, in accordance with the applicable laws and regulations.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">8. YOUR RIGHTS</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        8.1. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data. You can edit certain information with respect to your profile on our Service at any time in accordance with the mechanism provided under the Terms.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        8.2. In certain circumstances, you have the following data protection rights which can be exercised by you by contacting us at the contact information provided in the “Contact Us” section below -
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        a) Access: You have the right to request a copy of the personal data that we process about you. However, there are exceptions to this right, so that access may be denied if, for example, making the information available to you would adversely affect the rights and freedoms of another person or User, or if we are legally prevented from disclosing such information, or if we only store such information about you in an anonymised or aggregated manner where we cannot identify the particular User to whom the data belongs to.<br />
                        b) Accuracy: We aim to keep your personal data accurate and complete. We encourage you to keep us informed about changes that you would like reflected in our records. You are also able to update, correct or rectify certain inaccurate personal data in accordance with the mechanism provided in the Terms. <br />
                        c) Objecting: You have the right to object to processing of your personal data. You may ask us to erase or limit the use or other processing of your personal data where we relied on your consent to process your personal data by contacting us via the contact information provided in “Contact Us” section unless another legal basis for processing and retaining this data exists or applicable law requires us to retain the data.<br />
                        d) Rectification: You have the right to request the rectification of inaccurate personal data and, taking into account the purposes of the processing, to complete your personal data. You are also able to update, correct or rectify certain inaccurate personal data in accordance with the mechanism provided in the Terms.<br />
                        e) Deletion: You have the right to delete or request that we delete your personal data as far as legal requirements for deletion are fulfilled, such as when your personal data is no longer necessary for the purposes for which it was collected or where we have relied only on your consent to process your personal data.<br />
                        f) Automated Decision-Making: As far as further legal requirements are fulfilled, you have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you.<br />
                        g) Opt-out of Marketing Communications sent by NMPL: You can opt-out of receiving push notifications through your device settings. Please note that opting out of receiving push notifications may impact your use of the Services.<br />
                        h) The Right to Withdraw Consent: Where you provided us with your consent and where we relied on your consent to collect and process your personal data, you may withdraw your consent to the collection and processing of personal data at any time by sending a written request to the contact details provided under the ‘Contact Us at’ section in this Policy. Withdrawing consent may impact your use of whole or part of the Services, such as access to certain Services including games and eligibility for winning and/or participating in the games. We may still be able to process the personal data for which you have withdrawn your consent if any other legal basis applies for collection and processing of such data or if required under the applicable laws.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        8.3. We will handle your request for exercising your data protection rights in accordance with the applicable laws. If we cannot provide you with access to your personal data, we will inform you of the reasons why, subject to any legal or regulatory restrictions. Please note that we may ask you to verify your identity before responding to such requests. Some of these rights only apply in certain circumstances and in many cases, are limited by law. For example, where fulfilling your request will adversely affect other individuals or our trade secrets or intellectual property, where there are overriding public interest reasons or where we are required by law to retain your personal data. We will respond to your requests to exercise these rights as required by applicable law.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        8.4. You also have the right to complain to the relevant data protection authority about our collection and use of your personal data. However, we invite you to contact us with any concern, as we would be happy to try to resolve it directly.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">9. CHANGES IN THE POLICY</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        9.1. We may periodically update this Policy to reflect the existing practice and to ensure compliance with the applicable laws. We may change or otherwise modify this Policy to reflect changes to our Services or changes to the applicable laws. If we modify this Policy, we will update the “Last Updated” date which can be found at the top of this Policy.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        9.2. If we make any material changes to the way we collect, use, store and/or share your personal data, we will notify you by prominently posting a notice of the changes on the Services or through push notifications on the Services. We highly recommend that you check this page from time to time to inform yourself of any changes.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        9.3. By continuing to use the Service after receiving such updates, you agree to comply with, and to be bound by such updated Policy.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">10. CONTACT US</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        10.1. If you have any questions that do not relate to this Policy or data privacy, then please write to our customer support team at support@tmkocplayschool.com so that our customer support team can address your concerns.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
                        10.2. To exercise applicable data protection rights or have any questions or comment about this Policy and our privacy practices to the extent you may enjoy any data subject rights as per the privacy laws applicable to you, please reach out to our data protection officer at support@tmkocplayschool.com.
                    </p>
                </motion.div>
                <div className="mb-8">
                    <p className="text-[28px] font-[600] text-center text-[#000] mb-2">ANNEXURE A</p>
                    <p className="text-[20px] font-[600] text-center text-[#000] mb-2">TABLE FOR LEGAL PROCESSING ACTIVITIES</p>
                    <div className="overflow-x-auto">
                        <table className=" divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                                        PURPOSE FOR PROCESSING
                                    </th>
                                    <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                                        DATA CATEGORY
                                    </th>
                                    <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                                        LEGAL BASIS FOR PROCESSING
                                    </th>
                                    <th className="px-3 py-2 text-left text-[18px] font-[600] text-[#212529] uppercase tracking-wider">
                                        DATA CATEGORY – ANONYMISED OR ENCRYPTED
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tableData?.map((ele, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="px-4 py-4 text-[16px] text-[#212529]">
                                            {ele?.col1?.map((item, colIndex) => (
                                                <div key={colIndex} className="mb-2">
                                                    {Object.keys(item).map((key, keyIndex) => (
                                                        <p key={keyIndex} className="text-[16px] mb-2 text-[#212529]">
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
                                                        <p key={keyIndex} className="text-[16px] mb-2 text-[#212529]">
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
                                                        <p key={keyIndex} className="text-[16px] mb-2 text-[#212529]">
                                                            {section[key]}
                                                        </p>
                                                    ))}
                                                </div>
                                            ))}
                                        </td>
                                        <td className="px-4 py-4 text-[16px] text-[#212529]">
                                            {ele.col4}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}

export default PrivacyPolicy;