import React, {useEffect, useState} from "react";
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
import {LandingsType, LinkDataType} from "../../../types";
import {getAllLandings, getLanding} from "../../../services/landing/landingProvider";

type Props = {
    course: string,
    landingData: LandingsType,
}

const Course = ({course, landingData}: Props) => {
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
    } = landingData;

    const [isModalOpen, setIsModalOpen] = useState(false)
    useEffect(() => {
        document.body.style.overflowY = isModalOpen ? 'hidden' : 'scroll'
    }, [isModalOpen])
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
    const landingData: LandingsType = await getLanding({id: params.course})

    return { props: { course: params.course, landingData} }
}

export async function getStaticPaths() {
    const courses = await getAllLandings();

    const paths = courses.map((course: LandingsType) => ({
        params: {course: course.id}
    }))

    return { paths, fallback: false }
}

export default Course;