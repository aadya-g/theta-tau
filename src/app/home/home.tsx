import RushFlyer  from "@/components/rush/rush-flyer"
import {RecruitmentHero} from "@/components/rush/rush-header"
import HomePage from "@/components/new-home/home-header"
import RushVideo from "@/components/rush/rush-video"
import RushInstagram from "@/components/rush/rush-instagram"
import RushImage from "@/components/rush/rush-image"
import { RushFAQ }  from "@/components/rush/rush-faq"
import React from 'react'

export default function AboutUs() {
    return (
      <div>
        <main>
        <section id="home-header">
          <HomePage />
          </section>
        </main>
      </div>
    );
  }