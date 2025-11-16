import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 z-40 h-screen w-[122px] bg-white p-4 flex flex-col justify-between">
            <div className="flex items-center">
                {/* Logo */}
                <Image src="/images/icons/logo.svg" alt="Logo" width={72} height={68} />
            </div>
            <div className="flex gap-5 flex-col items-center mt-auto mb-5">
                {/* Social Icons */}
                <div className='w-[28px] h-[28px]'>
                    <Link href="#"><FaInstagram /></Link>
                </div>
                <div className='w-[28px] h-[28px]'>
                    <Link href="#"><FaTwitter /></Link>
                </div>
                <div className='w-[28px] h-[2px]'>
                    <Link href="#"><FaFacebookF /></Link>
                </div >

            </div>
        </div>
    );
}

export default Sidebar;
