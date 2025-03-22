import React from "react";
import ReviewComponent from "./ReviewComponent";
import { Nina, Tomer, William } from "../assets/Images/images";

const reviews = [
    {
        linkSite: "Kamran Ventures",
        service1: "INVESTOR DECK",
        service2: "SALES DECK",
        name: "William Barnes",
        image: William,
        review:
            "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
    },
    {
        linkSite: "Planetly",
        service1: "START-UP PITCH",
        service2: "PRODUCT PRESENTATION",
        name: "Nina Walloach",
        image: Nina,
        review:
            "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.",
    },
    {
        linkSite: "Workiz Easy",
        service1: "REDESIGN",
        service2: "POLICY DECK",
        name: "Tomer Lee",
        image: Tomer,
        review:
            "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients.",
    },
    {
        linkSite: "Premium Blend",
        service1: "BRANDED TEMPLATES",
        service2: "ILLUSTRATION",
        name: "Ellen Kim",
        image:
            "https://ochi.design/wp-content/uploads/2022/12/image-677-300x298.png",
        review:
            "They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations.",
    },
    {
        linkSite: "Hypercare Systems",
        service1: "INVESTOR DECK",
        service2: "START-UP PITCH",
        name: "Brendan Goss",
        image:
            "https://ochi.design/wp-content/uploads/2022/05/1627398835558-11.png",
        review:
            "The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough.",
    },
    {
        linkSite: "Officevibe",
        service1: "BRANDED TEMPLATES",
        service2: "SALES DECK",
        name: "Raff Labrie",
        image:
            "https://ochi.design/wp-content/uploads/2023/10/Photo-300x300.png",
        review:
            "Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!",
    },
    {
        linkSite: "Orderlion",
        service1: "AGENCY STOCK",
        service2: "PRODUCT REVIEWS",
        name: "Stefan Strohmer",
        image:
            "https://ochi.design/wp-content/uploads/2022/05/Stefan-300x300.jpg",
        review:
            "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!",
    },
    {
        linkSite: "Black Book",
        service1: "REVIEWS",
        service2: "START-UP PITCH",
        name: "Jaci Smith",
        image: "https://ochi.design/wp-content/uploads/2022/05/Jaci.jpg.png",
        review:
            "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally.",
    },
    {
        linkSite: "Trawa Energy",
        service1: "BRANDING",
        service2: "INVERTOR",
        name: "David Budde",
        image:
            "https://ochi.design/wp-content/uploads/2023/02/David-Budde-1-300x300.png",
        review:
            "We were surprised by the accuracy with which Ochi Design nailed the overall design language that perfectly aligned with our personal preferences and the vision that we have for our young company.",
    },
];

function Reviews() {
    return (
        <>
            <div className="w-full bg-white">
                <div className="w-full px-4 sm:px-6 md:px-10 pt-10 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-neue text-zinc-900 tracking-tight">
                        Client's Reviews
                    </h1>
                </div>
                <div className="w-full">
                    {reviews.map((review, index) => (
                        <ReviewComponent
                            key={index}
                            {...review}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Reviews;
