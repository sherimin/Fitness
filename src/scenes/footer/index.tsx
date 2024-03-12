type Props = {}

const Footer = (props: Props) => {
  return (
    <section className="bg-cream-20 md:flex justify-between p-10">
        <div>
            Contact Us
        </div>

        <div>
        © All Rights Reserved.
        </div>

        <div>
            Built with ❤️ By <a href="https://www.sherilu.com" className="underline hover:no-underline">Sheri Lu</a>
        </div>
    </section>
  )
}

export default Footer