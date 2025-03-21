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

    // We will use the useAnimation hook from motion to create and control animations in a react component.
    // The useAnimation hook returns an AnimationControls object that allows us to animate a component.
    // The AnimationControls object has methods like start, stop, animate, isAnimating, animationState, and more.

    // Create animation controls for each card
    const cards = cardsData.map(() => useAnimation());

    return (
        <section className='w-full'>
            <div className='w-full border-zinc-300 border-b-2 py-20 mb-6 px-10'>
                <h1 className='font-neue text-5xl'>Featured projects</h1>
            </div>
            <div className='w-full px-10 flex flex-wrap gap-4'>
                {cardsData.map((card, index) => (
                    <div key={index} className='w-[calc(50%-0.5rem)] p-2'>
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
            <div className='w-full flex justify-center mt-28'>
                <Button text="View All Case Studies" />
            </div>
        </section>
    )
}

export default Featured