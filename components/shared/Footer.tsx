import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t bg-gray-700 text-white">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-7 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo_footer.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer