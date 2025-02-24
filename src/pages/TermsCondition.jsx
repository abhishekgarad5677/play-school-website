import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const TermsCondition = () => {

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
                    Terms & Conditions
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
                        The <strong>“TMKOC Play School”</strong> app (“App”), and other services (collectively the “Services”) are owned and operated by <strong>Neela Mediatech Pvt Ltd</strong> (hereinafter referred to as “We” or “Us” or “Our”). By registering an account with the App, You acknowledge that You have read and understood these Terms of Use (“Terms”) and agree to be bound by them. These Terms are to be read along with the Privacy Policy and Refund and Cancelation Policy [insert links]. These Terms and separate terms of service, as applicable, may apply to Your use of the Services or to a service, particular game’s rules, or product offered via the Services (“Additional Terms”). To the extent there is a conflict between these Terms and any Additional Terms, the Terms shall prevail unless expressly stated otherwise.
                        In these Terms, “You” or “User” refers to you, being an adult who has attained the age of 18 (eighteen) years and who can lawfully enter into a contract under the laws applicable to the location in which the person resides, and is using the Services. By registering for, or using the Services, You represent and warrant that You are an adult. The services are aimed at parents, guardians, or legal representatives of children.
                        This is a legally binding agreement between You and Us (“Agreement”)
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">1. OPERATION OF SERVICES</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        We control and operate the Services from our headquarters in Mumbai, India and store information collected from You or our third-party service providers’ servers. We shall not be liable for compliance with local laws of any other territory outside the jurisdiction of India. We make no representation that the Services are appropriate or available in all locations. A User shall not be able to access the Services from any location where access to such services have not been permitted under Law. You represent and warrant that You are not listed on any government’s list of prohibited or restricted parties. If any User is found to be accessing the Services beyond the permitted jurisdiction, then We reserves the right to suspend/terminate the Account of such User for use in such locations or restrict the access to the Account of such User.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">2. ACCOUNTS AND USER CONDUCT</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        A. Member Accounts
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        “Member Account/s” or “Account/s” are accounts offered by us, or through one of our affiliates, that are designed for home use. A Member Account is available for use by one User.
                    </p>

                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        B. Account Access
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        Every Account has a designated User who must be a person who has attained the age of 18 (eighteen) years and who can lawfully enter into a contract under the laws applicable to the location in which the person resides. You are responsible for maintaining the confidentiality of Your username and Account information. You agree that: (a) You will provide complete and accurate registration information about yourself and keep Your Account information up to date; (b) You are solely responsible for all activities that occur under Your Account; (c) You will notify us immediately of any unauthorized Account use; (d) We are in no way responsible for any loss that You may incur as a result of any unauthorized use of Your Account; and (e) You will not sell, transfer, or assign Your Account or any Account rights. If We learn that an ineligible User has created an Account, We may seek confirmation of the User’s status or deactivate the Account (either permanently or temporarily), without notice to the ineligible User.
                    </p>

                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        C. Account Registration
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        This App is available to be used on mobile devices. In order to register as a User on the App via Your mobile phone, a User must register an Account using a valid mobile number that belongs to the User and not a third party, registered in India and ensure that all information provided by the User is, true, accurate, current, and complete at all times. A User may enter a desired username at the time of registration. Upon successful registration, the User would be granted the unique username. The User shall have the option of modifying the username once after the Account is registered. To successfully log into the Services, Users will be required to provide the one-time password (“OTP”) sent to their registered mobile phone numbers, in order to validate the registered mobile number. The User shall have an option to give the App the permission to read and auto-fill the OTP sent to their registered mobile phone numbers. Carrier charges in relation to User verification shall be paid and borne by You. If We have reasonable grounds to suspect that such mobile number is inaccurate, not current, or incomplete, then we may suspend or terminate Your account, and refuse any and all current or future use of the Service. Each User shall create and operate a single Account using its valid mobile number in accordance with these terms. In an event a User has created multiple accounts with different mobile numbers / usernames, We reserve the right, in our sole discretion, to suspend or disqualify an Account and nullify any benefits received including game coins, if any.
                    </p>

                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        D. Username
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        The username created by a User for registering their account on the App must be distinct, creative and may not correspond to the User’s legal name or any personally identifiable information.
                    </p>

                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        E. Modification of User information:
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        a. Mobile Number: If the User changes its mobile number registered with the App, all progress as saved in the previous mobile number would be deleted. b. Profile Picture and Gender: A User may update its profile picture and gender at any time, by contacting support@tmkocplayschool.com, and requesting for edit to the user profile. c. Username: Upon registration, a User shall have option to change / modify its username just once and shall be restricted to make any changes to its username thereafter.
                    </p>

                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        F. User Conduct
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        You agree to not use the Services to: <br />
                        a. forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through the Service; <br />
                        b. use, reproduce, or remove any copyright, trademark, service mark, trade name, slogan, logo, image, or other proprietary notation displayed on or through the Services; <br />
                        c. disrupt the normal flow of dialogue or otherwise act in a manner that negatively affects other users' ability to engage in real time exchanges; <br />
                        d. access or use the Services in any manner that could disable, overburden, damage, interfere with or disrupt the Services or servers or networks connected to the Services or any other party's access to or use of the Services; <br />
                        e. disobey any requirements, procedures, policies or regulations of networks connected to the Services;<br />
                        f. download, modify, copy, distribute, transmit, display, perform, reproduce, duplicate, publish, license, create derivative works from, or offer for sale any information contained on, or obtained from or through, the Services, except as expressly permitted in this Agreement;<br />
                        g. duplicate, decompile, reverse engineer, disassemble or decode the Services (including any underlying idea or algorithm), or attempt to do any of the same;<br />
                        h. use automation software (bots), hacks, modifications (mods) or any other unauthorized third-party software designed to modify the Services;<br />
                        i. access, tamper with, or use non-public areas of the Services, Our computer systems, or the technical delivery systems of our providers;<br />
                        j. probe, scan, or test the vulnerability of any system or network or breach or circumvent any security or authentication measures;<br />
                        k. intentionally or unintentionally violate any applicable local, state, national or international law, and any regulations having the force of law;<br />
                        l. access or use the Services in any way not expressly permitted by this Agreement.<br />
                        You agree not to reproduce, duplicate, copy, sell, trade, resell or exploit for any commercial purposes, any portion of the Services, use of the Services, or access to the Services. You agree that Your account is non-transferable.
                        You agree that Your Username, profile picture, or any other content shall not be such that it is deemed inappropriate, offensive, vulgar, racist, sexist, homophobic, containing hate speech, gore or having excessive violence. We, in addition to other remedies (which includes replacing the inappropriate profile picture and replacing it with a default picture), shall have the right to terminate Your Account if You are found guilty of / in breach of these terms. Compliance with the above rules and regulations does not constitute a guarantee of continued access to the Services. We reserve the right to limit or terminate Your access to the Services at any time without any liability.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">3. REGULAR UPDATES OF THE APP</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        The User acknowledges and agrees that the App may require periodic updates for improved functionality, security enhancements, or bug fixes. Minor updates may be implemented without affecting the User’s ability to access and use the App. These updates may include performance improvements, minor feature enhancements and bug fixes. In the event of major updates, the User must update the App, failing which the User will not be able to access the App. A pop-up message will prompt the User to update the App before further access is granted. We shall not be responsible in any inconvenience, loss or disruption of Service caused to the User due to the User’s failure to update the App in a timely manner.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">4. GAMES</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        You must be an adult who has attained the age of 18 (eighteen) years and who can lawfully enter into a contract under the laws applicable to the location in which the person resides, You must comply with Your local laws and must be consenting to this agreement. We are not responsible for verifying the legality of Your participation in events. The App offers multiple educational gameplay opportunities for all Users. These games are open to every User, providing a chance to compete and win points. Users shall be able to choose from various games and win point/s based on their performance as per the end result. If You choose to play a game, You are responsible for the activities performed through Your account. We assume no responsibility or liability for violations. If You become aware of any violation of this Agreement in connection with the use of the game, please contact us at support@tmkocplayschool.com. We may investigate any complaints and violations that come to our attention and may take any (or no) action that we believe is appropriate, including, but not limited to issuing warnings, removing the User Content, or terminating an account. We also may provide User information to law enforcement and government agencies in response to valid legal requests consistent with our Privacy Policy. Under no circumstances will We be liable in any way for any data or User Content viewed while using the Service, including, but not limited to, any errors or omissions in any such data or Content, or any loss or damage of any kind incurred as a result of the use of, access to, or denial of access to any data or Content. We shall not be liable to You for any failure to perform any of our obligations under the game/s or in respect of the points where we are unable to do so as a result of circumstances beyond our reasonable control. You hereby agree to indemnify Us, its legal representatives, affiliates, subsidiaries, agencies and respective officers, directors, employees against all costs, losses, damages, expenses and liabilities (including for loss of reputation and goodwill and professional advisor fees) suffered by Us arising as a result of a breach by You of Your obligations under these Terms in connection with Your failure to follow any instructions given by our team or in relation to any matter concerning Your participation in a game. In case of disputes or disagreements concerning any aspect of a Service, including games and all matters relating to the awarding of the points, a User's eligibility to participate in the game, the conduct of any User, the game rules, Additional Terms and this Agreement, the final decision shall lie with Us and any decision by Us shall be final and binding upon You and shall not be subject to review or appeal by You or any third party.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">5. OWNERSHIP AND LICENSE</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        A. Ownership <br />
                        As between us and You, the Services (including past, present, and future versions) are owned and controlled by us and their Content is protected by Indian and international copyright, trademark, trade dress, patent, and other intellectual property rights and laws to the fullest extent possible. “Content” means all text, graphics, user interfaces, visual interfaces, photographs, logos, sounds, music, artwork, and computer code displayed on or available through the Services and the design, structure, selection, coordination, expression, and arrangement of such materials including, without limitation, (i) materials and other items relating to us and our products and services, including, without limitation, all activities, printables, characters, photographs, audio clips, sounds, pictures, videos, and animation; (ii) trademarks, logos, trade names, service marks, and trade identities of various parties, including ours (collectively, Trademarks); and (iii) other forms of intellectual property. We own all rights relating to the games made available through the App and further we reserve the right to record, store, monetize any gaming content on the App and exploit it in any mode/medium/format for the promotion or publicity of the App or for any other reason as we may deem fit. You hereby irrevocably and unconditionally consent to Our use and exploitation of the games in which you participate on the App, as contemplated hereunder.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        B. Limited License <br />
                        Except as expressly provided in these Terms or with our express prior written consent, no part of the Services and no content may be used, copied, reproduced, distributed, uploaded, posted, publicly displayed, translated, transmitted, broadcast, sold, licensed, or otherwise exploited for any purpose whatsoever. Any unauthorized use of any User Content or the Service for any purpose is prohibited. You agree not to access the Service by any means other than through the interface that is provided by Us for use in accessing the Service.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        C. User Game Activity (UGA) <br />
                        Our Services also include the generation and maintenance of a record of each User's game activity, history, statistics, archive, and a public record of play. When You play a game, a record of the game activity in such game (“UGA”), may be available to You, other users, and the public, in certain formats. The UGA may include certain of Your Content (e.g. Your username, profile picture, and country), which is subject to the license grant in the section titled “License to Access and Use the UGA” below. High scores, points, and usernames may be treated as public records and published on leaderboards within the App or by Users of the App on social media websites. You agree that the use of username and high scores is for entertainment and competition purposes only. Any misuse of this feature including but not limited to inappropriate usernames may result in account suspension. The record of Your UGA is displayed on the leaderboard, which may include details of the number of points, Your Username, profile picture, ranking (if any). The record of Your UGA may also be published on the App or elsewhere, which may include gaming streams, screenshots of leaderboard, etc. that can be accessed, used, and monetized by the App for purposes, including, but not limited to, publishing images of Your UGA in for example, blogs, videos, in-App publications including leaderboards, social media posts, game collections.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        D. License to Access and Use the UGA <br />
                        We grant You a limited, nonexclusive license to access, display and use the UGA, including the UGA of certain games played by other users on the Service; provided, however, that license is subject to this Agreement and does not include any right to: (a) sell, resell or use it commercially; (b) hide, delete, modify or otherwise make any derivative uses of the UGA, or any portion thereof; (c) use any data mining, robots or similar data gathering or extraction methods; (d) download (other than page caching) any portion of the UGA except as expressly permitted by us; and (f) use the UGA other than for their intended purposes. The UGA may include our trademarks, service marks, logos, trade names, graphics, user interface, design, and/or other proprietary designations of Our company. You acknowledge that nothing in this license will be interpreted to grant You or any third party any rights to such marks or design that may be displayed or contained in any UGA, other than the right to display them as incorporated in the UGA, subject to the restrictions contained in this Agreement.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">6. USER CONTENT</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        You consent to the publication of the information including the username, photograph You provide to us, feedbacks received from You, and posts made by You on the App. We reserve the right to access, read, preserve, and disclose information, as we reasonably believe is necessary to (i) satisfy any applicable law, regulation, legal process, or governmental request, (ii) enforce this Agreement, including investigation of potential violations hereof, (iii) detect, prevent, or otherwise address fraud, security, or technical issues, (iv) respond to User support requests, or (iv) protect Our rights, property, or safety, Our users, and the public in accordance with the Privacy Policy. You understand that all information, data, text, software or other materials, including username, whether publicly posted or privately transmitted, are the sole responsibility of the person from whom such content originated (“User Content”). This means that You, and not Us, are entirely responsible for all User Content that You upload, post, transmit or otherwise make available via the Service. We do not control the User Content posted via the Service and, as such, do not guarantee the accuracy, integrity or quality of such User Content. You understand that by using the Service, You may unintentionally be exposed to User Content that is offensive, indecent or objectionable. Under no circumstances will We be liable in any way for any User Content, including, but not limited to, any errors or omissions in any User Content, or any loss or damage of any kind incurred as a result of the use of any User Content posted, transmitted or otherwise made available via the Service. We do not and cannot monitor User Content generated by other users. We do not warrant the suitability of any User Content for any other users, including You. You may not attempt to override or circumvent any of the usage rules embedded into the Service. Any unauthorized reproduction, publication, further distribution or public exhibition of the materials provided on the Service, in whole or in part, is strictly prohibited. Recording, relaying, and sharing videos and images of the use of the App (“Materials”) is permitted for the limited purpose of promotion and marketing of the User’s usage of the App, provided that any such usage is not against the interest of the App and/or does not unfavourably reflect on the App as shall be determined by Us. The recorded material is owned by the creator, though the interface, designs, artwork and other Content remain our property. We will however continue to retain the right to revoke your permission to use the Materials at any time at on our sole discretion including when such usage is not in the interest of the App and/or does not favourably reflect on the App.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">7. ACCOUNT AND THIRD PARTY SOFTWARE RESTRICTIONS</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        A. Account Restrictions <br />
                        We may establish general practices and limits concerning use of the Service, including without limitation the maximum number of days that message board postings, text chat, video chat, voice chat or other uploaded User Content will be retained by the Service, the maximum disk space that will be allotted on our servers on Your behalf, and the maximum number of times (and the maximum duration for which) You may access the Service in a given period of time. We reserves the right to log off accounts that are inactive for a period of 2 (two) year. Furthermore, We may establish general practices and limits concerning the use of Your account, including without limitation: monitoring Your game data and behaviour and, upon finding Your behaviour suspicious, restricting Your game play or preventing You from accessing a game. Other examples of our general practices concerning the use of Your Account upon finding Your behaviour suspicious may include letting the public know Your Account or game play is under review and making public any communications between us and You related to our finding Your behaviour suspicious. For clarity, we have complete discretion with respect to Your Account and related communications when finding Your behaviour suspicious in any respect. We reserve the right to modify these general practices and limits from time to time. You agree to be informed regarding the same through in-App notifications or pop-ups on the App. If You continue to use the Services upon being informed of the revised terms, We shall have the right to presume Your acceptance to the terms. The User may have an option to disable push notifications generated by the App, depending on its mobile device. We will not be responsible for any inconvenience, loss or disruption of Service caused if You choose to ‘Opt-out’ from receiving push notifications.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        B. Third-Party Software (Bots)
                        We are committed to keeping its User’s data safe and our App free from fraud and abuse. Third-party software that automates tasks could potentially export or scrape data from the App and affect authenticity. In order to protect our User’s privacy and keep the App a trusted platform, we don't allow the Users to use any third-party software that scrapes, modifies the appearance of, or automates activities on the App. Any use of third party software (bots) by the Users will be considered a violation of our Terms. We reserve the right to suspend/terminate the Account of such User. If a User is of the belief that his/her Account has been wrongfully terminated/suspended, then the User shall have the right to report the same in accordance with the details provided under ‘Contact Us’.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">8. TERMINATION AND/OR SUSPENSION OF ACCOUNT</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        We may, with or without cause, and without prior notice, immediately terminate, suspend, disable or delete Your account, and access to the Service including any Account or User Content, at any time, without notice, at Our sole discretion and without any obligation to You or any third party. You hereby agree and assure that while communicating on the App including but not limited to communicating with our support agents on chat support, through artificial intelligence or through any medium, You shall not use abusive and derogatory language and/or post any objectionable information that is unlawful, threatening, defamatory, or obscene. In the event You use abusive language and/or post objectionable information, We reserve the right to suspend the chat support service and/or terminate/suspend Your Account, at any time with or without any notice. Compliance with these Terms or any policies does not constitute a promise or guarantee of future access to the Service. Cause for such termination may include, but not be limited to, (a) breaches or violations of this Agreement or other incorporated agreements or guidelines, (b) requests by law enforcement or other government agencies, (c) a request by You (self-initiated account deletions), (d) discontinuance or material modification to the Service (or any part thereof), (e) unexpected technical or security issues or problems, (f) extended periods of inactivity, (g) engagement by You in fraudulent or illegal activities. If terminated for actions causing actual, compensable harms to us, we shall enjoy all rights and remedies against You, including seeking remedies through the courts of Mumbai or otherwise. Any suspension or termination will not affect Your obligations to us. Upon suspension or termination of Your access to the Services, or upon notice from us, Your access to the Services will terminate immediately. Termination of Your account may include us taking the following measures: (a) removal of access to all offerings within the Services, including game points and progress in the App (b) deletion of all related information, files and content associated with or inside Your account (or any part thereof), (c) barring of further use of the Services, (d) removing Your profile avatar, name and personal information, if any, from the account (but retaining its username, evidence of violations).
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">9. THIRD-PARTY SERVICE PROVIDERS</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        The information collected by Us through the Services will be stored and processed by the App, its affiliates and / or service providers for operating or maintaining facilities to improve service efficiency. We share your information with third party service providers who help us in delivering and analysing our Services. We and our third-party service providers use a variety of technologies, such as application programming interface, to automatically collect certain technical information from your mobile device over time and across different websites/applications. Our service providers include but are not limited to: <br />
                        a. Service Providers which help to deliver Services. <br />
                        b. Advertising Platforms and Networks (commonly known as ‘ad networks’). <br />
                        c. Analytics providers. <br />
                        d. Payment gateways. <br />
                        e. Gift Voucher Provider. <br />
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">10. GOVERNING LAW</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        These terms, and any additional terms, will be governed by and construed in accordance with the laws of India, without regard to its conflicts of laws principles. The courts in Mumbai shall have exclusive jurisdiction in respect of any and all matters, disputes or differences arising in relation to or out of this Agreement.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">11. DISCLAIMER OF REPRESENTATIONS AND WARRANTIES</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        YOUR ACCESS TO AND USE OF THE SERVICES IS AT YOUR SOLE RISK. <br />
                        THE SERVICES ARE PROVIDED ON AN “AS IS”, “AS AVAILABLE,” AND “WITH ALL FAULTS” BASIS. Therefore, to the fullest extent permissible by law, We, our affiliates, subsidiaries, and each of their respective employees, officers, directors, members, managers, shareholders, agents, vendors, licensors, licensees, contractors, customers, successors, and assigns (collectively, Us), hereby to the maximum extent permissible by applicable law, disclaim and make no representations, warranties, endorsements, or promises, express or implied, as to the following: <br />
                        a. the Services (including the Content and the User Content); <br />
                        b. the functions, features, or any other elements on, or made accessible through, the Services;<br />
                        c. any products, services, or instructions offered or referenced at or linked through the Services;<br />
                        d. whether the Services (and their Content), or the servers that make the Services available, are free from any harmful components (including viruses, trojan horses, and other technologies that could adversely impact Your device);<br />
                        e. the specific availability of the Services, and whether any defects in the Services will be repaired, or will be repaired in a particular time frame;<br />
                        f. whether Your use of the Services is lawful in any particular jurisdiction;<br />
                        g. You agree not to access the Service by any means other than through the interface that is provided by Us for use in accessing the Service;<br />
                        h. You agree not to display or use our trademarks in any manner without our prior permission.<br /><br />
                        EXCEPTING ONLY AS MAY BE SPECIFICALLY SET FORTH IN ANY ADDITIONAL TERMS, WE HEREBY FURTHER DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT OR MISAPPROPRIATION OF INTELLECTUAL PROPERTY RIGHTS OF THIRD PARTIES, TITLE, CUSTOM, TRADE, QUIET ENJOYMENT, SYSTEM INTEGRATION, AND FREEDOM FROM ERRORS, COMPUTER VIRUSES OR OTHER HARMFUL ELEMENTS.
                        Some jurisdictions limit or do not allow the disclaimer of implied or other warranties, so the above disclaimers may not apply to the extent that such jurisdictions' laws are applicable.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">12. LIMITATIONS OF LIABILITY</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        A. Limitation of Liability <br />
                        UNDER NO CIRCUMSTANCES WILL WE BE RESPONSIBLE OR LIABLE FOR ANY LOSS OR DAMAGES OF ANY KIND, including personal injury or death or for any direct, indirect, economic, exemplary, special, punitive, incidental, or consequential losses or damages including losses or damages in the form of lost profits, loss of goodwill, or loss of data that are directly or indirectly related to:<br />
                        a. the Services (including the Content and the User-Generated Content);<br />
                        b. Your use of or inability to use the Services or the performance of the Services;<br />
                        c. the failure of a User to learn or otherwise benefit educationally from his or her use of the Services.<br />
                        d. any action taken in connection with an investigation by us or law enforcement authorities regarding Your access to or use of the Services;<br />
                        e. any action taken in connection with copyright or other intellectual property owners or other rights owners;<br />
                        f. in relation to the Materials used on social media platforms;<br />
                        g. in an event You are unable to access the Service due to as a result of the occurrence of any event not within the reasonable control of the App including outages, downtimes and system failures;<br />
                        h. any errors or omissions in the Services' technical operation; or<br />
                        i. any damage to any User's computer, hardware, software, modem, or other equipment or technology, including damage from any security breach or from any virus, bugs, tampering, fraud, error, omission, interruption, defect, delay in operation or transmission, computer line, or network failure or any other technical or other malfunction, including losses or damages in the form of lost profits, loss of goodwill, loss of data, work stoppage, inaccuracy of results, or equipment failure or malfunction.<br />
                        The foregoing limitations of liability will apply even if any of the events or circumstances were foreseeable and even if we were advised of or should have known of the possibility of such losses or damages, regardless of whether You bring an action of contract, negligence, strict liability, or tort (including whether caused, in whole or in part, by negligence, force majeure, telecommunications failure, or destruction of the Services). Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages of the sort that are described above, so the above limitation or exclusion may not apply to You.<br />
                    </p>
                    <br />
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        B. Dealings with Advertisers <br />
                        Your correspondence or business dealings with, or participation in promotions of, advertisers found on or through the Services, including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between You and such advertiser. You agree that We shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such advertisers on the Services. All third-party content, including advertised content, is solely the responsibility of those third-parties; we do not warrant the suitability of any third-party content for any purpose, nor do we warrant the accuracy or completeness of any third-party statements. The Services may provide, or third parties (via advertisements) may provide, links to other World Wide Web sites or resources, including embedded content from third party providers (including, but not limited to, YouTube, Twitch, content streamers, etc.). As We have no control over such sites and resources, You acknowledge and agree that We are not responsible for the availability of such external sites or resources and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such sites or resources. We do not warrant the suitability of any third-party Content for any particular use or purpose. We do not warrant the accuracy of any third-party advertisements. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">13. INDEMNITY</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        To the maximum extent allowed by law, You agree to indemnify, defend, and hold Us harmless from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from: (a) Your breach or alleged breach of these Terms; (b) Your use of the Services or activities in connection with the Services; (c) Your User Content; (d) Your violation of any law, rule or regulation; or (e) Your violation of any third-party rights. We reserve the right to assume, at our sole expense, the exclusive defence and control of any matter subject to indemnification by You, in which event You will fully cooperate with us in asserting any available defences. You will not, in any event, settle any claim without our prior written consent.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">14. INFRINGEMENT POLICY AND REPORTING PROCEDURE</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        We respect the intellectual property rights of others and expects users of the Service to do the same. We will respond to notices of alleged copyright infringement that comply with the applicable law that are properly provided to us. <br />
                        If You believe that any User Content has been copied or used in a way that constitutes copyright infringement, please provide us with the following information: <br />
                        a. a physical or electronic signature of the copyright owner or a person authorized to act on their behalf; <br />
                        b. identification of the copyrighted work claimed to have been infringed; <br />
                        c. identification of the material that is claimed to be infringing or to be the subject of infringing activity, and information reasonably sufficient to permit us to locate the material (such as a url); <br />
                        d. Your contact information, including Your address, telephone number, and an email address; <br />
                        e. a written statement by You that You have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and <br />
                        f. a statement that the information in the notification is accurate, and, under penalty of perjury, that You are authorized to act on behalf of the copyright owner. <br />
                    </p>
                    <br />
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        If You believe that Your removed User Content is not actually infringing, or that You have the necessary rights to post Your User Content, please send us a counter-notice containing the following information: <br />
                        a. a physical or electronic signature of the copyright owner or a person authorized to act on their behalf;<br />
                        b. Your physical or electronic signature (with Your full legal name);<br />
                        c. identification of the User Content that has been removed or to which access has been disabled and the location at which the User Content appeared before it was removed or disabled;<br />
                        d. a statement that You have a good faith belief, under penalty of perjury, that the User Content was removed or disabled as a result of mistake or a misidentification of the User Content; and<br />
                        e. Your name, address, telephone number, and email address, and a statement that You will accept service of process from the person who provided the original notification of the alleged infringement.<br />
                    </p>
                    <br />
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        If we receive a counter-notice, we may send a copy of the counter-notice to the person alleging copyright infringement and inform that person that we may replace the removed User Content. Unless the original person alleging copyright infringement files an action seeking a court order against the User Content provider, member, or User, the removed User Content may be replaced, in ten to fourteen business days or more after receipt of the counter-notice, at Our sole discretion. <br />
                        Please understand that filing a counter-notification may lead to legal proceedings between You and the complaining party to determine ownership. Be aware that there may be adverse legal consequences in Your country if You make a false or bad faith allegation by using this process. <br />
                        We reserve the right to remove User Content alleged to be infringing without prior notice and at our sole discretion. In appropriate circumstances, we also may terminate a User’s account if the User is determined to be a repeat infringer. Our designated copyright agent for notice of alleged copyright infringement appearing on the Service is: Email: support@tmkocplayschool.com
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">15. WIRELESS FEATURES</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        We may offer certain features and services that are available to You via Your wireless Internet Device (collectively, “Wireless Features”). Your carrier may charge standard messaging, data, and other fees, which may appear on Your wireless bill or be deducted from Your prepaid balance. Your carrier may prohibit or restrict certain Wireless Features, and certain Wireless Features may be incompatible with Your carrier or wireless Internet Device. You agree that as to the Wireless Features for which You are registered, we may send communications to Your wireless Internet Device regarding us or other parties. If You have registered via the Services for Wireless Features, then You agree to notify us of any changes to Your wireless number (including phone number) and update Your Account to reflect the changes.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">16. SUBMISSION OF FEEDBACK</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        We welcome feedback, comments and suggestions for improvements to the Services (“Feedback”). You acknowledge and expressly agree that any contribution of Feedback does not and will not give or grant You any right, title or interest in the Services or in any such Feedback. All Feedback becomes Our sole and exclusive property, and we may use and disclose Feedback in any manner and for any purpose whatsoever without further notice or compensation to You and without retention by You of any proprietary or other right or claim. You hereby assign to Us any and all right, title and interest (including, but not limited to, any patent, copyright, trade secret, trademark, show-how, know-how, moral rights and any and all other intellectual property right) that You may have in and to any and all Feedback.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">17. GENERAL PROVISIONS</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        A. Communications <br />
                        When You communicate with us electronically, such as via Services communication tool, You consent to receive communications from us electronically. Please note that we will do our best to respond to Your inquiry, but it may take us some time. You agree that all agreements, notices, disclosures, and other communications that We provide to You electronically, satisfy any legal requirement that such communications be in writing.
                    </p>
                    <br />
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        B. Severability; Interpretation <br />
                        If any provision of these Terms, or any Additional Terms, is for any reason deemed unenforceable by court, You agree that every attempt will be made to give effect to the parties' intentions as reflected in that provision, and the remaining provisions contained in this Agreement will continue in full force and effect.
                    </p>
                    <br />
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        C. Assignment We may assign our rights and obligations under these Terms, or any Additional Terms, in whole or in part, to any party at any time without any notice. These Terms, and any Additional Terms, may not be assigned by You, and You may not delegate Your duties under them.
                    </p>
                    <br />
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        D. No Waiver <br />
                        No waiver by us of any of these Terms or any Additional Terms will be of any force or effect unless made in writing and signed by a duly authorized by Our officer.
                    </p>
                    <br />
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        E. Updates to Terms <br />
                        We reserve the right to modify these Terms, or any Additional Terms, from time to time in our sole discretion (“Updated Terms”). You agree that any Updated Terms will be effective immediately upon our posting them on the Services and, if You have an Account, either by displaying an alert next to the link to the Terms, displaying an alert upon log in to the Services, or by directly communicating them to You (e.g., via our internal messaging service), provided that any modification to provisions related to fees and billing shall not apply to fees incurred prior to the applicable modification. If You do not cancel Your Subscription to the Services within seven days after receiving notice of Updated Terms as described above, or if You continue to use the Services after receiving notice of Updated Terms, then You agree to comply with, and to be bound by, the Updated Terms.
                    </p>
                    <br />
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        F. Contact Us <br />
                        You may contact us below if You have any questions, complaints, or other issues related to these Terms: Email: support@tmkocplayschool.com
                        Home
                    </p>
                </motion.div>
            </div>
            <FooterSection />
        </div>
    )
}

export default TermsCondition;