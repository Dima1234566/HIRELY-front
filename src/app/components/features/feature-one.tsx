import React from "react";
import Link from "next/link";
import Image from "next/image";

// FeatureImgData
export function FeatureImgData() {
  return (
    <div className="img-data position-relative pe-xl-5 me-xl-5 md-mt-50">
      <div className="row">
        <div className="col-md-6 col-sm-8 col-10">
          <Image
            src="/assets/images/assets/img_02.jpg"
            alt="man img"
            width={520}
            height={700}
            className="lazy-img img01"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-5">
          <Image
            src="/assets/images/assets/img_03.jpg"
            alt="girl img"
            width={320}
            height={400}
            className="lazy-img img02 mt-35"
          />
        </div>
        <div className="col-md-6 col-7">
          <Image
            src="/assets/images/assets/img_04.jpg"
            alt="man-img-2"
            width={520}
            height={580}
            className="lazy-img img01 mt-35"
          />
        </div>
      </div>
      <Image
        src="/assets/images/assets/screen_01.png"
        alt="screen_1-img"
        width={225}
        height={450}
        className="lazy-img shapes screen01 wow fadeInRight"
      />
      <Image
        src="/assets/images/assets/screen_02.png"
        alt="screen_2-img"
        width={225}
        height={450}
        className="lazy-img shapes screen02 wow fadeInUp"
      />
      <Image
        src="/assets/images/assets/screen_03.png"
        alt="screen_3-img"
        width={225}
        height={450}
        className="lazy-img shapes screen03 wow fadeInUp"
      />
      <Image
        src="/assets/images/shape/shape_06.svg"
        alt="shape"
        width={130}
        height={130}
        className="lazy-img shapes shape_01"
      />
    </div>
  );
}

const FeatureOne = () => {
  return (
    <section className="text-feature-one position-relative pt-180 xl-pt-150 lg-pt-100 md-pt-80 pb-180 xl-pb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-last">
            <div className="ps-xxl-4 wow fadeInRight">
              <div className="title-one">
                <h2>Get over 50.000+ talented experts in Hirely.</h2>
              </div>
              <p className="mt-40 md-mt-20 mb-40 md-mb-20">
                A full hybrid workforce management tools are yours to use, as
                well as access to our top 1% of talent.{" "}
              </p>
              <ul className="list-style-one style-none">
                <li>Seamless searching</li>
                <li>Get top 3% experts for your project</li>
                <li>Protected payments system</li>
              </ul>
              <Link href="/register" className="btn-one lg mt-50 md-mt-30">
                Post a Job
              </Link>
            </div>
          </div>
          <div className="col-lg-7 col-md-11 m-auto order-lg-first">
            <FeatureImgData />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
