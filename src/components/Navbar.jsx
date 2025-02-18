import { useState } from "react";
import logo from '../../public/playSchool-logo.png'

const Navbar = () => {

    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Curriculum', href: '#' },
        { name: 'Pricing', href: '#' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        // <header className="sticky top-7 z-50 bg-white mx-10 rounded-[20px]">
        <header className="bg-white mx-10 rounded-[20px] z-[100]">

            {/* routes navbar */}
            <nav aria-label="Global" className="flex items-center justify-between p-4">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-1">
                        <img
                            alt=""
                            src={logo}
                            className="h-[62] w-[184]"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* <Bars3Icon aria-hidden="true" className="size-6" /> */}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-20">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-[14px] font-400  bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                    <button className="border-[3px] rounded-[10px] text-[14px] border-solid border-[#4087f3] bg-[#fff] px-[44px] py-[10px] cursor-pointer">
                        <span className="text-[14px] font-400 bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">Signup</span>
                    </button>
                    <button className="px-[44px] py-[10px] text-[14px] text-white rounded-[10px] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] border-none cursor-pointer">
                        Login
                    </button>

                </div>
            </nav>

            {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog> */}
        </header>
    )
}

export default Navbar;