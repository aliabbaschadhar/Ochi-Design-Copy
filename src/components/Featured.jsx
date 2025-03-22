import React from 'react'
import { Button, Card } from "./"
import { Salience_Website, CS_Website, AH2, Fyde, Vise, ATG } from '../assets/Images/images'
import { useAnimation } from 'framer-motion'

function Featured() {
    const cardsData = [
        {
            cardName: 'Salience Labs',
            cardImg: Salience_Website,
            links: ['Brand Identity', "Pitch Deck"],
        },
        {
            cardName: "CardBoard SpaceShip",
            cardImg: CS_Website,
            links: ['Branded Template', "Sales Deck", "Social Media Templates"],
        },
        {
            cardName: "AH2 & MATT HORN",
            cardImg: AH2,
            links: ["Pitch Deck"]
        },
        {
            cardName: "Fyde",
            cardImg: Fyde,
            links: ['Audit', "Copywriting", "Sales Deck", "Slides Design"],
        },
        {
            cardName: "Vise",
            cardImg: Vise,
            links: ["Agency", "Company Presentation"],
        },
        {
            cardName: "All Things go",
            cardImg: ATG,
            links: ["Brand Identity", "Pitch Deck"],
        }
    ]

    // Create animation controls for each card
    const cards = cardsData.map(() => useAnimation());

    return (
        <section className='w-full'>
            <div className='w-full border-zinc-300 border-b-2 py-10 md:py-16 lg:py-20 mb-4 md:mb-6 px-4 sm:px-6 md:px-10'>
                <h1 className='font-neue text-3xl sm:text-4xl md:text-5xl'>Featured projects</h1>
            </div>
            <div className='w-full px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                {cardsData.map((card, index) => (
                    <div key={index} className='w-full p-1 sm:p-2'>
                        <Card
                            cardImg={card.cardImg}
                            cardName={card.cardName}
                            links={card.links}
                            position={index % 2 === 0 ? 'left' : 'right'}
                            animationControls={cards[index]}
                        />
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-center mt-16 md:mt-20 lg:mt-28'>
                <Button text="View All Case Studies" />
            </div>
        </section>
    )
}

export default Featured