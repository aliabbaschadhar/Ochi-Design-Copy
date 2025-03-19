import React from 'react'
import { Card } from "./"
import { Salience_Website, CS_Website, AH2, Fyde, Vise, ATG } from '../assets/Images/images'

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

    return (
        <section className='w-full'>
            <div className='w-full border-zinc-300 border-b-2 py-20 mb-6 px-20'>
                <h1 className='font-neue text-5xl'>Featured projects</h1>
            </div>
            <div className='w-full px-20 flex'>
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default Featured;