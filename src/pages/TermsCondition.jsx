import { useEffect } from "react";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const TermsCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          Terms & Conditions
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
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            The “TMKOC Play School” app available on ______________
            (“Application”), and other services (collectively the “Services”)
            are owned and operated by Neela Mediatech Private Limited, having
            its office at 401, 4th Floor, Stanford, CTS no 554/1 to 4 Junction
            of SV Road and Juhu lane, Andheri (W) Mumbai, MH 400058 (“NMPL”,
            “Us”, “We”, “Our”). By registering an account with the Application,
            You acknowledge that You have read and understood these Terms of Use
            (“Terms of Use”) and agree to be bound by them. These Terms of Use
            are to be read along with the Privacy Policy available on
            ______________ . These Terms of Use and separate terms of service,
            as applicable, may apply to Your use of the Services or to a
            service, particular game’s rules, or product offered via the
            Services (“Additional Terms of Use”). To the extent there is a
            conflict between these Terms of Use and any Additional Terms of Use,
            the Terms of Use shall prevail unless expressly stated otherwise.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            In these Terms of Use, “You” or “User” refers to You, being
            an adult who has attained the age of 18 (eighteen) years and who can
            lawfully enter into a contract under the laws applicable to the
            location in which the person resides on behalf of the Child. The
            “Child” shall be the child (or “Children”, wherever the context so
            requires) who has not completed the age of 18 (eighteen) years, who
            shall be using the Services under the supervision of You, for which
            You shall provide verifiable consent. By registering for, or using
            the Services, You represent and warrant that You are an adult.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            This is a legally binding agreement between You and Us
            (“Agreement”).
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
            1. OPERATION OF SERVICES
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            1.1 We control and operate the Services from our headquarters in
            Mumbai, India and store information collected from You with Your
            prior consent or our third-party service providers’ servers as
            provided under the privacy policy. We shall not be liable for
            compliance with local laws of any other territory outside the
            jurisdiction of India. You hereby provide specific consent to the
            compliance with the Indian laws in case You are accessing the
            Application in any other country and undertake that NMPL shall not
            be liable for compliance with the same.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            1.2 We make no representation that the Services are appropriate or
            available in all locations. In case the User makes payment for the
            Services in a territory where the Services are unavailable, the User
            shall solely be liable for such act and no refund shall be claimed
            from NMPL to the extent permissible under the applicable laws. You
            represent and warrant that You are not listed on any government’s
            list of prohibited or restricted parties. If any User is found to be
            accessing the Services beyond the permitted jurisdiction, then We
            reserve the right to suspend/terminate the Account of such User for
            use in such locations or restrict the access to the Account of such
            User.
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
            2. ACCOUNTS AND USER CONDUCT
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            2.1 “Account” is the account designed for personal use, offered by
            Us or through one of Our affiliates, pursuant to registration of the
            User for the Services and payment for the Services, the costing is
            available on the Application which shall differ from territory to
            territory (the costing shall be referred to as the “Platform Fee”).
            The term of subscription shall be for a period of 1 (one) year from
            the date of payment of the Platform Fee (“Term”) which may be
            auto-renewed via auto-pay. The said Account shall be linked to the
            user id generated by NMPL. The User shall be permitted to create up
            to 3 (three) profiles per Account for up to 3 (three) Children. The
            Account shall have different plans, determined basis the Platform
            Fee selected by the User:
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            a) Basic Plan: The same shall provide the User with access of up to
            50 (fifty) report views per Child. No global rankings (elaborated
            upon under Clause 7) shall be available for the Basic Plan.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            b) Pro Plan: The same shall provide the User access to unlimited
            number of reports views per Child. The global ranking of the
            Children shall be visible on subscription to the Pro Plan. It is
            herein stated that in case one Child has subscribed to the Pro Plan,
            all the Children shall subscribe to the Pro Plan. The same shall
            apply for the upgradation of the Plan.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            In case the User wishes to at any time after subscribing to the
            Basic Plan, wish to upgrade to the Pro Plan, You shall pay the
            difference provided on the Application. Such upgrade shall not
            modify the Term of the subscription, which shall end on the
            completion of 1 (one) year of the subscription of the Basic Plan.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            2.2 Use of Application
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            a) The Application shall be available on to be used on mobile
            devices. In order to register as a User on the Application via Your
            mobile phone, a User must register an Account using a valid mobile
            number that belongs to the User, and not a third party, registered
            in territory where the User resides. The User ensure that all
            information provided by the User elaborated under the privacy policy
            linked hereinabove, is, true, accurate, current, and complete at all
            times. A User may enter a desired username at the time of
            registration. It is understood if the username shall be visible to
            others, and if it corresponds to the legal name of the User/Child,
            You provide specific consent for the personal data to be
            attributable to You in the public domain of the Application while
            displaying the global rankings. Upon successful registration, the
            User would be granted the unique username. The User shall have the
            option of modifying the username once after the Account is
            registered.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            b) The procedure undertaken for the purpose of collection of the
            Platform Fee is detailed under, for the sake of transparency and
            clarity: ___________. It is herein clarified that auto pay may be
            disabled by the User. However, in case of any inadvertent error the
            Platform Fee is auto- deducted, We shall not be liable for the same,
            and no claim shall be made including but not limited to a request of
            refund, save and except if required by the applicable laws.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            c) The registration shall apply to the specific territory where the
            User is present. If for any reason, the User shall be outside the
            territory in which the Services are subscribed for whatsoever time
            period, the User shall be required to register for the Services in
            their current territory with a mobile number of the territory where
            the User is present and pay the requisite Platform Fee (defined
            below). To successfully log into the Services, Users will be
            required to provide the one-time password (“OTP”) sent to their
            registered mobile phone numbers, in order to validate the registered
            mobile number. Carrier charges in relation to User verification
            shall be paid and borne by You. If We have reasonable grounds to
            suspect that such mobile number is inaccurate, not current, or
            incomplete, then we may suspend or terminate Your account, and
            refuse any and all current or future use of the Service. The User
            shall ensure that the location provided shall be true and accurate,
            any suspected tampering shall attract consequences including but not
            limited to suspension of the Account (defined below). If the
            registered mobile number registered with the Application is
            objected/ changed/ updated/ corrected/ rectified /deleted, all
            progress as saved in the previous mobile number would be deleted.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            d) Each User shall create and operate a single Account using a valid
            mobile number in accordance with these Terms of Use. In an event a
            User has created multiple accounts with different mobile numbers /
            usernames, We reserve the right, in our sole discretion, to suspend
            or disqualify an Account and nullify any benefits received, if any.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            e) NMPL shall trace the exact location via the IP Address of the
            Data Principal every time the Application is opened, for which
            specific consent is obtained under the Privacy Policy.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            f) It is hereby declared that the Application may use artificial
            intelligence from registration to termination. The User hereby
            provides specific consent for the use of the same and provision of
            data by NMPL to the artificial intelligence, if any.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            2.3 User Conduct
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            The data provided by You as detailed in the privacy policy linked
            above, shall be the sole responsibility of the User since the
            consent provided shall be informed and unfettered. You are
            responsible for maintaining the confidentiality for the personal
            information provided. You agree that:
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            a) You will provide complete and accurate registration information
            about yourself and keep Your Account information up to date.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            b) You are solely responsible for all activities that occur under
            Your Account.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            c) You will notify us immediately of any unauthorized use of Your
            Account.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            d) We are in no way responsible for any loss that You may incur as a
            result of any unauthorized use of Your Account.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            e) You will not sell, transfer, or assign Your Account or any
            Account rights. If We learn that an ineligible User has created an
            Account, We may seek confirmation of the User’s status or deactivate
            the Account (either permanently or temporarily), without notice to
            the ineligible User. The same shall be determined by using the exact
            location as traced from the IP address of the person accessing the
            Application every time the same is opened, which You specifically
            consent to.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            f) You agree to not use the Services to:
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            i. forge headers or otherwise manipulate identifiers in order to
            disguise the origin of any data transmitted through the Service;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            ii. use, reproduce, or remove any copyright, trademark, service
            mark, trade name, slogan, logo, image, or other proprietary notation
            displayed on or through the Services;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            iii. disrupt the normal flow of dialogue or otherwise act in a
            manner that negatively affects other user's ability to engage in
            real time exchanges;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            iv. access or use the Services in any manner that could disable,
            overburden, damage, interfere with or disrupt the Services or
            servers or networks connected to the Services or any other party's
            access to or use of the Services;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            v. disobey any requirements, procedures, policies or regulations of
            networks connected to the Services;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            vi. download, modify, copy, distribute, transmit, display, perform,
            reproduce, duplicate, publish, license, create derivative works
            from, or offer for sale any information contained on, or obtained
            from or through, the Services, except as expressly permitted in this
            Agreement;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            vii. duplicate, decompile, reverse engineer, disassemble or decode
            the Services (including any underlying idea or algorithm), or
            attempt to do any of the same;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            viii. use automation software (bots), hacks, modifications (mods) or
            any other unauthorized third- party software designed to modify the
            Services;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            ix. access, tamper with, or use non-public areas of the Services,
            Our computer systems, or the technical delivery systems of our
            providers;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            x. probe, scan, or test the vulnerability of any system or network
            or breach or circumvent any security or authentication measures;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            xi. intentionally or unintentionally violate any applicable local,
            state, national or international law, and any regulations having the
            force of law;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            xii. access or use the Services in any way not expressly permitted
            by this Agreement.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            g) You agree not to reproduce, duplicate, copy, sell, trade, resell
            or exploit for any commercial purposes, any portion of the Services,
            use of the Services, or access to the Services.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            h) You agree that the data submitted by You, or any other content
            shall not be such that it is deemed inappropriate, offensive,
            vulgar, racist, sexist, homophobic, containing hate speech, gore or
            having excessive violence. We, in addition to other remedies, shall
            have the right to terminate Your Account if You are found guilty of
            / in breach of these Terms of Use wherein You shall not be entitled
            to a refund save and except if provided otherwise by the applicable
            law. You shall further be liable to indemnify Us for any costs
            incurred due to such acts. NMPL shall be entitled to additionally
            claim damages from You for the same.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            Compliance with the above rules and regulations, these Terms of Use
            or privacy policy does not constitute a guarantee of continued or
            future access to the Services. We reserve the right to limit or
            terminate Your access to the Services at any time without any
            liability.
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
            3. REGULAR UPDATES OF THE APP
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            3.1 The User acknowledges and agrees that the Application may
            require periodic updates for improved functionality, security
            enhancements, or bug fixes. Minor updates may be implemented without
            affecting the User’s ability to access and use the Application.
            These updates may include performance improvements, minor feature
            enhancements and bug fixes.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            3.2 In the event of major updates, the User must update the
            Application, failing which the User will not be able to access the
            Application. A pop-up message will prompt the User to update the
            Application before further access is granted.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            3.3 In case the Service is disrupted or hampered in the due course
            under the updates mentioned under this Clause, we shall not be
            responsible in any inconvenience, loss or disruption of Service
            caused to You. You agree that nothing under this Clause shall
            entitle You to claim any refund, damages or be indemnified from Us
            for the same.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with the element 50px below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to its natural position and full opacity
          viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible; only animate once
          transition={{ duration: 0.4, ease: "easeOut" }} // Customize duration and easing as needed
          className="mb-8"
        >
          <p className="text-[28px] font-[600] text-[#000] mb-2">4. GAMES</p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            4.1 The Application offers multiple educational gameplay
            opportunities for all Children via the Users. The games can be
            downloaded by the Child, providing an experiential opportunity to
            expand their knowledge. Games may be suggested to the User basis the
            performance of the Child. The User may view the reports generated on
            the Application.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            4.2 If the Child chooses to play a game, You shall be responsible
            for the activities performed through Your account. We assume no
            responsibility or liability for violations. If You become aware of
            any violation of this Agreement in connection with the use of the
            game, please contact us at support@tmkocplayschool.com. We may
            investigate any complaints and violations that come to our attention
            and may take any action that we deem fit after conducting an
            internal investigation as provided in the privacy policy, including,
            but not limited to issuing warnings, removing the User Content, or
            terminating an account. We also may provide User information to law
            enforcement and government agencies in response to valid legal
            requests consistent with our privacy policy.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            4.3 Under no circumstances will We be liable in any way for any data
            or User Content viewed while using the Service, including, but not
            limited to, any errors or omissions in any such data or Content
            (defined below), or any loss or damage of any kind incurred as a
            result of the use of, access to, or denial of access to any data or
            Content. We shall not be liable to You for any failure to perform
            any of our obligations under the game/s or in respect of the action
            or inaction where we are unable to do so as a result of
            circumstances beyond our reasonable control.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            4.4 You hereby agree to indemnify Us, Our legal representatives,
            affiliates, subsidiaries, agencies and respective officers,
            directors, employees against all costs, losses, damages, expenses
            and liabilities (including for loss of reputation and goodwill and
            professional advisor fees) suffered by Us arising as a result of a
            breach by You of Your obligations under these Terms of Use in
            connection with Your failure to follow any instructions given by our
            team or in relation to any matter concerning Your participation in a
            game.
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
            5. OWNERSHIP AND LICENSE
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            5.1 As agreed between us and You, the Services (including past,
            present, and future versions) are owned and controlled by Us and Our
            Application and any feature, text, image, character, animation or
            any other Content within the Application is protected by Indian and
            international copyright, trademark, trade dress, patent, and other
            intellectual property rights and laws to the fullest extent
            possible. “Content” means all text, graphics, user interfaces,
            visual interfaces, photographs, logos, sounds, music, artwork, and
            computer code displayed on or available through the Services and the
            design, structure, selection, coordination, expression, and
            arrangement of such materials including, without limitation, (i)
            materials and other items relating to Us and our products and
            services, including, without limitation, all activities, printables,
            characters, photographs, audio clips, sounds, pictures, videos, and
            animation; (ii) trademarks, logos, trade names, service marks, and
            trade identities of various parties, including ours (collectively,
            Trademarks); and (iii) other forms of intellectual property.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            5.2 We own all rights relating to the games and other Content made
            available through the Application and further we reserve the right
            to record, store, monetize any gaming content on the Application and
            exploit it in any mode/medium/format, whether existing now or
            developed in the future, for any purpose whatsoever in relation to
            the Application or for any other reason as we may deem fit.
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
            6. LIMITED LICENSE
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            6.1 Save and except as provided under the Terms of Use and privacy
            policy, no part of the Services nor Content may be used, copied,
            reproduced, distributed, uploaded, posted, publicly displayed,
            translated, transmitted, broadcast, sold, licensed, or otherwise
            exploited for any purpose whatsoever. Any unauthorized use of any
            Content or the Service for any purpose is prohibited.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            6.2 You agree not to access the Service by any means other than
            through the interface that is provided by Us for use in accessing
            the Service.
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
            7. USER GAME ACTIVITY (UGA)
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            Our Services also include the generation and maintenance of a record
            of each User&#39;s game activity, history, statistics, archive, and
            a public record of play basis the Account plan adopted. When a Child
            with a Pro Plan plays a game, they shall receive a global ranking
            basis their performance basis comparison with the scores of other
            pro plan subscribers, which shall be visible to all Pro Plan Users,
            which shall include certain the username, country and score,
            (“UGA”). In case more than 1 (one) Child has the same score, all
            such Children shall be provided the same global ranking. High
            scores, points, and usernames may be treated as public records and
            published on leaderboards within the Application or elsewhere, which
            may include gaming streams, screenshots of leaderboard, etc. that
            can be accessed, used, and monetized by the Application for
            purposes, including but not limited to, publishing images of the UGA
            in for example, blogs, videos, in-Application publications including
            leaderboards, social media posts, game collections, which you hereby
            provide specific consent for. NMPL shall not be responsible for any
            errors which may be committed in calculation of the scores or the
            rank provided for Children with the same score. It is hereby agreed
            that the User/Child shall not be permitted to publish UGA of other
            users/children on any public or private domain including but not
            limited to social media.
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
            8. USER CONTENT
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            8.1 You consent to the publication of the information provided by
            You to Us including the username and feedbacks received from You
            on/for the Application.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            8.2 We reserve the right to access, read, preserve, and disclose
            information, as we reasonably believe is necessary to (i) satisfy
            any applicable law, regulation, legal process, or governmental
            request, (ii) enforce this Agreement, including investigation of
            potential violations hereof, (iii) detect, prevent, or otherwise
            address fraud, security, or technical issues, (iv) respond to User
            support requests, or (iv) protect Our rights, property, or safety,
            Our users, and the public in accordance with the privacy policy.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            8.3 You understand that all information, data, text, software or
            other materials, including username, whether publicly posted or
            privately transmitted, are the sole responsibility of the person
            from whom such content originated and where such action is conducted
            by the Child, You shall be deemed to have published the same (“User
            Content”). This means that You, and not Us, are entirely responsible
            for all User Content that You or the Child upload, post, transmit or
            otherwise make available via the Service. We do not control the User
            Content posted via the Service and, as such, do not guarantee the
            accuracy, integrity or quality of such User Content, except the due
            diligence to verify the consent provided by You as per the
            applicable law. You understand that by using the Service, You may
            unintentionally be exposed to User Content that is offensive,
            indecent or objectionable. Under no circumstances will We be liable
            in any way for any User Content, including, but not limited to, any
            errors or omissions in any User Content, or any loss or damage of
            any kind incurred as a result of the use of any User Content posted,
            transmitted or otherwise made available via the Service. We do not
            and cannot monitor User Content generated by other users. We do not
            warrant the suitability of any User Content for any other users,
            including You or the Child.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            8.4 You shall not attempt to override or circumvent any of the usage
            rules embedded into the Service. Any unauthorized reproduction,
            publication, further distribution or public exhibition of the
            materials provided on the Service, in whole or in part, is strictly
            prohibited and shall attract dire consequences to be imposed on You.
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
            9. ACCOUNT RESTRICTIONS
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            9.1 We may establish general practices and limits concerning use of
            the Service, including without limitation the maximum number of days
            that message board postings, text chat, video chat, voice chat or
            other uploaded User Content will be retained by the Service, the
            maximum disk space that will be allotted on our servers on Your
            behalf, and the maximum number of times (and the maximum duration
            for which) You may access the Service in a given period of time.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            9.2 You hereby agree and assure Us that while communicating on the
            Application including but not limited to communicating with our
            support agents on chat support, whether via artificial intelligence
            or otherwise, You shall not use abusive and derogatory language
            and/or post any objectionable information that is unlawful,
            threatening, defamatory, or obscene. In the event You use abusive
            language and/or post objectionable information, We reserve the right
            to suspend the chat support service and/or terminate/suspend Your
            Account, at any time with or without any notice.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            9.3 Furthermore, We may establish general practices and limits
            concerning the use of Your account, including without limitation
            monitoring Your game data, behaviour and location in order to detect
            suspicious or fraudulent behaviour, which entitles Us to restrict
            Your game play or prevent You from accessing a game. For clarity, we
            have complete discretion with respect to continuation of Your
            Account when Your behaviour is suspected in any respect, which may
            extend to termination of Your Account. You shall not be liable for a
            refund to the extent permitted under the applicable law in case of
            any suspension or termination. If You believe that Your Account has
            been wrongfully terminated/suspended, You have the right to report
            the same via the mode provided under Clause 21.6 within the
            timelines as provided under the applicable law.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            9.4 The User may have an option to disable push notifications
            generated by the Application, depending on its mobile device. We
            will not be responsible for any inconvenience, loss or disruption of
            Service caused if You choose to ‘Opt-out’ from receiving push
            notifications.
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
            10. THIRD PARTY SOFTWARE RESTRICTIONS
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            10.1 We are committed to keeping Your data safe and our Application
            free from fraud and abuse and third-party software, save and except
            the use of artificial intelligence for which due diligence and
            reasonable safeguards shall be enforced, that automates tasks could
            potentially export or scrape data from the Application and affect
            authenticity. In order to protect our User’s privacy and keep the
            Application a trusted platform, we don&#39;t allow the Users to use
            any third-party software that scrapes, modifies the appearance of,
            or automates activities on the Application.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            10.2 Any use of third-party software (bots) by the Users of Your Own
            accord will be considered a violation of our Terms of Use. We
            reserve the right to suspend/terminate the Account of such User.
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
            11. TERMINATION AND/OR SUSPENSION OF ACCOUNT
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            11.1 We may, with or without cause, and without prior notice,
            immediately terminate, suspend, disable or delete Your account, and
            access to the Service including any Account or User Content, at any
            time, without notice, at Our sole discretion and without any
            obligation to You.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            11.2 Cause for such termination may include, but not be limited to,
            (a) breaches or violations of this Agreement or other incorporated
            agreements or guidelines, (b) requests by law enforcement or other
            government agencies, (c) a request by You (self-initiated account
            deletions), (d) discontinuance or material modification to the
            Service (or any part thereof), (e) unexpected technical or security
            issues or problems, (f) extended periods of inactivity, (g)
            engagement by You in fraudulent or illegal activities. If terminated
            for actions causing actual, compensable harms to us, we shall enjoy
            all rights and remedies against You, including seeking remedies
            through the courts of Mumbai or otherwise. Any suspension or
            termination will not affect Your obligations to us. Upon suspension
            or termination of Your access to the Services, or upon notice from
            us, Your access to the Services will terminate immediately.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            11.3 Termination of Your account may include us taking the following
            measures: (a) removal of access to all offerings within the
            Services, including UGA and progress in the Application (b) deletion
            of all related information, files and content associated with or
            inside Your account (or any part thereof), (c) barring of further
            use of the Services, (d) removing Your profile details, if any, from
            the Account (we reserve the right to retain the evidence of
            violations and data attributing the same to You).
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
            12. THIRD-PARTY SERVICE PROVIDERS
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            12.1 The information collected by Us through the Services will be
            stored and processed by the Application, its affiliates and / or
            service providers for operating or maintaining facilities to improve
            Service efficiency.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            12.2 We share your information with third party service providers
            who help us in delivering and analysing our Services. We and our
            third-party service providers use a variety of technologies, such as
            application programming interface, to automatically collect certain
            technical information from your mobile device over time and across
            different websites/applications, which you hereby provide specific
            consent for. The specific list is provided under the privacy policy.
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
            13. GOVERNING LAW
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            These terms, and any additional terms, will be governed by and
            construed in accordance with the laws of India, without regard to
            its conflicts of laws principles. The courts in Mumbai shall have
            exclusive jurisdiction in respect of any and all matters, disputes
            or differences arising in relation to or out of this Agreement,
            after exhaustion of the grievance redressal mechanism provided under
            the privacy policy and applicable laws.
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
            14. DISCLAIMER OF REPRESENTATIONS AND WARRANTIES
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            14.1 YOUR ACCESS TO AND USE OF THE SERVICES IS AT YOUR SOLE RISK.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            14.2 THE SERVICES ARE PROVIDED ON AN “AS IS”, “AS AVAILABLE,” AND
            “WITH ALL FAULTS” BASIS. Therefore, to the fullest extent
            permissible by law, We, our affiliates, subsidiaries, and each of
            their respective employees, officers, directors, members, managers,
            shareholders, agents, vendors, licensors, licensees, contractors,
            customers, successors, and assigns (collectively, “Us”), hereby to
            the maximum extent permissible by applicable law, disclaim and make
            no representations, warranties, endorsements, or promises, express
            or implied, as to the following:
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            a) the Services (including the Content, User Content, and UGA);
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            b) the functions, features, or any other elements on, or made
            accessible through, the Services;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            c) any products, services, or instructions offered or referenced at
            or linked through the Services;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            d) whether the Services (and their Content), or the servers that
            make the Services available, are free from any harmful components
            (including viruses, trojan horses, and other technologies that could
            adversely impact Your device). While we adopt reasonable security
            measures, inadvertent errors or omissions may occur for which We do
            not undertake any liability;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            e) the specific availability of the Services, and whether any
            defects in the Services will be repaired, or will be repaired in a
            particular time frame;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            f) whether Your use of the Services is lawful in any particular
            jurisdiction save and except in the territory of India, subject to
            change in the applicable laws which shall be deemed to update the
            Terms of Use and privacy policy in a manner to ensure compliance,
            until NMPL uploads/provides the Updated Terms of Use in the manner
            specified under Clause 21.5;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            g) You agree not to access the Service by any means other than
            through the interface that is provided by Us for use in accessing
            the Service; and
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            h) You agree not to display or use our Content, marks including
            trademarks and rights including copyright in any manner without our
            prior permission.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            14.3 EXCEPT ONLY AS MAY BE SPECIFICALLY SET FORTH IN ANY ADDITIONAL
            TERMS, WE HEREBY FURTHER DISCLAIM, TO THE EXTENT PERMITTED UNDER
            LAW, ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT
            OR MISAPPROPRIATION OF INTELLECTUAL PROPERTY RIGHTS OF THIRD
            PARTIES, TITLE, CUSTOM, TRADE, QUIET ENJOYMENT, SYSTEM INTEGRATION,
            AND FREEDOM FROM ERRORS, COMPUTER VIRUSES OR OTHER HARMFUL ELEMENTS.
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
            15. LIMITATIONS OF LIABILITY
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            15.1 UNDER NO CIRCUMSTANCES WILL WE BE RESPONSIBLE OR LIABLE FOR ANY
            LOSS OR DAMAGES OF ANY KIND, including personal injury or death or
            for any direct, indirect, economic, exemplary, special, punitive,
            incidental, or consequential losses or damages including losses or
            damages in the form of lost profits, loss of goodwill, or loss of
            data that are directly or indirectly related to:
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            a) the Services (including the Content, User Content, and the UGA);
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            b) Your use of or inability to use the Services or the performance
            of the Services;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            c) the failure of a User to learn or otherwise benefit educationally
            from Your use of the Services.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            d) any action taken in connection with an investigation by us or law
            enforcement authorities regarding Your access to or use of the
            Services or Account;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            e) any action taken in connection with copyright or other
            intellectual property owners or other rights owners;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            f) in an event You are unable to access the Service as a result of
            the occurrence of any event not within the reasonable control of the
            Application including outages, downtimes and system failures;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            g) any errors or omissions in the Service's technical operation; or
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            h) any damage to any User&#39;s computer, hardware, software, modem,
            or other equipment or technology, including damage from any security
            breach or from any virus, bugs, tampering, fraud, error, omission,
            interruption, defect, delay in operation or transmission, computer
            line, or network failure or any other technical or other
            malfunction, including losses or damages in the form of lost
            profits, loss of goodwill, loss of data, work stoppage, inaccuracy
            of results, or equipment failure or malfunction.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            15.2 The foregoing limitations of liability will apply even if any
            of the events or circumstances were foreseeable and even if we were
            advised of or should have known of the possibility of such losses or
            damages, irrespective of whether You bring an action of contract,
            negligence, strict liability, or tort (including whether caused, in
            whole or in part, by negligence, force majeure, telecommunications
            failure, or destruction of the Services).
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
            16. DEALINGS WITH ADVERTISERS
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            16.1 Your correspondence or business dealings with, or participation
            in promotions of advertisers found on or through the Services,
            including payment and delivery of related goods or services, and any
            other terms, conditions, warranties or representations associated
            with such dealings are solely between You and such advertiser. You
            agree that We shall not be responsible or liable for any loss or
            damage of any sort incurred as the result of any such dealings or as
            the result of the presence of such advertisers on the Services. All
            third-party content, including advertised content, is solely the
            responsibility of those third parties; we do not warrant the
            suitability of any third-party content for any purpose, nor do we
            warrant the accuracy or completeness of any third-party statements.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-2">
            16.2 The Services may provide, or third parties (via advertisements)
            may provide, links to other world wide web sites or resources,
            including embedded content from third party providers (including,
            but not limited to, YouTube, Twitch, content streamers, etc.). As We
            have no control over such sites and resources, You acknowledge and
            agree that We are not responsible for such external sites or
            resources and do not endorse nor are responsible or liable for any
            content, advertising, products or other materials on or available
            from such sites or resources. We do not warrant the suitability of
            any third-party content for any particular use or purpose. We do not
            warrant the accuracy of any third-party advertisements. You further
            acknowledge and agree that we shall not be responsible or liable,
            directly or indirectly, for any damage or loss caused or alleged to
            be caused by or in connection with use of or reliance on any such
            content, goods or services available on or through any such site or
            resource.
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
            17. INDEMNITY
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            To the maximum extent allowed by law, You agree to indemnify,
            defend, and hold Us harmless from and against all losses, expenses,
            damages, and costs, including reasonable attorneys&#39; fees,
            resulting from: (a) Your breach or alleged breach of these Terms of
            Use; (b) Your use of the Services or activities in connection with
            the Services; (c) Your User Content; (d) Your violation of any law,
            rule or regulation; or (e) Your violation of any third-party rights.
            We reserve the right to assume, at our sole expense, the exclusive
            defence and control of any matter subject to indemnification by You,
            in which event You will fully cooperate with us in asserting any
            available defences. You will not, in any event, settle any claim
            without our prior written consent.
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
            18. INFRINGEMENT POLICY AND REPORTING PROCEDURE
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            18.1 We respect the intellectual property rights of others and
            expects users of the Service to do the same. We will respond to
            notices of alleged copyright infringement that comply with the
            applicable law that are properly provided to Us via the means as
            prescribed under Clause 21.6.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            18.2 If You believe that any User Content has been copied or used in
            a way that constitutes copyright infringement, please provide Us
            with the following information:
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            a) a physical or electronic signature of the copyright owner or a
            person authorized to act on their behalf;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            b) identification of the copyrighted work claimed to have been
            infringed;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            c) identification of the material that is claimed to be infringing
            or to be the subject of infringing activity, and information
            reasonably sufficient to permit us to locate the material (such as a
            URL);
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            d) Your contact information, including Your address, mobile number,
            and email address;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            e) a written statement by You that You have a good faith believe
            that use of the material in the manner complained of is not
            authorized by the copyright owner, its agent, or the law; and
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            f) a statement that the information in the notification is accurate,
            and, under penalty of perjury, that You are authorized to act on
            behalf of the copyright owner.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            18.3 If You believe that Your removed User Content is not actually
            infringing, or that You have the necessary rights to post Your User
            Content, please send us a counter-notice on receipt of such notice
            by Us to You, containing the following information:
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            a) a physical or electronic signature of the copyright owner or a
            person authorized to act on their behalf;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            b) Your physical or electronic signature (with Your full legal
            name);
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            c) identification of the User Content that has been removed or to
            which access has been disabled and the location at which the User
            Content appeared before it was removed or disabled;
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            d) a statement that You have a good faith believe, under penalty of
            perjury, that the User Content was removed or disabled as a result
            of mistake or a misidentification of the User Content; and
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            e) Your name, address, telephone number, and email address, and a
            statement that You will accept the grievance redressal mechanism.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            Please understand that filing a counter-notice may lead to legal
            proceedings between You and the complaining party to determine
            ownership. Be aware that there may be adverse legal consequences if
            You make a false or bad faith allegation by using this process.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            18.4 If we receive a counter-notice, we may send a copy of the
            counter-notice to the claimant of the copyright citing copyright
            infringement and inform that person that we may replace the removed
            User Content. Unless the original person alleging copyright
            infringement files an action seeking a court order against the User
            Content provider, member, or User, the removed User Content may be
            replaced, in 10 (ten) to 14 (fourteen) business days or more after
            receipt of the counter-notice, at Our sole discretion. Any and all
            costs borne by Us shall be borne by both parties claiming
            infringement, equally.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            18.5 We reserve the right to remove User Content alleged to be
            infringing without prior notice and at our sole discretion. In
            appropriate circumstances, we also may terminate a Users account if
            the User is determined to be a repeat infringer. Our designated
            copyright agent for notice of alleged copyright infringement
            appearing on the Service is: Email: support@tmkocplayschool.com
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
            19. WIRELESS FEATURES
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            We may offer certain features and services that are available to You
            via Your wireless Internet Device (collectively, “Wireless
            Features”). Your carrier may charge standard messaging, data, and
            other fees, which may appear on Your wireless bill or be deducted
            from Your prepaid balance. Your carrier may prohibit or restrict
            certain Wireless Features, and certain Wireless Features may be
            incompatible with Your carrier or wireless internet device. you
            agree that as to the Wireless Features for which You are registered,
            we may send communications to Your wireless Internet Device
            regarding us or other parties. If You have registered via the
            Services for Wireless Features, then You agree to notify us of any
            changes to Your wireless number (including phone number) and update
            Your Account to reflect the changes.
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
            20. SUBMISSION OF FEEDBACK
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            We welcome feedback, comments and suggestions for improvements to
            the Services (“Feedback”). You acknowledge and expressly agree that
            any contribution of Feedback does not and will not give or grant You
            any right, title or interest in the Services or in any such
            Feedback. All Feedback becomes Our sole and exclusive property, and
            we may use and disclose Feedback in any manner and for any purpose
            whatsoever without further notice or compensation to You and without
            retention by You of any proprietary or other right or claim. You
            hereby assign to Us any and all right, title and interest
            (including, but not limited to, any patent, copyright, trade secret,
            trademark, show-how, know-how, moral rights and any and all other
            intellectual property right) that You may have in and to any and all
            Feedback.
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
            21. GENERAL PROVISIONS
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            21.1 Communications
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            When You communicate with us electronically, such as via Services
            communication tool, You consent to receive communications from us
            electronically. Please note that we will do our best to respond to
            Your inquiry validly prescribed, but it may take us some time. You
            agree that all agreements, notices, disclosures, and other
            communications that We provide to You electronically, satisfy any
            legal requirement that such communications be in writing.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            21.2 Severability and Interpretation
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            If any provision of these Terms of Use, or any Additional Terms of
            Use, is for any reason deemed unenforceable by court, You agree that
            every attempt will be made to give effect to the Parties' intentions
            as reflected in that provision, and the remaining provisions
            contained in this Agreement will continue in full force and effect.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            21.3 Assignment
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            We may assign our rights and obligations under these Terms of Use,
            or any Additional Terms of Use, in whole or in part, to any party at
            any time without any notice. These Terms of Use, and any Additional
            Terms of Use, may not be assigned by You, and You may not delegate
            Your duties under them.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            21.4 No Waiver
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            No waiver by us of any of these Terms of Use or any Additional Terms
            of Use will be of any force or effect unless made in writing (emails
            permitted) and signed by a duly authorized by Our officer.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            21.5 Updates to Terms
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            We reserve the right to modify these Terms of Use, or any Additional
            Terms of Use, from time to time in our sole discretion (“Updated
            Terms of Use”). You agree that any Updated Terms of Use will be
            effective immediately upon our posting them on the Services and, if
            You have an Account, either by displaying an alert next to the link
            to the Terms of Use, displaying an alert upon log in to the
            Services, or by directly communicating them to You (e.g., via our
            internal messaging service), save and except modification to
            provisions regarding the revised Platform Fee and billing which
            shall be incurred during the next payment cycle. You shall
            communicate Your acceptance to the updated Terms of Use as soon as
            feasible to avoid hindrances in the Services.
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            21.6 Contact Us
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            You may contact us below if You have any questions, complaints, or
            other issues related to these Terms of Use:
          </p>
          <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
            Email: support@tmkocplayschool.com
          </p>
        </motion.div>
      </div>
      <div className="bg-[radial-gradient(circle,#82F479_15%,#0EB401_190%),url('../../public/background-cover2.png')] pt-6 bg-cover bg-center bg-no-repeat bg-blend-multiply">
        <FooterSection />
      </div>
    </div>
  );
};

export default TermsCondition;
