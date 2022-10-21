import React, {useState} from "react";
import { Layout } from "../../../sections";
import {
    TopBannerSection,
    HookSection,
    AchievementsSection,
    ProducerSection,
    ModulesSection,
    BenefitsSection,
    ReviewsSection,
    GetStartedSection,
    FaqSection,
    PricingSection,
    PaymentModal,
    GallerySection,
} from "../../../sections/landings";
import fs from "fs";

const Course = ({course}: any) => {
    console.log(course)
    const {LandingData} = require(`../../../json/${course}.js`);
    const {
        pageType,
        courseUrl,
        banner,
        hook,
        videoUrl,
        benefits,
        achievement,
        modules,
        reviews,
        getStarted,
        gallery,
        producer,
        faq,
        pricing,
        value,
        redirect,
        links,
    } = LandingData;
    const [isModalOpen, setIsModalOpen] = useState(false)
    let linkData = {
        ...links[value],
        course
    }

    if (!redirect) {
        linkData = {
            ...linkData,
            isModalOpen,
            onClickAction: setIsModalOpen
        }
    }

    return (
        <>
            <Layout
                pageType={pageType}
                courseUrl={courseUrl}
            >
                <TopBannerSection
                    banner={banner}
                    videoUrl={videoUrl}
                    linkData={linkData}
                />

                <HookSection
                    hook={hook}
                    linkData={linkData}
                />

                <AchievementsSection
                    achievement={achievement}
                />

                <GallerySection
                    gallery={gallery}
                />

                <ProducerSection
                    producer={producer}
                />

                <ModulesSection
                    modules={modules}
                />

                <BenefitsSection
                    benefits={benefits}
                />

                <ReviewsSection
                    reviews={reviews}
                />

                <GetStartedSection
                    getStarted={getStarted}
                    linkData={linkData}
                />

                <FaqSection
                    faq={faq}
                />

                <PricingSection
                    pricing={pricing}
                    linkData={linkData}
                    value={value}
                />

                <PaymentModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    linkData={linkData}
                />

            </Layout>
        </>
    );
}

export async function getStaticProps({params}: any) {

    return { props: { course: params.course} }
}

export async function getStaticPaths() {
    const filenames = fs.readdirSync('./json')
    const paths = filenames.map(name => ({
        params: {course: name.replace('.js', '')}
    }))

    return { paths, fallback: false }
}

export default Course;