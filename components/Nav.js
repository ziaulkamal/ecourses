
const Nav = () => {
    return (
              <div id="header">
        <div className="header-menu style-one style-two">
          <div className="container">
            {" "}
            <a className="logo" href="">
              <svg
                width={148}
                height={36}
                viewBox="0 0 148 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7015_1134)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5918 15.4774L13.0001 12.9447L10.4083 15.4774C8.98899 16.8643 8.98899 19.1357 10.4083 20.5427L13.0001 23.0754L15.5918 20.5427C17.0111 19.1357 17.0111 16.8643 15.5918 15.4774ZM12.9795 0L3.80544 8.96482C1.27538 11.4372 6.10352e-05 14.7136 6.10352e-05 17.9698C6.10352e-05 21.2261 1.27538 24.5025 3.80544 26.9749L6.39721 29.5075L11.8687 24.1608L9.27696 21.6281C8.24848 20.6231 7.73424 19.2965 7.73424 17.9698C7.73424 16.6432 8.24848 15.3166 9.27696 14.3116L18.4716 5.34673L12.9795 0ZM13.0001 36L22.1741 27.0352C24.7247 24.5427 26.0001 21.2663 26.0001 18.01C26.0001 14.7538 24.7247 11.4774 22.1947 9.00502L19.6029 6.47236L14.1314 11.8191L16.7232 14.3518C17.7516 15.3568 18.2659 16.6834 18.2659 18.01C18.2659 19.3367 17.7516 20.6633 16.7232 21.6683L7.54911 30.6332L13.0001 36Z"
                    fill="#0C1228"
                  />
                </g>
                <path
                  d="M37.936 27V24.696H42.76C43.64 24.696 44.32 24.456 44.8 23.976C45.28 23.48 45.52 22.808 45.52 21.96C45.52 21.08 45.264 20.384 44.752 19.872C44.24 19.36 43.528 19.104 42.616 19.104H37.936V16.8H42.4C43.264 16.8 43.928 16.592 44.392 16.176C44.856 15.76 45.088 15.16 45.088 14.376C45.088 13.608 44.864 13.024 44.416 12.624C43.984 12.224 43.344 12.024 42.496 12.024H37.936V9.72H43.072C44.624 9.72 45.864 10.112 46.792 10.896C47.736 11.664 48.208 12.712 48.208 14.04C48.208 14.872 48.008 15.6 47.608 16.224C47.224 16.832 46.704 17.304 46.048 17.64C45.392 17.976 44.648 18.144 43.816 18.144L43.936 17.64C44.816 17.64 45.616 17.84 46.336 18.24C47.056 18.624 47.624 19.168 48.04 19.872C48.472 20.576 48.688 21.392 48.688 22.32C48.688 23.264 48.464 24.088 48.016 24.792C47.584 25.496 46.968 26.04 46.168 26.424C45.384 26.808 44.456 27 43.384 27H37.936ZM35.488 27V9.72H38.608V27H35.488ZM51.751 31.92L54.919 24.816L55.471 23.904L58.927 14.76H62.143L54.823 31.92H51.751ZM54.463 26.88L49.495 14.76H52.783L56.935 25.752L54.463 26.88ZM69.4868 27.24C67.9828 27.24 66.8708 26.888 66.1508 26.184C65.4468 25.464 65.0948 24.392 65.0948 22.968V11.976L68.1428 10.848V23.04C68.1428 23.632 68.3028 24.072 68.6228 24.36C68.9428 24.648 69.4468 24.792 70.1348 24.792C70.4068 24.792 70.6468 24.776 70.8548 24.744C71.0788 24.696 71.2868 24.64 71.4788 24.576V26.928C71.2868 27.024 71.0148 27.096 70.6628 27.144C70.3108 27.208 69.9188 27.24 69.4868 27.24ZM62.7428 17.136V14.76H71.4788V17.136H62.7428ZM78.8618 27.24C77.5658 27.24 76.4298 26.968 75.4538 26.424C74.4938 25.88 73.7418 25.128 73.1978 24.168C72.6698 23.208 72.4058 22.104 72.4058 20.856C72.4058 19.608 72.6698 18.512 73.1978 17.568C73.7418 16.608 74.4938 15.864 75.4538 15.336C76.4138 14.792 77.5338 14.52 78.8138 14.52C80.0298 14.52 81.0858 14.776 81.9818 15.288C82.8778 15.784 83.5738 16.488 84.0698 17.4C84.5658 18.312 84.8138 19.376 84.8138 20.592C84.8138 20.816 84.8058 21.024 84.7898 21.216C84.7738 21.408 84.7498 21.6 84.7178 21.792H74.2778V19.68H82.3898L81.7658 20.256C81.7658 19.104 81.5018 18.24 80.9738 17.664C80.4458 17.088 79.7098 16.8 78.7658 16.8C77.7418 16.8 76.9258 17.152 76.3178 17.856C75.7258 18.56 75.4298 19.576 75.4298 20.904C75.4298 22.216 75.7258 23.224 76.3178 23.928C76.9258 24.616 77.7818 24.96 78.8858 24.96C79.5258 24.96 80.0858 24.84 80.5658 24.6C81.0458 24.36 81.3978 23.992 81.6218 23.496H84.4778C84.0778 24.648 83.3978 25.56 82.4378 26.232C81.4938 26.904 80.3018 27.24 78.8618 27.24ZM89.8493 27L84.8813 9.72H88.0493L92.2733 25.584H91.3613L95.2733 9.72H98.8733L102.737 25.584H101.849L106.073 9.72H109.097L104.129 27H100.577L96.6413 11.496H97.3853L93.4013 27H89.8493ZM117.584 27C117.504 26.68 117.44 26.328 117.392 25.944C117.36 25.56 117.344 25.096 117.344 24.552H117.248V18.744C117.248 18.104 117.064 17.624 116.696 17.304C116.344 16.968 115.8 16.8 115.064 16.8C114.344 16.8 113.768 16.936 113.336 17.208C112.92 17.464 112.664 17.84 112.568 18.336H109.664C109.792 17.2 110.336 16.28 111.296 15.576C112.256 14.872 113.544 14.52 115.16 14.52C116.84 14.52 118.112 14.904 118.976 15.672C119.84 16.424 120.272 17.536 120.272 19.008V24.552C120.272 24.936 120.296 25.328 120.344 25.728C120.408 26.128 120.496 26.552 120.608 27H117.584ZM113.336 27.24C112.104 27.24 111.12 26.936 110.384 26.328C109.664 25.704 109.304 24.872 109.304 23.832C109.304 22.712 109.712 21.824 110.528 21.168C111.344 20.512 112.496 20.072 113.984 19.848L117.8 19.272V21.192L114.488 21.696C113.768 21.808 113.224 22.008 112.856 22.296C112.504 22.584 112.328 22.984 112.328 23.496C112.328 23.96 112.496 24.32 112.832 24.576C113.168 24.816 113.632 24.936 114.224 24.936C115.088 24.936 115.808 24.72 116.384 24.288C116.96 23.856 117.248 23.328 117.248 22.704L117.584 24.552C117.264 25.432 116.736 26.104 116 26.568C115.28 27.016 114.392 27.24 113.336 27.24ZM126.039 27L121.143 14.76H124.407L128.319 26.016H126.711L130.623 14.76H133.791L128.871 27H126.039ZM140.643 27.24C139.347 27.24 138.211 26.968 137.235 26.424C136.275 25.88 135.523 25.128 134.979 24.168C134.451 23.208 134.187 22.104 134.187 20.856C134.187 19.608 134.451 18.512 134.979 17.568C135.523 16.608 136.275 15.864 137.235 15.336C138.195 14.792 139.315 14.52 140.595 14.52C141.811 14.52 142.867 14.776 143.763 15.288C144.659 15.784 145.355 16.488 145.851 17.4C146.347 18.312 146.595 19.376 146.595 20.592C146.595 20.816 146.587 21.024 146.571 21.216C146.555 21.408 146.531 21.6 146.499 21.792H136.059V19.68H144.171L143.547 20.256C143.547 19.104 143.283 18.24 142.755 17.664C142.227 17.088 141.491 16.8 140.547 16.8C139.523 16.8 138.707 17.152 138.099 17.856C137.507 18.56 137.211 19.576 137.211 20.904C137.211 22.216 137.507 23.224 138.099 23.928C138.707 24.616 139.563 24.96 140.667 24.96C141.307 24.96 141.867 24.84 142.347 24.6C142.827 24.36 143.179 23.992 143.403 23.496H146.259C145.859 24.648 145.179 25.56 144.219 26.232C143.275 26.904 142.083 27.24 140.643 27.24Z"
                  fill="#0C1228"
                />
                <defs>
                  <clipPath id="clip0_7015_1134">
                    <rect width={26} height={36} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <div className="menu-main">
              <ul className="flex-center">
                <li>
                  {" "}
                  <a className="active" href="#!">
                    Home
                  </a>
                  <ul className="sub-nav">
                    <li className="sub-nav-item active">
                      <a className="sub-nav-link" href="index.html">
                        Home IT Services
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="home2.html">
                        Home Business Consulting
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="home3.html">
                        Home IoT Services
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="home4.html">
                        Home Digital Agency
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="home5.html">
                        Home Finance
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="home6.html">
                        Home Digital SEO Marketing
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="home7.html">
                        Home Helpdesk
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#!">Solutions</a>
                  <div className="sub-nav sub-nav-solution">
                    <div className="container">
                      <div className="content-main">
                        <div className="row">
                          <div className="col-9">
                            <div className="item">
                              <div className="service-cate heading6">
                                IT Solutions{" "}
                              </div>
                              <div className="list-service mt-8">
                                <div className="row">
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution1"
                                      data-cate="IT Solutions"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-phone-sync fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Managed IT Services
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution2"
                                      data-cate="IT Solutions"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-user-sync fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        IT Consulting
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution3"
                                      data-cate="IT Solutions"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-device-cloud fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Cloud Computing
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution4"
                                      data-cate="IT Solutions"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-cloud-dots fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Cybersecurity Solutions
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution5"
                                      data-cate="IT Solutions"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-phone-cloud fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Data Analytics
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution6"
                                      data-cate="IT Solutions"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-device-sync fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Software Development
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item mt-20">
                              <div className="service-cate heading6">
                                Business Consulting{" "}
                              </div>
                              <div className="list-service mt-8">
                                <div className="row">
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution7"
                                      data-cate="Business Consulting"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-coin-user fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Business Strategy Analysis
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution8"
                                      data-cate="Business Consulting"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-user-time fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Project Management
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution9"
                                      data-cate="Business Consulting"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-hand-up fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Operational Optimization
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution10"
                                      data-cate="Business Consulting"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-device-cloud fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Digital Consulting
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution11"
                                      data-cate="Business Consulting"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-target-chart fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Marketing Strategy
                                      </div>
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a
                                      className="nav-item-main service-item flex-item-center"
                                      href="service-detail.html"
                                      data-item="solution12"
                                      data-cate="Business Consulting"
                                    >
                                      <div className="icon">
                                        {" "}
                                        <i className="icon-user-chart fs-28" />
                                      </div>
                                      <div className="service-name text-button pl-8">
                                        Leadership Development
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="content bg-linear bora-8 p-24">
                              <div className="heading6">Explore All Services</div>
                              <div className="caption1 text-on-surface-variant1 mt-4">
                                Unlocking the Full Spectrum of IT Solutions and
                                Business Consulting for your needs
                              </div>
                              <div className="block-button mt-20">
                                {" "}
                                <a
                                  className="button-blue button-blue-hover text-button-small"
                                  href="service-detail.html"
                                >
                                  Explore Now{" "}
                                </a>
                              </div>
                              <div className="more-infor mt-32">
                                <div className="mail flex-item-center">
                                  <i className="ph ph-envelope fs-18"> </i>
                                  <div className="caption1 pl-8">
                                    hi.avitex@gmail.com
                                  </div>
                                </div>
                                <div className="call flex-item-center mt-16">
                                  {" "}
                                  <i className="ph-fill ph-phone fs-14 p-4 bg-blue text-white bora-50" />
                                  <div className="text-title pl-8">
                                    123 456 7890
                                  </div>
                                </div>
                                <div className="list-social flex-item-center gap-10 mt-28">
                                  <a
                                    className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                  >
                                    <i className="icon-facebook" />
                                  </a>
                                  <a
                                    className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                  >
                                    <i className="icon-linkedin" />
                                  </a>
                                  <a
                                    className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                    href="https://www.twitter.com/"
                                    target="_blank"
                                  >
                                    <i className="icon-twitter" />
                                  </a>
                                  <a
                                    className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                  >
                                    <i className="icon-youtube" />
                                  </a>
                                  <a
                                    className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                  >
                                    <i className="icon-instagram fs-14" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <a href="#!">Company</a>
                  <ul className="sub-nav">
                    <li className="sub-nav-item">
                      <a className="sub-nav-link" href="about-us.html">
                        About Us
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="our-team.html">
                        Our Teams
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="team-detail.html">
                        Team Details
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="pricing-plan.html">
                        Pricing Plan
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="list-testimonials.html">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#!">Case Studies</a>
                  <ul className="sub-nav">
                    <li className="sub-nav-item">
                      <a className="sub-nav-link" href="case-studies-one.html">
                        Case Studies 1
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="case-studies-two.html">
                        Case Studies 2
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="case-studies-three.html">
                        Case Studies 3
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="case-studies-four.html">
                        Case Studies 4
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a className="sub-nav-link" href="case-studies-detail.html">
                        Single Studies 1
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      {" "}
                      <a
                        className="sub-nav-link"
                        href="case-studies-detail-two.html"
                      >
                        Single Studies 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#!">Blog</a>
                  <ul className="sub-nav">
                    <li className="sub-nav-item">
                      <a className="sub-nav-link" href="blog-grid.html">
                        Blog Grid
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      <a className="sub-nav-link" href="blog-list.html">
                        Blog List
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      <a className="sub-nav-link" href="blog-standard.html">
                        Blog Standard
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      <a className="sub-nav-link" href="blog-modern.html">
                        Blog Modern
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      <a className="sub-nav-link" href="blog-detail.html">
                        Blog Detail 1
                      </a>
                    </li>
                    <li className="sub-nav-item">
                      <a className="sub-nav-link" href="blog-detail-two.html">
                        Blog Detail 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#!">Pages</a>
                  <div className="sub-nav d-flex">
                    <ul className="left">
                      <li className="sub-nav-item">
                        <a className="sub-nav-link" href="contact-us.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="sub-nav-item">
                        <a className="sub-nav-link" href="faqs.html">
                          FAQs
                        </a>
                      </li>
                      <li className="sub-nav-item">
                        <a className="sub-nav-link" href="error-404.html">
                          Error 404
                        </a>
                      </li>
                      <li className="sub-nav-item">
                        <a className="sub-nav-link" href="login.html">
                          Login/Register
                        </a>
                      </li>
                    </ul>
                    <ul className="right">
                      <li className="sub-nav-item">
                        <a className="sub-nav-link" href="shop.html">
                          Our Shop
                        </a>
                      </li>
                      <li className="sub-nav-item">
                        <a className="sub-nav-link" href="product-detail.html">
                          Products Detail
                        </a>
                      </li>
                      <li className="sub-nav-item">
                        <a className="sub-nav-link" href="cart.html">
                          Shopping Cart
                        </a>
                      </li>
                      <li className="sub-nav-item">
                        <a className="sub-nav-link" href="checkout.html">
                          Checkout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right-block flex-item-center">
              <div className="call-block flex-item-center">
                <i className="ph ph-phone-call" />
                <span>123 456 7890</span>
              </div>
              <a
                className="button hover-button bg-blue text-white border-none text-button-small"
                href="contact-us.html"
              >
                {" "}
                <span>Contact</span>
              </a>
              <div className="search-icon">
                {" "}
                <i className="ph ph-magnifying-glass" />
              </div>
              <div className="bag-icon">
                <i className="ph ph-handbag" />
                <span className="bg-blue">0</span>
              </div>
              <div className="menu-humburger">
                <i className="ph ph-list" />
              </div>
            </div>
          </div>
          <div className="search-block">
            <div className="container flex-between h-100">
              <div className="left flex-item-center gap-16">
                <div className="icon-search">
                  {" "}
                  <i className="ph ph-magnifying-glass fs-24 pointer" />
                </div>
                <div className="input-block w-100">
                  <input className="w-100" type="text" placeholder="Search..." />
                </div>
              </div>
              <div className="right">
                <div className="icon-close">
                  {" "}
                  <i className="ph-bold ph-x fs-24 pointer" />
                </div>
              </div>
            </div>
          </div>
          <div id="menu-mobile-block">
            <div className="menu-mobile-main">
              <div className="container">
                <div className="heading flex-between">
                  <a className="logo-mobile" href="">
                    <svg
                      width={148}
                      height={36}
                      viewBox="0 0 148 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_7015_1125)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.5918 15.4774L13.0001 12.9447L10.4083 15.4774C8.98899 16.8643 8.98899 19.1357 10.4083 20.5427L13.0001 23.0754L15.5918 20.5427C17.0111 19.1357 17.0111 16.8643 15.5918 15.4774ZM12.9795 0L3.80544 8.96482C1.27538 11.4372 6.10352e-05 14.7136 6.10352e-05 17.9698C6.10352e-05 21.2261 1.27538 24.5025 3.80544 26.9749L6.39721 29.5075L11.8687 24.1608L9.27696 21.6281C8.24848 20.6231 7.73424 19.2965 7.73424 17.9698C7.73424 16.6432 8.24848 15.3166 9.27696 14.3116L18.4716 5.34673L12.9795 0ZM13.0001 36L22.1741 27.0352C24.7247 24.5427 26.0001 21.2663 26.0001 18.01C26.0001 14.7538 24.7247 11.4774 22.1947 9.00502L19.6029 6.47236L14.1314 11.8191L16.7232 14.3518C17.7516 15.3568 18.2659 16.6834 18.2659 18.01C18.2659 19.3367 17.7516 20.6633 16.7232 21.6683L7.54911 30.6332L13.0001 36Z"
                          fill="#0C1228"
                        />
                      </g>
                      <path
                        d="M37.936 27V24.696H42.76C43.64 24.696 44.32 24.456 44.8 23.976C45.28 23.48 45.52 22.808 45.52 21.96C45.52 21.08 45.264 20.384 44.752 19.872C44.24 19.36 43.528 19.104 42.616 19.104H37.936V16.8H42.4C43.264 16.8 43.928 16.592 44.392 16.176C44.856 15.76 45.088 15.16 45.088 14.376C45.088 13.608 44.864 13.024 44.416 12.624C43.984 12.224 43.344 12.024 42.496 12.024H37.936V9.72H43.072C44.624 9.72 45.864 10.112 46.792 10.896C47.736 11.664 48.208 12.712 48.208 14.04C48.208 14.872 48.008 15.6 47.608 16.224C47.224 16.832 46.704 17.304 46.048 17.64C45.392 17.976 44.648 18.144 43.816 18.144L43.936 17.64C44.816 17.64 45.616 17.84 46.336 18.24C47.056 18.624 47.624 19.168 48.04 19.872C48.472 20.576 48.688 21.392 48.688 22.32C48.688 23.264 48.464 24.088 48.016 24.792C47.584 25.496 46.968 26.04 46.168 26.424C45.384 26.808 44.456 27 43.384 27H37.936ZM35.488 27V9.72H38.608V27H35.488ZM51.751 31.92L54.919 24.816L55.471 23.904L58.927 14.76H62.143L54.823 31.92H51.751ZM54.463 26.88L49.495 14.76H52.783L56.935 25.752L54.463 26.88ZM69.4868 27.24C67.9828 27.24 66.8708 26.888 66.1508 26.184C65.4468 25.464 65.0948 24.392 65.0948 22.968V11.976L68.1428 10.848V23.04C68.1428 23.632 68.3028 24.072 68.6228 24.36C68.9428 24.648 69.4468 24.792 70.1348 24.792C70.4068 24.792 70.6468 24.776 70.8548 24.744C71.0788 24.696 71.2868 24.64 71.4788 24.576V26.928C71.2868 27.024 71.0148 27.096 70.6628 27.144C70.3108 27.208 69.9188 27.24 69.4868 27.24ZM62.7428 17.136V14.76H71.4788V17.136H62.7428ZM78.8618 27.24C77.5658 27.24 76.4298 26.968 75.4538 26.424C74.4938 25.88 73.7418 25.128 73.1978 24.168C72.6698 23.208 72.4058 22.104 72.4058 20.856C72.4058 19.608 72.6698 18.512 73.1978 17.568C73.7418 16.608 74.4938 15.864 75.4538 15.336C76.4138 14.792 77.5338 14.52 78.8138 14.52C80.0298 14.52 81.0858 14.776 81.9818 15.288C82.8778 15.784 83.5738 16.488 84.0698 17.4C84.5658 18.312 84.8138 19.376 84.8138 20.592C84.8138 20.816 84.8058 21.024 84.7898 21.216C84.7738 21.408 84.7498 21.6 84.7178 21.792H74.2778V19.68H82.3898L81.7658 20.256C81.7658 19.104 81.5018 18.24 80.9738 17.664C80.4458 17.088 79.7098 16.8 78.7658 16.8C77.7418 16.8 76.9258 17.152 76.3178 17.856C75.7258 18.56 75.4298 19.576 75.4298 20.904C75.4298 22.216 75.7258 23.224 76.3178 23.928C76.9258 24.616 77.7818 24.96 78.8858 24.96C79.5258 24.96 80.0858 24.84 80.5658 24.6C81.0458 24.36 81.3978 23.992 81.6218 23.496H84.4778C84.0778 24.648 83.3978 25.56 82.4378 26.232C81.4938 26.904 80.3018 27.24 78.8618 27.24ZM89.8493 27L84.8813 9.72H88.0493L92.2733 25.584H91.3613L95.2733 9.72H98.8733L102.737 25.584H101.849L106.073 9.72H109.097L104.129 27H100.577L96.6413 11.496H97.3853L93.4013 27H89.8493ZM117.584 27C117.504 26.68 117.44 26.328 117.392 25.944C117.36 25.56 117.344 25.096 117.344 24.552H117.248V18.744C117.248 18.104 117.064 17.624 116.696 17.304C116.344 16.968 115.8 16.8 115.064 16.8C114.344 16.8 113.768 16.936 113.336 17.208C112.92 17.464 112.664 17.84 112.568 18.336H109.664C109.792 17.2 110.336 16.28 111.296 15.576C112.256 14.872 113.544 14.52 115.16 14.52C116.84 14.52 118.112 14.904 118.976 15.672C119.84 16.424 120.272 17.536 120.272 19.008V24.552C120.272 24.936 120.296 25.328 120.344 25.728C120.408 26.128 120.496 26.552 120.608 27H117.584ZM113.336 27.24C112.104 27.24 111.12 26.936 110.384 26.328C109.664 25.704 109.304 24.872 109.304 23.832C109.304 22.712 109.712 21.824 110.528 21.168C111.344 20.512 112.496 20.072 113.984 19.848L117.8 19.272V21.192L114.488 21.696C113.768 21.808 113.224 22.008 112.856 22.296C112.504 22.584 112.328 22.984 112.328 23.496C112.328 23.96 112.496 24.32 112.832 24.576C113.168 24.816 113.632 24.936 114.224 24.936C115.088 24.936 115.808 24.72 116.384 24.288C116.96 23.856 117.248 23.328 117.248 22.704L117.584 24.552C117.264 25.432 116.736 26.104 116 26.568C115.28 27.016 114.392 27.24 113.336 27.24ZM126.039 27L121.143 14.76H124.407L128.319 26.016H126.711L130.623 14.76H133.791L128.871 27H126.039ZM140.643 27.24C139.347 27.24 138.211 26.968 137.235 26.424C136.275 25.88 135.523 25.128 134.979 24.168C134.451 23.208 134.187 22.104 134.187 20.856C134.187 19.608 134.451 18.512 134.979 17.568C135.523 16.608 136.275 15.864 137.235 15.336C138.195 14.792 139.315 14.52 140.595 14.52C141.811 14.52 142.867 14.776 143.763 15.288C144.659 15.784 145.355 16.488 145.851 17.4C146.347 18.312 146.595 19.376 146.595 20.592C146.595 20.816 146.587 21.024 146.571 21.216C146.555 21.408 146.531 21.6 146.499 21.792H136.059V19.68H144.171L143.547 20.256C143.547 19.104 143.283 18.24 142.755 17.664C142.227 17.088 141.491 16.8 140.547 16.8C139.523 16.8 138.707 17.152 138.099 17.856C137.507 18.56 137.211 19.576 137.211 20.904C137.211 22.216 137.507 23.224 138.099 23.928C138.707 24.616 139.563 24.96 140.667 24.96C141.307 24.96 141.867 24.84 142.347 24.6C142.827 24.36 143.179 23.992 143.403 23.496H146.259C145.859 24.648 145.179 25.56 144.219 26.232C143.275 26.904 142.083 27.24 140.643 27.24Z"
                        fill="#0C1228"
                      />
                      <defs>
                        <clipPath id="clip0_7015_1125">
                          <rect width={26} height={36} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <div className="close-block">
                    {" "}
                    <i className="ph-bold ph-x" />
                  </div>
                </div>
                <ul className="menu-nav-mobile">
                  <li className="nav-item-mobile flex-column gap-8 pt-8 pb-8 pl-12 pr-12 pointer">
                    <a className="nav-link-mobile" href="#!">
                      Home <i className="ph ph-caret-right fs-12" />
                    </a>
                    <ul className="sub-nav-mobile">
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8 active">
                        <a className="sub-nav-link" href="index.html">
                          Home IT Services
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="home2.html">
                          Home Business Consulting
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="home3.html">
                          Home IoT Services
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="home4.html">
                          Home Business Consulting
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="home5.html">
                          Home Finance
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="home6.html">
                          Home Digital SEO Marketing
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="home7.html">
                          Home Helpdesk
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer">
                    <a className="nav-link-mobile" href="#!">
                      Solutions <i className="ph ph-caret-right fs-12" />
                    </a>
                    <div className="sub-nav-mobile">
                      <div className="row flex-between gap-16 flex-wrap">
                        <div className="item">
                          <div className="heading6 fw-600">IT Consulting </div>
                          <div className="list-service d-flex flex-column gap-16 mt-16">
                            {" "}
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="service-detail.html"
                              data-item="solution1"
                              data-cate="IT Solutions"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-phone-sync fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Managed IT Services
                              </div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="service-detail.html"
                              data-item="solution2"
                              data-cate="IT Solutions"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-user-sync fs-28" />
                              </div>
                              <div className="text-button pl-12">IT Consulting</div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="service-detail.html"
                              data-item="solution3"
                              data-cate="IT Solutions"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-device-cloud fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Cloud Computing
                              </div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="service-detail.html"
                              data-item="solution4"
                              data-cate="IT Solutions"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-cloud-dots fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Cybersecurity Solutions
                              </div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="service-detail.html"
                              data-item="solution5"
                              data-cate="IT Solutions"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-phone-cloud fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Data Analytics
                              </div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="service-detail.html"
                              data-item="solution6"
                              data-cate="IT Solutions"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-device-sync fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Software Development
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item">
                          <div className="heading6 fw-600">
                            Business Consulting{" "}
                          </div>
                          <div className="list-service d-flex flex-column gap-16 mt-16">
                            {" "}
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="#!"
                              data-item="solution7"
                              data-cate="Business Consulting"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-coin-user fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Business Strategy Analysis
                              </div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="#!"
                              data-item="solution8"
                              data-cate="Business Consulting"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-user-time fs-28" />
                              </div>
                              <div className="text-button pl-12">
                                Project Management
                              </div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="#!"
                              data-item="solution9"
                              data-cate="Business Consulting"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-hand-up fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Operational Optimization
                              </div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="#!"
                              data-item="solution10"
                              data-cate="Business Consulting"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-device-cloud fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Digital Consulting
                              </div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="#!"
                              data-item="solution11"
                              data-cate="Business Consulting"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-target-chart fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Marketing Strategy
                              </div>
                            </a>
                            <a
                              className="nav-item-main service-item flex-item-center"
                              href="#!"
                              data-item="solution12"
                              data-cate="Business Consulting"
                            >
                              <div className="icon">
                                {" "}
                                <i className="icon-user-chart fs-28 d-block" />
                              </div>
                              <div className="text-button pl-12">
                                Leadership Development
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="content bg-linear bora-8 p-24">
                          <div className="heading6">Explore All Services</div>
                          <div className="fs-14 text-on-surface-variant1 mt-4">
                            Unlocking the Full Spectrum of IT Solutions and Business
                            Consulting for your needs
                          </div>
                          <div className="block-button mt-20">
                            {" "}
                            <a
                              className="button-blue button-blue-hover text-button-small"
                              href="service-detail.html"
                            >
                              Explore Now{" "}
                            </a>
                          </div>
                          <div className="more-infor mt-20">
                            <div className="mail flex-item-center">
                              <i className="ph ph-envelope fs-18"> </i>
                              <div className="fs-14 pl-8">hi.avitex@gmail.com</div>
                            </div>
                            <div className="call flex-item-center mt-12">
                              {" "}
                              <i className="ph-fill ph-phone fs-14 p-4 bg-blue text-white bora-50" />
                              <div className="text-title pl-8">123 456 7890</div>
                            </div>
                            <div className="list-social flex-item-center gap-10 mt-28">
                              <a
                                className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="icon-facebook" />
                              </a>
                              <a
                                className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="icon-linkedin" />
                              </a>
                              <a
                                className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                href="https://www.twitter.com/"
                                target="_blank"
                              >
                                <i className="icon-twitter" />
                              </a>
                              <a
                                className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                href="https://www.youtube.com/"
                                target="_blank"
                              >
                                <i className="icon-youtube" />
                              </a>
                              <a
                                className="item bora-50 w-40 h-40 flex-center border-on-surface"
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="icon-instagram fs-14" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer">
                    <a className="nav-link-mobile" href="#!">
                      Company <i className="ph ph-caret-right fs-12" />
                    </a>
                    <ul className="sub-nav-mobile">
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a className="sub-nav-link" href="about-us.html">
                          About Us
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="our-team.html">
                          Our Team
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="team-detail.html">
                          Team Detail
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="pricing-plan.html">
                          Pricing Plan
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="list-testimonials.html">
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer">
                    <a className="nav-link-mobile" href="#!">
                      Case Studies <i className="ph ph-caret-right fs-12" />
                    </a>
                    <ul className="sub-nav-mobile">
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a className="sub-nav-link" href="case-studies-one.html">
                          Case Studies 1
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="case-studies-two.html">
                          Case Studies 2
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="case-studies-three.html">
                          Case Studies 3
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="case-studies-four.html">
                          Case Studies 4
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="case-studies-detail.html">
                          Single Studies 1
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a
                          className="sub-nav-link"
                          href="case-studies-detail-two.html"
                        >
                          Single Studies 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer">
                    <a className="nav-link-mobile" href="#!">
                      Blog <i className="ph ph-caret-right fs-12" />
                    </a>
                    <ul className="sub-nav-mobile">
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a className="sub-nav-link" href="blog-grid.html">
                          Blog Grid
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="blog-list.html">
                          Blog List
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="blog-standard.html">
                          Blog Standard
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="blog-modern.html">
                          Blog Modern
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="blog-detail.html">
                          Blog Detail 1
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="blog-detail-two.html">
                          Blog Detail 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer">
                    <a className="nav-link-mobile" href="#!">
                      Pages <i className="ph ph-caret-right fs-12" />
                    </a>
                    <ul className="sub-nav-mobile">
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a className="sub-nav-link" href="contact-us.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="faqs.html">
                          FAQs
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="error-404.html">
                          Error 404
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="login.html">
                          Login/Register
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a className="sub-nav-link" href="shop.html">
                          Our Shop
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="product-detail.html">
                          Product Detail
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="cart.html">
                          Shopping Cart
                        </a>
                      </li>
                      <li className="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a className="sub-nav-link" href="checkout.html">
                          Checkout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Nav;