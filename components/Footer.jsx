import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI & Machine Learning", href: "/digital-engineering/ai-ml" },
    { name: "Cloud & DevOps", href: "/digital-engineering/cloud-devops" },
    { name: "Data Analytics", href: "/digital-engineering/data-analytics" },
    {
      name: "Enterprise Software",
      href: "/digital-engineering/enterprise-software",
    },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Insights", href: "/insights" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#202124] text-gray-300">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "Goglast, sans-serif" }}
            >
              neuvelabs
            </h3>
            <p className="text-sm leading-relaxed">
              Next-generation AI and IT consulting company helping enterprises
              accelerate digital transformation through cutting-edge technology
              solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/neuvelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/neuvelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-[#007AFF] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-[#007AFF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Email:</span>{" "}
                <a
                  href="mailto:info@neuvelabs.com"
                  className="hover:text-[#007AFF] transition-colors"
                >
                  info@neuvelabs.com
                </a>
              </li>
              <li>
                <span className="text-gray-400">Location:</span> UAE
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear}{" "}
            <span style={{ fontFamily: "Goglast, sans-serif" }}>neuvelabs</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
