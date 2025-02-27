
import { useEffect } from "react";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const RefundCancellation = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                    Refund & Cancellation policy
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
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px] mb-4">
                        The <strong>“TMKOC Play School”</strong> app (“App”), and other services (collectively the “Services”) are owned and operated by <strong>Neela Mediatech Pvt Ltd</strong> (hereinafter referred to as “We” or “Us” or “Our”). By registering an account with the App, You acknowledge that You have read and understood all the terms and policies and agree to be bound by them. This Policy is to be read along with the Privacy Policy and Terms of Use.
                    </p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        Our focus is complete customer satisfaction. In the event, that there is an error in the payment transmission, we may refund the excess money actually received, provided the reasons are genuine and proved after investigation which is entirely at our discretion. Please read the rules of each of the game along with all the documents available on our App including Terms of Use and Privacy Policy, as updated from time to time, before participating in the games. The documents provide all the details about the Services you purchase. <br />
                        The user’s shall have two options in order to subscribe to the Services offered on our App. The subscription shall be either on a monthly basis or the yearly basis. Further, there will be an option of auto-payment which will directly transfer the monies to us on the monthly or the yearly basis as per the user’s subscription plan. In the event the user does not wish to enable auto-payment, the user will have to manually enable the subscription again at the end of their subscription period in order to continue availing our Services.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">Cancellation Policy</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        For the user’s who have enabled auto-payment, they will have to cancel the auto-payment mechanism on the App. In the event of concerns, users may contact us at customer care email ID as mentioned in the Terms of Use. We do not cancel subscriptions once entered, however, only in exceptional circumstances wherein there is technical fault with the payment gateway or with our App due to which the cancellation could not occur before the next cycle, we may cancel the subscription and refund the excess monies actually received as per our sole discretion. Accordingly we retain the right and authority to cancel your subscription on request and refund the money to you (if any) within a reasonable amount of time. <br />
                        In-case any contest, in respect of which a user has already paid subscription fee gets cancelled, then in such event the user(s) money would be refunded to their App wallet. <br />
                        No other cancellation will be made by us.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // Start with the element 50px below and invisible
                    whileInView={{ opacity: 1, y: 0 }}     // Animate to its natural position and full opacity
                    viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when 20% of the element is visible; only animate once
                    transition={{ duration: 0.4, ease: 'easeOut' }} // Customize duration and easing as needed 
                    className="mb-8"
                >
                    <p className="text-[28px] font-[600] text-[#000] mb-2">Refund Policy</p>
                    <p className="text-[16px] font-[400] text-[#000] leading-[34px]">
                        All payments will be received by us through the payment gateway prescribed on our App. All payment refunds shall be made to the source account from which the payment is received, whether through Net banking, UPI Code, Credit Card, PayTM etc, within 15 business days from the initiation of refund at our end.
                    </p>
                </motion.div>
            </div>

            <div className="bg-[radial-gradient(circle,#82F479_15%,#0EB401_190%),url('../../public/background-cover2.png')] pt-6 bg-cover bg-center bg-no-repeat bg-blend-multiply">
                <FooterSection />
            </div>
        </div>
    )
}

export default RefundCancellation;