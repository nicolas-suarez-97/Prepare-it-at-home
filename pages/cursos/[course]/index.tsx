import React, {useState} from "react";
import { Layout } from "../../../sections";
import {
    AchievementsSection,
    BenefitsSection,
    FaqSection,
    GallerySection,
    GetStartedSection,
    HookSection,
    ModulesSection,
    PaymentModal,
    PricingSection,
    ProducerSection,
    ReviewsSection,
    TopBannerSection,
} from "../../../sections/landings";
import fs from "fs";
import {LandingsType, LinkDataType} from "../../../types";

type Props = {
    course: string
}

const Course = ({course}: Props) => {
    console.log(course)
    const {LandingData} = require(`../../../json/${course}.js`);
    const {
        achievement,
        banner,
        benefits,
        courseUrl,
        faq,
        gallery,
        getStarted,
        hook,
        links,
        modules,
        pageType,
        pricing,
        producer,
        redirect,
        reviews,
        value,
        videoUrl,
    }: LandingsType = LandingData;
    const [isModalOpen, setIsModalOpen] = useState(false)
    let linkData: LinkDataType = {
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