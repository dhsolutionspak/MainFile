import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/1.jpg"; // Update this with a relevant image for cybersecurity
import Detail2 from "../../../public/assets/imgs/blog/detail/2.jpg"; // Update this with a relevant image for cybersecurity
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails1 = () => {
  const wordAnim = useRef();
  const wordAnim2 = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);
  return (
    <>
      <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                <h2
                  className="blog__detail-date animation__word_come"
                  ref={wordAnim}
                >
                  Cybersecurity <span>{new Date().toLocaleDateString()}</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  The Importance of Cybersecurity in Today’s Digital Landscape
                </h3>
                <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <Image
                      priority
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      src={Author}
                      alt="Author Picture"
                    />
                    <p>
                      Written by <span>DH Solutions</span>
                    </p>
                  </div>
                  <div className="blog__detail-meta">
                    <p>
                      Viewed <span>5 min read</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__detail-thumb">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail1} // Use an image relevant to the blog topic
                  alt="Blog Thumbnail"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  In our increasingly connected world, cybersecurity has become
                  a critical concern for individuals and organizations alike.
                  With the rapid advancement of technology and the rising
                  sophistication of cyber threats, understanding and
                  implementing effective cybersecurity measures is essential.
                </p>
                <p>
                  Cybersecurity safeguards sensitive data such as personal
                  information, financial records, and intellectual property. A
                  breach can lead to identity theft, financial loss, and damage
                  to an organization’s reputation.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2} // Use an image relevant to the blog topic
                  alt="Blog Image"
                />
                <h2>Common Cyber Threats</h2>
                <p>
                  Cyberattacks can have devastating financial implications. The
                  cost of recovering from a data breach can be astronomical, not
                  to mention the potential legal liabilities and fines that may
                  arise from non-compliance with regulations like GDPR and
                  HIPAA.
                </p>
                <h2>Best Practices for Cybersecurity</h2>
                <p>
                  Regular training sessions on recognizing phishing attempts and
                  safe browsing practices can significantly reduce the risk of
                  successful attacks. An informed workforce is a strong defense
                  against cyber threats.
                </p>
                <ul>
                  <li>Educate Employees</li>
                  <li>Implement Strong Password Policies</li>
                  <li>Regularly Update Software</li>
                  <li>Conduct Security Audits</li>
                  <li>Back Up Data</li>
                </ul>
                <p>
                  As cyber threats continue to evolve, the importance of robust
                  cybersecurity measures cannot be overstated. By prioritizing
                  cybersecurity, individuals and organizations can protect their
                  sensitive data and maintain business continuity.
                </p>
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">cybersecurity</Link>,{" "}
                  <Link href="/blog">data protection</Link>,{" "}
                  <Link href="/tag">best practices</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails1;
